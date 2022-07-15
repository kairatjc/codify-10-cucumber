const conf = require("./base.conf").config;

exports.config = {
  cucumberOpts: {
    tagExpression: "@admin",
    require: ["./test/step-definitions/**/*.js"],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    snippets: true,
    source: true,
    strict: false,
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },
  ...conf,
};
