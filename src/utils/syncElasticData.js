const { getTaskById, getIdListOfTaskByField } = require("dbLayer");
const path = require("path");
const fs = require("fs");
const { ElasticIndexer } = require("serviceCommon");

const indexTaskData = async () => {
  const taskIndexer = new ElasticIndexer("task", { isSilent: true });
  console.log("Starting to update indexes for Task");

  const idList = (await getIdListOfTaskByField("isActive", true)) ?? [];
  const chunkSize = 500;
  let total = 0;
  for (let i = 0; i < idList.length; i += chunkSize) {
    const chunk = idList.slice(i, i + chunkSize);
    const dataList = await getTaskById(chunk);
    if (dataList.length) {
      await taskIndexer.indexBulkData(dataList);
      await taskIndexer.deleteRedisCache();
    }
    total += dataList.length;
  }

  return total;
};

const syncElasticIndexData = async () => {
  const startTime = new Date();
  console.log("syncElasticIndexData started", startTime);

  try {
    const dataCount = await indexTaskData();
    console.log("Task agregated data is indexed, total tasks:", dataCount);
  } catch (err) {
    console.log("Elastic Index Error When Syncing Task data", err.toString());
  }

  const elapsedTime = new Date() - startTime;
  console.log("initElasticIndexData ended -> elapsedTime:", elapsedTime);
};

module.exports = syncElasticIndexData;
