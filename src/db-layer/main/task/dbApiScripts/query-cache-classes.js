const { QueryCache, QueryCacheInvalidator } = require("common");

const { Op } = require("sequelize");

class TaskQueryCache extends QueryCache {
  constructor(input, wClause) {
    super("task", [], Op.and, Op.eq, input, wClause);
  }
}
class TaskQueryCacheInvalidator extends QueryCacheInvalidator {
  constructor() {
    super("task", []);
  }
}

module.exports = {
  TaskQueryCache,
  TaskQueryCacheInvalidator,
};
