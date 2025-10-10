const { QueryCache, QueryCacheInvalidator } = require("common");

const { Op } = require("sequelize");

class RfewtgwreQueryCache extends QueryCache {
  constructor(input, wClause) {
    super("rfewtgwre", [], Op.and, Op.eq, input, wClause);
  }
}
class RfewtgwreQueryCacheInvalidator extends QueryCacheInvalidator {
  constructor() {
    super("rfewtgwre", []);
  }
}

module.exports = {
  RfewtgwreQueryCache,
  RfewtgwreQueryCacheInvalidator,
};
