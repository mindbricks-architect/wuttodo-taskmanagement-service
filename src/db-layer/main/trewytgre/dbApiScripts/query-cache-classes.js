const { QueryCache, QueryCacheInvalidator } = require("common");

const { Op } = require("sequelize");

class TrewytgreQueryCache extends QueryCache {
  constructor(input, wClause) {
    super("trewytgre", [], Op.and, Op.eq, input, wClause);
  }
}
class TrewytgreQueryCacheInvalidator extends QueryCacheInvalidator {
  constructor() {
    super("trewytgre", []);
  }
}

module.exports = {
  TrewytgreQueryCache,
  TrewytgreQueryCacheInvalidator,
};
