module.exports = {
  createSession: () => {
    const SessionManager = require("./wuttodo-session");
    return new SessionManager();
  },
};
