const { ElasticIndexer } = require("serviceCommon");
const { hexaLogger } = require("common");

const taskMapping = {
  id: { type: "keyword" },
  _owner: { type: "keyword" },
  title: { type: "keyword", index: true },
  isActive: { type: "boolean" },
  recordVersion: { type: "integer" },
  createdAt: { type: "date" },
  updatedAt: { type: "date" },
};

const updateElasticIndexMappings = async () => {
  try {
    ElasticIndexer.addMapping("task", taskMapping);
    await new ElasticIndexer("task").updateMapping(taskMapping);
  } catch (err) {
    hexaLogger.insertError(
      "UpdateElasticIndexMappingsError",
      { function: "updateElasticIndexMappings" },
      "elastic-index.js->updateElasticIndexMappings",
      err,
    );
  }
};

module.exports = updateElasticIndexMappings;
