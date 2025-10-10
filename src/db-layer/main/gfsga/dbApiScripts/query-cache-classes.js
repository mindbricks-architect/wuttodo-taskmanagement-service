const { QueryCache, QueryCacheInvalidator } = require("common");

const { Op } = require("sequelize");

class GfsgaQueryCache extends QueryCache {
  constructor(input, wClause) {
    super("gfsga", [], Op.and, Op.eq, input, wClause);
  }
}
class GfsgaQueryCacheInvalidator extends QueryCacheInvalidator {
  constructor() {
    super("gfsga", []);
  }
}

module.exports = {
  GfsgaQueryCache,
  GfsgaQueryCacheInvalidator,
};
