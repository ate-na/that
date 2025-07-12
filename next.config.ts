const withNextIntl = require("next-intl/plugin")("./i18n.ts");

module.exports = withNextIntl({
  output: "export",
  experimental: {
    serverActions: true,
  },
});
