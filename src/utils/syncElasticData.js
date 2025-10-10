const { getTaskById, getIdListOfTaskByField } = require("dbLayer");
const {
  getNewtasktotestById,
  getIdListOfNewtasktotestByField,
} = require("dbLayer");
const { getRfewtgwreById, getIdListOfRfewtgwreByField } = require("dbLayer");
const { getTrewytgreById, getIdListOfTrewytgreByField } = require("dbLayer");
const { getGfsgaById, getIdListOfGfsgaByField } = require("dbLayer");
const { getYertyeById, getIdListOfYertyeByField } = require("dbLayer");
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

const indexNewtasktotestData = async () => {
  const newtasktotestIndexer = new ElasticIndexer("newtasktotest", {
    isSilent: true,
  });
  console.log("Starting to update indexes for Newtasktotest");

  const idList =
    (await getIdListOfNewtasktotestByField("isActive", true)) ?? [];
  const chunkSize = 500;
  let total = 0;
  for (let i = 0; i < idList.length; i += chunkSize) {
    const chunk = idList.slice(i, i + chunkSize);
    const dataList = await getNewtasktotestById(chunk);
    if (dataList.length) {
      await newtasktotestIndexer.indexBulkData(dataList);
      await newtasktotestIndexer.deleteRedisCache();
    }
    total += dataList.length;
  }

  return total;
};

const indexRfewtgwreData = async () => {
  const rfewtgwreIndexer = new ElasticIndexer("rfewtgwre", { isSilent: true });
  console.log("Starting to update indexes for Rfewtgwre");

  const idList = (await getIdListOfRfewtgwreByField("isActive", true)) ?? [];
  const chunkSize = 500;
  let total = 0;
  for (let i = 0; i < idList.length; i += chunkSize) {
    const chunk = idList.slice(i, i + chunkSize);
    const dataList = await getRfewtgwreById(chunk);
    if (dataList.length) {
      await rfewtgwreIndexer.indexBulkData(dataList);
      await rfewtgwreIndexer.deleteRedisCache();
    }
    total += dataList.length;
  }

  return total;
};

const indexTrewytgreData = async () => {
  const trewytgreIndexer = new ElasticIndexer("trewytgre", { isSilent: true });
  console.log("Starting to update indexes for Trewytgre");

  const idList = (await getIdListOfTrewytgreByField("isActive", true)) ?? [];
  const chunkSize = 500;
  let total = 0;
  for (let i = 0; i < idList.length; i += chunkSize) {
    const chunk = idList.slice(i, i + chunkSize);
    const dataList = await getTrewytgreById(chunk);
    if (dataList.length) {
      await trewytgreIndexer.indexBulkData(dataList);
      await trewytgreIndexer.deleteRedisCache();
    }
    total += dataList.length;
  }

  return total;
};

const indexGfsgaData = async () => {
  const gfsgaIndexer = new ElasticIndexer("gfsga", { isSilent: true });
  console.log("Starting to update indexes for Gfsga");

  const idList = (await getIdListOfGfsgaByField("isActive", true)) ?? [];
  const chunkSize = 500;
  let total = 0;
  for (let i = 0; i < idList.length; i += chunkSize) {
    const chunk = idList.slice(i, i + chunkSize);
    const dataList = await getGfsgaById(chunk);
    if (dataList.length) {
      await gfsgaIndexer.indexBulkData(dataList);
      await gfsgaIndexer.deleteRedisCache();
    }
    total += dataList.length;
  }

  return total;
};

const indexYertyeData = async () => {
  const yertyeIndexer = new ElasticIndexer("yertye", { isSilent: true });
  console.log("Starting to update indexes for Yertye");

  const idList = (await getIdListOfYertyeByField("isActive", true)) ?? [];
  const chunkSize = 500;
  let total = 0;
  for (let i = 0; i < idList.length; i += chunkSize) {
    const chunk = idList.slice(i, i + chunkSize);
    const dataList = await getYertyeById(chunk);
    if (dataList.length) {
      await yertyeIndexer.indexBulkData(dataList);
      await yertyeIndexer.deleteRedisCache();
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
    console.log(err);
  }

  try {
    const dataCount = await indexNewtasktotestData();
    console.log(
      "Newtasktotest agregated data is indexed, total newtasktotests:",
      dataCount,
    );
  } catch (err) {
    console.log(
      "Elastic Index Error When Syncing Newtasktotest data",
      err.toString(),
    );
    console.log(err);
  }

  try {
    const dataCount = await indexRfewtgwreData();
    console.log(
      "Rfewtgwre agregated data is indexed, total rfewtgwres:",
      dataCount,
    );
  } catch (err) {
    console.log(
      "Elastic Index Error When Syncing Rfewtgwre data",
      err.toString(),
    );
    console.log(err);
  }

  try {
    const dataCount = await indexTrewytgreData();
    console.log(
      "Trewytgre agregated data is indexed, total trewytgres:",
      dataCount,
    );
  } catch (err) {
    console.log(
      "Elastic Index Error When Syncing Trewytgre data",
      err.toString(),
    );
    console.log(err);
  }

  try {
    const dataCount = await indexGfsgaData();
    console.log("Gfsga agregated data is indexed, total gfsgas:", dataCount);
  } catch (err) {
    console.log("Elastic Index Error When Syncing Gfsga data", err.toString());
    console.log(err);
  }

  try {
    const dataCount = await indexYertyeData();
    console.log("Yertye agregated data is indexed, total yertyes:", dataCount);
  } catch (err) {
    console.log("Elastic Index Error When Syncing Yertye data", err.toString());
    console.log(err);
  }

  const elapsedTime = new Date() - startTime;
  console.log("initElasticIndexData ended -> elapsedTime:", elapsedTime);
};

module.exports = syncElasticIndexData;
