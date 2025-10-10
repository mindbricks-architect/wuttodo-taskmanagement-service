const { ElasticIndexer } = require("serviceCommon");
const { hexaLogger } = require("common");

const taskMapping = {
  id: { type: "keyword" },
  _owner: { type: "keyword" },
  title: { type: "keyword", index: true },
  hik: { type: "short", index: true },
  isActive: { type: "boolean" },
  recordVersion: { type: "integer" },
  createdAt: { type: "date" },
  updatedAt: { type: "date" },
};
const newtasktotestMapping = {
  id: { type: "keyword" },
  _owner: { type: "keyword" },
  somenewprop: { type: "text", index: true },
  isActive: { type: "boolean" },
  recordVersion: { type: "integer" },
  createdAt: { type: "date" },
  updatedAt: { type: "date" },
};
const rfewtgwreMapping = {
  id: { type: "keyword" },
  _owner: { type: "keyword" },
  isActive: { type: "boolean" },
  recordVersion: { type: "integer" },
  createdAt: { type: "date" },
  updatedAt: { type: "date" },
};
const trewytgreMapping = {
  id: { type: "keyword" },
  _owner: { type: "keyword" },
  isActive: { type: "boolean" },
  recordVersion: { type: "integer" },
  createdAt: { type: "date" },
  updatedAt: { type: "date" },
};

const updateElasticIndexMappings = async () => {
  try {
    ElasticIndexer.addMapping("task", taskMapping);
    await new ElasticIndexer("task").updateMapping(taskMapping);
    ElasticIndexer.addMapping("newtasktotest", newtasktotestMapping);
    await new ElasticIndexer("newtasktotest").updateMapping(
      newtasktotestMapping,
    );
    ElasticIndexer.addMapping("rfewtgwre", rfewtgwreMapping);
    await new ElasticIndexer("rfewtgwre").updateMapping(rfewtgwreMapping);
    ElasticIndexer.addMapping("trewytgre", trewytgreMapping);
    await new ElasticIndexer("trewytgre").updateMapping(trewytgreMapping);
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
