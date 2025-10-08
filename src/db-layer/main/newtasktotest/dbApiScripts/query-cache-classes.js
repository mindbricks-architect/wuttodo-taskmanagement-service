const { QueryCache, QueryCacheInvalidator } = require("common");

const { Op } = require("sequelize");

class NewtasktotestQueryCache extends QueryCache {
  constructor(input, wClause) {
    super("newtasktotest", [], Op.and, Op.eq, input, wClause);
  }
}
class NewtasktotestQueryCacheInvalidator extends QueryCacheInvalidator {
  constructor() {
    super("newtasktotest", []);
  }
}

module.exports = {
  NewtasktotestQueryCache,
  NewtasktotestQueryCacheInvalidator,
};
