const { QueryCache, QueryCacheInvalidator } = require("common");

const { Op } = require("sequelize");

class YertyeQueryCache extends QueryCache {
  constructor(input, wClause) {
    super("yertye", [], Op.and, Op.eq, input, wClause);
  }
}
class YertyeQueryCacheInvalidator extends QueryCacheInvalidator {
  constructor() {
    super("yertye", []);
  }
}

module.exports = {
  YertyeQueryCache,
  YertyeQueryCacheInvalidator,
};
