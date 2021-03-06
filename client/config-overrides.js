const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@layout-header-background": "#43425D",
      "@menu-dark-submenu-bg": "#3B3A53",
      "@layout-trigger-background": "#3B3A53",
      "@primary-color": "#43415D",
      "@link-color": "#1890ff",
      "@layout-body-background": "#F0F0F7",
      "@warning-color": "#faad14",
      "@error-color": "#f5222d",
      "@font-size-base": "14px",
      "@heading-color": "#4D4F5C",
      "@text-color": "rgba(0, 0, 0, .65)",
      "@text-color-secondary": "rgba(0, 0, 0, .45)",
      "@disabled-color": "rgba(0, 0, 0, .25)",
      "@border-radius-base": "4px",
      "@border-color-base": "#d9d9d9",
      "@box-shadow-base": "0 2px 8px rgba(0, 0, 0, .15)"
    }
  })
);
