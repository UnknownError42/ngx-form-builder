(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/document/guide/getting-started.md":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/document/guide/getting-started.md ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "---\norder: 1\ntitle: 开始使用\ntype: Basic\n---\n\n[ngx-form-builder](https://github.com/giscafer/ngx-form-builder) 是一个基于 [JSON Schema](http://json-schema.org/) 标准的动态构建表单。支持 `[ng-zorro-antd](https://ng.ant.design/)` 和 `BootStrap` 两种样式。\n\n## 特性\n\n- 符合 `JSON Schema` 标准\n- 支持 `ng-zorro-antd` 基础组件库\n- 支持 `BootStrap` 样式\n- 支持模板代码在线编辑和复制下载\n- ……\n\n## 如何使用？\n\n**步骤简单**\n\n* 编辑 JSON Schema，点击运行即可（schema 属性特点和小部件特点请详细阅读文档 ）\n* 复制或者下载代码放到工程（支持 StackBlitz 在线编辑模板代码）\n\n\n## License\n\nMIT by [@giscafer](https://github.com/giscafer)\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/document/guide/schema.md":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/document/guide/schema.md ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "---\norder: 5\ntitle: Schema\ntype: Basic\n---\n\n## 常规Schema\n\n参数 | 说明 | 类型 | 默认值\n----|------|-----|------\ndebug | 会在控制台打印相关校验过程 | `boolean` | -\ntype | 数据类型，支持 JavaScript 基础类型 | `number,string,boolean,object,array` | `object`\nstyle | 自定义样式，等同 `[ngStyle]` 值  | `object` | -\ngrid | 响应式属性  | `SFGrid` | -\nmodelName | 双向数据绑定值的model对象名称 | `string` | `testModel`\nfileName | 自定义模板文件名称 | `string` | `template`\n\n<br>\n\n**type注意事项**\n\n- JSON 中 `date` 等同 `string` 类型\n- 指定 `format` 标准参数可以自动适配渲染小部件\n- 指定 `widget` 参数强制渲染小部件\n<br>\n\n## 渲染Schema\n\n参数 | 说明 | 类型 | 默认值\n----|------|-----|------\nwidget | 指定采用什么小部件渲染数据  | `string,WidgetData` | -\ntitle | 表单标题，等同 `label`  | `string` | -\ndescription | 表单描述  | `string` | -\nshowDescription | 是否展示 `description`  | `boolean` | `false`\ndefault | 默认值  | `any` | -\nsize | 控件大小  | `large,default,small` | `large`\ndisabled | 是否禁用状态  | `boolean` | -\n\n\n## 小部件Schema\n\n参数 | 说明 | 类型 | 默认值\n----|------|-----|------\nid | 小部件名称  | `string` | -\nplaceholder | 文字框中显示提示信息  | `string` | -\nextra | 用于显示表单额外提示信息  | `string` | -\n\n> 每一个小部件会有相应UI参数，请参考相应小部件文档。\n\n## 响应式Schema\n\n`grid` 属性等同完整的 [Grid栅格系统](http://ng.ant.design/components/grid/zh)，透过 `grid` 可以决定表单如何渲染。\n\n参数 | 说明 | 类型 | 默认值\n----|------|-----|------\nmode |  垂直、水平、和内嵌模式:`vertical` `horizontal` `inline`  | `vertical` | -\noffset | 栅格左侧的间隔格数，间隔内不可以有栅格  | `number` | -\ngutter | 栅格间隔  | `number` | -\nspan | 每个表单元素栅格占位格数，为 `0` 时相当于 `display: none`  | `number` | -\nxs | `<576px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | `number, Object` | -\nsm | `≥576px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | `number, Object` | -\nmd | `≥768px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | `number, Object` | -\nlg | `≥992px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | `number, Object` | -\nxl | `1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | `number, Object` | -\nxxl |  `≥1600px`响应式栅格，可为栅格数或一个包含其他属性的对象 | `number, Object` | -\n\n## 水平布局Schema\n\n> 务必二者总和为 `24`\n\n参数 | 说明 | 类型 | 默认值\n----|------|-----|------\nspan_label | `label` 所占栅格数  | `number` | 5\nspan_control | 表单控件所占栅格数  | `number` | 19\noffset_control | `control` 栅格左侧的间隔格数，间隔内不可以有栅格  | `number` | -\nspan_label_fixed | `label` 固定宽度  | `number` | -\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/document/guide/yapi.md":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/document/guide/yapi.md ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "---\r\norder: 2\r\ntitle: Yapi 列表接口自动生成页面\r\ntype: Advanced\r\n---\r\n\r\n支持 **Yapi 列表分页查询接口** 自动生成前端模板页面。\r\n\r\n\r\n### 如何使用？\r\n\r\n\r\n`Zorro Builder` 下，选择`yapi列表自动生成`:\r\n\r\n![](https://github.com/giscafer/ngx-form-builder/blob/master/src/app/document/images/yapi-sample.png)\r\n\r\n复制下边json粘贴到编辑器，点击 `RUN` 运行即可\r\n\r\n```js\r\n{\r\n    \"提示\": \"以下token和接口url必填\",\r\n    \"tableComponent\": \"yzt-grid\",\r\n    \"token\": \"cd54325e00db4aa131f6\",\r\n    \"url\": \"https://yapi.1ziton.com/project/11/interface/api/27\"\r\n}\r\n\r\n```\r\n\r\n修改自己项目的token和接口url地址，即可快速创建列表查询页面\r\n\r\n\r\n**跨域问题注意**\r\n\r\n由于域名跨域请求yapi网站接口的缘故，建议安装chrome扩展程序[Allow-Control-Allow-Origin: *](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi)，并启用，这样就没问题了。\r\n\r\n![](https://github.com/giscafer/ngx-form-builder/blob/master/src/app/document/images/cors.png)\r\n\r\n\r\n\r\n### json参数说明\r\n\r\n- `token` 项目的token，有OPEN API权限。在YAPI上，选择`项目——>设置——>token配置`中获取token\r\n- `url` 接口地址。打开接口预览页面，复制 `地址栏url` 即可\r\n- `tableComponent` 指定渲染的表格组件，目前支持 `yzt-grid` 和 `nz-table` 两种\r\n\r\n\r\n### 欢迎反馈\r\n\r\n提建议或参与贡献代码：https://github.com/giscafer/ngx-form-builder\r\n\r\n### License\r\n\r\nMIT by [@giscafer](https://github.com/giscafer)\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/lib/widgets/zorro/button/index.md":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/lib/widgets/zorro/button/index.md ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "---\nwidget: button\ntitle: 按钮\n---\n\n按钮用于提交或重置操作。\n\n## `button` Schema\n\n参数 | 说明 | 类型 | 默认值\n----|------|-----|------\nitems | 按钮组  | `any[]` | -\n\n### `items` 参数\n\n参数 | 说明 | 类型 | 默认值\n----|------|-----|------\nid | 编号  | `string` | -\nlabel | 按钮文本  | `string` | -\nsubmit | 是否提交按钮，`true` 时校验结果 `invalid` 时为禁止状态且类型为 `primary`  | `boolean` | -\ntype | 按钮类型  | `primary,default,dashed,danger` | -\n\n## Demo\n\n**基础**\n\n```ts\n\"button\": {\n    \"grid\": {\n        \"md\": {\n            \"offset\": 20,\n            \"span\": 4\n        }\n    },\n    \"items\": [{\n            \"label\": \"查询\",\n            \"id\": \"query\",\n            \"type\": \"primary\",\n            \"submit\": true\n        },\n        {\n            \"label\": \"清空\",\n            \"id\": \"reset\"\n        }\n    ]\n}\n```\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/lib/widgets/zorro/checkbox/index.md":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/lib/widgets/zorro/checkbox/index.md ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "---\r\nwidget: checkbox\r\ntitle: 多选框\r\ninherit: true\r\n---\r\n\r\n\r\n## Schema\r\n\r\n参数 | 说明 | 类型 | 默认值\r\n----|------|-----|------\r\ntype | 值类型，如果`type:\"array\"`则使用`nz-checkbox-group`渲染 | `boolean` | - \r\nreadOnly | 是否为禁用状态  | `boolean` | -\r\nwidget | 组件  | `checkbox` | - \r\ndescription | 描述文字 | `string` | - \r\ndefault | 默认值 | `boolean` | - \r\n\r\n \r\n## Demo\r\n\r\n**配置举例**，`categories`配置为`nz-checkbox-group`渲染\r\n\r\n```json\r\n\r\n{\r\n\t\"checked\": {\r\n        \"type\": \"boolean\",\r\n        \"widget\": \"checkbox\",\r\n\t\t\"description\": \"I agree to the Terms of Service and the Privacy Policy?\"\r\n\t},\r\n\t\"checked1\": {\r\n        \"type\": \"boolean\",\r\n        \"widget\": \"checkbox\",\r\n\t\t\"readOnly\": true,\r\n\t\t\"description\": \"不可选 - Disabled.\"\r\n    },\r\n    \"categories\": {\r\n        \"type\": \"array\",\r\n        \"title\": \"Categories\",\r\n        \"items\": {\r\n            \"type\": \"string\",\r\n            \"oneOf\": [\r\n                {\r\n                    \"description\": \"Dog\",\r\n                    \"enum\": [\r\n                        \"dog\"\r\n                    ]\r\n                },\r\n                {\r\n                    \"description\": \"Cat\",\r\n                    \"enum\": [\r\n                        \"cat\"\r\n                    ]\r\n                },\r\n                {\r\n                    \"description\": \"Daulphin\",\r\n                    \"enum\": [\r\n                        \"daulphin\"\r\n                    ]\r\n                }\r\n            ]\r\n        },\r\n        \"widget\": \"checkbox\"\r\n    }\r\n}\r\n\r\n```\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/lib/widgets/zorro/date-range/index.md":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/lib/widgets/zorro/date-range/index.md ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "---\nwidget: date-range\ntitle: 日期选择器\ninherit: true\n---\n\n默认小部件，一般用于日期选择。`\"widget\":\"date-range\"`\n\n## Schema\n\n参数 | 说明 | 类型 | 默认值\n----|------|-----|------\ntype | 值类型  | `string` | - \nstart | 开始placeholder  | `string` | -\nend | 结束placeholder  | `string` | -\nreadOnly | 是否为禁用状态  | `boolean` | -\nwidget | 组件  | `date-range` | - \nformat | 日期格式  | `string` | \"YYYY-MM-DD\" | \nshowTime | 是否显示时间选择器 | `boolean` | `false`\n\n \n## Demo\n\n**配置举例**\n\n```json\n\n{\n\t\"daterange\": {\n\t\t\"type\": \"string\",\n\t\t\"widget\": \"date-range\",\n\t\t\"title\": \"日期段\",\n\t\t\"start\": \"Select start date\",\n\t\t\"end\": \"Select end date\"\n\t},\n\t\"daterange2\": {\n\t\t\"type\": \"string\",\n\t\t\"widget\": \"date-range\",\n\t\t\"showTime\": true,\n\t\t\"title\": \"日期段\",\n\t\t\"start\": \"Select start date\",\n\t\t\"end\": \"Select end date\"\n\t},\n}\n```\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/lib/widgets/zorro/date/index.md":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/lib/widgets/zorro/date/index.md ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "---\nwidget: date\ntitle: 日期选择器\ninherit: true\n---\n\n一般用于日期选择。`\"widget\":\"date\"`\n\n## Schema\n\n参数 | 说明 | 类型 | 默认值\n----|------|-----|------\ntype | 值类型  | `string` | - \nplaceholder | 在文字框中显示提示讯息  | `string` | -\nreadOnly | 是否只读状态  | `boolean` | -\nwidget | 组件  | `date` | - \nformat | 日期格式  | `string` | \"YYYY-MM-DD\" \nshowTime | 是否显示时间选择器 | `boolean` | `false`\n\n \n## Demo\n\n**配置举例**\n\n```json\n\n{\n\t\"birthday\": {\n\t\t\"type\": \"string\",\n\t\t\"title\": \"日期\",\n\t\t\"widget\":\"date\",\n\t\t\"format\": \"YYYY/MM/DD\"\n\t},\n\t\"date1\": {\n\t\t\"type\": \"number\",\n\t\t\"title\": \"时间戳\",\n\t\t\"default\": 1519787043107,\n\t\t\"widget\":\"date\",\n\t\t\"format\": \"YYYY/MM/DD\"\n\t},\n\t\"date2\": {\n\t\t\"type\": \"string\",\n\t\t\"title\": \"ISO日期\",\n\t\t\"default\": \"2018-02-28T17:16:27.113Z\",\n\t\t\"widget\":\"date\",\n\t\t\"format\": \"YYYY/MM/DD\"\n\t},\n\t\"date3\": {\n\t\t\"type\": \"string\",\n\t\t\"title\": \"年月日\",\n\t\t\"default\": \"2018/02/28\",\n\t\t\"widget\":\"date\",\n\t\t\"format\": \"YYYY/MM/DD\"\n\t}\n}\n```\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/lib/widgets/zorro/radio/index.md":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/lib/widgets/zorro/radio/index.md ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "---\r\nwidget: radio\r\ntitle: 单选框\r\ninherit: true\r\n---\r\n\r\n单选框 `\"widget\":\"radio\"`\r\n\r\n## Schema\r\n\r\n参数 | 说明 | 类型 | 默认值\r\n----|------|-----|------\r\ntype | 值类型，如果`oneOf`为多项选择，则使用`nz-radio-group`渲染 | `boolean` | - \r\nreadOnly | 是否为禁用状态  | `boolean` | -\r\nwidget | 组件  | `radio` | - \r\noneOf | 选项内容  | `array` | - \r\ndescription | 描述文字 | `string` | - \r\ndefault | 默认值 | `boolean` | - \r\n\r\n \r\n## Demo\r\n\r\n**配置举例**，`promotions`属性配置为`nz-radio-group`渲染\r\n\r\n```json\r\n\r\n{\r\n    \"promotion\": {\r\n        \"type\": \"string\",\r\n        \"description\": \"独立使用 true\",\r\n        \"default\":true,\r\n        \"widget\": \"radio\"\r\n    },\r\n    \"promotions\": {\r\n        \"type\": \"string\",\r\n        \"description\": \"Promotion\",\r\n        \"widget\": \"radio\",\r\n        \"oneOf\": [\r\n            {\r\n                \"description\": \"Student discount (20%)\",\r\n                \"enum\": [\r\n                    \"student\"\r\n                ]\r\n            },\r\n            {\r\n                \"description\": \"Summer 2016 discount (15%)\",\r\n                \"enum\": [\r\n                    \"summer\"\r\n                ]\r\n            },\r\n            {\r\n                \"description\": \"None\",\r\n                \"enum\": [\r\n                    \"none\"\r\n                ]\r\n            }\r\n        ]\r\n    }\r\n}\r\n\r\n```\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/lib/widgets/zorro/select/index.md":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/lib/widgets/zorro/select/index.md ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "---\nwidget: select\ntitle: 选择器\ninherit: true\n---\n\n选择器小部件，一般用于选择操作。`\"widget\":\"select\"`\n\n\n## Schema\n\n参数 | 说明 | 类型 | 默认值\n----|------|-----|------\nplaceholder | 在文字框中显示提示信息  | `string` | -\nitems | 选项数据对象（见demo）  | `object` | -\nreadOnly | 是否只读状态  | `boolean` | -\ndescription | 描述文字 | `string` | - \n\n## Demo\n\n**配置举例**\n\n```json\n {\n       \"categories\": {\n        \"type\": \"string\",\n        \"widget\": \"select\",\n        \"title\": \"Categories\",\n        \"items\": {\n            \"type\": \"string\",\n            \"oneOf\": [\n                {\n                    \"description\": \"Dog\",\n                    \"enum\": [\n                        \"dog\"\n                    ]\n                },\n                {\n                    \"description\": \"Cat\",\n                    \"enum\": [\n                        \"cat\"\n                    ]\n                },\n                {\n                    \"description\": \"Daulphin\",\n                    \"enum\": [\n                        \"daulphin\"\n                    ]\n                }\n            ]\n        }\n    }\n }\n```\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/lib/widgets/zorro/string/index.md":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/lib/widgets/zorro/string/index.md ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "---\nwidget: string\ntitle: 文本框\ninherit: true\n---\n\n文本框小部件，一般用于字符串元素。`\"widget\":\"string\"` 或省略不写\n\n\n## Schema\n\n参数 | 说明 | 类型 | 默认值\n----|------|-----|------\ntype | 等同 input 的 `type` 值，如果用密码框则`\"widget\":\"password\"`  | `string` | -\nplaceholder | 在文字框中显示提示信息  | `string` | -\nmaxLength | 表单最大长度  | `number` | -\nminLength | 表单最小长度  | `number` | -\nreadOnly | 是否只读状态  | `boolean` | -\n\n## Demo\n\n**配置举例**\n\n```json\n {\n        \"name\": {\n            \"type\": \"string\",\n            \"title\": \"用户名\",\n            \"placeholder\": \"请输入用户名，且2位以上\",\n            \"minLength\": 2\n        },\n        \"password\": {\n            \"type\": \"string\",\n            \"widget\": \"password\",\n            \"title\": \"密码\",\n            \"placeholder\": \"请输入密码，且6位以上\",\n            \"minLength\": 6\n        },\n        \"email\": {\n            \"type\": \"string\",\n            \"placeholder\": \"请输入邮箱，最多20个字符\",\n            \"maxLength\": 20 \n        }\n }\n```\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/lib/widgets/zorro/table/index.md":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/lib/widgets/zorro/table/index.md ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "---\r\nwidget: table\r\ntitle: 表格table\r\ninherit: true\r\n---\r\n\r\n展示行列数据。表格小部件使用的方式和别的不一样，表格单独作为 schema 的属性，不是放在 properties 下\r\n\r\n\r\n## Schema\r\n\r\n参数 | 说明 | 类型 | 默认值\r\n----|------|-----|------\r\ncolumns | 字段展示，用`-`间隔，为`字段展示名称label-字段名`  | `string` | -\r\ndata | 展示数据，是一个对象数组 | `Array` | -\r\n\r\n\r\n## Demo\r\n\r\n**配置举例**\r\n\r\n```json\r\n \"table\": {\r\n        \"columns\": [\r\n            \"Name-name\",\r\n            \"Age-age\",\r\n            \"Address-address\",\r\n            \"Checked-checked\"\r\n        ],\r\n        \"data\": [\r\n            {\r\n                \"name\": \"John Brown\",\r\n                \"age\": 32,\r\n                \"address\": \"New York No. 1 Lake Park\",\r\n                \"checked\": false,\r\n                \"disabled\": false\r\n            },\r\n            {\r\n                \"name\": \"Jim Green\",\r\n                \"age\": 42,\r\n                \"address\": \"London No. 1 Lake Park\",\r\n                \"checked\": false,\r\n                \"disabled\": false\r\n            },\r\n            {\r\n                \"name\": \"Joe Black\",\r\n                \"age\": 32,\r\n                \"address\": \"Sidney No. 1 Lake Park\",\r\n                \"checked\": false,\r\n                \"disabled\": false\r\n            },\r\n            {\r\n                \"name\": \"Disabled User\",\r\n                \"age\": 32,\r\n                \"address\": \"Sidney No. 1 Lake Park\",\r\n                \"checked\": false,\r\n                \"disabled\": true\r\n            }\r\n        ]\r\n    }\r\n```\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/lib/widgets/zorro/textarea/index.md":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/lib/widgets/zorro/textarea/index.md ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "---\nwidget: textarea\ntitle: 多行文本框\ninherit: true\n---\n\n文本框小部件，一般用于字符串元素。`\"widget\":\"textarea\"`\n\n\n## Schema\n\n参数 | 说明 | 类型 | 默认值\n----|------|-----|------\nplaceholder | 在文字框中显示提示信息  | `string` | -\nautosize | 自适应内容高度，可设置为 `true|false` 或对象：`{ minRows: 2, maxRows: 6 }`  | `Boolean|Object` | `false`\nreadOnly | 是否只读状态  | `boolean` | -\n\n## Demo\n\n**配置举例**\n\n```json\n {\n        \"remark\": {\n            \"type\": \"string\",\n            \"widget\": \"textarea\",\n            \"title\": \"备注\",\n            \"placeholder\": \"Autosize height with minimum and maximum number of lines\"\n        }\n }\n```\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/lib/widgets/zorro/time/index.md":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/lib/widgets/zorro/time/index.md ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "---\nwidget: time\ntitle: 时间选择器\ninherit: true\n---\n\n一般用于时间选择。`\"widget\":\"time\"`\n\n## Schema\n\n参数 | 说明 | 类型 | 默认值\n----|------|-----|------\ntype | 值类型  | `string` | - \nplaceholder | 在文字框中显示提示讯息  | `string` | -\nreadOnly | 是否禁用选择状态  | `boolean` | -\nwidget | 组件  | `time` | - \nformat | 日期格式  | `string` | \"HH:mm:ss\"、\"HH:mm\"、\"mm:ss\" |\n\n \n## Demo\n\n**配置举例**\n\n```json\n\n{\n\t\"datetime\": {\n\t\t\"type\": \"string\",\n\t\t\"widget\": \"time\",\n\t\t\"title\": \"时间选择\",\n\t\t\"placeholder\": \"请选择\"\n    }\n}\n```\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/lib/widgets/zorro/tree-select/index.md":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/lib/widgets/zorro/tree-select/index.md ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "---\nwidget: tree-select\ntitle: 树形选择器\ninherit: true\n---\n\n树型选择控件。`\"widget\":\"tree-select\" (暂不支持数据渲染)` \n\n\n## Schema\n\n参数 | 说明 | 类型 | 默认值\n----|------|-----|------\ntype | `\"widget\":\"tree-select\"`  | `string` | -\nplaceholder | 在文字框中显示提示信息  | `string` | -\nreadOnly | 是否只读状态  | `boolean` | -\ndescription | 描述文字 | `string` | - \n\n## Demo\n\n**配置举例**\n\n```json\n {\n       \"categories\": {\n        \"type\": \"string\",\n        \"widget\": \"tree-select\",\n        \"title\": \"Categories\"\n    }\n }\n```\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/lib/widgets/zorro/yzt-grid/index.md":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/lib/widgets/zorro/yzt-grid/index.md ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "---\r\nwidget: yzt-grid\r\ntitle: 表格 yzt-grid\r\ninherit: true\r\n---\r\n\r\n该组件用来配合yapi接口自动生成页面\r\n\r\n\r\n## Schema\r\n\r\n\r\n## Demo\r\n\r\n详细见文档：http://form.giscafer.com/#/document/yapi\r\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _lib_dnd_dnd_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/dnd/dnd.module */ "./src/lib/dnd/dnd.module.ts");
/* harmony import */ var _pages_zorro_form_zorro_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/zorro-form/zorro-form.component */ "./src/app/pages/zorro-form/zorro-form.component.ts");
/* harmony import */ var _pages_bootstrap_form_bootstrap_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/bootstrap-form/bootstrap-form.component */ "./src/app/pages/bootstrap-form/bootstrap-form.component.ts");
/* harmony import */ var _pages_dnd_form_dnd_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/dnd-form/dnd.component */ "./src/app/pages/dnd-form/dnd.component.ts");
/* harmony import */ var _document_document_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./document/document.component */ "./src/app/document/document.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: 'zorro', pathMatch: 'full' },
    { path: 'dnd', component: _pages_dnd_form_dnd_component__WEBPACK_IMPORTED_MODULE_6__["DndComponent"] },
    { path: 'bootstrap', component: _pages_bootstrap_form_bootstrap_form_component__WEBPACK_IMPORTED_MODULE_5__["BootstrapFormComponent"] },
    { path: 'zorro', component: _pages_zorro_form_zorro_form_component__WEBPACK_IMPORTED_MODULE_4__["ZorroFormComponent"] },
    { path: 'document', redirectTo: 'document/getting-started', pathMatch: 'full' },
    {
        path: 'document/:id',
        component: _document_document_component__WEBPACK_IMPORTED_MODULE_7__["DocumentComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _pages_bootstrap_form_bootstrap_form_component__WEBPACK_IMPORTED_MODULE_5__["BootstrapFormComponent"],
                _pages_zorro_form_zorro_form_component__WEBPACK_IMPORTED_MODULE_4__["ZorroFormComponent"],
                _pages_dnd_form_dnd_component__WEBPACK_IMPORTED_MODULE_6__["DndComponent"],
                _document_document_component__WEBPACK_IMPORTED_MODULE_7__["DocumentComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _lib_dnd_dnd_module__WEBPACK_IMPORTED_MODULE_3__["DndModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })
            ],
            exports: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"layout\">\r\n  <app-nav #nav></app-nav>\r\n  <nz-content style=\"padding:0 50px;\">\r\n    <router-outlet></router-outlet>\r\n  </nz-content>\r\n</nz-layout>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nz-content {\n  padding: 0 !important; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/nav/nav.component */ "./src/app/layout/nav/nav.component.ts");
/* harmony import */ var _services_builder_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/builder-service */ "./src/app/services/builder-service.ts");
/* harmony import */ var _services_startup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/startup.service */ "./src/app/services/startup.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(router, titleService, startUpService, builderService) {
        var _this = this;
        this.router = router;
        this.titleService = titleService;
        this.startUpService = startUpService;
        this.builderService = builderService;
        this.subject = builderService.builderChanged.subscribe(function (value) {
            _this.navRef._builder_type = value || 'zorro';
        });
        this.startUpService.initData().then(function () {
            _this.startUpService.mockChanged.next('mock chaged');
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                var title = event.url.substr(1);
                _this.titleService.setTitle(title + " builder");
                _this.builderService.builderChanged.next(title);
                _this.startUpService.mockChanged.next('route mock chaged');
            }
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subject.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nav'),
        __metadata("design:type", _layout_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"])
    ], AppComponent.prototype, "navRef", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sf-app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            providers: [_services_builder_service__WEBPACK_IMPORTED_MODULE_4__["BuilderService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _services_startup_service__WEBPACK_IMPORTED_MODULE_5__["StartUpService"],
            _services_builder_service__WEBPACK_IMPORTED_MODULE_4__["BuilderService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var ngx_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-md */ "./node_modules/ngx-md/fesm5/ngx-md.js");
/* harmony import */ var _lib_dnd_dnd_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/dnd/dnd.module */ "./src/lib/dnd/dnd.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _services_startup_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/startup.service */ "./src/app/services/startup.service.ts");
/* harmony import */ var _shared_components_yzt_grid_yzt_grid_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/components/yzt-grid/yzt-grid.component */ "./src/app/shared/components/yzt-grid/yzt-grid.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// third part libs








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NgZorroAntdModule"].forRoot(),
                _lib_dnd_dnd_module__WEBPACK_IMPORTED_MODULE_10__["DndModule"].forRoot(),
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_13__["LayoutModule"],
                ngx_md__WEBPACK_IMPORTED_MODULE_9__["NgxMdModule"].forRoot(),
                _shared_components_yzt_grid_yzt_grid_component__WEBPACK_IMPORTED_MODULE_15__["UIGridModule"],
            ],
            providers: [
                { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["zh_CN"] },
                _services_startup_service__WEBPACK_IMPORTED_MODULE_14__["StartUpService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/document/data.ts":
/*!**********************************!*\
  !*** ./src/app/document/data.ts ***!
  \**********************************/
/*! exports provided: DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA", function() { return DATA; });
function getMd(md) {
    var arr = md.split('---');
    return arr.length > 2 && arr[0] === '' ? arr.slice(2).join('---') : md;
}
var DATA = {
    basic: [
        {
            id: 'getting-started',
            title: '开始使用',
            content: getMd(__webpack_require__(/*! !raw-loader!./guide/getting-started.md */ "./node_modules/raw-loader/index.js!./src/app/document/guide/getting-started.md"))
        },
        {
            id: 'schema',
            title: 'Schema',
            content: getMd(__webpack_require__(/*! !raw-loader!./guide/schema.md */ "./node_modules/raw-loader/index.js!./src/app/document/guide/schema.md"))
        },
        {
            id: 'yapi',
            title: 'Yapi 接口自动生成页面',
            content: getMd(__webpack_require__(/*! !raw-loader!./guide/yapi.md */ "./node_modules/raw-loader/index.js!./src/app/document/guide/yapi.md"))
        }
    ],
    widgets: [
        {
            id: 'string',
            title: '字符串',
            content: getMd(__webpack_require__(/*! !raw-loader!../../lib/widgets/zorro/string/index.md */ "./node_modules/raw-loader/index.js!./src/lib/widgets/zorro/string/index.md"))
        },
        {
            id: 'button',
            title: '按钮',
            content: getMd(__webpack_require__(/*! !raw-loader!../../lib/widgets/zorro/button/index.md */ "./node_modules/raw-loader/index.js!./src/lib/widgets/zorro/button/index.md"))
        },
        {
            id: 'textarea',
            title: '多行文本框',
            content: getMd(__webpack_require__(/*! !raw-loader!../../lib/widgets/zorro/textarea/index.md */ "./node_modules/raw-loader/index.js!./src/lib/widgets/zorro/textarea/index.md"))
        },
        {
            id: 'checkbox',
            title: '多选框',
            content: getMd(__webpack_require__(/*! !raw-loader!../../lib/widgets/zorro/checkbox/index.md */ "./node_modules/raw-loader/index.js!./src/lib/widgets/zorro/checkbox/index.md"))
        },
        {
            id: 'radio',
            title: '单选框',
            content: getMd(__webpack_require__(/*! !raw-loader!../../lib/widgets/zorro/radio/index.md */ "./node_modules/raw-loader/index.js!./src/lib/widgets/zorro/radio/index.md"))
        },
        {
            id: 'date',
            title: '日期',
            content: getMd(__webpack_require__(/*! !raw-loader!../../lib/widgets/zorro/date/index.md */ "./node_modules/raw-loader/index.js!./src/lib/widgets/zorro/date/index.md"))
        },
        {
            id: 'date-range',
            title: '日期范围',
            content: getMd(__webpack_require__(/*! !raw-loader!../../lib/widgets/zorro/date-range/index.md */ "./node_modules/raw-loader/index.js!./src/lib/widgets/zorro/date-range/index.md"))
        },
        {
            id: 'time',
            title: '时间',
            content: getMd(__webpack_require__(/*! !raw-loader!../../lib/widgets/zorro/time/index.md */ "./node_modules/raw-loader/index.js!./src/lib/widgets/zorro/time/index.md"))
        },
        {
            id: 'select',
            title: '选择器',
            content: getMd(__webpack_require__(/*! !raw-loader!../../lib/widgets/zorro/select/index.md */ "./node_modules/raw-loader/index.js!./src/lib/widgets/zorro/select/index.md"))
        },
        {
            id: 'tree-select',
            title: '树形选择器',
            content: getMd(__webpack_require__(/*! !raw-loader!../../lib/widgets/zorro/tree-select/index.md */ "./node_modules/raw-loader/index.js!./src/lib/widgets/zorro/tree-select/index.md"))
        }, {
            id: 'table',
            title: '表格',
            content: getMd(__webpack_require__(/*! !raw-loader!../../lib/widgets/zorro/table/index.md */ "./node_modules/raw-loader/index.js!./src/lib/widgets/zorro/table/index.md"))
        }, {
            id: 'yzt-grid',
            title: 'YZT表格',
            content: getMd(__webpack_require__(/*! !raw-loader!../../lib/widgets/zorro/yzt-grid/index.md */ "./node_modules/raw-loader/index.js!./src/lib/widgets/zorro/yzt-grid/index.md"))
        }
        /* ,
        {
            id: 'rate',
            title: '评分',
            content: getMd(require('!!raw-loader!../../lib/widgets/zorro/rate/index.md'))
        },
        {
            id: 'range',
            title: '滑动输入条',
            content: getMd(require('!!raw-loader!../../lib/widgets/zorro/range/index.md'))
        },
        {
            id: 'file',
            title: '文件上传',
            content: getMd(require('!!raw-loader!../../lib/widgets/zorro/file/index.md'))
        },
        {
            id: 'cascader',
            title: '级联选择',
            content: getMd(require('!!raw-loader!../../lib/widgets/zorro/cascader/index.md'))
        },
        {
            id: 'transfer',
            title: '穿梭框',
            content: getMd(require('!!raw-loader!../../lib/widgets/zorro/transfer/index.md'))
        },
        {
            id: 'tag',
            title: '热门标签',
            content: getMd(require('!!raw-loader!../../lib/widgets/zorro/tag/index.md'))
        } */
    ]
};


/***/ }),

/***/ "./src/app/document/document.component.html":
/*!**************************************************!*\
  !*** ./src/app/document/document.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\n    <nz-sider [nzWidth]=\"200\">\n        <ul nz-menu [nzMode]=\"'inline'\" style=\"height:100%\">\n            <li nz-menu-group>\n                <div title>入门</div>\n                <ul>\n                    <li nz-menu-item *ngFor=\"let i of data.basic\" [routerLink]=\"'/document/' + i.id\" routerLinkActive=\"ant-menu-item-selected\">{{i.title}}</li>\n                </ul>\n            </li>\n            <li nz-menu-group>\n                <div title>小部件</div>\n                <ul>\n                    <li nz-menu-item *ngFor=\"let i of data.widgets\" [routerLink]=\"'/document/' + i.id\" routerLinkActive=\"ant-menu-item-selected\">{{i.id}}-{{i.title}}</li>\n                </ul>\n            </li>\n        </ul>\n    </nz-sider>\n    <nz-content class=\"markdown\" *ngIf=\"item\" class=\"bg-white doc\">\n        <h1>{{item.title}}</h1>\n        <markdown [data]=\"item.content\"></markdown>\n    </nz-content>\n</nz-layout>"

/***/ }),

/***/ "./src/app/document/document.component.scss":
/*!**************************************************!*\
  !*** ./src/app/document/document.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "code[class*=language-],\npre[class*=language-] {\n  color: #000;\n  background: 0 0;\n  text-shadow: 0 1px #fff;\n  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none; }\n\ncode[class*=language-] ::-moz-selection,\ncode[class*=language-]::-moz-selection,\npre[class*=language-] ::-moz-selection,\npre[class*=language-]::-moz-selection {\n  text-shadow: none;\n  background: #b3d4fc; }\n\ncode[class*=language-] ::selection,\ncode[class*=language-]::selection,\npre[class*=language-] ::selection,\npre[class*=language-]::selection {\n  text-shadow: none;\n  background: #b3d4fc; }\n\n@media print {\n  code[class*=language-],\n  pre[class*=language-] {\n    text-shadow: none; } }\n\npre[class*=language-] {\n  padding: 1em;\n  margin: .5em 0;\n  overflow: auto; }\n\n:not(pre) > code[class*=language-],\npre[class*=language-] {\n  background: #f5f2f0; }\n\n:not(pre) > code[class*=language-] {\n  padding: .1em;\n  border-radius: .3em;\n  white-space: normal; }\n\n.token.cdata,\n.token.comment,\n.token.doctype,\n.token.prolog {\n  color: #708090; }\n\n.token.punctuation {\n  color: #999; }\n\n.namespace {\n  opacity: .7; }\n\n.token.boolean,\n.token.constant,\n.token.deleted,\n.token.number,\n.token.property,\n.token.symbol,\n.token.tag {\n  color: #905; }\n\n.token.attr-name,\n.token.builtin,\n.token.char,\n.token.inserted,\n.token.selector,\n.token.string {\n  color: #690; }\n\n.language-css .token.string,\n.style .token.string,\n.token.entity,\n.token.operator,\n.token.url {\n  color: #a67f59;\n  background: rgba(255, 255, 255, 0.5); }\n\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n  color: #07a; }\n\n.token.function {\n  color: #DD4A68; }\n\n.token.important,\n.token.regex,\n.token.variable {\n  color: #e90; }\n\n.token.bold,\n.token.important {\n  font-weight: 700; }\n\n.token.italic {\n  font-style: italic; }\n\n.token.entity {\n  cursor: help; }\n\n/*# sourceMappingURL=prism.min.css.map */\n\n.doc {\n  padding: 10px 20px 40px 40px !important; }\n\n:host ::ng-deep li {\n  outline: none; }\n\n:host ::ng-deep table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: left;\n  border-color: grey;\n  border-radius: 4px 4px 0 0; }\n\n:host ::ng-deep table tr {\n    transition: all .3s; }\n\n:host ::ng-deep table tr td,\n    :host ::ng-deep table tr th {\n      padding: 12px;\n      word-break: break-word; }\n\n:host ::ng-deep table thead tr th {\n    background: #fafafa;\n    text-align: left;\n    color: rgba(0, 0, 0, 0.85);\n    font-weight: 600;\n    border-bottom: 1px solid #e8e8e8; }\n\n:host ::ng-deep table tbody tr td {\n    border-bottom: 1px solid #e8e8e8;\n    transition: all .3s; }\n"

/***/ }),

/***/ "./src/app/document/document.component.ts":
/*!************************************************!*\
  !*** ./src/app/document/document.component.ts ***!
  \************************************************/
/*! exports provided: DocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentComponent", function() { return DocumentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/app/document/data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(route, activatedRoute, doc) {
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.doc = doc;
        this.data = _data__WEBPACK_IMPORTED_MODULE_3__["DATA"];
        this.item = null;
    }
    DocumentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var element = this.doc.getElementsByTagName('body')[0];
        this.activatedRoute.params.subscribe(function (params) {
            var id = params.id || 'getting-started';
            var item;
            Object.keys(_data__WEBPACK_IMPORTED_MODULE_3__["DATA"]).forEach(function (key) {
                if (!item)
                    item = _data__WEBPACK_IMPORTED_MODULE_3__["DATA"][key].find(function (w) { return w.id === id; });
            });
            if (!item) {
                _this.route.navigateByUrl('/document/getting-started');
                return;
            }
            if (!item.content)
                item.content = "\u672A\u5B9E\u73B0";
            _this.item = item;
            element.scrollIntoView();
        });
    };
    DocumentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-document',
            template: __webpack_require__(/*! ./document.component.html */ "./src/app/document/document.component.html"),
            styles: [__webpack_require__(/*! ./document.component.scss */ "./src/app/document/document.component.scss")],
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], Object])
    ], DocumentComponent);
    return DocumentComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/layout/nav/nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var COMPONENTS = [
    _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"]
];
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]],
            providers: [],
            declarations: COMPONENTS.slice(),
            exports: COMPONENTS.slice()
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/nav/nav.component.html":
/*!***********************************************!*\
  !*** ./src/app/layout/nav/nav.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"logo\">\r\n    <!--  <img  *ngIf=\"_builder_type==='bootstrap'\" title=\"bootstrap form builder\" src=\"data:image/webp;base64,UklGRpQWAABXRUJQVlA4WAoAAAAQAAAAWwMA8QAAQUxQSKQKAAABf8egbSNJ6yx/2O8dgYjI4bfcJNcJpjWUXciaXS5yymfwdtu2adu2teXaWutjec1l27Zt27Zt27Zt27Ztm6Oh5vQjxtqac4z6ofZwzozo/wRorP/H+n+s/8f6f6z/x/p/rExD6GfpTw1hyLib3rLvlP8Q+kdCIUkTLn/hd8Df9284eU9SGfpCylLSpIsc8x7/+qfLV5m6kIoq9HkUvSBNuNg+jwDR/xyBN09afhpJvbJ/I1Q9SQvtev3v0LbRNmDjrgEeOnTF8aSyV/RlFAOSZt/5svfAdWfMv7bd1Q38csuhS0oaKPsuykKaYPNLXgGaJhrz79u4rYGPbtp3VilUob9CWun8V38D152x+S/ajk0L3Qc3bDeu+ivnOP6ln4C2Mzb/bRt3LfDHRxev2A8RwpDJdnn8T4O7aMz/1thdBP7+8Jg5wpDQrxBKSdWUG970N4BtbP73NnZk6Is7zzy+pLLoPwhlKWnqFc74FsC2MaOrjW2A+paNZh6QQhX6CoqepClXOeploIvGmNHbGLuL8NmF688qqVf1C4SqksoVD7nP0LTGZsy0cVcDz5+6weRS2Sv6AIqepIX2v/lr6OrOmDHZJjY1NA+cuKqkXhnyvkLSNHvc+j5QNwYzptu4rQ3fPHDMIpLKkPOp2vDa9wYhNtHYDIs2sW2BL+7bdwrl+eEflrjwwz+BtjM2w6hxbIH6+9s26g0JOV0RJPVmPviNDnC0McOtjWMEuu/PXnJcSSpCFleUksabafuHGGobm+HYxjZD3z9w/lGSqiJ3C1Uhhdk3ufov8D9ihm8bDwUe22WBiSX1ioyt7EmacYPT34fYRmMzAhrcdvDr9VvOJ6mqQpYWeqU08fonPwvUrbEZKW3c1YZ3Ltt+Zin0iuysqCStePxDv0Jbd7YZWW1iUwPPXbTJgFSVIScrJM1x6EOfA3VrzEhs3NURfnnm7BUlFRmZRu143xeGro3GjNQ2blvgx+ePnUM5eBgyzhrXfdUAXTQ2I7px7Azxt4d3nXRICLlWKIKkCRc+4zMAR9tm5LdxjAB/X7vOpEFSEXKsUtKoBfZ7iaG2sUlDG9sG+P7EZaeWVGZYGneh3e4AumjbmJS0se0OePXgZadSfh02ueJr6JpoTJoa3DbQ3L97kV2N8zbUrbFJVxt3deSv8bOr8hpa26SuTce9vexKp9ORxpHzQn61P52TyB0nKr/elDaZ9suwlqIljVvWzK6CZqRzErllVoXsatofiWnUMVN2JU32eiJFfpgmw5rwHrok6nhilPLrgUtok6jlmnEzLB1L4wRyy4W9HGs3alKo4Wjl10FrM5hC1GymkF0VWorGCeRBllWRYS3wq2MKtSyVYQXN9i5dAkV+nj/LmvpR2gTqeG56hQxroutoEqjljskyLKk8i8bJ44ZrJ8yydAg16VNzalCGXWo7Bp08DLKLiixrfZr08SCbqsqyVvyTmD4t66vMsAot8gld8kR+XS7TmvUF2uTpeH0uFRlW0OT3JlDLE9MrZFm9q2icOG65Z/IsS4VOpyZ1ai4JyrJ7OoRBJw6DHKUq09qNNnVcc6B6WValTf4mpk7HbplWqZW/okucyK/rqcqyCi3wVvJ0vLuoykxruqdok+e1eVRkWUHj3knrpHHLk9NlWip1JQ1p03CzQsizBnQmjdOm5jwNKM/u6XBi4jScmm1V2qUhcSKHqZdtrf8jMWkif2ypKtMqteQnyfPF8iozrUKzvEnntPl48WwraPxn0sYdb8ysItNSpQdpSdmWx1Qo1x7QDXROGLfcoYFsq6czcdJ0XJtxVTq4I2nM6eplW6W2/j1t+Hs3VRnXKt8TEyby03oqs61C83xGdLI48t1KKrKtoFHvJs6nc2ZcqvRqyhB5Q4Xy7Z4eShlHnlMv46p0BSTNA1lXqeOTBi5SlXXt3iRNu6/KjKvQen8lzeA2KjKuoIV/xU4Umz/XzbqkyX7ApMsv8yrkXEFfYicK5lsF5dyFXk4Xm09UZF1Bt0PCvJR9nZswcL1C5nVQ0hyZeUlbOmX2yb6W6xLGWyr3niFluoWzr+qPhKkHsq/wXsL8UmRfeihh3gn512UJc5vy72OJiRI5OQPblegkceSIDGzNhNk5A5ubSJpGls7AJiU6SRyZMgMb9RmJ4mbyDGz8p4lpwiejMrCB6+mSJHLnuBlYcVqidFxQZmA6gNYJ4o5TQg62KQ0p0rKv8u+gpWmcIDSsmoXNSZsibphHIQOb6TtiinTMlYVN/SpdgkS+mjEDkya+izZBOh6ZNAsb52KaBGm5fgJl4cfRODnccPE4edge1KRHzZHKwQttwKCTg0E2VpGFrUCbHh5kdZVZ2GI/EdOjZQUVWdicb9MlR+SbhbKwoGkfpU2OlqdnVMjCJrqeJkHumSILk8LZ1E4MN1w/UR4WdDiDpGbNKcrDK+3EoBPDg+ypKhPbmC45arbLxEqt+hsxNTo2zsQKLfYxXWJEvltOZSY22wu0idHx6lwqsrCgye5PjpZnZs7GimtonBRuuW8yhSxMpc6hJi1rLlVQHj6go6mdFK45QQOZWE97ExOj4fBsrNLmfxLTIrKXeplYqZU/JzohHPlhXVWZWKEF36MGJ4JNy4dLqczEgia5DWrjJDBuOp6eXkUmpqA5jvyW2GGPeDaxIZ6xsDLyIC1wNnTG9ghmjDu4aRkpZGQqgsKStwE2eISysYFn1xhXKpWXF1JvrReBaDwiGUfDhztMKJXKz4NU7vIRxGh7xLGJHXxz3Cjl7KNO/gLaiD2i2LiBn66eSVl7kGa/9DtojD1yGNqOP+9YTgpZm1RJq95YU7fgEcImDsJDW0k9Ze9FT9riPqgj9ghg4xpe3mt8VaVy+KrQqF1eh8542LPpOr49aAapp1y+J01/4I/YNvbwZWxHOGUOqQrK50MhzXxmBBs8TNnYwI3zS6FQXl9IWuAOIBo8DNk4As+uWkiF8vsgafVngc542DF0HbyzS6F8P0h7vQ5thz2s2MQGPjp+fIWMT6HUqOM/gNrYw4dxA99ePJuKQnl/Jc135nd0DXiYMHQNg1etIPWU/YcBacVLOuoIHgZsXMMdG0q9Qv2AZalivfuhNfYYZuMOXtt2QoVK/YKVNNEWb4Ft7DHH2IYf95pCqtRHGAppogN/Ahs8hhhsiKdNIxVB/YVB0pTn/AldBI8BNu6gvXkOSUH9ifPe8he0xh7djFvTPrWK+hiDtP6jka61PVrZdA28uJsU+hgUKmm3Z6CO2KOPcQ1vHzWBqqD+xrLUVIe+C7XxaGJoO747fW6FSv2PPWneY3+g6cCjgU1s6M5fRhoI6ocsKmmJi6Eztv8ntnEHd60mlaX6JUupWulhwMb+7xkbeGej8aRS/ZSFVG74NhCN/0vG0fDD3uNJRVD/5cCBX0OM4P+CTezgtzMmkRTUnznpmd9CE7H/Axs38NsNc6qPM0gLXvsrboz/LUPb0N29llT0cUg9af3boemw/4VNHIQndpJ6Qf2dRU/Vto9Dbewhxg28ecCkqkr1f1bSNHu9S+zA2MSW746eUxpQX2iopJkP+43ooRGfN79UBfWLFoU0z6UGA/cvEaRC/aSFpCUfBd5dT1KhftTNXtxf/zdrKIs+lrH+H+v/sf4f6///9yFWUDggygsAABBgAJ0BKlwD8gA+bTaaSSQjIqEiNSgYgA2JZ278fJlUDM/zO7wbN/ivxu/MDs/d6e5P5C84sgTqb/aevD9YPZv9x3uAfpL/cvzM/uvxO+u3zAfyj+Rf87/Ge6x+t3tE/UT2AP63/KvVd/svtB/z31AP2U9JP9ifgw/Yf9w/gN/n/9m/9/WAegB6q/VjtA/0mQULJ7z5QTn3dL4gOJPvN/sflO/5Hst/1v/q8on1z/6fcK/XL0lfYP6JP7QhLi5eL2QTzLxeyCeZeL2QTzLxeyCeZeL2QTzLxeyCeZeL2QTzLxeyCeZeL2QTzLxeyCeZeL2QTzLxex6XfVQgTT5Upkz7Nwg6OLsYSDImHR/wK80bPECgxpr4gUGNNfECgxpr4gUGM8v1+PEltvN1odWxcdy/URbKRr4LNUynlf9y1OE34s8vF7IJ5l4vZBPMvF7IJ5ejoJEgstaucKlics6C14vZBPMvF7IJ5l4vZBPMvF7HpnI4oFPkSlBUgK+69+kCeKAOl0QIe5EO0OwLZHEoxpr4gUGNNfECgxpr4gUGNNXgAAF5i5/r7+4j21Mwl+H/DefcyCasJ5l4vZBPMvF7IJ5l4vZBPMvDmHuwrZfMGgOld3PEzybVCDsOCxeyCeZeL2QTzLxeyCeZeL2PXHhGqTO6ETiKqBIRKV/DRYcK3FuDt6pRZCx/UuqnpWtMVNBreCcvamviBQY018QKDGmviBQY0wVm0q4WmmTugNZJ9wsXFa59tUrjXpPN77nL2pr4gUGNNfECgxpr4gUGNNebAEF5eL9SAOYfFDF7IJ5l4vZBPMvF7IJ5l4vZBPMqFevxsKxxaXR9Noo90FxqCKaK8M8vF7IJ5l4vZBPMvF7IJ5l4vZA5JITufijpqtN5DqRQTYGRdxcHF4MD7SDA+0gwPtIMD7SAuviBQY018QKDGmDJxKkKxq9/4uxGd2UqecWeXi9kE8y8XsgnmXi9kE8y8XsgnmX2cWeXi9kE8y8XsgnmXi9kE8y8XsgnmXi9kE8y8XsgnmXi9kE1AAD+/43UAAAAAAB6FkKsiV5kOnLSkO6GoNmtmE0jxoNovNSwEnZR4r+LH/4v/mk+thkHZ7icYfmMhxlnA8n4V3mJ0uTCsOdyvYYrfxskmA8OlyUK8pC4byVEgyF+hds4xLPBD3MqO6a9lO4rsBMX3Mzp1Fs7Xi3PSBq9LCszPIft0/CQw1l2UKE+bkDQbeSZIkYM9Ttn0F3FvDgxkiwHRE/PYu4wWp0SU3d1D7+vyRd5oUqI3G+a1RWJHcowuTmOOpikfLeywVRtDE5M2SQG9M9wUjlYQ8txNx2kL53I8GcXIyCuxDCiPXzPY3zc6rrc7GW/smyLJAXyqCIpMevZMNEyHyojQRrH/qHAaGi/tnpkXMHGmntHztWMnnwVdlBm8ItpWdg2cYXEjbXVrIqRyWj3t1kCLG4jthF66Ez0AgAHaypN0Rk+AKd0w6/Bdx5xG4b/y2xP1D5YOTHvtO/zo4doLoFEJ5l3dYkGZwenlNa0RP/6NvvB//UeXSfgEBvy3EukLHoTsEcFLIr4dvxAJ5lbx5JnQk7DyMykjPCms3oU9QHJeQamgKyBF3UsAFpg2U7gBF6GtdMj/77SLTuIdAtr8/wOgr/mKkJYVqk4iV6/rXTXonYg4WNdIj8eoUW6peNp39/n/j7+4w1y24OL30YJYDCZ6Jg6w6RamQmcE0p7iSEQaIYKRaDewfYm8Zt3cB/S9WWLBB2G9JfN4YAio9D/reOUxZ50L2OPSPxXjaaLWw60sE01tP6xvvY6xIMmV3VeQlg+u5cuBSlqfwbMzwBS9eDdAK3odr9E15hX5uBZ9fG06wC0G47xkoMJOw8jMcrKK6bxtI0mUik0+1LS2kS4L0EHc+paQElx71EAIabov8CV5r66I4D4msMdBh6tddiYZp94grQdIGW7Imo725+IPCuECMIqOFUbGrZL80JXWNGLH4SUl5ch4IaAATj+4XwvCSgxhwb/wc90bPBeLqoDm6Lud6YWLEmFXP/ICZ7y/dwc/kPsOyBh6LZ/lDJVqXrJDGJVTB+n+0j8z3Edm0jjel0A0vO3j401B7RMiF7NR3p/o54LxTKZFIMoHpD+B0XDu4JRqfCTcawk3agjGZL0P32tGgInwGrwNrVlvNTWBf+jsS2htqxt4jjSfMdigk9Km13wg+M6GrZvJCUXFaYhT2gB9oINhV7EOiqIMogMwaWhrA8D7+/2EWWZiYQ3Xk/xkzUaYVAbOxGHlfC//ua61QADclgz9cLmF1bVMO9tynw4YV6WCi6c+QG7KYDH6XE+IoikKZMm2PRDCADO9IkCCUWSuEjlv/ElFJIJ7R1whWvNqLbgIrq7DpUKPsvtT571CS97SUV8wWP7/1bXTyFnKzLMZf9/y394zVqIp9ULKZq/51oQyxF3ckMKAFYSRD2D5EI43PjJkSr4g1cbbPUHwLjZCno4N73KCe/4Hz2xF3trOaOEb9b0+WClk/VJerI+8VT/mNgVs3hRWiGcVHMaPDxFfJ/qqHtM4wknRVylapqiiABcTyzUN991AQoEOWL/R2iiQFPDsEKl/lTJ+IgGeqIiGyx6nvf22+Ir4x70kea/wGM7Fxwyl26NIdbuGoQX//wXI7pGSY6D2NGh9ICRbE6X+vZkaOHIqn2zgSirDwmJK86TsOHL34fwTi3UCoQAQYv5LenCDTIFHJKUf73aWxqBud6xOfcaSIaXSgR8OPHmkSUUwIVaSmdxMhcjYMNExIprK3q1MMRLMLDIvbYnzZmvNLe0sCryc3ZsYMRn2zsN4rMVlOGkDTAv/ACokBAADVU+/NCndofQomrp7Epo+b9lZrrzDUwEfhVRtDx1n+4NzMtYW88kZHRBv+/hmDljIK2gGzgPHE8PAa7//GLQsNGFrR6lST7yddpVDz71zebbNDih20wJfKUP4jEu7/B318sMVV6GCeVxdMPuZCh7AJ6cP/KudtOh02Mat1qwuW3cufZpdLMY+PgoYSzywY1wvzq0trrblLPhcHGs5PSc+eByLJOQIY5gyzdmsOO0EjgM8SX0K5x++5mWTV+BSa8BPiJVYHc2ysUcEnygASli4zHWUH12usqGjhdw4SKcytVxN3S2Cc5jRZJ6Txq8XZ/X/pQ4Z16+vNXwdSsMxtvFx4wLmoM98U7Y33Id/uN8IS6sAnOy45QfLL6z4EAALgqgVmlH334EBOrPEVacDzRvv9cUpJ64Mmpvk4QlSBjzMygD+yTp2T0fepPcxv2NtWv9PCNEgIOQ6i/k/aQimcE7m6TgZLytJwrn5gtdZcB1I3NAyuiwyySp+M6N+hm554wV3FaMQ/SKzDG1xC/eWNf0btqe1CQYsOTlUNhKGvf3CgyCDz2WeTwaTSHLUiN1RrPEpSuVqDEyAlMM9mxMRt/zttWXDHJ6JlUDwoPHn0BhNdv4bCdusTtP4tSdtt3OgZWW325cICgwdfbVmsDPboUAAQk4WpgsMqOi53p4hjT410B9qHDEND8XLPuJqDgG7thHCiNwGJMWswYUN9ze4EYNGjOryvvZn3KG+iz+wUGeC52ovDYY+jpV58S9oXOKCTt9G3jW2nEurKeYaqD5U9yIwZS29wH9TKtzZ4YzX/z3YLy/RsVIIa3N5wDouVJTo5T+uxObVWvs5rm6LDvKGvc91V1viz48xfvBkAH9IHciOUPFdxef2+7XM4jh1HOC0y4pLuzsDC3/avJxszmgzuqykor09LaEzB+Mg/kVVlenz92TnwAAA5Le1IimbXscxonIXuNqf5tzO71Q98zEtmhkuNJsCuC3dklxPExW5oCggSoyxy+ij5uBYn4JU/tnlHnzNmAPW6KjabjW6qcy4A51AIKy9rB7wk1twDH8sqUkqslAeyJ2/GkWTSXGt+iH+5TRP3fMapYm1p5861lj5rUEC9NszmgzuqrPV8sRpfMasf3qDLdKf0z/WZyIF0OXP1gLfXqja9Dkzw5pZs0KWxhkGjcOgLaAAC2rq6wAAAAAAA==\"\r\n  /> -->\r\n    <img *ngIf=\"_builder_type==='bootstrap'\" style=\"margin-left: 50px;\" src=\"./assets/images/bootstrap-stack.png\" alt=\"bootstrap form builder\" />\r\n    <img *ngIf=\"_builder_type==='zorro'\" style=\"margin-left: 50px;\" title=\"zorro form builder\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDcuMSAoNDU0MjIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkdyb3VwIDI4IENvcHkgNTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNjIuMTAyMzI3MyUiIHkxPSIwJSIgeDI9IjEwOC4xOTcxOCUiIHkyPSIzNy44NjM1NzY0JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNDI4NUVCIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyRUM3RkYiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2OS42NDQxMTYlIiB5MT0iMCUiIHgyPSI1NC4wNDI4OTc1JSIgeTI9IjEwOC40NTY3MTQlIiBpZD0ibGluZWFyR3JhZGllbnQtMiI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyOUNERkYiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE0OEVGRiIgb2Zmc2V0PSIzNy44NjAwNjg3JSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMEE2MEZGIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNjkuNjkwODE2NSUiIHkxPSItMTIuOTc0MzU4NyUiIHgyPSIxNi43MjI4OTgxJSIgeTI9IjExNy4zOTEyNDglIiBpZD0ibGluZWFyR3JhZGllbnQtMyI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGQTgxNkUiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Y3NEE1QyIgb2Zmc2V0PSI0MS40NzI2MDYlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNTFEMkMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2OC4xMjc5ODcyJSIgeTE9Ii0zNS42OTA1NzM3JSIgeDI9IjMwLjQ0MDA5MTQlIiB5Mj0iMTE0Ljk0MjY3OSUiIGlkPSJsaW5lYXJHcmFkaWVudC00Ij4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZBOEU3RCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjc0QTVDIiBvZmZzZXQ9IjUxLjI2MzUxOTElIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGNTFEMkMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0ibG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwLjAwMDAwMCwgLTIwLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMjgtQ29weS01IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC4wMDAwMDAsIDIwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI3LUNvcHktMyI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTI1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iMiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTEuNTg4MDg2Myw0LjE3NjUyODIzIEw0LjE3OTk2NTQ0LDkxLjUxMjc3MjggQy0wLjUxOTI0MDYwNSw5Ni4yMDgxMTQ2IC0wLjUxOTI0MDYwNSwxMDMuNzkxODg1IDQuMTc5OTY1NDQsMTA4LjQ4NzIyNyBMOTEuNTg4MDg2MywxOTUuODIzNDcyIEM5Ni4yODcyOTIzLDIwMC41MTg4MTQgMTAzLjg3NzMwNCwyMDAuNTE4ODE0IDEwOC41NzY1MSwxOTUuODIzNDcyIEwxNDUuMjI1NDg3LDE1OS4yMDQ2MzIgQzE0OS40MzM5NjksMTU0Ljk5OTYxMSAxNDkuNDMzOTY5LDE0OC4xODE5MjQgMTQ1LjIyNTQ4NywxNDMuOTc2OTAzIEMxNDEuMDE3MDA1LDEzOS43NzE4ODEgMTM0LjE5MzcwNywxMzkuNzcxODgxIDEyOS45ODUyMjUsMTQzLjk3NjkwMyBMMTAyLjIwMTkzLDE3MS43MzczNTIgQzEwMS4wMzIzMDUsMTcyLjkwNjAxNSA5OS4yNTcxNjA5LDE3Mi45MDYwMTUgOTguMDg3NTM1OSwxNzEuNzM3MzUyIEwyOC4yODU5MDgsMTAxLjk5MzEyMiBDMjcuMTE2MjgzMSwxMDAuODI0NDU5IDI3LjExNjI4MzEsOTkuMDUwNzc1IDI4LjI4NTkwOCw5Ny44ODIxMTE4IEw5OC4wODc1MzU5LDI4LjEzNzg4MjMgQzk5LjI1NzE2MDksMjYuOTY5MjE5MSAxMDEuMDMyMzA1LDI2Ljk2OTIxOTEgMTAyLjIwMTkzLDI4LjEzNzg4MjMgTDEyOS45ODUyMjUsNTUuODk4MzMxNCBDMTM0LjE5MzcwNyw2MC4xMDMzNTI4IDE0MS4wMTcwMDUsNjAuMTAzMzUyOCAxNDUuMjI1NDg3LDU1Ljg5ODMzMTQgQzE0OS40MzM5NjksNTEuNjkzMzEgMTQ5LjQzMzk2OSw0NC44NzU2MjMyIDE0NS4yMjU0ODcsNDAuNjcwNjAxOCBMMTA4LjU4MDU1LDQuMDU1NzQ1OTIgQzEwMy44NjIwNDksLTAuNTM3OTg2ODQ2IDk2LjI2OTI2MTgsLTAuNTAwNzk3OTA2IDkxLjU4ODA4NjMsNC4xNzY1MjgyMyBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05MS41ODgwODYzLDQuMTc2NTI4MjMgTDQuMTc5OTY1NDQsOTEuNTEyNzcyOCBDLTAuNTE5MjQwNjA1LDk2LjIwODExNDYgLTAuNTE5MjQwNjA1LDEwMy43OTE4ODUgNC4xNzk5NjU0NCwxMDguNDg3MjI3IEw5MS41ODgwODYzLDE5NS44MjM0NzIgQzk2LjI4NzI5MjMsMjAwLjUxODgxNCAxMDMuODc3MzA0LDIwMC41MTg4MTQgMTA4LjU3NjUxLDE5NS44MjM0NzIgTDE0NS4yMjU0ODcsMTU5LjIwNDYzMiBDMTQ5LjQzMzk2OSwxNTQuOTk5NjExIDE0OS40MzM5NjksMTQ4LjE4MTkyNCAxNDUuMjI1NDg3LDE0My45NzY5MDMgQzE0MS4wMTcwMDUsMTM5Ljc3MTg4MSAxMzQuMTkzNzA3LDEzOS43NzE4ODEgMTI5Ljk4NTIyNSwxNDMuOTc2OTAzIEwxMDIuMjAxOTMsMTcxLjczNzM1MiBDMTAxLjAzMjMwNSwxNzIuOTA2MDE1IDk5LjI1NzE2MDksMTcyLjkwNjAxNSA5OC4wODc1MzU5LDE3MS43MzczNTIgTDI4LjI4NTkwOCwxMDEuOTkzMTIyIEMyNy4xMTYyODMxLDEwMC44MjQ0NTkgMjcuMTE2MjgzMSw5OS4wNTA3NzUgMjguMjg1OTA4LDk3Ljg4MjExMTggTDk4LjA4NzUzNTksMjguMTM3ODgyMyBDMTAwLjk5OTg2NCwyNS42MjcxODM2IDEwNS43NTE2NDIsMjAuNTQxODI0IDExMi43Mjk2NTIsMTkuMzUyNDQ4NyBDMTE3LjkxNTU4NSwxOC40Njg1MjYxIDEyMy41ODUyMTksMjAuNDE0MDIzOSAxMjkuNzM4NTU0LDI1LjE4ODk0MjQgQzEyNS42MjQ2NjMsMjEuMDc4NDI5MiAxMTguNTcxOTk1LDE0LjAzNDAzMDQgMTA4LjU4MDU1LDQuMDU1NzQ1OTIgQzEwMy44NjIwNDksLTAuNTM3OTg2ODQ2IDk2LjI2OTI2MTgsLTAuNTAwNzk3OTA2IDkxLjU4ODA4NjMsNC4xNzY1MjgyMyBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMikiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUzLjY4NTYzMywxMzUuODU0NTc5IEMxNTcuODk0MTE1LDE0MC4wNTk2IDE2NC43MTc0MTIsMTQwLjA1OTYgMTY4LjkyNTg5NCwxMzUuODU0NTc5IEwxOTUuOTU5OTc3LDEwOC44NDI3MjYgQzIwMC42NTkxODMsMTA0LjE0NzM4NCAyMDAuNjU5MTgzLDk2LjU2MzYxMzMgMTk1Ljk2MDUyNyw5MS44Njg4MTk0IEwxNjguNjkwNzc3LDY0LjcxODExNTkgQzE2NC40NzIzMzIsNjAuNTE4MDg1OCAxNTcuNjQ2ODY4LDYwLjUyNDE0MjUgMTUzLjQzNTg5NSw2NC43MzE2NTI2IEMxNDkuMjI3NDEzLDY4LjkzNjY3NCAxNDkuMjI3NDEzLDc1Ljc1NDM2MDcgMTUzLjQzNTg5NSw3OS45NTkzODIxIEwxNzEuODU0MDM1LDk4LjM2MjM3NjUgQzE3My4wMjM2Niw5OS41MzEwMzk2IDE3My4wMjM2NiwxMDEuMzA0NzI0IDE3MS44NTQwMzUsMTAyLjQ3MzM4NyBMMTUzLjY4NTYzMywxMjAuNjI2ODQ5IEMxNDkuNDc3MTUsMTI0LjgzMTg3IDE0OS40NzcxNSwxMzEuNjQ5NTU3IDE1My42ODU2MzMsMTM1Ljg1NDU3OSBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMykiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTQpIiBjeD0iMTAwLjUxOTMzOSIgY3k9IjEwMC40MzY2ODEiIHJ4PSIyMy42MDAxOTI2IiByeT0iMjMuNTgwNzg2Ij48L2VsbGlwc2U+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==\"\r\n    />\r\n</div>\r\n<div class=\"logo-title\"><a href=\"./\" title=\"ng-form-builder\">NgxFormBuilder</a></div>\r\n<ul nz-menu [nzMode]=\"'horizontal'\" [nzTheme]=\"'dark'\" class=\"menu\">\r\n    <li nz-submenu [routerLinkActive]=\"['menu-selected']\">\r\n        <span title> <i class=\"anticon anticon-setting\"></i> Form Type Builder</span>\r\n        <ul>\r\n            <li nz-menu-item [nzSelected]=\"true\" [routerLink]=\"'/zorro'\">Zorro Builder</li>\r\n            <li nz-menu-item [routerLink]=\"'/bootstrap'\">BootStrap Builder</li>\r\n            <li nz-menu-item [nzDisabled]=\"true\">PrimeNG Builder</li>\r\n            <li nz-menu-item [nzDisabled]=\"true\">Ionic Builder</li>\r\n        </ul>\r\n    </li>\r\n    <li nz-menu-item [routerLink]=\"'/dnd'\" [routerLinkActive]=\"['menu-selected']\">\r\n        <span title> <i class=\"anticon anticon-layout\"></i> Drag&Drop</span>\r\n    </li>\r\n    <li nz-menu-item [routerLink]=\"'/document'\" [routerLinkActive]=\"['menu-selected']\">\r\n        <span title> <i class=\"anticon anticon-folder\"></i> Document</span>\r\n        <!-- <ul>\r\n            <li nz-submenu>\r\n                <span title>Form</span>\r\n                <ul>\r\n                    <li nz-menu-item [nzDisabled]=\"true\">How-To Guide</li>\r\n                    <li nz-menu-item [nzDisabled]=\"true\">Api Reference</li>\r\n                </ul>\r\n            </li>\r\n            <li nz-submenu>\r\n                <span title>Other</span>\r\n                <ul>\r\n                    <li nz-menu-item>\r\n                        <a href=\"http://json-schema.org/specification.html\" target=\"_blank\">JSON Schema Specification</a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </ul> -->\r\n    </li>\r\n\r\n    <li nz-menu-item>\r\n        <i class=\"anticon anticon-github\"></i> <a href=\"https://github.com/giscafer/ng-form-builder\" style=\"display:inline;color:#fff;\" target=\"_blank\">Github</a></li>\r\n    <li nz-menu-item>\r\n        <a href=\"https://ng.ant.design\" target=\"_blank\" rel=\"noopener noreferrer\"></a>\r\n    </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/layout/nav/nav.component.scss":
/*!***********************************************!*\
  !*** ./src/app/layout/nav/nav.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu {\n  padding-left: 320px; }\n"

/***/ }),

/***/ "./src/app/layout/nav/nav.component.ts":
/*!*********************************************!*\
  !*** ./src/app/layout/nav/nav.component.ts ***!
  \*********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this._builder_type = 'bootstrap';
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/layout/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/layout/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/pages/bootstrap-form/bootstrap-form.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/bootstrap-form/bootstrap-form.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\">\r\n    <div id=\"code-container\">\r\n        <div id=\"control-panel\">\r\n            <div id=\"code-info\">\r\n                <span class=\"code-type\">JSON</span>\r\n                <span class=\"code-info-time\">{{builderInfo.finishTime}}</span>\r\n                <span [ngClass]=\"{'info':builderInfo.msgType=='info','error':builderInfo.msgType!=='info'}\">{{builderInfo.msg}}</span>\r\n            </div>\r\n            <div class=\"control-btn-panel\">\r\n                <nz-dropdown>\r\n                    <button nz-button nz-dropdown [nzType]=\"'primary'\" class=\"btn btn-default btn-sm\">\r\n                      <span>{{demoName || 'Example Schema'}}</span>\r\n                      <i class=\"anticon anticon-down\"></i>\r\n                    </button>\r\n                    <ul nz-menu>\r\n                        <li nz-menu-item>\r\n                            <a href=\"javascript:;\" title=\"简单例子\" (click)=\"toggleSchema('simple')\">Simple Example</a>\r\n                        </li>\r\n                        <li nz-menu-item>\r\n                            <a href=\"javascript:;\" title=\"其他例子\" (click)=\"toggleSchema('other')\">Simple Example2</a>\r\n                        </li>\r\n                        <li nz-menu-item>\r\n                            <a href=\"javascript:;\" title=\"栅格布局例子\" (click)=\"toggleSchema('grid')\">Grid Layout Example</a>\r\n                        </li>\r\n                        <li nz-menu-item>\r\n                            <a href=\"javascript:;\" title=\"全部 widget 例子\" (click)=\"toggleSchema('full')\">Full Widget Example</a>\r\n                        </li>\r\n                    </ul>\r\n                </nz-dropdown>\r\n                <!-- <a href=\"javascript:;\" (click)=\"toggleSchema()\" title=\"点击切换schema\" class=\"btn btn-default btn-sm\">Test：Toggle schema</a> -->\r\n                <a href=\"javascript:;\" (click)=\"run(editor)\" class=\"btn btn-default btn-sm\" title=\"执行代码\">RUN</a>\r\n            </div>\r\n        </div>\r\n        <div #editor id=\"code-panel\" ace-editor [text]=\"schemaString\" [mode]=\"'json'\" [theme]=\"'chrome'\" [options]=\"aceOptions\" [readOnly]=\"false\" (textChanged)=\"onAceChange($event)\" style=\"display:block; height: 80vh; width:100%\"></div>\r\n    </div>\r\n    <div id=\"h-handler\" class=\"handler\" style=\"left: 40%;\"></div>\r\n    <div id=\"view-container\">\r\n        <div id=\"control-panel\">\r\n            <div class=\"control-btn-panel\">\r\n                <nz-dropdown>\r\n                    <button nz-button nz-dropdown class=\"btn btn-default btn-sm\">\r\n            <span>Save</span>\r\n            <i class=\"anticon anticon-down\"></i>\r\n          </button>\r\n                    <ul nz-menu>\r\n                        <li nz-menu-item>\r\n                            <a href=\"javascript:;\" title=\"下载HTML模板\" (click)=\"copyHTMLCode(1)\">Download HTML</a>\r\n                        </li>\r\n                        <li nz-menu-item>\r\n                            <a href=\"javascript:;\" title=\"复制HTML模板代码\" (click)=\"copyHTMLCode()\">Copy HTML code</a>\r\n                        </li>\r\n                    </ul>\r\n                </nz-dropdown>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <bs-form-builder [schema]=\"schemaJson\" [model]=\"model\" [actions]=\"actions\" (onErrorChange)=\"logErrors($event.value)\" (onChange)=\"setValue($event.value)\" (onBuilderFinish)=\"onBuilderFinish($event)\"></bs-form-builder>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/bootstrap-form/bootstrap-form.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/bootstrap-form/bootstrap-form.component.ts ***!
  \******************************************************************/
/*! exports provided: BootstrapFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapFormComponent", function() { return BootstrapFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var copy_text_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! copy-text-to-clipboard */ "./node_modules/copy-text-to-clipboard/index.js");
/* harmony import */ var copy_text_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(copy_text_to_clipboard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ng_ace_tern__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-ace-tern */ "./node_modules/ng-ace-tern/ng-ace-tern.es5.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _utils_download__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/download */ "./src/app/utils/download.ts");
/* harmony import */ var _utils_formatTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/formatTime */ "./src/app/utils/formatTime.ts");
/* harmony import */ var _utils_setSplitPosition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/setSplitPosition */ "./src/app/utils/setSplitPosition.ts");
/* harmony import */ var _services_startup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/startup.service */ "./src/app/services/startup.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BootstrapFormComponent = /** @class */ (function () {
    function BootstrapFormComponent(_message, service) {
        var _this = this;
        this._message = _message;
        this.service = service;
        // schema
        this.actions = {};
        this.schemaString = '';
        this.schemaJson = {};
        this.count = 1;
        this.builderInfo = {
            msgType: 'info',
            msg: '',
            finishTime: '',
            _startTime: 0,
            _endTime: 0
        };
        // ace
        this.text = 'test';
        this.aceOptions = {
            printMargin: false,
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true
        };
        this.createMessage = function (type, text) {
            _this._message.create(type, "" + text);
        };
        this.subject = this.service.mockChanged.subscribe(function (evt) {
            console.log(evt);
            _this.schemaJson = _this.service.getData('horizontalMockData');
            _this.schemaString = JSON.stringify(_this.schemaJson, null, 4);
        });
        this.builderInfo._startTime = new Date().getTime();
        // 按钮事件注册
        this.actions['alert'] = function (property, options) {
            property.forEachChildRecursive(function (child) {
                console.log(child.valid, child);
            });
            alert(JSON.stringify(_this.value));
        };
        this.actions['reset'] = function (form, options) {
            form.reset();
        };
    }
    BootstrapFormComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            Object(_utils_setSplitPosition__WEBPACK_IMPORTED_MODULE_6__["initSplitEventHandler"])();
        });
    };
    BootstrapFormComponent.prototype.toggleSchema = function (type) {
        switch (type) {
            case 'simple':
                this.demoName = 'Simple Example';
                this.schemaString = JSON.stringify(this.service.getData('personInfoMockData'), null, 4);
                break;
            case 'other':
                this.demoName = 'Simple Example2';
                this.schemaString = JSON.stringify(this.service.getData('otherschemaMockData'), null, 4);
                break;
            case 'grid':
                this.demoName = 'Grid Layout Example';
                this.schemaString = JSON.stringify(this.service.getData('personInfoGridMockData'), null, 4);
                break;
            case 'full':
                this.demoName = 'Full Widget Example';
                this.schemaString = JSON.stringify(this.service.getData('sampleschemaMockData'), null, 4);
                break;
        }
        this.schemaJson = JSON.parse(this.schemaString);
        this.builderInfo._startTime = new Date().getTime();
    };
    BootstrapFormComponent.prototype.setValue = function (value) {
        this.value = value;
    };
    BootstrapFormComponent.prototype.logErrors = function (errors) {
        console.log('ERRORS', errors);
        this.log('页面构建失败，请检查再重试', 'error');
    };
    BootstrapFormComponent.prototype.log = function (text, type) {
        this.builderInfo.finishTime = Object(_utils_formatTime__WEBPACK_IMPORTED_MODULE_5__["formatTime"])(new Date());
        if (type !== 'warn' && type !== 'error') {
            this.builderInfo.msgType = 'info';
        }
        else {
            this.builderInfo.msgType = type;
        }
        this.builderInfo.msg = text;
    };
    BootstrapFormComponent.prototype.onBuilderFinish = function ($event) {
        this.htmlCode = $event.code;
        this.builderInfo._endTime = new Date().getTime();
        this.log("\u9875\u9762\u6784\u5EFA\u5B8C\u6210\uFF0C" + (this.builderInfo._endTime - this.builderInfo._startTime) + "ms", 'info');
    };
    BootstrapFormComponent.prototype.run = function (editor) {
        if (this.hasEditorError()) {
            this.log('编辑器内容有误', 'error');
            return;
        }
        var text = this.editorDirective.editor.getValue();
        this.builderInfo._startTime = new Date().getTime();
        this.schemaJson = JSON.parse(text);
    };
    BootstrapFormComponent.prototype.onAceChange = function (data) {
        console.log('~~~编辑器内容变化~~~');
    };
    BootstrapFormComponent.prototype.copyHTMLCode = function (type) {
        if (type === 1) {
            if ('download' in document.createElement('a')) {
                Object(_utils_download__WEBPACK_IMPORTED_MODULE_4__["funDownload"])(this.htmlCode);
            }
            else {
                return this.createMessage('error', '代码下载失败，请使用 Chrome 浏览器');
            }
            return this.createMessage('success', '文件下载成功！');
        }
        if (copy_text_to_clipboard__WEBPACK_IMPORTED_MODULE_1__(this.htmlCode)) {
            return this.createMessage('success', '代码已经复制到剪贴板！');
        }
        else {
            return this.createMessage('error', '代码复制失败，请使用Chrome浏览器');
        }
    };
    BootstrapFormComponent.prototype.hasEditorError = function () {
        var annotations = this.editorDirective.editor.getSession().getAnnotations();
        for (var aid = 0, alen = annotations.length; aid < alen; ++aid) {
            if (annotations[aid].type === 'error') {
                return true;
            }
        }
        return false;
    };
    BootstrapFormComponent.prototype.ngOnDestroy = function () {
        this.subject.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ng_ace_tern__WEBPACK_IMPORTED_MODULE_2__["AceEditorDirective"]),
        __metadata("design:type", ng_ace_tern__WEBPACK_IMPORTED_MODULE_2__["AceEditorDirective"])
    ], BootstrapFormComponent.prototype, "editorDirective", void 0);
    BootstrapFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bootstrap-form',
            template: __webpack_require__(/*! ./bootstrap-form.component.html */ "./src/app/pages/bootstrap-form/bootstrap-form.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"], _services_startup_service__WEBPACK_IMPORTED_MODULE_7__["StartUpService"]])
    ], BootstrapFormComponent);
    return BootstrapFormComponent;
}());



/***/ }),

/***/ "./src/app/pages/dnd-form/dnd.component.html":
/*!***************************************************!*\
  !*** ./src/app/pages/dnd-form/dnd.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dnd-container\">\r\n    <div class=\"animated-taglines\">\r\n        <h2 class=\"tagline\">\r\n            <span>Drag</span>\r\n            <span>and</span>\r\n            <span>Drop</span>\r\n        </h2>\r\n        <h2 class=\"tagline full-featured\">\r\n            <strong>Full-featured</strong> Form Editing</h2>\r\n    </div>\r\n    <section id=\"main_content\" class=\"inner clearfix\">\r\n        <div class=\"pull-right\" style=\"margin-bottom:10px;\">\r\n            <label class=\"label\">  Gutter :</label>\r\n            <nz-select [(ngModel)]=\"grid.colGutter\" [nzPlaceHolder]=\"''\" name=\"colGutter\" [nzDisabled]=\"grid.colNum==1\">\r\n                <nz-option nzLabel=\"10px\" [nzValue]=\"10\"></nz-option>\r\n                <nz-option nzLabel=\"20px\" [nzValue]=\"20\"></nz-option>\r\n                <nz-option nzLabel=\"30px\" [nzValue]=\"30\"></nz-option>\r\n                <nz-option nzLabel=\"40px\" [nzValue]=\"40\"></nz-option>\r\n            </nz-select>\r\n        </div>\r\n        <div class=\"pull-right\" style=\"margin-bottom:10px;\">\r\n            <label class=\"label\"> Columns :</label>\r\n            <nz-select [(ngModel)]=\"grid.colNum\" [nzPlaceHolder]=\"''\" name=\"colNum\" (ngModelChange)=\"colNumChanged($event)\">\r\n                <nz-option *ngFor=\"let col of colNumList;let i=index;\" [nzLabel]=\"col.label\" [nzValue]=\"col.value\"></nz-option>\r\n            </nz-select>\r\n        </div>\r\n        <!-- form builder -->\r\n        <div class=\"build-form\">\r\n            <div class=\"form-wrap form-builder\">\r\n                <!-- dropping list -->\r\n                <div class=\"stage-wrap pull-right box\" [ngClass]=\"{'empty':grid.colNum==1}\" data-content=\"Drag a field from the right to this area\" id=\"drogbox\">\r\n                    <div nz-row [nzGutter]=\"grid.colGutter\">\r\n                        <ng-container *ngFor=\"let p of dropPanels;let pi=index\">\r\n                            <ul nz-col [nzSpan]=\"[24/grid.colNum]\" class=\"frmb ui-sortable\" style=\"min-height: 508px;\" dnd-sortable-container [sortableData]=\"p.targetList\" (onDropSuccess)=\"addTo($event)\">\r\n                                <li dnd-sortable [sortableIndex]=\"i\" *ngFor=\"let item of p.targetList; let i = index\" class=\"list-group-item\">{{item.label}}</li>\r\n                            </ul>\r\n                        </ng-container>\r\n                    </div>\r\n                </div>\r\n                <!-- drag box -->\r\n                <div class=\"cb-wrap pull-left\" dnd-sortable-container [sortableData]=\"listCtrls\" [dragCopy]=\"true\" id=\"dragbox\">\r\n                    <ul class=\"frmb-control ui-sortable\">\r\n                        <li *ngFor=\"let item of listCtrls; let i = index\" dnd-sortable [sortableIndex]=\"i\" class=\"{{item.icon}} input-control ui-sortable-handle\">\r\n                            <span>{{item.label}}</span>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/dnd-form/dnd.component.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/dnd-form/dnd.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main_content hr,\n.build-form,\n.clearfix:after,\n.render-form {\n  clear: both; }\n\n.dnd-container {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-image: url(\"/assets/images/dnd-background.svg\"), linear-gradient(to bottom, #000, #92278F);\n  background-size: 100% 100%;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-attachment: fixed, scroll; }\n\n.dnd-container .label {\n    color: #fff; }\n\n.dnd-container #main_content {\n    padding: 0 0 30px;\n    margin: 20px auto;\n    max-width: 1280px; }\n\n.dnd-container .animated-taglines {\n    margin: 40px auto; }\n\n.dnd-container .animated-taglines .tagline {\n      color: #fff;\n      text-align: center;\n      font-weight: 100;\n      font-size: 3em; }\n\n.form-wrap.form-builder {\n  position: relative; }\n\n.form-wrap.form-builder * {\n    box-sizing: border-box; }\n\n.form-wrap.form-builder .frmb-control {\n    margin: 0;\n    padding: 0;\n    border-radius: 5px; }\n\n.form-wrap.form-builder .frmb-control li {\n      cursor: move;\n      list-style: none;\n      margin: 0 0 -1px;\n      padding: 10px;\n      text-align: left;\n      background: #fff;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      box-shadow: inset 0 0 0 1px #c5c5c5; }\n\n.form-wrap.form-builder .btn-group {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle; }\n\n.form-wrap.form-builder .form-actions {\n    float: right;\n    margin-top: 5px; }\n\n.form-wrap.form-builder .stage-wrap {\n    vertical-align: top;\n    position: relative;\n    float: left;\n    width: 80%; }\n\n.form-wrap.form-builder .stage-wrap.empty:after {\n      content: attr(data-content);\n      position: absolute;\n      text-align: center;\n      color: #fff;\n      font-size: 16px;\n      top: 50%;\n      left: 0;\n      width: 100%;\n      margin-top: -1em; }\n\n.form-wrap.form-builder .cb-wrap {\n    vertical-align: top;\n    float: right;\n    padding-right: 10px;\n    width: 20%;\n    transition: -webkit-transform .25s;\n    transition: transform .25s;\n    transition: transform .25s, -webkit-transform .25s; }\n\n.form-wrap.form-builder .box .frmb {\n    border: 2px dashed #ccc;\n    background-color: rgba(255, 255, 255, 0.25); }\n\n.form-wrap.form-builder .frmb {\n    list-style-type: none;\n    min-height: 200px;\n    padding: 0;\n    transition: background-color .5s ease-in-out; }\n"

/***/ }),

/***/ "./src/app/pages/dnd-form/dnd.component.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/dnd-form/dnd.component.ts ***!
  \*************************************************/
/*! exports provided: DndComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DndComponent", function() { return DndComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _frmb_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frmb-controls */ "./src/app/pages/dnd-form/frmb-controls.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DndComponent = /** @class */ (function () {
    function DndComponent() {
        this.grid = {
            colNum: 1,
            colGutter: 10
        };
        this.colNumList = _frmb_controls__WEBPACK_IMPORTED_MODULE_1__["ColNumList"];
        this.dropPanels = [];
        this.transferData = { id: 1, label: 'Hello' };
        this.listCtrls = _frmb_controls__WEBPACK_IMPORTED_MODULE_1__["FRMB_CONTROL_LIST"];
        this.targetList = [];
    }
    DndComponent.prototype.ngOnInit = function () {
        this.resetColumns();
    };
    DndComponent.prototype.resetColumns = function () {
        var count = this.grid.colNum;
        var arr = [];
        while (--count >= 0) {
            arr.push({
                targetList: []
            });
        }
        this.dropPanels = arr;
    };
    DndComponent.prototype.addTo = function ($event) {
        // this.targetList.push($event.dragData);
        console.log($event);
    };
    DndComponent.prototype.colNumChanged = function ($event) {
        console.log($event);
        this.resetColumns();
    };
    DndComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dnd',
            template: __webpack_require__(/*! ./dnd.component.html */ "./src/app/pages/dnd-form/dnd.component.html"),
            styles: [__webpack_require__(/*! ./dnd.component.scss */ "./src/app/pages/dnd-form/dnd.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DndComponent);
    return DndComponent;
}());



/***/ }),

/***/ "./src/app/pages/dnd-form/frmb-controls.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/dnd-form/frmb-controls.ts ***!
  \*************************************************/
/*! exports provided: FRMB_CONTROL_LIST, ColNumList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRMB_CONTROL_LIST", function() { return FRMB_CONTROL_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColNumList", function() { return ColNumList; });
var FRMB_CONTROL_LIST = [
    { label: 'Autocomplete', icon: 'icon-autocomplete' },
    { label: 'Button', icon: 'icon-button' },
    { label: 'Checkbox Group', icon: 'icon-checkbox' },
    { label: 'Date Field', icon: 'icon-date' },
    { label: 'File Upload', icon: 'icon-file' },
    { label: 'Header', icon: 'icon-header' },
    { label: 'Hidden Input', icon: 'icon-hidden' },
    { label: 'Paragraph', icon: 'icon-paragraph' },
    { label: 'Number', icon: 'icon-number' },
    { label: 'Radio Group', icon: 'icon-radio' },
    { label: 'Select', icon: 'icon-select' },
    { label: 'Text Field', icon: 'icon-text' },
    { label: 'Text Area', icon: 'icon-textarea' },
];
var ColNumList = [
    { label: '1 column', value: 1 },
    { label: '2 columns', value: 2 },
    { label: '3 columns', value: 3 },
    { label: '4 columns', value: 4 },
    { label: '6 columns', value: 6 }
];


/***/ }),

/***/ "./src/app/pages/zorro-form/yapi.service.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/zorro-form/yapi.service.ts ***!
  \**************************************************/
/*! exports provided: YapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YapiService", function() { return YapiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _utils_promiseHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/promiseHandler */ "./src/app/utils/promiseHandler.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var stripJsonComments = __webpack_require__(/*! strip-json-comments */ "./node_modules/strip-json-comments/index.js");
var YapiService = /** @class */ (function () {
    function YapiService(http, msg) {
        this.http = http;
        this.msg = msg;
        this.BASEURL = 'https://yapi.1ziton.com';
        this.loginUrl = this.BASEURL + '/api/user/login';
    }
    /* 登录yapi 获取session */
    YapiService.prototype.login = function (_a) {
        var email = _a.email, password = _a.password;
        this.http.post(this.loginUrl, {
            email: email,
            password: password
        }).subscribe(function (json) {
            console.log(json);
        });
    };
    /* 获取接口信息 */
    YapiService.prototype.getInterfaceInfo = function (_a) {
        var _this = this;
        var url = _a.url, token = _a.token;
        var arr = url.split('/');
        var interfaceId = arr[arr.length - 1];
        if (isNaN(Number(interfaceId))) {
            this.msg.error('请输入正确的yapi接口url地址');
            return;
        }
        url = this.BASEURL + "/api/interface/get?id=" + interfaceId;
        return new Promise(function (resolve, reject) {
            _this.http.get(url, { params: { token: token } }).subscribe(function (json) {
                console.log(json);
                return resolve(json);
            }, function (err) { return reject(err); });
        });
    };
    /*根据接口生成json schema*/
    YapiService.prototype.genSchemaByInterface = function (qryParams) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err, result, errmsg, data, req_query, res_body, properties, tableProperties;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Object(_utils_promiseHandler__WEBPACK_IMPORTED_MODULE_2__["promiseHandler"])(this.getInterfaceInfo(qryParams))];
                    case 1:
                        _a = _b.sent(), err = _a[0], result = _a[1];
                        if (err || !result) {
                            this.msg.error(err);
                            return [2 /*return*/, null];
                        }
                        if (result.errcode !== 0) {
                            errmsg = result.errmsg.indexOf('请登录') !== -1 ? 'token值不正确，请确认' : result.errmsg;
                            this.msg.error(errmsg, { nzDuration: 3000 });
                            return [2 /*return*/, null];
                        }
                        data = result.data;
                        req_query = data.req_query, res_body = data.res_body;
                        properties = this.queryParamsToProperties(req_query);
                        tableProperties = {};
                        try {
                            tableProperties = this.tableProperties(JSON.parse(stripJsonComments(res_body)));
                        }
                        catch (e) {
                            this.msg.error('json格式化出错，请检查接口返回值json格式');
                        }
                        return [2 /*return*/, this.gridSchema(properties, tableProperties)];
                }
            });
        });
    };
    /* 根据req_query 参数生成查询表单 */
    YapiService.prototype.queryParamsToProperties = function (req_query) {
        var qryProperties = {};
        for (var _i = 0, req_query_1 = req_query; _i < req_query_1.length; _i++) {
            var item = req_query_1[_i];
            qryProperties[item.name] = {
                "type": "string",
                "title": item.desc,
                "default": item.example
            };
        }
        return qryProperties;
    };
    /* 根据req_body来生成表格 */
    YapiService.prototype.tableProperties = function (res_body) {
        var tableProperties = {};
        var content = [];
        // 兼容后端几种格式
        if (res_body.content && res_body.content.content && res_body.content.content.length) {
            content = res_body.content.content;
        }
        else if (res_body.content && res_body.content.length) {
            content = res_body.content;
        }
        else if (res_body.result && res_body.result.content && res_body.result.content.length) {
            content = res_body.result.content;
        }
        else if (res_body.result && res_body.result.length) {
            content = res_body.result;
        }
        else {
            content = [{}];
            this.msg.error('该接口不是列表接口！', { nzDuration: 4000 });
        }
        var columnsHeader = [];
        var columns = Object.keys(content[0]);
        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
            var c = columns_1[_i];
            if (c !== 'id' && c !== '_id') {
                columnsHeader.push(c + "-" + c + "-100px");
            }
        }
        tableProperties['columns'] = columnsHeader;
        tableProperties['data'] = content;
        return tableProperties;
    };
    YapiService.prototype.gridSchema = function (properties, tableProperties) {
        var baseSchema = {
            "debug": "true",
            "modelName": "qryParams",
            "fileName": "tableDemo",
            "grid": {
                "xs": {
                    "span": 24
                },
                "sm": {
                    "span": 24
                },
                "md": {
                    "span": 12
                },
                "lg": {
                    "span": 8
                },
                "xl": {
                    "span": 8
                },
                "xxl": {
                    "span": 8
                },
                "col_gutter": 10,
                "span_label": 8,
                "span_control": 15
            },
            "properties": {},
            "table": {},
            "button": {
                "grid": {
                    "md": {
                        "offset": 20,
                        "span": 4
                    }
                },
                "items": [
                    {
                        "label": "查询",
                        "id": "query",
                        "type": "primary",
                        "submit": true
                    },
                    {
                        "label": "清空",
                        "id": "reset"
                    }
                ]
            }
        };
        baseSchema['properties'] = properties;
        baseSchema['table'] = tableProperties;
        return baseSchema;
    };
    YapiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])
    ], YapiService);
    return YapiService;
}());



/***/ }),

/***/ "./src/app/pages/zorro-form/zorro-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/zorro-form/zorro-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\">\r\n    <div id=\"code-container\">\r\n        <div id=\"control-panel\">\r\n            <div id=\"code-info\">\r\n                <span class=\"code-type\">JSON</span>\r\n                <span class=\"code-info-time\">{{builderInfo.finishTime}}</span>\r\n                <span [ngClass]=\"{'info':builderInfo.msgType=='info','error':builderInfo.msgType!=='info'}\">{{builderInfo.msg}}</span>\r\n            </div>\r\n            <div class=\"control-btn-panel\">\r\n                <nz-dropdown>\r\n                    <button nz-button nz-dropdown [nzType]=\"'primary'\" class=\"btn btn-default btn-sm\">\r\n                        <span>{{demoName}}</span>\r\n                        <i class=\"anticon anticon-down\"></i>\r\n                    </button>\r\n                    <ul nz-menu>\r\n                        <li nz-menu-item>\r\n                            <a href=\"javascript:;\" title=\"水平布局\" (click)=\"toggleSchema('horizontal-layout')\">Horizontal Layout Example</a>\r\n                        </li>\r\n                        <li nz-menu-item>\r\n                            <a href=\"javascript:;\" title=\"垂直布局\" (click)=\"toggleSchema('vertical-layout')\">Vertical Layout Example</a>\r\n                        </li>\r\n                        <li nz-menu-item>\r\n                            <a href=\"javascript:;\" title=\"注册Form 表单\" (click)=\"toggleSchema('register-form')\">Register Form</a>\r\n                        </li>\r\n                        <li nz-menu-item>\r\n                            <a href=\"javascript:;\" title=\"栅格布局例子\" (click)=\"toggleSchema('layout')\">Grid Layout Example</a>\r\n                        </li>\r\n                        <li nz-menu-item>\r\n                            <a href=\"javascript:;\" title=\"列表查询例子\" (click)=\"toggleSchema('table')\">Table Example</a>\r\n                        </li>\r\n                        <li nz-menu-item>\r\n                            <a href=\"javascript:;\" title=\"Fieldsets 例子\" (click)=\"toggleSchema('other')\">Fieldsets Example</a>\r\n                        </li>\r\n                        <li nz-menu-item>\r\n                            <a href=\"javascript:;\" title=\"全部 widget 例子\" (click)=\"toggleSchema('full')\">Full Widget Example</a>\r\n                        </li>\r\n                        <li nz-menu-item>\r\n                            <a href=\"javascript:;\" title=\"Yapi列表自动生成\" (click)=\"toggleSchema('yapi')\">Yapi 列表自动生成</a>\r\n                        </li>\r\n                    </ul>\r\n                </nz-dropdown>\r\n                <!-- <a href=\"javascript:;\" (click)=\"toggleSchema()\" title=\"点击切换schema\" class=\"btn btn-default btn-sm\">Test：Toggle schema</a> -->\r\n                <a href=\"javascript:;\" (click)=\"run(editor)\" class=\"btn btn-default btn-sm\" title=\"执行代码\">RUN</a>\r\n            </div>\r\n        </div>\r\n        <div #editor id=\"code-panel\" ace-editor [text]=\"schemaString\" [mode]=\"'json'\" [theme]=\"'chrome'\" [options]=\"aceOptions\" [readOnly]=\"false\" (textChanged)=\"onAceChange($event)\" style=\"display:block; height: 90vh; width:100%\"></div>\r\n    </div>\r\n    <div id=\"h-handler\" class=\"handler\" style=\"left: 40%;\"></div>\r\n    <div id=\"view-container\">\r\n        <div id=\"control-panel\">\r\n            <div class=\"control-btn-panel\">\r\n                <button nz-button nzType=\"primary\" class=\"btn btn-default btn-sm\" (click)=\"viewCode()\">\r\n                    <span>View Code</span>\r\n                </button>\r\n                <nz-dropdown>\r\n                    <button nz-button nz-dropdown nzType=\"primary\" class=\"btn btn-default btn-sm\">\r\n                        <span>Copy / Download</span>\r\n                        <i class=\"anticon anticon-down\"></i>\r\n                        </button>\r\n                    <ul nz-menu>\r\n                        <li nz-menu-item>\r\n                            <a href=\"javascript:;\" title=\"下载HTML模板\" (click)=\"copyCode(1)\">Download HTML</a>\r\n                        </li>\r\n                        <li nz-menu-item>\r\n                            <a href=\"javascript:;\" title=\"复制HTML模板代码\" (click)=\"copyCode(2)\">Copy HTML code</a>\r\n                        </li>\r\n                        <li nz-menu-item>\r\n                            <a href=\"javascript:;\" title=\"下载HTML模板\" (click)=\"copyCode(1,'ts')\">Download TypeScript</a>\r\n                        </li>\r\n                        <li nz-menu-item>\r\n                            <a href=\"javascript:;\" title=\"复制HTML模板代码\" (click)=\"copyCode(2,'ts')\">Copy TypeScript code</a>\r\n                        </li>\r\n                    </ul>\r\n                </nz-dropdown>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <div style=\"height: 90vh;padding: 24px;background: inherit;overflow-y: auto;\">\r\n            <zorro-form-builder [schema]=\"schemaJson\" [model]=\"model\" [actions]=\"actions\" (onErrorChange)=\"logErrors($event.value)\" (onChange)=\"setValue($event.value)\" (onBuilderFinish)=\"onBuilderFinish($event)\"></zorro-form-builder>\r\n        </div>\r\n    </div>\r\n</div>\r\n<code-slider [(show)]=\"showCode\" *ngIf=\"showCode\" [htmlCode]=\"htmlCode\" [fileNames]=\"fileNames\" [jsCode]=\"componentCode\"></code-slider>"

/***/ }),

/***/ "./src/app/pages/zorro-form/zorro-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/zorro-form/zorro-form.component.ts ***!
  \**********************************************************/
/*! exports provided: ZorroFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZorroFormComponent", function() { return ZorroFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var copy_text_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! copy-text-to-clipboard */ "./node_modules/copy-text-to-clipboard/index.js");
/* harmony import */ var copy_text_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(copy_text_to_clipboard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ng_ace_tern__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-ace-tern */ "./node_modules/ng-ace-tern/ng-ace-tern.es5.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _services_startup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/startup.service */ "./src/app/services/startup.service.ts");
/* harmony import */ var _utils_download__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/download */ "./src/app/utils/download.ts");
/* harmony import */ var _utils_formatTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/formatTime */ "./src/app/utils/formatTime.ts");
/* harmony import */ var _utils_setSplitPosition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/setSplitPosition */ "./src/app/utils/setSplitPosition.ts");
/* harmony import */ var _yapi_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./yapi.service */ "./src/app/pages/zorro-form/yapi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ZorroFormComponent = /** @class */ (function () {
    function ZorroFormComponent(_message, service, yapiSrv) {
        var _this = this;
        this._message = _message;
        this.service = service;
        this.yapiSrv = yapiSrv;
        // schema
        this.actions = {};
        this.fileNames = {
            htmlFileName: '',
            compFileName: ''
        };
        this.schemaString = '';
        this.count = 1;
        this.builderInfo = {
            msgType: 'info',
            msg: '',
            finishTime: '',
            _startTime: 0,
            _endTime: 0
        };
        this.demoName = 'Horizontal Layout Example';
        // ace
        this.text = 'test';
        this.aceOptions = {
            printMargin: false,
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true
        };
        this.showCode = false;
        this.createMessage = function (type, text) {
            _this._message.create(type, "" + text);
        };
        this.subject = this.service.mockChanged.subscribe(function (evt) {
            _this.schemaJson = _this.service.getData('horizontalMockData');
            _this.schemaString = JSON.stringify(_this.schemaJson, null, 4);
        });
        this.builderInfo._startTime = new Date().getTime();
        // 按钮事件注册
        this.actions['alert'] = function (property, options) {
            property.forEachChildRecursive(function (child) {
                console.log(child.valid, child);
            });
            alert(JSON.stringify(_this.value));
        };
        this.actions['reset'] = function (form, options) {
            form.reset();
        };
    }
    ZorroFormComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            Object(_utils_setSplitPosition__WEBPACK_IMPORTED_MODULE_7__["initSplitEventHandler"])();
        });
    };
    ZorroFormComponent.prototype.toggleSchema = function (type) {
        this.demoType = type;
        switch (type) {
            case 'horizontal-layout':
                this.demoName = 'Horizontal Layout Example';
                this.schemaString = JSON.stringify(this.service.getData('horizontalMockData'), null, 4);
                break;
            case 'vertical-layout':
                this.demoName = 'Vertical Layout Example';
                this.schemaString = JSON.stringify(this.service.getData('verticalMockData'), null, 4);
                break;
            case 'register-form':
                this.demoName = 'Register Form';
                this.schemaString = JSON.stringify(this.service.getData('registerFormMockData'), null, 4);
                break;
            case 'simple':
                this.demoName = 'Simple Example';
                this.schemaString = JSON.stringify(this.service.getData('personInfoMockData'), null, 4);
                break;
            case 'other':
                this.demoName = 'Simple Example2';
                this.schemaString = JSON.stringify(this.service.getData('otherschemaMockData'), null, 4);
                break;
            case 'layout':
                this.demoName = 'Grid Layout Example';
                this.schemaString = JSON.stringify(this.service.getData('zorroGridMockData'), null, 4);
                break;
            case 'table':
                this.demoName = 'Table Example';
                this.schemaString = JSON.stringify(this.service.getData('tableMockData'), null, 4);
                break;
            case 'full':
                this.demoName = 'Full Widget Example';
                this.schemaString = JSON.stringify(this.service.getData('zorroFullWidgetMockData'), null, 4);
                break;
            case 'yapi':
                this.demoName = 'Yapi 列表自动生成';
                this.schemaString = JSON.stringify(this.service.getData('yapiMockData'), null, 4);
                break;
        }
        this.schemaJson = JSON.parse(this.schemaString);
        this.builderInfo._startTime = new Date().getTime();
    };
    ZorroFormComponent.prototype.setValue = function (value) {
        this.value = value;
    };
    ZorroFormComponent.prototype.logErrors = function (errors) {
        console.log('ERRORS', errors);
        this.log('build failed，try again', 'error');
    };
    ZorroFormComponent.prototype.log = function (text, type) {
        this.builderInfo.finishTime = Object(_utils_formatTime__WEBPACK_IMPORTED_MODULE_6__["formatTime"])(new Date());
        if (type !== 'warn' && type !== 'error') {
            this.builderInfo.msgType = 'info';
        }
        else {
            this.builderInfo.msgType = type;
        }
        this.builderInfo.msg = text;
    };
    ZorroFormComponent.prototype.onBuilderFinish = function ($event) {
        this.htmlCode = $event.htmlCode;
        this.componentCode = $event.componentCode;
        this.fileNames = $event.fileNames;
        this.builderInfo._endTime = new Date().getTime();
        this.log("build success\uFF0C" + (this.builderInfo._endTime - this.builderInfo._startTime) + "ms", 'info');
    };
    ZorroFormComponent.prototype.run = function (editor) {
        var _this = this;
        if (this.hasEditorError()) {
            this.log('json error', 'error');
            return;
        }
        var text = this.editorDirective.editor.getValue();
        this.builderInfo._startTime = new Date().getTime();
        if (this.demoType === 'yapi') {
            var json_1 = JSON.parse(text);
            var keys = Object.keys(json_1);
            if (!keys.includes('token')) {
                this._message.warning('请填写授权访问项目的token串');
                return;
            }
            if (!keys.includes('url')) {
                this._message.warning('请输入YAPI的接口url');
                return;
            }
            this.yapiSrv.genSchemaByInterface(json_1).then(function (schema) {
                console.log(schema);
                if (!schema) {
                    _this._message.error('获取接口信息错误！');
                    return;
                }
                schema['tableComponent'] = json_1.tableComponent || 'nz-table';
                _this.schemaJson = schema;
            });
            return;
        }
        this.schemaJson = JSON.parse(text);
    };
    ZorroFormComponent.prototype.onAceChange = function (data) {
        console.log('~~~编辑器内容变化~~~');
    };
    ZorroFormComponent.prototype.copyCode = function (type, codeType) {
        var flag = codeType === 'ts';
        if (type === 1) {
            if ('download' in document.createElement('a')) {
                Object(_utils_download__WEBPACK_IMPORTED_MODULE_5__["funDownload"])(flag ? this.componentCode : this.htmlCode, flag ? this.fileNames.compFileName : this.fileNames.htmlFileName);
            }
            else {
                return this.createMessage('error', '代码下载失败，请使用 Chrome 浏览器');
            }
            return this.createMessage('success', '文件下载成功！');
        }
        var result = false;
        if (flag) {
            result = copy_text_to_clipboard__WEBPACK_IMPORTED_MODULE_1__(this.componentCode);
        }
        else {
            result = copy_text_to_clipboard__WEBPACK_IMPORTED_MODULE_1__(this.htmlCode);
        }
        if (result) {
            return this.createMessage('success', '代码已经复制到剪贴板！');
        }
        else {
            return this.createMessage('error', '代码复制失败，请使用Chrome浏览器');
        }
    };
    ZorroFormComponent.prototype.viewCode = function () {
        this.showCode = true;
    };
    ZorroFormComponent.prototype.hasEditorError = function () {
        var annotations = this.editorDirective.editor.getSession().getAnnotations();
        for (var aid = 0, alen = annotations.length; aid < alen; ++aid) {
            if (annotations[aid].type === 'error') {
                return true;
            }
        }
        return false;
    };
    ZorroFormComponent.prototype.ngOnDestroy = function () {
        this.subject.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ng_ace_tern__WEBPACK_IMPORTED_MODULE_2__["AceEditorDirective"]),
        __metadata("design:type", ng_ace_tern__WEBPACK_IMPORTED_MODULE_2__["AceEditorDirective"])
    ], ZorroFormComponent.prototype, "editorDirective", void 0);
    ZorroFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-zorro-form',
            template: __webpack_require__(/*! ./zorro-form.component.html */ "./src/app/pages/zorro-form/zorro-form.component.html"),
            styleUrls: [],
            viewProviders: [_yapi_service__WEBPACK_IMPORTED_MODULE_8__["YapiService"],]
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            _services_startup_service__WEBPACK_IMPORTED_MODULE_4__["StartUpService"],
            _yapi_service__WEBPACK_IMPORTED_MODULE_8__["YapiService"]])
    ], ZorroFormComponent);
    return ZorroFormComponent;
}());



/***/ }),

/***/ "./src/app/services/builder-service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/builder-service.ts ***!
  \*********************************************/
/*! exports provided: BuilderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderService", function() { return BuilderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BuilderService = /** @class */ (function () {
    function BuilderService() {
        this.builderChanged = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    BuilderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BuilderService);
    return BuilderService;
}());



/***/ }),

/***/ "./src/app/services/startup.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/startup.service.ts ***!
  \*********************************************/
/*! exports provided: StartUpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartUpService", function() { return StartUpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StartUpService = /** @class */ (function () {
    function StartUpService(httpClient) {
        this.httpClient = httpClient;
        this.mockData = {};
        this.mockChanged = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    StartUpService.prototype.initData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["zip"])(_this.httpClient.get('./mock/horizontal-layout.json'), _this.httpClient.get('./mock/vertical-layout.json'), _this.httpClient.get('./mock/person-info.json'), _this.httpClient.get('./mock/person-info-grid.json'), _this.httpClient.get('./mock/otherschema.json'), _this.httpClient.get('./mock/sampleschema.json'), _this.httpClient.get('./mock/zorro-layout.json'), _this.httpClient.get('./mock/zorro-full-widget.json'), _this.httpClient.get('./mock/register-form.json'), _this.httpClient.get('./mock/zorro-table.json'), _this.httpClient.get('./mock/yapi.json')).pipe(
            // 接收其他拦截器后产生的异常消息
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (_a) {
                var langData = _a[0], appData = _a[1];
                resolve(null);
                return [langData, appData];
            })).subscribe(function (_a) {
                var horizontalMockData = _a[0], verticalMockData = _a[1], personInfoMockData = _a[2], personInfoGridMockData = _a[3], otherschemaMockData = _a[4], sampleschemaMockData = _a[5], zorroGridMockData = _a[6], zorroFullWidgetMockData = _a[7], registerFormMockData = _a[8], tableMockData = _a[9], yapiMockData = _a[10];
                Object.assign(_this.mockData, {
                    horizontalMockData: horizontalMockData,
                    verticalMockData: verticalMockData,
                    personInfoMockData: personInfoMockData,
                    personInfoGridMockData: personInfoGridMockData,
                    otherschemaMockData: otherschemaMockData,
                    sampleschemaMockData: sampleschemaMockData,
                    zorroGridMockData: zorroGridMockData,
                    zorroFullWidgetMockData: zorroFullWidgetMockData,
                    registerFormMockData: registerFormMockData,
                    tableMockData: tableMockData,
                    yapiMockData: yapiMockData,
                });
                // console.log(this.mockData);
            }, function (err) { reject(err); }, function () {
                resolve(null);
            });
        });
    };
    StartUpService.prototype.getData = function (type) {
        return this.mockData[type];
    };
    StartUpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], StartUpService);
    return StartUpService;
}());



/***/ }),

/***/ "./src/app/shared/components/code-slider/code-slider.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/code-slider/code-slider.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [class.hide]=\"hide\" [class.show]=\"show\">\r\n    <img class=\"collapse\" src=\"./assets/images/close-r.png\" alt=\"折叠\" title=\"折叠\" (click)=\"collapse()\" />\r\n    <nz-row>\r\n        <nz-col>\r\n            <h3>Generated Code</h3>\r\n        </nz-col>\r\n        <nz-col>\r\n            <div class=\"code-box-actions\">\r\n                <nz-tooltip [nzTitle]=\"'Edit On StackBlitz'\" nzPlacement=\"right\">\r\n                    <div style=\"cursor: pointer; width: 22px;\" title=\"Edit in StackBlitz\" (click)=\"openOnStackBlitz()\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 184.4 150.8\">\r\n                            <g>\r\n                                <path d=\"M119.8.3L49 76.1h37l-21.3 53.4 70.8-75.8H98.3z\" />\r\n                                <path d=\"M123 4l-8.8 21 40 40-34.4 34.7v29.8L184.2 65zM64.7.3v29.8L30.2 65l40 39.8-8.7 21.3L.2 65z\" />\r\n                            </g>\r\n                        </svg>\r\n                    </div>\r\n                </nz-tooltip>\r\n                <nz-tooltip [nzTitle]=\"'Copy Generate Command'\" *ngIf=\"nzGenerateCommand\" nzPlacement=\"right\">\r\n                    <i nz-tooltip class=\"anticon anticon-code-o code-box-code-copy\" [class.anticon-code-o]=\"!_commandCopied\" [class.anticon-check]=\"_commandCopied\" [class.ant-tooltip-open]=\"_commandCopied\" (click)=\"copyGenerateCommand(nzGenerateCommand)\"></i>\r\n                </nz-tooltip>\r\n            </div>\r\n        </nz-col>\r\n    </nz-row>\r\n    <nz-tabset>\r\n        <nz-tab nzTitle=\"HTML ({{fileNames.htmlFileName}})\">\r\n            <pre class=\"code\"><code highlight [code]=\"htmlCode\" [language]=\"['HTML']\" (highlighted)=\"onHighlight($event)\"></code></pre>\r\n        </nz-tab>\r\n        <nz-tab nzTitle=\"TypeScript ({{fileNames.compFileName}})\" style=\"overflow-y: auto\">\r\n            <pre class=\"code\"><code highlight [code]=\"jsCode\" [language]=\"['TypeScript']\" (highlighted)=\"onHighlight($event)\"></code></pre>\r\n        </nz-tab>\r\n    </nz-tabset>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/code-slider/code-slider.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/code-slider/code-slider.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes show {\n  0% {\n    right: -1000px; }\n  100% {\n    right: 0px; } }\n\n@keyframes show {\n  0% {\n    right: -1000px; }\n  100% {\n    right: 0px; } }\n\n@-webkit-keyframes hide {\n  0% {\n    right: 0; }\n  100% {\n    right: -1000px; } }\n\n@keyframes hide {\n  0% {\n    right: 0; }\n  100% {\n    right: -1000px; } }\n\n.container {\n  position: fixed;\n  width: 50%;\n  height: 100%;\n  background: #fff;\n  z-index: 1000;\n  border: solid 1px #eee;\n  box-shadow: -3px 0px 3px #e5e4e4; }\n\n.container .collapse {\n    position: absolute;\n    display: inline-block;\n    left: 0;\n    top: 50%;\n    margin-top: -60px;\n    height: 100px;\n    width: 12px;\n    height: 78px;\n    cursor: pointer; }\n\n.container.show {\n    -webkit-animation: show 0.5s ease-in;\n            animation: show 0.5s ease-in;\n    right: 0px; }\n\n.container.hide {\n    -webkit-animation: hide 0.5s ease-out;\n            animation: hide 0.5s ease-out;\n    right: -1000px; }\n\n.container .code {\n    height: 80vh;\n    overflow-y: auto; }\n\n.container h3 {\n    display: inline-block; }\n\n.container .code-box-actions {\n    display: inline-block;\n    margin-left: 30px; }\n"

/***/ }),

/***/ "./src/app/shared/components/code-slider/code-slider.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/code-slider/code-slider.component.ts ***!
  \************************************************************************/
/*! exports provided: CodeSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSliderComponent", function() { return CodeSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stackblitz_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stackblitz/sdk */ "./node_modules/@stackblitz/sdk/bundles/sdk.m.js");
/**
 * @author: giscafer ,https://github.com/giscafer
 * @date: 2018-07-02 15:15:03
 * @description:
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CodeSliderComponent = /** @class */ (function () {
    function CodeSliderComponent() {
        this.hide = false;
        this._show = false;
        this.showChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fileNames = {
            selector: "",
            htmlFileName: "",
            compClassName: "",
            compFileName: ""
        };
        this.htmlCode = " ";
        this.jsCode = " ";
    }
    Object.defineProperty(CodeSliderComponent.prototype, "show", {
        get: function () {
            return this._show;
        },
        set: function (v) {
            this._show = v;
        },
        enumerable: true,
        configurable: true
    });
    CodeSliderComponent.prototype.ngOnInit = function () {
    };
    CodeSliderComponent.prototype.collapse = function () {
        var _this = this;
        this.hide = true;
        setTimeout(function () {
            _this.show = false;
            _this.showChange.emit(_this.show);
        }, 1000);
    };
    CodeSliderComponent.prototype.onHighlight = function (e) {
        this.response = {
            language: e.language,
            r: e.r,
            second_best: '{...}',
            top: '{...}',
            value: '{...}'
        };
    };
    /** bug here https://github.com/stackblitz/core/issues/311 **/
    CodeSliderComponent.prototype.openOnStackBlitz = function () {
        _stackblitz_sdk__WEBPACK_IMPORTED_MODULE_1__["default"].openProject({
            files: (_a = {
                    'angular.json': "{\n    \"$schema\": \"./node_modules/@angular/cli/lib/config/schema.json\",\n    \"version\": 1,\n    \"newProjectRoot\": \"projects\",\n    \"projects\": {\n      \"demo\": {\n        \"root\": \"\",\n        \"sourceRoot\": \"src\",\n        \"projectType\": \"application\",\n        \"prefix\": \"app\",\n        \"schematics\": {},\n        \"architect\": {\n          \"build\": {\n            \"builder\": \"@angular-devkit/build-angular:browser\",\n            \"options\": {\n              \"outputPath\": \"dist/demo\",\n              \"index\": \"src/index.html\",\n              \"main\": \"src/main.ts\",\n              \"polyfills\": \"src/polyfills.ts\",\n              \"tsConfig\": \"src/tsconfig.app.json\",\n              \"assets\": [\n                \"src/favicon.ico\",\n                \"src/assets\"\n              ],\n              \"styles\": [\n                \"node_modules/ng-zorro-antd/src/ng-zorro-antd.min.css\",\n                \"src/styles.css\"\n              ],\n              \"scripts\": []\n            },\n            \"configurations\": {\n              \"production\": {\n                \"fileReplacements\": [\n                  {\n                    \"replace\": \"src/environments/environment.ts\",\n                    \"with\": \"src/environments/environment.prod.ts\"\n                  }\n                ],\n                \"optimization\": true,\n                \"outputHashing\": \"all\",\n                \"sourceMap\": false,\n                \"extractCss\": true,\n                \"namedChunks\": false,\n                \"aot\": true,\n                \"extractLicenses\": true,\n                \"vendorChunk\": false,\n                \"buildOptimizer\": true\n              }\n            }\n          },\n          \"serve\": {\n            \"builder\": \"@angular-devkit/build-angular:dev-server\",\n            \"options\": {\n              \"browserTarget\": \"demo:build\"\n            },\n            \"configurations\": {\n              \"production\": {\n                \"browserTarget\": \"demo:build:production\"\n              }\n            }\n          },\n          \"extract-i18n\": {\n            \"builder\": \"@angular-devkit/build-angular:extract-i18n\",\n            \"options\": {\n              \"browserTarget\": \"demo:build\"\n            }\n          },\n          \"test\": {\n            \"builder\": \"@angular-devkit/build-angular:karma\",\n            \"options\": {\n              \"main\": \"src/test.ts\",\n              \"polyfills\": \"src/polyfills.ts\",\n              \"tsConfig\": \"src/tsconfig.spec.json\",\n              \"karmaConfig\": \"src/karma.conf.js\",\n              \"styles\": [\n                \"styles.css\"\n              ],\n              \"scripts\": [],\n              \"assets\": [\n                \"src/favicon.ico\",\n                \"src/assets\"\n              ]\n            }\n          },\n          \"lint\": {\n            \"builder\": \"@angular-devkit/build-angular:tslint\",\n            \"options\": {\n              \"tsConfig\": [\n                \"src/tsconfig.app.json\",\n                \"src/tsconfig.spec.json\"\n              ],\n              \"exclude\": [\n                \"**/node_modules/**\"\n              ]\n            }\n          }\n        }\n      },\n      \"demo-e2e\": {\n        \"root\": \"e2e/\",\n        \"projectType\": \"application\",\n        \"architect\": {\n          \"e2e\": {\n            \"builder\": \"@angular-devkit/build-angular:protractor\",\n            \"options\": {\n              \"protractorConfig\": \"e2e/protractor.conf.js\",\n              \"devServerTarget\": \"demo:serve\"\n            }\n          },\n          \"lint\": {\n            \"builder\": \"@angular-devkit/build-angular:tslint\",\n            \"options\": {\n              \"tsConfig\": \"e2e/tsconfig.e2e.json\",\n              \"exclude\": [\n                \"**/node_modules/**\"\n              ]\n            }\n          }\n        }\n      }\n    },\n    \"defaultProject\": \"demo\"\n  }",
                    'src/index.html': "<" + this.fileNames.selector + ">loading</" + this.fileNames.selector + ">"
                },
                _a["src/app/" + this.fileNames.htmlFileName] = this.htmlCode,
                _a['src/main.ts'] = "import './polyfills';\n  \n  import { enableProdMode } from '@angular/core';\n  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';\n  \n  import { AppModule } from './app/app.module';\n  \n  platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {\n    // Ensure Angular destroys itself on hot reloads.\n    if (window['ngRef']) {\n      window['ngRef'].destroy();\n    }\n    window['ngRef'] = ref;\n  \n    // Otherwise, log the boot error\n  }).catch(err => console.error(err));",
                _a['src/polyfills.ts'] = "/**\n   * This file includes polyfills needed by Angular and is loaded before the app.\n   * You can add your own extra polyfills to this file.\n   *\n   * This file is divided into 2 sections:\n   *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.\n   *   2. Application imports. Files imported after ZoneJS that should be loaded before your main\n   *      file.\n   *\n   * The current setup is for so-called \"evergreen\" browsers; the last versions of browsers that\n   * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),\n   * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.\n   *\n   * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html\n   */\n  \n  /***************************************************************************************************\n   * BROWSER POLYFILLS\n   */\n  \n  /** IE9, IE10 and IE11 requires all of the following polyfills. **/\n  // import 'core-js/es6/symbol';\n  // import 'core-js/es6/object';\n  // import 'core-js/es6/function';\n  // import 'core-js/es6/parse-int';\n  // import 'core-js/es6/parse-float';\n  // import 'core-js/es6/number';\n  // import 'core-js/es6/math';\n  // import 'core-js/es6/string';\n  // import 'core-js/es6/date';\n  // import 'core-js/es6/array';\n  // import 'core-js/es6/regexp';\n  // import 'core-js/es6/map';\n  // import 'core-js/es6/set';\n  \n  /** IE10 and IE11 requires the following for NgClass support on SVG elements */\n  // import 'classlist.js';  // Run `npm install --save classlist.js`.\n  \n  /** IE10 and IE11 requires the following to support `@angular/animation`. */\n  // import 'web-animations-js';  // Run `npm install --save web-animations-js`.\n  \n  \n  /** Evergreen browsers require these. **/\n  import 'core-js/es6/reflect';\n  import 'core-js/es7/reflect';\n  \n  \n  /** ALL Firefox browsers require the following to support `@angular/animation`. **/\n  // import 'web-animations-js';  // Run `npm install --save web-animations-js`.\n  \n  \n  \n  /***************************************************************************************************\n   * Zone JS is required by Angular itself.\n   */\n  import 'zone.js/dist/zone';  // Included with Angular CLI.\n  \n  \n  /***************************************************************************************************\n   * APPLICATION IMPORTS\n   */\n  \n  /**\n   * Date, currency, decimal and percent pipes.\n   * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10\n   */\n  // import 'intl';  // Run `npm install --save intl`.",
                _a['src/app/app.component.ts'] = this.jsCode,
                _a['src/app/app.module.ts'] = "import { NgModule } from '@angular/core';\n  import { BrowserModule } from '@angular/platform-browser';\n  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';\n  import { FormsModule, ReactiveFormsModule } from '@angular/forms';\n  import { HttpClientModule } from '@angular/common/http';\n  import { NgZorroAntdModule } from 'ng-zorro-antd';\n  \n  import { " + this.fileNames.compClassName + " } from './app.component';\n  \n  import { NZ_I18N, en_US } from 'ng-zorro-antd';\n  import { registerLocaleData } from '@angular/common';\n  import en from '@angular/common/locales/en';\n  registerLocaleData(en);\n  \n  @NgModule({\n    imports:      [ BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, NgZorroAntdModule, BrowserAnimationsModule ],\n    declarations: [ " + this.fileNames.compClassName + " ],\n    bootstrap:    [ " + this.fileNames.compClassName + " ],\n    providers   : [ { provide: NZ_I18N, useValue: en_US } ]\n  })\n  export class AppModule { }\n  ",
                _a['src/styles.css'] = "/* Add application styles & imports to this file! */;",
                _a),
            title: 'Dynamically Generated Project',
            description: 'Created with <3 by the StackBlitz SDK!',
            template: 'angular-cli',
            dependencies: {
                'rxjs': '^6.0.0',
                '@angular/cdk': '^6.0.0',
                '@angular/core': '^6.0.0',
                '@angular/forms': '^6.0.0',
                '@angular/http': '^6.0.0',
                '@angular/language-service': '^6.0.0',
                '@angular/platform-browser': '^6.0.0',
                '@angular/platform-browser-dynamic': '^6.0.0',
                '@angular/common': '^6.0.0',
                '@angular/router': '^6.0.0',
                '@angular/animations': '^6.0.0',
                'date-fns': '^1.29.0',
                'ng-zorro-antd': '^1.1.1'
            },
            tags: ['stackblitz', 'sdk']
        });
        var _a;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CodeSliderComponent.prototype, "showChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CodeSliderComponent.prototype, "show", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CodeSliderComponent.prototype, "fileNames", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CodeSliderComponent.prototype, "htmlCode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CodeSliderComponent.prototype, "jsCode", void 0);
    CodeSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'code-slider',
            template: __webpack_require__(/*! ./code-slider.component.html */ "./src/app/shared/components/code-slider/code-slider.component.html"),
            styles: [__webpack_require__(/*! ./code-slider.component.scss */ "./src/app/shared/components/code-slider/code-slider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CodeSliderComponent);
    return CodeSliderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/yzt-grid/share/grid-util.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/yzt-grid/share/grid-util.service.ts ***!
  \***********************************************************************/
/*! exports provided: GridUtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridUtilService", function() { return GridUtilService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GridUtilService = /** @class */ (function () {
    function GridUtilService() {
    }
    /**
     * 关键字数组分解成含'|'的字符串
     * @param arr 分解的数组
     */
    GridUtilService.prototype.generateColumnKey = function (columns) {
        var fields = [];
        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
            var column = columns_1[_i];
            fields.push(column.field);
        }
        fields.sort();
        var key = "";
        for (var _a = 0, fields_1 = fields; _a < fields_1.length; _a++) {
            var field = fields_1[_a];
            if (key.length > 0) {
                key += "|";
            }
            key += field;
        }
        return key;
    };
    /**
     * 深克隆
     * @param obj 传入需要克隆的对象
     */
    GridUtilService.prototype.cloneDeep = function (obj) {
        var str, newobj = obj.constructor === Array ? [] : {};
        if (typeof obj !== 'object') {
            return;
        }
        else if (window.JSON) {
            str = JSON.stringify(obj), //序列化对象
                newobj = JSON.parse(str); //还原
        }
        else {
            for (var i in obj) {
                newobj[i] = typeof obj[i] === 'object' ? this.cloneDeep(obj[i]) : obj[i];
            }
        }
        return newobj;
    };
    ;
    /**
     * isEqual：判断两个对象是否键值对应相等
     * @param a
     * @param b
     */
    GridUtilService.prototype.isEqual = function (a, b) {
        //如果a和b本来就全等
        if (a === b) {
            //判断是否为0和-0
            return a !== 0 || 1 / a === 1 / b;
        }
        //判断是否为null和undefined
        if (a == null || b == null) {
            return a === b;
        }
        //接下来判断a和b的数据类型
        var classNameA = toString.call(a), classNameB = toString.call(b);
        //如果数据类型不相等，则返回false
        if (classNameA !== classNameB) {
            return false;
        }
        //如果数据类型相等，再根据不同数据类型分别判断
        switch (classNameA) {
            case '[object RegExp]':
            case '[object String]':
                //进行字符串转换比较
                return '' + a === '' + b;
            case '[object Number]':
                //进行数字转换比较,判断是否为NaN
                if (+a !== +a) {
                    return +b !== +b;
                }
                //判断是否为0或-0
                return +a === 0 ? 1 / +a === 1 / b : +a === +b;
            case '[object Date]':
            case '[object Boolean]':
                return +a === +b;
        }
        //如果是对象类型
        if (classNameA == '[object Object]') {
            return this.objectIsEqual(a, b);
        }
        //如果是数组类型
        if (classNameA == '[object Array]') {
            if (a.length !== b.length)
                return false;
            if (a.toString() === '[object Object]' && b.toString() === '[object Object]') {
                for (var i = 0; i < a.length; i++) {
                    var item1 = a[i];
                    var item2 = b[i];
                    if (this.objectIsEqual(item1, item2)) {
                        return true;
                    }
                }
                return false;
            }
            else if (a.toString() == b.toString()) {
                return true;
            }
            return false;
        }
    };
    GridUtilService.prototype.objectIsEqual = function (a, b) {
        //获取a和b的属性长度
        var propsA = Object.getOwnPropertyNames(a), propsB = Object.getOwnPropertyNames(b);
        if (propsA.length != propsB.length) {
            return false;
        }
        for (var i = 0; i < propsA.length; i++) {
            var propName = propsA[i];
            //如果对应属性对应值不相等，则返回false
            if (a[propName] !== b[propName]) {
                return false;
            }
        }
        return true;
    };
    GridUtilService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], GridUtilService);
    return GridUtilService;
}());



/***/ }),

/***/ "./src/app/shared/components/yzt-grid/yzt-grid.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/yzt-grid/yzt-grid.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-border\">\r\n    <nz-table [attr.class]=\"customClass\" [nzScroll]=\"_scroll\" #nzTable [nzShowPagination]=\"showPagination\" nzShowSizeChanger [nzPageSizeOptions]=\"pageSizeValues\" [nzData]=\"_displayData\" [nzTotal]=\"_data.totalElements\" [nzLoading]=\"_loading\" [nzLoadingDelay]=\"10\" [(nzPageIndex)]=\"pageIndex\"\r\n        [(nzPageSize)]=\"pageSize\" (nzPageSizeChange)=\"pageSizeChange($event)\" (nzPageIndexChange)=\"nzPageIndexChange($event)\" [nzSize]=\"'middle'\" [nzFrontPagination]=\"false\" [nzTitle]=\"_title?_title:(_titleTpl||null)\" [nzShowTotal]=\"totalTemplate\" nzNoResult=\"没有记录\">\r\n        <!-- <div class=\"table-title\" nz-table-title *ngIf=\"_title || _titleTpl || buttonGather.showEditColumn || buttonGather.enableExport\">\r\n            <ng-template #defaultTitle>\r\n                <div>\r\n                    <button class=\"btn-editcol\" nz-button [nzType]=\"'primary'\" *ngIf=\"buttonGather.showEditColumn\" (click)=\"editCol = !_editCol\">\r\n                        <i class=\"anticon anticon-edit\"></i>\r\n                        编辑列\r\n                    </button>\r\n                    <button class=\"btn-export\" nz-button [nzType]=\"'primary'\" [nzLoading]=\"_exportLoading\" *ngIf=\"buttonGather.enableExport\"\r\n                        (click)=\"exportCSVIntenal()\">\r\n                        <i class=\"anticon anticon-export\"></i>\r\n                        导出\r\n                    </button>\r\n                </div>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"_title\">{{_title}}</ng-template>\r\n            <ng-template [ngTemplateOutlet]=\"!_title && (_titleTpl || defaultTitle)\"></ng-template>\r\n        </div> -->\r\n        <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\r\n            <tr>\r\n                <ng-template [ngIf]=\"!hideCheck\">\r\n                    <th nzCheckbox *ngIf=\"mulitipy\" style=\"width: 50px; text-align: center;\">\r\n                        <label nz-checkbox [(ngModel)]=\"_allChecked\" [nzIndeterminate]=\"_indeterminate\" (ngModelChange)=\"checkAll($event, nzTable.data)\"></label>\r\n                    </th>\r\n                    <th nzCheckbox *ngIf=\"!mulitipy\" style=\"width: 50px; text-align: center;\">\r\n                        <span></span>\r\n                    </th>\r\n                </ng-template>\r\n\r\n                <!--遍历字段渲染内容-->\r\n                <ng-container *ngFor=\"let column of columns\">\r\n                    <!-- 右侧冻结列 -->\r\n                    <th *ngIf=\"column['frozenRight']\" nzRight=\"0px\" class=\"header-title\" [nzWidth]=\"column['width'] || '120px'\">\r\n                        <ng-template [ngTemplateOutlet]=\"thHeaderTempl\" [ngTemplateOutletContext]=\"column\"></ng-template>\r\n                    </th>\r\n                    <!-- 左侧冻结列 -->\r\n                    <th [nzShowSort]=\"column['showSort']\" [nzSortKey]=\"column.field\" *ngIf=\"column['frozenLeft']\" nzLeft=\"0px\" class=\"header-title\" [nzWidth]=\"column['width'] || '120px'\">\r\n                        <ng-template [ngTemplateOutlet]=\"thHeaderTempl\" [ngTemplateOutletContext]=\"column\"></ng-template>\r\n                    </th>\r\n                    <!-- 正常 -->\r\n                    <th [ngClass]=\"column['showSort']\" [nzShowSort]=\"column['showSort']\" [nzSortKey]=\"column.field\" *ngIf=\"!column['frozenLeft'] && !column['frozenRight']\" class=\"header-title\" [nzWidth]=\"column['width'] || '120px'\">\r\n                        <ng-template [ngTemplateOutlet]=\"thHeaderTempl\" [ngTemplateOutletContext]=\"column\"></ng-template>\r\n                    </th>\r\n                </ng-container>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngIf=\"_extraTitleTpl\" style=\"background-color: #fcfcfc\">\r\n                <th colspan=\"30\">\r\n                  <ng-template [ngTemplateOutlet]=\"_extraTitleTpl\"></ng-template>\r\n                </th>\r\n            </tr>\r\n            <tr [style.color]=\"getColColor(data[colColor.field])\" *ngFor=\"let data of nzTable.data; let ri = index\" (click)=\"onRowSelectChange(data, ri, nzTable.data)\" [class.selected]=\"data.checked\">\r\n                <!-- 选择框 -->\r\n                <ng-template [ngIf]=\"!hideCheck && data['operate'] !== '没有记录'\">\r\n                    <td nzCheckbox *ngIf=\"mulitipy\" style=\"width: 50px; text-align: center;\">\r\n                        <label #checkbox_item nz-checkbox [(ngModel)]=\"data.checked\" (click)=\"refreshStatus($event)\"></label>\r\n                    </td>\r\n                    <td nzCheckbox *ngIf=\"!mulitipy\" style=\"width: 50px; text-align: center;\">\r\n                        <label #checkbox_item nz-checkbox class=\"custom-select\" [disabled]=\"data.checked\" [(ngModel)]=\"data.checked\" (click)=\"refreshSingleStatus($event, nzTable.data, ri)\"></label>\r\n                    </td>\r\n                </ng-template>\r\n                <!--遍历字段渲染内容-->\r\n                <ng-container *ngFor=\"let column of columns\">\r\n                    <!-- 右侧冻结列 -->\r\n                    <td *ngIf=\"column['frozenRight']\" nzRight=\"0px\">\r\n                        <ng-template [ngTemplateOutlet]=\"default_cell\" [ngTemplateOutletContext]=\"column\"></ng-template>\r\n                    </td>\r\n                    <!-- 左侧冻结列 -->\r\n                    <td *ngIf=\"column['frozenLeft']\" nzLeft=\"0px\">\r\n                        <ng-template [ngTemplateOutlet]=\"default_cell\" [ngTemplateOutletContext]=\"column\"></ng-template>\r\n                    </td>\r\n                    <!-- 正常 -->\r\n                    <td *ngIf=\"!column['frozenLeft'] && !column['frozenRight']\">\r\n                        <ng-template [ngTemplateOutlet]=\"default_cell\" [ngTemplateOutletContext]=\"column\"></ng-template>\r\n                    </td>\r\n                </ng-container>\r\n                <!-- td的模板 -->\r\n                <ng-template #default_cell let-field=\"field\" let-popover=\"popover\" let-link=\"link\" let-thumbnail=\"thumbnail\" let-header=\"header\" let-textLength=\"textLength\">\r\n                    <ng-container *ngIf=\"field === _iconComp[field]?.outField\" [ngTemplateOutlet]=\"_iconComp[field].iconTemplate\" [ngTemplateOutletContext]=\"data\"></ng-container>\r\n                    <a href=\"javascript:;\" *ngIf=\"link\" class=\"column-link\">\r\n                        <span (click)=\"onCellClick($event,data,field)\">{{data[field]}}</span>\r\n                    </a>\r\n                    <!-- 一般文本 -->\r\n                    <ng-container *ngIf=\"!link && !popover && !thumbnail\">\r\n                        <!-- 默认小于20的文本无popover -->\r\n                        <nz-popover *ngIf=\"(data[field]?.length>(textLength?textLength: 20)); else elseTextBlock\" [nzTrigger]=\"'hover'\">\r\n                            <span nz-popover>{{data[field+'_short_']}}</span>\r\n                            <ng-template #nzTemplate>\r\n                                <div>\r\n                                    <p style=\"max-width: 300px;\">{{data[field]}}</p>\r\n                                </div>\r\n                            </ng-template>\r\n                        </nz-popover>\r\n                        <ng-template #elseTextBlock>\r\n                            <span>{{data[field]}}</span>\r\n                        </ng-template>\r\n                    </ng-container>\r\n                    <!-- 卡片弹框 start-->\r\n                    <div (mouseenter)=\"onCellMouseEnter($event, data, field)\">\r\n                        <nz-popover *ngIf=\"popover\" [nzTitle]=\"header\" [nzTrigger]=\"'hover'\">\r\n                            <span class=\"column-popover-text\" nz-popover>{{data[field+ '_popover_']}}</span>\r\n                            <ng-template #nzTemplate>\r\n                                <!-- <p class=\"popover-panel popover-content\" [class.popover-panel-last]=\"i === data[field+ '_popover_arr_'].length-1\" *ngFor=\"let name of data[field+ '_popover_arr_']; let i = index;\">{{name}}</p> -->\r\n                                <ng-template #default_popover>\r\n                                    <p class=\"popover-panel popover-content\" [class.popover-panel-last]=\"i === splitName(data[field], popover).length-1\" *ngFor=\"let name of splitName(data[field], popover); let i = index;\">{{name}}</p>\r\n                                </ng-template>\r\n                                <ng-container>\r\n                                    <!-- 由于外层有popover控制，所以这里不会有性能问题 -->\r\n                                    <div class=\"yzt-grid-popover-content\" [style.width.px]=\"popover.split('@')[1]?popover.split('@')[1]:'auto'\">\r\n                                        <ng-template [ngTemplateOutlet]=\"(popover.indexOf('_customTpl') !== -1 && _custom_popoverTpl) || default_popover\"></ng-template>\r\n                                    </div>\r\n                                </ng-container>\r\n                            </ng-template>\r\n                        </nz-popover>\r\n                    </div>\r\n                    <!-- 卡片弹框 end-->\r\n                    <!--图片附件 start-->\r\n                    <div *ngIf=\"thumbnail && data[field] && !popover\">\r\n                        <i class=\"anticon anticon-picture thumbnail\" *ngFor=\"let addr of data[field]\" target=\"_blank\">\r\n                            <img style=\"opacity: 0;position: absolute;left: 0;top: 0;\" name=\"{{addr}}\" src=\"{{addr}}\">\r\n                        </i>\r\n                    </div>\r\n                    <!--图片附件 end-->\r\n                    <ng-container *ngIf=\"field === _customComp[field]?.outField && data['operate'] !== '没有记录'\" [ngTemplateOutlet]=\"_customComp[field].customTemplate\" [ngTemplateOutletContext]=\"data\"></ng-container>\r\n                </ng-template>\r\n            </tr>\r\n        </tbody>\r\n    </nz-table>\r\n\r\n    <ng-template #thHeaderTempl let-header=\"header\" let-field=\"field\" let-frozenRight=\"frozenRight\" let-frozenLeft=\"frozenLeft\">\r\n        <span>{{header}}</span>\r\n        <div *ngIf=\"_hasSearch && !frozenRight && !frozenLeft\" [ngClass]=\"_hasSearch? 'templ': ''\">\r\n            <ng-template #default_search>\r\n                <input nz-input [(ngModel)]=\"_fieldGather[field]\" (ngModelChange)=\"search(field, $event)\"/>\r\n            </ng-template>\r\n            <ng-container [ngTemplateOutlet]=\" _searchCustom[field] || default_search\"></ng-container>\r\n        </div>\r\n    </ng-template>\r\n    <ng-template #totalTemplate let-total>\r\n        总 {{total}} 条数据\r\n    </ng-template>\r\n</div>\r\n\r\n<!-- <div #edit_box class=\"edit-wrap\" *ngIf=\"_editCol\">\r\n    <div drag-box [box]=\"edit_box\" class=\"edit-title ant-modal-header\">\r\n        <div class=\"ant-modal-title\">编辑列</div>\r\n        <button aria-label=\"Close\" class=\"ant-modal-close ng-star-inserted\" (click)=\"editCol=false\">\r\n            <span class=\"ant-modal-close-x\"></span>\r\n        </button>\r\n    </div>\r\n    <div class=\"edit-content ant-modal-body\">\r\n        <nz-transfer [nzDataSource]=\"editColumns\" [nzTitles]=\"['Source', 'Target']\" (nzSelectChange)=\"select($event)\" [nzListStyle]=\"{'width.px': 230, 'height.px': 300, 'text-align': 'left'}\" (nzChange)=\"editChange($event)\">\r\n        </nz-transfer>\r\n    </div>\r\n    <div class=\"edit-footer ant-modal-footer\"></div>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/shared/components/yzt-grid/yzt-grid.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/yzt-grid/yzt-grid.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .ant-table-thead > tr > th.ant-table-selection-column,\n:host ::ng-deep .ant-table-tbody > tr > td.ant-table-selection-column {\n  width: 20px;\n  min-width: 20px; }\n\n.grid-border {\n  border: 1px solid #e9e9e9; }\n\n:host /deep/ .ant-table {\n  border-radius: 0; }\n\n:host ::ng-deep .custom-select .ant-checkbox-disabled {\n  cursor: pointer; }\n\n:host ::ng-deep .custom-select .ant-checkbox-input {\n  cursor: pointer; }\n\n:host ::ng-deep .custom-select .ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner:after {\n  border-color: #fff; }\n\n.selected {\n  background-color: #fcf5f0 !important; }\n\n.selected .ant-table-td-left-sticky, .selected .ant-table-td-right-sticky {\n    background-color: #fcf5f0; }\n\n.table-title {\n  width: 100%;\n  overflow: hidden;\n  padding: 10px 8px; }\n\n.table-title .btn-editcol {\n    float: left; }\n\n.table-title .btn-export {\n    float: right; }\n\n:host .header-title {\n  position: relative; }\n\n:host .header-title > span:first-child {\n    display: block; }\n\n:host .header-title .templ {\n    width: 100%;\n    height: 30px;\n    max-width: 120px;\n    position: relative;\n    z-index: 1; }\n\n:host .header-title .templ ::ng-deep nz-select,\n    :host .header-title .templ ::ng-deep nz-input {\n      width: 100%; }\n\n:host .header-title ::ng-deep .ant-table-column-sorter {\n    position: absolute;\n    top: 16px;\n    left: 55px; }\n\n:host ::ng-deep .sorter3 .ant-table-column-sorter {\n  left: 40px !important; }\n\n:host ::ng-deep .sorter4 .ant-table-column-sorter {\n  left: 55px !important; }\n\n:host ::ng-deep .sorter5 .ant-table-column-sorter {\n  left: 70px !important; }\n\n:host .ant-table-th-left-sticky, :host .ant-table-th-right-sticky {\n  position: -webkit-sticky;\n  position: sticky; }\n\n:host ::ng-deep .deliveryTable .ant-table-placeholder {\n  top: 70px !important; }\n\n.column-link {\n  text-decoration: underline;\n  color: #EE7F25; }\n\n.edit-wrap {\n  width: 600px;\n  background: #fff;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  text-align: center; }\n\n.thumbnail {\n  position: relative;\n  overflow: hidden;\n  cursor: zoom-in; }\n\n.popover-panel {\n  border-bottom: 1px solid #e9e9e9;\n  padding: 8px 16px; }\n\n.popover-panel-last {\n  border: 0; }\n\n.column-popover-text {\n  color: #108ee9;\n  cursor: default; }\n"

/***/ }),

/***/ "./src/app/shared/components/yzt-grid/yzt-grid.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/yzt-grid/yzt-grid.component.ts ***!
  \******************************************************************/
/*! exports provided: UIGridComponent, UIGridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIGridComponent", function() { return UIGridComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIGridModule", function() { return UIGridModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _directives_yzt_directives_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/yzt-directives.modules */ "./src/app/shared/directives/yzt-directives.modules.ts");
/* harmony import */ var _share_grid_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./share/grid-util.service */ "./src/app/shared/components/yzt-grid/share/grid-util.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GridIconIF = /** @class */ (function () {
    function GridIconIF() {
    }
    return GridIconIF;
}());
var UIGridComponent = /** @class */ (function () {
    function UIGridComponent(util, _vcr) {
        this.util = util;
        this._vcr = _vcr;
        this._scroll = { x: null, y: null };
        this._data = { content: [], numberOfElements: 0 };
        this._dataSet = [];
        this._loading = false;
        this._title = '';
        this._extraTitleTpl = null; // 表格thead和tbody之间
        this._exportLoading = false;
        this._editCol = false;
        //用于存放可选列
        this.targetColumns = [];
        //备份完整columns
        this.editColumns = [];
        //grid表格按钮控制
        this.buttonGather = {
            showEditColumn: false,
            enableExport: false,
        };
        // 排序
        this._sortName = null;
        this._sortValue = null;
        this._page = 1;
        this._size = 10;
        // 缓存上一次分页信息，控制避免多次请求接口
        this._pageIndex = 1;
        this._pageSize = 1;
        /**
         * 控制多选
         */
        this._allChecked = false;
        this._indeterminate = false;
        this._displayData = [];
        // 自定义图片实例
        this._iconComp = {};
        // 自定义单元格
        this._customComp = {};
        // 表头搜索
        this._searchCustom = {};
        // 存储转换后的卡片字符串
        this._popoverStr = '';
        this._popoverArr = [];
        this._fieldGather = {};
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cellClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cellOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.exportCSV = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filterData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // 过滤后数据输出
        this.columns = [];
        this.showSizeChanger = false; // 未知用途
        this.showPagination = true; // 是否显示分页
        this.pageSizeValues = [10, 30, 50, 100];
        this.showTitle = true;
        this.mulitipy = false; // 是否多选
        this.hideCheck = false; // 是否有全选选择框
        this.isSyncData = true;
        // 根据行状态更换行颜色，usage: {field: "status", normal: "normal"},
        // normal对应的值是数据中status的值
        this.colColor = {
            field: "",
            normal: "",
            unnormal: "",
            // 时效预警
            prewarning: "",
            warning: "",
            timeOut: "",
            // 删除
            delete: ""
        };
        this.exportDisable = false;
    }
    Object.defineProperty(UIGridComponent.prototype, "loading", {
        set: function (v) {
            this._loading = !!v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIGridComponent.prototype, "pageIndex", {
        get: function () {
            return this._page;
        },
        set: function (num) {
            if (this._page === num)
                return;
            this._page = num;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIGridComponent.prototype, "pageSize", {
        get: function () {
            return this._size;
        },
        // 支持双向数据绑定
        set: function (num) {
            if (this._size === num)
                return;
            this._size = num;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIGridComponent.prototype, "editCol", {
        set: function (show) {
            if (show) {
                this.editColumns = this.columns.concat(this.targetColumns);
            }
            this._editCol = show;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIGridComponent.prototype, "scroll", {
        set: function (value) {
            if (value) {
                this._scroll = value;
            }
            else {
                this._scroll = { x: null, y: null };
            }
            //   this.cdr.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIGridComponent.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            var _this = this;
            setTimeout(function (_) {
                _this._loading = false;
            });
            if (!value)
                return;
            // 手动调用查询，解决分页问题
            if (value.size) {
                this.pageSize = value.size;
                this.pageIndex = value.number + 1;
                this._pageIndex = this.pageIndex; // 控制查询的时候，引起的pageIndexChange事件造成走两次接口
                this._pageSize = this.pageSize; // 控制查询的时候，引起的pageSizeChange事件造成走两次接口
            }
            var content = value['content'] || [];
            // 优化性能。避免鼠标事件触发表格数据重复计算或者赋值
            for (var _i = 0, content_1 = content; _i < content_1.length; _i++) {
                var row = content_1[_i];
                var columns = [].concat(this.columns).concat(this.targetColumns);
                for (var _a = 0, columns_1 = columns; _a < columns_1.length; _a++) {
                    var c = columns_1[_a];
                    var fieldValue = lodash__WEBPACK_IMPORTED_MODULE_6__["get"](row, c.field, ""); // 兼容后端返回数据结构，eg:c.field="shipper.clientType"
                    if (!c.field) {
                        continue;
                    }
                    row[c.field] = fieldValue;
                    var textLen = Number(c.textLength) ? c.textLength : 20;
                    // 字段过长缩写
                    if (fieldValue.length > textLen) {
                        row[c.field + '_short_'] = this.replaceTextOmit(fieldValue, textLen, '');
                    }
                    // mergeName 数组合并
                    if (c.popover) {
                        row[c.field + '_popover_'] = this.replaceTextOmit(fieldValue, textLen, c.popover);
                        // _.set(row, c.field + '_popover_arr_', this.splitName(fieldValue, c.popover));
                    }
                }
            }
            this._displayData = value['content'] = content;
            this._data = __assign({}, value);
            // 如果用户有进行排序动作，后续查询也该按当前排序记录进行排序
            if (this._sortName && this._sortValue)
                this.search();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIGridComponent.prototype, "fixScroll", {
        /*  get fieldValue(row:Object,fieldName:string){
            if()
         } */
        set: function (height) {
            this._fixScrollY = parseInt(height) + "px";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIGridComponent.prototype, "title", {
        // 设置头部
        set: function (value) {
            if (value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]) {
                this._titleTpl = value;
            }
            else {
                this._title = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIGridComponent.prototype, "extraTitle", {
        // 设置表格行下方区域,表格thead和tbody之间
        set: function (value) {
            if (value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]) {
                this._extraTitleTpl = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIGridComponent.prototype, "csPopover", {
        // 设置卡片
        set: function (value) {
            this._custom_popoverTpl = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIGridComponent.prototype, "searchTmpl", {
        // 设置搜索
        set: function (templs) {
            var _this = this;
            if (Array.isArray(templs)) {
                var ref_1;
                templs.forEach(function (templ, i) {
                    ref_1 = Object.keys(templ._def.references)[0].split('_')[1].toString();
                    Object.defineProperty(_this._searchCustom, ref_1, {
                        value: templ
                    });
                });
            }
            this._hasSearch = arguments ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UIGridComponent.prototype, "selection", {
        set: function (value) {
            // 单选接受一个对象多选接受数组
            if (!this.util.isEqual(this._selections, value)) {
                if (!value.length) {
                    this._displayData.forEach(function (data) {
                        data.checked = false;
                    });
                    this._indeterminate = false;
                    this._allChecked = false;
                }
                this._selections = value;
                this.selectionChange.emit(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    UIGridComponent.prototype.ngOnInit = function () {
        if (this.id) {
            var columnsMap = localStorage[this.id];
            if (columnsMap) {
                columnsMap = JSON.parse(columnsMap);
                var sourceColumns = columnsMap["sourceColumns"];
                var targetColumns = columnsMap["targetColumns"];
                if (sourceColumns && targetColumns && this.util.generateColumnKey(sourceColumns.concat(targetColumns)) === this.util.generateColumnKey(this.columns)) {
                    this.columns = sourceColumns;
                    this.targetColumns = targetColumns;
                }
            }
        }
        this.editColumns = this.columns;
        this.editColumns.forEach(function (column, i) {
            Object.defineProperties(column, {
                title: { value: column.header },
                disabled: { value: column.transferVisabled || false }
            });
        });
    };
    UIGridComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function (_) {
            _this.onLazyLoad();
        });
    };
    UIGridComponent.prototype.ngOnChanges = function () {
    };
    UIGridComponent.prototype.ngOnDestroy = function () {
        if (this.id) {
            localStorage[this.id] = JSON.stringify({
                sourceColumns: this.columns,
                targetColumns: this.targetColumns
            });
        }
    };
    /**page index change event handler */
    UIGridComponent.prototype.nzPageIndexChange = function ($event) {
        var _this = this;
        setTimeout(function () {
            if (_this._pageIndex === $event) {
                return;
            }
            _this.onLazyLoad();
            _this._pageIndex = $event;
        });
    };
    UIGridComponent.prototype.pageSizeChange = function ($event) {
        var _this = this;
        // 控制size改变，引起pageIndex变化而产生多次请求
        if (this._pageIndex !== this.pageIndex) {
            return;
        }
        setTimeout(function () {
            if (_this._pageSize === $event) {
                return;
            }
            _this.onLazyLoad();
        });
    };
    UIGridComponent.prototype.isNeedSearch = function (column) {
        for (var value in column) {
            if (column[value] && column[value].indexOf('search_') !== -1)
                return column[value].split('_')[1];
        }
        return 0;
    };
    UIGridComponent.prototype.editChange = function (change) {
        var _this = this;
        var originChange = change, items = originChange.list;
        items.forEach(function (item, index) {
            if (change.from === 'left') {
                _this.editColumns.forEach(function (column) {
                    if (item['field'] === column['field'] && column.direction !== 'right')
                        column.direction = 'right';
                });
            }
            else {
                _this.targetColumns.forEach(function (column) {
                    if (item['field'] === column['field'] && column.direction === 'right')
                        column.direction = 'left';
                });
            }
        });
        this.columns = this.editColumns.filter(function (column) { return column.direction !== 'right'; });
        this.targetColumns = this.editColumns.filter(function (column) { return column.direction === 'right'; });
        // 重新赋值，保证穿梭框排序保持最新一次
        this.editColumns = this.columns.concat(this.targetColumns);
    };
    UIGridComponent.prototype.onLazyLoad = function (page) {
        if (page === void 0) { page = { page: this.pageIndex, size: this.pageSize }; }
        /*   if (this.isSyncData) {
            this._loading = true;
          } */
        this.load.emit(page);
    };
    UIGridComponent.prototype.getIconInstance = function (_a) {
        var outField = _a.outField, outProp = _a.outProp, iconTemplate = _a.iconTemplate;
        this._iconComp[outField] = {
            outField: outField || '',
            outProp: outProp || '',
            iconTemplate: iconTemplate || '',
        };
    };
    UIGridComponent.prototype.getCusTmplInstance = function (_a) {
        var outField = _a.outField, customTemplate = _a.customTemplate;
        this._customComp[outField] = {
            outField: outField || '',
            customTemplate: customTemplate || ''
        };
    };
    /**
     * 记录选择事件
     * @param rows
     */
    UIGridComponent.prototype.onRowSelectChange = function (data, index, pageData) {
        if (this.mulitipy) {
            pageData.map(function (item) {
                item.checked = false;
            });
            data.checked = !data.checked;
        }
        else {
            for (var i = 0; i < pageData.length; ++i) {
                if (i === index && data.checked)
                    return;
            }
            data.checked = !data.checked;
        }
        this.mulitipy ? this.refreshStatus() : this.refreshSingleStatus(null, this._data.content, index);
        return false;
    };
    /**
     * 选择checkbox
     */
    UIGridComponent.prototype.refreshStatus = function (event) {
        if (event) {
            event.stopPropagation();
        }
        var selections = this._displayData.filter(function (value) { return value.checked === true; });
        var allChecked = this._displayData.every(function (value) { return value.checked === true; });
        var allUnChecked = this._displayData.every(function (value) { return !value.checked; });
        this._allChecked = allChecked;
        this._indeterminate = (!allChecked) && (!allUnChecked);
        this.selection = selections;
    };
    UIGridComponent.prototype.refreshSingleStatus = function (event, data, index) {
        if (event) {
            event.stopPropagation();
        }
        data.forEach(function (val, i) {
            if (index === i)
                return;
            val.checked = false;
        });
        this.selection = data.filter(function (v) { return v.checked; });
    };
    /**
     * 全选和反选
     * @param value
     * @param data
     */
    UIGridComponent.prototype.checkAll = function (value, data) {
        if (value) {
            this._displayData.forEach(function (data) {
                data.checked = true;
            });
        }
        else {
            this._displayData.forEach(function (data) {
                data.checked = false;
            });
        }
        this.refreshStatus();
    };
    /**
     * cell点击事件
     * @param event
     * @param row
     * @param field
     */
    UIGridComponent.prototype.onCellClick = function (event, row, field) {
        event.stopPropagation();
        var value = row[field];
        this.cellClick.emit({
            row: row,
            field: field,
            value: value,
            originalEvent: event
        });
    };
    /**
     * 鼠标mouseenter事件
     */
    UIGridComponent.prototype.onCellMouseEnter = function (event, row, field) {
        event.stopPropagation();
        // let value = this.value(row, field);
        var value = row[field];
        this.cellOver.emit({
            row: row,
            field: field,
            value: value,
            originalEvent: event
        });
    };
    /**
     * 数据转为字符串
     * @param val
     * @returns {any}
     * @constructor
     */
    UIGridComponent.prototype.dataToStr = function (val) {
        var resultData;
        if (typeof val == 'number') {
            resultData = val.toString();
        }
        else if (typeof val == 'undefined') {
            resultData = '';
        }
        else if (val == null) {
            resultData = '';
        }
        else if (typeof val == 'object') {
            resultData = JSON.stringify(val);
        }
        else if (typeof val == 'boolean') {
            resultData = val ? '是' : '否';
        }
        else {
            resultData = val;
        }
        return resultData;
    };
    /**
     * 对有textLength属性的column进行字节数量控制
     * @param val
     * @param textLength
     * @param mergeName 控制popover弹窗,传需要合并的key,eg: [{a: '床'},{a: '被子'}] ,此处mergeName传'a'
     * @returns {string|void|any}
     */
    UIGridComponent.prototype.replaceTextOmit = function (val, textLength, mergeName) {
        if (textLength === void 0) { textLength = 20; }
        if (mergeName === void 0) { mergeName = ''; }
        var resultData, temp;
        resultData = this.dataToStr(val);
        if (Object.prototype.toString.call(val) === '[object Array]') {
            var namesArr = lodash__WEBPACK_IMPORTED_MODULE_6__["map"](val, mergeName), namesStr = namesArr.join(',');
            temp = namesStr.slice(0, textLength);
            return namesStr.length > textLength ? temp + "..." : namesStr;
        }
        if (typeof resultData === 'string') {
            temp = resultData.slice(0, textLength);
            return resultData.length > textLength ? temp + "..." : resultData;
        }
        else {
            return resultData;
        }
    };
    /**
     * 字符串转数组，逗号隔开, popover在表格中有性能问题，
     * 会触发两次导致第一次会显示表格中最后一个单元格的值再显示想显示的popover数组
     * 临时解决办法必须在html模板中传val值，估计是多次触发表格的变化检测
     */
    UIGridComponent.prototype.splitName = function (val, mergeName) {
        if (mergeName === void 0) { mergeName = ''; }
        var result;
        if (Object.prototype.toString.call(val) === '[object Array]') {
            var namesArr = lodash__WEBPACK_IMPORTED_MODULE_6__["map"](val, mergeName), namesStr = namesArr.join(',');
            result = namesStr;
        }
        else if (typeof val === 'string') {
            result = val;
        }
        var reg = /[,，]/g;
        result = result.replace(reg, ',');
        return lodash__WEBPACK_IMPORTED_MODULE_6__["compact"](result.split(',')) || [];
    };
    /**
     *
     * @param grid
     * @param data
     * @param isFailed 失败了
     */
    UIGridComponent.prototype.doExportCSV = function (grid, data, isFailed) {
        grid.exportDisable = false;
        if (isFailed) {
            return;
        }
        var columns = grid.columns;
        var csv = '\ufeff';
        //headers
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].field && !columns[i].hidden) {
                csv += '"' + (columns[i].header || columns[i].field) + '"';
                if (i < (columns.length - 1)) {
                    csv += ",";
                }
            }
        }
        //body
        data.forEach(function (record, i) {
            csv += '\n';
            for (var i_1 = 0; i_1 < columns.length; i_1++) {
                if (columns[i_1].field && !columns[i_1].hidden) {
                    var value = Object.defineProperty(record, columns[i_1].field, null);
                    if (typeof value === 'string') {
                        value = value.replace('"', '""');
                    }
                    else if (value === null || value === 'null' || value === 'undefined') {
                        value = "";
                    }
                    if (!isNaN(Number(value)) && value.length > 12) {
                        csv += '"' + value + '\ufeff"';
                    }
                    else {
                        csv += '"' + value + '"';
                    }
                    if (i_1 < (columns.length - 1)) {
                        csv += ",";
                    }
                }
            }
        });
        var blob = new Blob([csv], {
            type: 'text/csv;charset=utf-8;'
        });
        if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, '导出.csv');
        }
        else {
            var link = document.createElement("a");
            link.style.display = 'none';
            document.body.appendChild(link);
            if (link.download !== undefined) {
                link.setAttribute('href', URL.createObjectURL(blob));
                link.setAttribute('download', '导出.csv');
                link.click();
            }
            else {
                csv = 'data:text/csv;charset=utf-8,' + csv;
                window.open(encodeURI(csv));
            }
            document.body.removeChild(link);
        }
    };
    UIGridComponent.prototype.exportCSVIntenal = function () {
        var $this = this;
        this.exportDisable = true;
        this.exportCSV.emit({
            done: $this.doExportCSV,
            grid: $this
        });
    };
    /**
     * 根据状态判断行颜色，配合colColor属性
     * @param status 对应数据属性
     */
    UIGridComponent.prototype.getColColor = function (status) {
        if (!this.colColor.field)
            return;
        switch (status) {
            case this.colColor.normal:
                return "#000000a6";
            case this.colColor.delete:
                return "#f04134";
            // case this.colColor.prewarning:
            //     return "origin";
            // case this.colColor.warning:
            //     return "green";
            // case this.colColor.timeOut:
            //     return "#000";
            default:
                return "#000000a6";
        }
    };
    // 前端过滤
    UIGridComponent.prototype.search = function () {
        var _this = this;
        var searchObj = {};
        for (var field in this._fieldGather) {
            if (this._fieldGather[field].trim()) {
                Object.defineProperty(searchObj, field, {
                    value: this._fieldGather[field],
                    writable: true,
                    enumerable: true,
                    configurable: true
                });
            }
        }
        if (!Object.keys(searchObj).length) {
            this._displayData = this.data['content'].slice();
        }
        else {
            this._displayData = this.data['content'].filter(function (item) {
                var flag = false;
                for (var key in searchObj) {
                    if (item[key].toString().indexOf(searchObj[key]) !== -1) {
                        flag = !flag;
                        break;
                    }
                }
                return flag;
            });
        }
        // 具体参考https://ng-zorro.github.io/components/table/zh#components-table-demo-head
        if (this._sortName && this._sortValue) {
            this._displayData = this._displayData.sort(function (a, b) { return (_this._sortValue === 'ascend') ? (a[_this._sortName] > b[_this._sortName] ? 1 : -1) : (b[_this._sortName] > a[_this._sortName] ? 1 : -1); });
        }
        this.filterData.emit({ content: this._displayData });
    };
    // 列表排序
    UIGridComponent.prototype.sort = function (sort) {
        this._sortName = sort.key;
        this._sortValue = sort.value;
        this.search();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridImg', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], UIGridComponent.prototype, "gridImg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nzTable'),
        __metadata("design:type", Object)
    ], UIGridComponent.prototype, "nzTable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], UIGridComponent.prototype, "pageSize", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], UIGridComponent.prototype, "load", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], UIGridComponent.prototype, "selectionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], UIGridComponent.prototype, "cellClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], UIGridComponent.prototype, "cellOver", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], UIGridComponent.prototype, "exportCSV", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], UIGridComponent.prototype, "filterData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], UIGridComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], UIGridComponent.prototype, "customClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], UIGridComponent.prototype, "columns", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], UIGridComponent.prototype, "showSizeChanger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], UIGridComponent.prototype, "showPagination", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], UIGridComponent.prototype, "pageSizeValues", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], UIGridComponent.prototype, "showTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], UIGridComponent.prototype, "mulitipy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], UIGridComponent.prototype, "hideCheck", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], UIGridComponent.prototype, "isSyncData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], UIGridComponent.prototype, "colColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], UIGridComponent.prototype, "scroll", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], UIGridComponent.prototype, "data", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], UIGridComponent.prototype, "fixScroll", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], UIGridComponent.prototype, "title", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], UIGridComponent.prototype, "extraTitle", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
    ], UIGridComponent.prototype, "csPopover", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], UIGridComponent.prototype, "searchTmpl", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], UIGridComponent.prototype, "selection", null);
    UIGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "yzt-grid",
            template: __webpack_require__(/*! ./yzt-grid.component.html */ "./src/app/shared/components/yzt-grid/yzt-grid.component.html"),
            styles: [__webpack_require__(/*! ./yzt-grid.component.scss */ "./src/app/shared/components/yzt-grid/yzt-grid.component.scss")]
        }),
        __metadata("design:paramtypes", [_share_grid_util_service__WEBPACK_IMPORTED_MODULE_5__["GridUtilService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], UIGridComponent);
    return UIGridComponent;
}());

var UIGridModule = /** @class */ (function () {
    function UIGridModule() {
    }
    UIGridModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NgZorroAntdModule"],
                _directives_yzt_directives_modules__WEBPACK_IMPORTED_MODULE_4__["DirectivesModule"]
            ],
            declarations: [
                UIGridComponent
            ],
            providers: [
                _share_grid_util_service__WEBPACK_IMPORTED_MODULE_5__["GridUtilService"]
            ],
            exports: [UIGridComponent]
        })
    ], UIGridModule);
    return UIGridModule;
}());



/***/ }),

/***/ "./src/app/shared/directives/drag-box.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/drag-box.directive.ts ***!
  \*********************************************************/
/*! exports provided: DragBoxDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragBoxDirective", function() { return DragBoxDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DragBoxDirective = /** @class */ (function () {
    function DragBoxDirective(rd2, el) {
        this.rd2 = rd2;
        this.el = el;
    }
    DragBoxDirective.prototype.ngOnInit = function () {
        var _a = this.center(this.box), x = _a.x, y = _a.y;
        this.center(this.box);
    };
    DragBoxDirective.prototype.ngOnDestroy = function () {
        this.dragging = false;
    };
    DragBoxDirective.prototype.mousedown = function (event, target) {
        if (target.className.indexOf('ant-modal-close-x') !== -1)
            return;
        event.stopPropagation();
        this.dragging = true;
        this.pageSize = event;
    };
    DragBoxDirective.prototype.mousemove = function (_a) {
        var pageX = _a.pageX, pageY = _a.pageY;
        var dom = this.box;
        if (this.dragging) {
            var deltaX = pageX - this.pageSize.pageX, deltaY = pageY - this.pageSize.pageY, distanceX = document.documentElement.offsetWidth - dom.offsetWidth, distanceY = document.documentElement.offsetHeight - dom.offsetHeight, leftPos = parseInt(dom.offsetLeft), topPos = parseInt(dom.offsetTop);
            dom.style.left = (leftPos >= 0 ? (leftPos <= distanceX ? leftPos + deltaX : distanceX) : 0) + 'px';
            dom.style.top = (topPos >= 0 ? (topPos <= distanceY ? topPos + deltaY : distanceY) : 0) + 'px';
            this.pageSize = { pageX: pageX, pageY: pageY };
        }
        return false;
    };
    DragBoxDirective.prototype.mouseup = function (event) {
        this.dragging = false;
    };
    DragBoxDirective.prototype.resize = function (event) {
        this.center(this.box);
    };
    DragBoxDirective.prototype.getViewport = function () {
        var win = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0], w = win.innerWidth || e.clientWidth || g.clientWidth, h = win.innerHeight || e.clientHeight || g.clientHeight;
        return { width: w, height: h };
    };
    DragBoxDirective.prototype.center = function (ele) {
        var viewport = this.getViewport(), x = Math.max((viewport.width - ele.offsetWidth) / 2, 0), y = Math.max((viewport.height - ele.offsetHeight) / 2, 0);
        this.box.style.position = "fixed";
        this.box.style.zIndex = 1000;
        this.box.style.left = x + 'px';
        this.box.style.top = y + 'px';
        return { x: x, y: y };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DragBoxDirective.prototype, "box", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mousedown', ['$event', '$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent, Object]),
        __metadata("design:returntype", void 0)
    ], DragBoxDirective.prototype, "mousedown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:mousemove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DragBoxDirective.prototype, "mousemove", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:mouseup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], DragBoxDirective.prototype, "mouseup", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], DragBoxDirective.prototype, "resize", null);
    DragBoxDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[drag-box]'
        })
        /**
         * 常规Hostlistener监听事件
         */
        ,
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DragBoxDirective);
    return DragBoxDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/key-enter.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/key-enter.directive.ts ***!
  \**********************************************************/
/*! exports provided: KeyEnterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyEnterDirective", function() { return KeyEnterDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KeyEnterDirective = /** @class */ (function () {
    function KeyEnterDirective(el) {
        this.el = el;
    }
    KeyEnterDirective.prototype.keydown = function (event) {
        var e = event || window.event;
        if (e && e.keyCode == 13) {
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('key-enter'),
        __metadata("design:type", Object)
    ], KeyEnterDirective.prototype, "nzContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], KeyEnterDirective.prototype, "keydown", null);
    KeyEnterDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[key-enter]'
        })
        /**
         * 常规Hostlistener监听事件
         */
        ,
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], KeyEnterDirective);
    return KeyEnterDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/yzt-directives.modules.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/yzt-directives.modules.ts ***!
  \*************************************************************/
/*! exports provided: DirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesModule", function() { return DirectivesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drag_box_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag-box.directive */ "./src/app/shared/directives/drag-box.directive.ts");
/* harmony import */ var _key_enter_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./key-enter.directive */ "./src/app/shared/directives/key-enter.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _drag_box_directive__WEBPACK_IMPORTED_MODULE_1__["DragBoxDirective"],
                _key_enter_directive__WEBPACK_IMPORTED_MODULE_2__["KeyEnterDirective"]
            ],
            exports: [
                _drag_box_directive__WEBPACK_IMPORTED_MODULE_1__["DragBoxDirective"],
                _key_enter_directive__WEBPACK_IMPORTED_MODULE_2__["KeyEnterDirective"]
            ]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_ace_tern__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-ace-tern */ "./node_modules/ng-ace-tern/ng-ace-tern.es5.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js");
/* harmony import */ var ngx_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-md */ "./node_modules/ngx-md/fesm5/ngx-md.js");
/* harmony import */ var _lib_schema_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/schema-form.module */ "./src/lib/schema-form.module.ts");
/* harmony import */ var _components_code_slider_code_slider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/code-slider/code-slider.component */ "./src/app/shared/components/code-slider/code-slider.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var COMPONENTS = [
    _components_code_slider_code_slider_component__WEBPACK_IMPORTED_MODULE_8__["CodeSliderComponent"]
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: []
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: COMPONENTS.slice(),
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"].forRoot(),
                ng_ace_tern__WEBPACK_IMPORTED_MODULE_3__["AceEditorModule"],
                _lib_schema_form_module__WEBPACK_IMPORTED_MODULE_7__["SchemaFormModule"],
                ngx_highlightjs__WEBPACK_IMPORTED_MODULE_5__["HighlightModule"].forRoot({ theme: 'googlecode' }),
                ngx_md__WEBPACK_IMPORTED_MODULE_6__["NgxMdModule"].forRoot(),
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"],
                ng_ace_tern__WEBPACK_IMPORTED_MODULE_3__["AceEditorModule"],
                _lib_schema_form_module__WEBPACK_IMPORTED_MODULE_7__["SchemaFormModule"],
                ngx_md__WEBPACK_IMPORTED_MODULE_6__["NgxMdModule"]
            ].concat(COMPONENTS)
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());



/***/ }),

/***/ "./src/app/utils/download.ts":
/*!***********************************!*\
  !*** ./src/app/utils/download.ts ***!
  \***********************************/
/*! exports provided: funDownload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "funDownload", function() { return funDownload; });
/**
 * download
 * @param content 文件内容
 * @param filename 文件名称
 */
function funDownload(content, filename) {
    if (filename === void 0) { filename = 'template.html'; }
    var eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    var blob = new Blob([content]);
    eleLink.href = URL.createObjectURL(blob);
    document.body.appendChild(eleLink);
    eleLink.click();
    document.body.removeChild(eleLink);
}


/***/ }),

/***/ "./src/app/utils/formatTime.ts":
/*!*************************************!*\
  !*** ./src/app/utils/formatTime.ts ***!
  \*************************************/
/*! exports provided: formatTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/**
 * format time to string
 * @param time
 */
function formatTime(time) {
    var digits = [time.getHours(), time.getMinutes(), time.getSeconds()];
    var timeStr = '';
    for (var i = 0, len = digits.length; i < len; ++i) {
        timeStr += (digits[i] < 10 ? '0' : '') + digits[i];
        if (i < len - 1) {
            timeStr += ':';
        }
    }
    return time.getFullYear() + '/' + (time.getMonth() + 1) + '/' + time.getDate() + ' ' + timeStr;
}


/***/ }),

/***/ "./src/app/utils/promiseHandler.ts":
/*!*****************************************!*\
  !*** ./src/app/utils/promiseHandler.ts ***!
  \*****************************************/
/*! exports provided: promiseHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promiseHandler", function() { return promiseHandler; });
/* promise handler ,async/await no need try catch */
var promiseHandler = function (promise) { return promise.then(function (res) { return [null, res]; }).catch(function (err) { return [err, null]; }); };


/***/ }),

/***/ "./src/app/utils/setSplitPosition.ts":
/*!*******************************************!*\
  !*** ./src/app/utils/setSplitPosition.ts ***!
  \*******************************************/
/*! exports provided: initSplitEventHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initSplitEventHandler", function() { return initSplitEventHandler; });
function initSplitEventHandler() {
    $('#h-handler').mousedown(function () {
        window['handler_isDown'] = true;
    });
    $(window).mousemove(function (e) {
        if (window['handler_isDown']) {
            var left = e.clientX / window.innerWidth;
            setSplitPosition(left);
        }
    }).mouseup(function () {
        window['handler_isDown'] = false;
    });
    $(window).resize(function () {
    });
}
// set splitter position by percentage, left should be between 0 to 1
function setSplitPosition(percentage) {
    percentage = Math.min(0.9, Math.max(0.1, percentage));
    var left = percentage * 100;
    $('#code-container').css('width', left + '%');
    $('#view-container').css('width', (100 - left) + '%')
        .css('left', left + '%');
    $('#h-handler').css('left', left + '%');
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/lib/builder/bs-template-builder.ts":
/*!************************************************!*\
  !*** ./src/lib/builder/bs-template-builder.ts ***!
  \************************************************/
/*! exports provided: BsTmplBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsTmplBuilder", function() { return BsTmplBuilder; });
/*--------------------------------------------------------------
 *  Copyright (c) Nickbing Lao<giscafer@outlook.com>. All rights reserved.
 *  Licensed under the MIT License.
 *-------------------------------------------------------------*/
function BsTmplBuilder(registry, formProperty) {
    var templ = "";
    var fieldsets = formProperty.schema.fieldsets;
    if (fieldsets && fieldsets.length) {
        templ = '<form><fieldset>';
        for (var _i = 0, fieldsets_1 = fieldsets; _i < fieldsets_1.length; _i++) {
            var fieldset = fieldsets_1[_i];
            templ += fieldset.title ? ('<legend>' + fieldset.title + '</legend>') : '';
            for (var _a = 0, _b = fieldset.fields; _a < _b.length; _a++) {
                var fieldId = _b[_a];
                var property = formProperty.getProperty(fieldId);
                var widgetInfo = property.schema.widget;
                var WidgetClass = registry.getWidgetType(widgetInfo.id);
                // templ += '<div  *ngIf="property.visible" [class.has-error] = "!control.valid" [class.has-success] = "control.valid">';
                if (widgetInfo.id === 'array') {
                    // TODO array widget not support yet
                    templ += new WidgetClass(formProperty, registry).getTemplate(property.schema);
                }
                else {
                    templ += new WidgetClass().getTemplate(property.schema);
                }
                // templ += '</div>';
            }
        }
    }
    if (formProperty.schema.button !== undefined) {
        var button = formProperty.schema.button;
        var WidgetClass = registry.getWidgetType('button');
        var btnHtml = '', btnWidget = null, btnGrid = button.grid || {};
        for (var _c = 0, _d = button.items; _c < _d.length; _c++) {
            var btn = _d[_c];
            btnWidget = new WidgetClass();
            btnHtml += btnWidget.getTemplate(formProperty.schema, btn);
        }
        var listOfClassName = btnWidget.getLayoutClass({ grid: btnGrid });
        templ += "\n        <div class=\"form-group\">\n            <div class=\"" + listOfClassName.join(' ') + "\">\n                " + btnHtml + "\n            </div>\n        </div>\n        ";
    }
    templ += '</fieldset></form>';
    return templ;
}


/***/ }),

/***/ "./src/lib/builder/template/zorro-component.template.ts":
/*!**************************************************************!*\
  !*** ./src/lib/builder/template/zorro-component.template.ts ***!
  \**************************************************************/
/*! exports provided: getFormCode, getTableCode, getCompCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormCode", function() { return getFormCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTableCode", function() { return getTableCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompCode", function() { return getCompCode; });
/* harmony import */ var _utils_firstUpperCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/firstUpperCase */ "./src/lib/utils/firstUpperCase.ts");
/* without node.js */

function getFormCode(opts) {
    var fileNames = generateFileName(opts.fileName);
    return {
        fileNames: fileNames,
        htmlCode: opts.template,
        componentCode: getCompCode(fileNames, opts.modelName + ":any = {};", "", "")
    };
}
function getTableCode(opts) {
    var fileNames = generateFileName(opts.fileName);
    return {
        fileNames: fileNames,
        htmlCode: opts.template,
        componentCode: getCompCode(fileNames, "\n            " + opts.modelName + ":any = {};\n            // table variable\n            allChecked = false;\n            indeterminate = false;\n            displayData = [];\n\n            _columns = [];\n            columns = " + JSON.stringify(opts.columns, null, 4) + ";\n            data = " + JSON.stringify(opts.data, null, 4) + ";\n            ", "this.initCloumn();", "\n        // table methods\n        initCloumn() {\n            for (let i = 0; i < this.columns.length; i++) {\n                let arr = this.columns[i].split('-');\n                this._columns[i] = {};\n                Object.assign(this._columns[i],\n                    {\n                        header: arr[0],\n                        field: arr[1],\n                        width: arr[2]\n                    });\n            }\n        }\n\n        currentPageDataChange($event: Array<{ name: string; age: number; address: string; checked: boolean; disabled: boolean; }>): void {\n            this.displayData = $event;\n            this.refreshStatus();\n        }\n\n        refreshStatus(): void {\n            const allChecked = this.displayData.filter(value => !value.disabled).every(value => value.checked === true);\n            const allUnChecked = this.displayData.filter(value => !value.disabled).every(value => !value.checked);\n            this.allChecked = allChecked;\n            this.indeterminate = (!allChecked) && (!allUnChecked);\n        }\n\n        checkAll(value: boolean): void {\n            this.displayData.forEach(data => {\n                if (!data.disabled) {\n                    data.checked = value;\n                }\n            });\n            this.refreshStatus();\n        }")
    };
}
function getCompCode(names, variableSnippet, OnInitSnippet, methodSnippet) {
    var rawCode = "\n    import { Component, OnInit } from '@angular/core';\n    \n    @Component({ \n        selector: 'app-template',\n        templateUrl: './template.html'\n     })\n    export class TemplateComponent implements OnInit {\n     \n        " + variableSnippet + "\n        constructor(\n           \n        ) {\n\n        }\n\n        ngOnInit(): void {\n            " + OnInitSnippet + "\n        }\n\n        " + methodSnippet + "\n\n    }\n\n    ";
    return rawCode.replace(/app-template/, names.selector).replace(/template.html/, names.htmlFileName).replace(/TemplateComponent/, names.compClassName);
}
function generateFileName(fileName) {
    if (fileName === void 0) { fileName = 'template'; }
    var htmlFileName = fileName + '.component.html';
    var compFileName = fileName + '.component.ts';
    var compClassName = Object(_utils_firstUpperCase__WEBPACK_IMPORTED_MODULE_0__["firstUpperCase"])(fileName) + 'Component';
    return {
        selector: 'app-' + fileName.toLowerCase(),
        htmlFileName: htmlFileName,
        compFileName: compFileName,
        compClassName: compClassName
    };
}


/***/ }),

/***/ "./src/lib/builder/zorro-template-builder.ts":
/*!***************************************************!*\
  !*** ./src/lib/builder/zorro-template-builder.ts ***!
  \***************************************************/
/*! exports provided: ZorroTmplBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZorroTmplBuilder", function() { return ZorroTmplBuilder; });
/*--------------------------------------------------------------
 *  Copyright (c) Nickbing Lao<giscafer@outlook.com>. All rights reserved.
 *  Licensed under the MIT License.
 *-------------------------------------------------------------*/
function ZorroTmplBuilder(registry, formProperty) {
    var templ = "";
    var fieldsets = formProperty.schema.fieldsets;
    var layout = formProperty.schema.layout;
    var grid = formProperty.schema.grid || {};
    var style = formProperty.schema.style || '';
    var col_num = grid.col_num;
    var col_gutter = grid.col_gutter || 0;
    // let span = col_num ? 24 / col_num : 0;
    if (fieldsets && fieldsets.length) {
        templ = "\n        <form nz-form" + (layout ? " [nzLayout]=\"'" + layout + "'\"" : '') + (style ? " style=\"" + style + "\"" : '') + ">\n        ";
        for (var _i = 0, fieldsets_1 = fieldsets; _i < fieldsets_1.length; _i++) {
            var fieldset = fieldsets_1[_i];
            templ += fieldset.title ? ('<legend style="margin-top:20px;">' + fieldset.title + '</legend>') : '';
            templ +=
                "<div nz-row [nzGutter]=\"" + col_gutter + "\">";
            for (var _a = 0, _b = fieldset.fields; _a < _b.length; _a++) {
                var fieldId = _b[_a];
                var property = formProperty.getProperty(fieldId);
                var widgetInfo = property.schema.widget;
                var WidgetClass = registry.getWidgetType(widgetInfo.id || widgetInfo);
                templ += "\n            <div nz-col " + gridLayout(grid) + ">";
                if (widgetInfo.id === 'array') {
                    // TODO array widget not support yet
                    templ += new WidgetClass(formProperty, registry).getTemplate(property.schema);
                }
                else {
                    templ += new WidgetClass().getTemplate(property.schema);
                }
                templ += '</div>';
            }
            templ += "\n        </div>";
        }
    }
    if (formProperty.schema.button !== undefined) {
        var button = formProperty.schema.button;
        var WidgetClass = registry.getWidgetType('button');
        var btnHtml = '', btnWidget = null, btnGrid = button.grid || {};
        for (var _c = 0, _d = button.items; _c < _d.length; _c++) {
            var btn = _d[_c];
            btnWidget = new WidgetClass();
            btnHtml += btnWidget.getTemplate(formProperty.schema, btn) + '\n\t\t';
        }
        var listOfClassName = btnWidget.getLayoutClass({ grid: btnGrid, _prefixCls: 'ant-col' });
        templ += "\n            <nz-form-item nz-row>\n                <nz-form-control  [nzOffset]=\"7\" [nzSpan]=\"12\" class=\"" + listOfClassName.join(' ') + "\">\n                    " + btnHtml + "\n                </nz-form-control>\n            </nz-form-item>\n        ";
    }
    templ += '</form>';
    templ += buildTable(formProperty, registry);
    return templ;
}
function gridLayout(grid) {
    var _a = grid.sm, sm = _a === void 0 ? {} : _a, _b = grid.xs, xs = _b === void 0 ? {} : _b, _c = grid.md, md = _c === void 0 ? {} : _c, _d = grid.lg, lg = _d === void 0 ? {} : _d, _e = grid.xl, xl = _e === void 0 ? {} : _e, _f = grid.xxl, xxl = _f === void 0 ? {} : _f;
    var result = "" + (xs.span ? "nzXS=\"" + xs.span + "\"" : '') + (sm.span ? " nzSm=\"" + sm.span + "\"" : '') + (md.span ? " nzMd=\"" + md.span + "\"" : '') + (lg.span ? " nzLg=\"" + lg.span + "\"" : '') + (xl.span ? " nzXl=\"" + xl.span + "\"" : '') + (xxl.span ? " nzXXl=\"" + xxl.span + "\"" : '');
    return result;
}
function buildTable(formProperty, registry) {
    var schema = formProperty.schema;
    if (!schema.table)
        return '';
    var WidgetClass = null;
    if (schema.tableComponent === 'yzt-grid') {
        WidgetClass = registry.getWidgetType('yzt-grid');
    }
    else {
        WidgetClass = registry.getWidgetType('table');
    }
    var tableHtml = new WidgetClass().getTemplate();
    return tableHtml;
}


/***/ }),

/***/ "./src/lib/components/bs-form-builder.component.ts":
/*!*********************************************************!*\
  !*** ./src/lib/components/bs-form-builder.component.ts ***!
  \*********************************************************/
/*! exports provided: useFactory, BsFormBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFactory", function() { return useFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsFormBuilderComponent", function() { return BsFormBuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model */ "./src/lib/model/index.ts");
/* harmony import */ var _terminator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../terminator.service */ "./src/lib/terminator.service.ts");
/* harmony import */ var _schemavalidator_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../schemavalidator.factory */ "./src/lib/schemavalidator.factory.ts");
/* harmony import */ var _widget_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widget-factory */ "./src/lib/widget-factory.ts");
/* harmony import */ var _widget_registry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../widget-registry */ "./src/lib/widget-registry.ts");
/* harmony import */ var _widgets_bootstrap_defaultwidget_registry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widgets/bootstrap/defaultwidget-registry */ "./src/lib/widgets/bootstrap/defaultwidget-registry.ts");
/* harmony import */ var _builder_bs_template_builder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../builder/bs-template-builder */ "./src/lib/builder/bs-template-builder.ts");
/*--------------------------------------------------------------
 *  Copyright (c) Nickbing Lao<giscafer@outlook.com>. All rights reserved.
 *  Licensed under the MIT License.
 *-------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









function useFactory(schemaValidatorFactory, validatorRegistry) {
    return new _model__WEBPACK_IMPORTED_MODULE_2__["FormPropertyFactory"](schemaValidatorFactory, validatorRegistry);
}
;
var BsFormBuilderComponent = /** @class */ (function () {
    function BsFormBuilderComponent(registry, formPropertyFactory, actionRegistry, validatorRegistry, widgetFactory, cdr, terminator) {
        if (widgetFactory === void 0) { widgetFactory = null; }
        this.formPropertyFactory = formPropertyFactory;
        this.actionRegistry = actionRegistry;
        this.validatorRegistry = validatorRegistry;
        this.widgetFactory = widgetFactory;
        this.cdr = cdr;
        this.terminator = terminator;
        this.widgetInstanciated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.validators = {};
        this.schema = null;
        this.actions = {};
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.modelChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isValid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onErrorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onErrorsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBuilderFinish = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', function () { return null; });
        this.rootProperty = null;
        this.widget = null;
        this.buttons = [];
        this.registry = registry;
    }
    BsFormBuilderComponent_1 = BsFormBuilderComponent;
    BsFormBuilderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.terminator.onDestroy.subscribe(function (destroy) {
            if (destroy && _this.ref) {
                _this.ref.destroy();
            }
        });
    };
    BsFormBuilderComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.validators) {
            this.setValidators();
        }
        if (changes.actions) {
            this.setActions();
        }
        if (this.schema && !this.schema.type) {
            this.schema.type = 'object';
        }
        if (this.schema && changes.schema) {
            this[this.schema.modelName] = {};
            this.coverProperty(this.schema);
            if (this.schema.debug) {
                console.warn('schema debugger', this.schema);
            }
            if (!changes.schema.firstChange) {
                this.terminator.destroy();
            }
            _model__WEBPACK_IMPORTED_MODULE_2__["SchemaPreprocessor"].preprocess(this.schema);
            this.rootProperty = this.formPropertyFactory.createProperty(this.schema);
            this.rootProperty.valueChanges.subscribe(function (value) {
                if (_this.modelChanged.observers.length > 0) {
                    if (_this.model) {
                        Object.assign(_this.model, value);
                    }
                    else {
                        _this.model = value;
                    }
                    _this.modelChanged.emit(value);
                }
                _this.onChange.emit({ value: value });
            });
            this.rootProperty.errorsChanges.subscribe(function (value) {
                _this.onErrorChange.emit({ value: value });
                _this.isValid.emit(!(value && value.length));
            });
        }
        if (!this.rootProperty)
            return;
        if (this.schema && (changes.model || changes.schema)) {
            this.rootProperty.reset(this.model, false);
            this.cdr.detectChanges();
        }
        this._createForm(this.rootProperty.schema.widget);
    };
    BsFormBuilderComponent.prototype.coverProperty = function (schema) {
        var _this = this;
        Object.keys(schema.properties).forEach(function (key) {
            var p = schema.properties[key];
            p['name'] = p['name'] ? p['name'] : key;
            p['formId'] = 'field' + (BsFormBuilderComponent_1.counter++);
            p['modelName'] = schema.modelName || 'model';
            if (schema.grid) {
                Object.assign(p, { grid: schema.grid }, p.grid ? { grid: p.grid } : {});
            }
            /*  ListOfGridSizeName.forEach(name => {
                 if (schema[name]) {
                     Object.assign(p, { [name]: schema[name] }, p[name] ? { [name]: p[name] } : {});
                 }
             }); */
            if (p.items && p.properties && p.type === 'array') {
                _this.coverProperty(p.items);
            }
        });
    };
    BsFormBuilderComponent.prototype.setValidators = function () {
        this.validatorRegistry.clear();
        if (this.validators) {
            for (var validatorId in this.validators) {
                if (this.validators.hasOwnProperty(validatorId)) {
                    this.validatorRegistry.register(validatorId, this.validators[validatorId]);
                }
            }
        }
    };
    BsFormBuilderComponent.prototype.setActions = function () {
        this.actionRegistry.clear();
        if (this.actions) {
            for (var actionId in this.actions) {
                if (this.actions.hasOwnProperty(actionId)) {
                    this.actionRegistry.register(actionId, this.actions[actionId]);
                }
            }
        }
    };
    BsFormBuilderComponent.prototype.onWidgetInstanciated = function (widget) {
        this.widget = widget;
        var id = 'field' + (BsFormBuilderComponent_1.counter++);
        this.widget.formProperty = this.rootProperty;
        this.widget.schema = this.rootProperty.schema;
        this.widget.name = id;
        this.widget.id = id;
        this.widget.control = this.control;
    };
    BsFormBuilderComponent.prototype.reset = function () {
        this.rootProperty.reset(null, true);
    };
    BsFormBuilderComponent.prototype._createForm = function (widgetInfo) {
        var widgetTemplate = Object(_builder_bs_template_builder__WEBPACK_IMPORTED_MODULE_8__["BsTmplBuilder"])(this.registry, this.rootProperty);
        // let widgetTemplate = this.registry.getWidgetType(widgetInfo.id);
        var template = widgetTemplate;
        var properties = (_a = {
                "formProperty": this.rootProperty,
                "control": this.control,
                "property": { visible: true },
                "_debug_": this.rootProperty.schema.debug,
                "modelName": this.rootProperty.schema.modelName || 'model'
            },
            _a[this.rootProperty.schema.modelName || 'model'] = this.rootProperty.value || {},
            _a);
        this.ref = this.widgetFactory.addWidget(this.container, template, properties, this);
        this.widgetInstanciated.emit(this.ref.instance);
        this.widgetInstance = this.ref.instance;
        this.cdr.detectChanges();
        this.onBuilderFinish.emit({ code: template });
        var _a;
    };
    BsFormBuilderComponent.counter = 0;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BsFormBuilderComponent.prototype, "widgetInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BsFormBuilderComponent.prototype, "widgetInstanciated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('target', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], BsFormBuilderComponent.prototype, "container", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BsFormBuilderComponent.prototype, "validators", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BsFormBuilderComponent.prototype, "schema", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BsFormBuilderComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BsFormBuilderComponent.prototype, "actions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BsFormBuilderComponent.prototype, "onChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BsFormBuilderComponent.prototype, "modelChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BsFormBuilderComponent.prototype, "isValid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BsFormBuilderComponent.prototype, "onErrorChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BsFormBuilderComponent.prototype, "onErrorsChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BsFormBuilderComponent.prototype, "onBuilderFinish", void 0);
    BsFormBuilderComponent = BsFormBuilderComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bs-form-builder',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "<div #target></div>",
            providers: [
                _widget_factory__WEBPACK_IMPORTED_MODULE_5__["WidgetFactory"],
                _model__WEBPACK_IMPORTED_MODULE_2__["SchemaPreprocessor"],
                _model__WEBPACK_IMPORTED_MODULE_2__["ActionRegistry"],
                _model__WEBPACK_IMPORTED_MODULE_2__["ValidatorRegistry"],
                _terminator_service__WEBPACK_IMPORTED_MODULE_3__["TerminatorService"],
                {
                    provide: _model__WEBPACK_IMPORTED_MODULE_2__["FormPropertyFactory"],
                    useFactory: useFactory,
                    deps: [_schemavalidator_factory__WEBPACK_IMPORTED_MODULE_4__["SchemaValidatorFactory"], _model__WEBPACK_IMPORTED_MODULE_2__["ValidatorRegistry"]]
                },
                { provide: _widget_registry__WEBPACK_IMPORTED_MODULE_6__["WidgetRegistry"], useClass: _widgets_bootstrap_defaultwidget_registry__WEBPACK_IMPORTED_MODULE_7__["BootStrapDefaultWidgetRegistry"] }
            ]
        }),
        __metadata("design:paramtypes", [_widget_registry__WEBPACK_IMPORTED_MODULE_6__["WidgetRegistry"],
            _model__WEBPACK_IMPORTED_MODULE_2__["FormPropertyFactory"],
            _model__WEBPACK_IMPORTED_MODULE_2__["ActionRegistry"],
            _model__WEBPACK_IMPORTED_MODULE_2__["ValidatorRegistry"],
            _widget_factory__WEBPACK_IMPORTED_MODULE_5__["WidgetFactory"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _terminator_service__WEBPACK_IMPORTED_MODULE_3__["TerminatorService"]])
    ], BsFormBuilderComponent);
    return BsFormBuilderComponent;
    var BsFormBuilderComponent_1;
}());



/***/ }),

/***/ "./src/lib/components/zorro-form-builder.component.ts":
/*!************************************************************!*\
  !*** ./src/lib/components/zorro-form-builder.component.ts ***!
  \************************************************************/
/*! exports provided: useFactory, ZorroFormBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFactory", function() { return useFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZorroFormBuilderComponent", function() { return ZorroFormBuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _builder_template_zorro_component_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../builder/template/zorro-component.template */ "./src/lib/builder/template/zorro-component.template.ts");
/* harmony import */ var _builder_zorro_template_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../builder/zorro-template-builder */ "./src/lib/builder/zorro-template-builder.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./src/lib/index.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model */ "./src/lib/model/index.ts");
/* harmony import */ var _schemavalidator_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../schemavalidator.factory */ "./src/lib/schemavalidator.factory.ts");
/* harmony import */ var _terminator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../terminator.service */ "./src/lib/terminator.service.ts");
/* harmony import */ var _widget_registry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widget-registry */ "./src/lib/widget-registry.ts");
/* harmony import */ var _zorro_widget_factory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../zorro-widget-factory */ "./src/lib/zorro-widget-factory.ts");
/*--------------------------------------------------------------
 *  Copyright (c) Nickbing Lao<giscafer@outlook.com>. All rights reserved.
 *  Licensed under the MIT License.
 *-------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










function useFactory(schemaValidatorFactory, validatorRegistry) {
    return new _model__WEBPACK_IMPORTED_MODULE_5__["FormPropertyFactory"](schemaValidatorFactory, validatorRegistry);
}
;
var ZorroFormBuilderComponent = /** @class */ (function () {
    function ZorroFormBuilderComponent(registry, formPropertyFactory, actionRegistry, validatorRegistry, ZorroWidgetFactory, cdr, terminator) {
        if (ZorroWidgetFactory === void 0) { ZorroWidgetFactory = null; }
        this.formPropertyFactory = formPropertyFactory;
        this.actionRegistry = actionRegistry;
        this.validatorRegistry = validatorRegistry;
        this.ZorroWidgetFactory = ZorroWidgetFactory;
        this.cdr = cdr;
        this.terminator = terminator;
        this.widgetInstanciated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.validators = {};
        this.schema = null;
        this.actions = {};
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.modelChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isValid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onErrorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onErrorsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBuilderFinish = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', function () { return null; });
        this.rootProperty = null;
        this.widget = null;
        this.buttons = [];
        this.registry = registry;
    }
    ZorroFormBuilderComponent_1 = ZorroFormBuilderComponent;
    ZorroFormBuilderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.terminator.onDestroy.subscribe(function (destroy) {
            if (destroy && _this.ref) {
                _this.ref.destroy();
            }
        });
    };
    ZorroFormBuilderComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.validators) {
            this.setValidators();
        }
        if (changes.actions) {
            this.setActions();
        }
        if (this.schema && !this.schema.type) {
            this.schema.type = 'object';
        }
        if (this.schema && changes.schema) {
            this[this.schema.modelName] = {};
            this.coverProperty(this.schema);
            if (this.schema.debug) {
                console.warn('schema debugger', this.schema);
            }
            if (!changes.schema.firstChange) {
                this.terminator.destroy();
            }
            _model__WEBPACK_IMPORTED_MODULE_5__["SchemaPreprocessor"].preprocess(this.schema);
            this.rootProperty = this.formPropertyFactory.createProperty(this.schema);
            this.rootProperty.valueChanges.subscribe(function (value) {
                if (_this.modelChanged.observers.length > 0) {
                    if (_this.model) {
                        Object.assign(_this.model, value);
                    }
                    else {
                        _this.model = value;
                    }
                    _this.modelChanged.emit(value);
                }
                _this.onChange.emit({ value: value });
            });
            this.rootProperty.errorsChanges.subscribe(function (value) {
                _this.onErrorChange.emit({ value: value });
                _this.isValid.emit(!(value && value.length));
            });
        }
        if (!this.rootProperty)
            return;
        if (this.schema && (changes.model || changes.schema)) {
            this.rootProperty.reset(this.model, false);
            this.cdr.detectChanges();
        }
        this._createForm(this.rootProperty.schema.widget);
    };
    ZorroFormBuilderComponent.prototype.coverProperty = function (schema) {
        var _this = this;
        Object.keys(schema.properties).forEach(function (key) {
            var p = schema.properties[key];
            p['name'] = p['name'] ? p['name'] : key;
            p['formId'] = 'field' + (ZorroFormBuilderComponent_1.counter++);
            p['modelName'] = schema.modelName || 'model';
            p['_prefixCls'] = 'ant-col';
            if (schema.grid) {
                Object.assign(p, { grid: schema.grid }, p.grid ? { grid: p.grid } : {});
            }
            if (p.type === 'array' && p.widget === 'checkbox') {
                if (p.items && p.items.oneOf) {
                    var options = [];
                    for (var _i = 0, _a = p.items.oneOf; _i < _a.length; _i++) {
                        var one = _a[_i];
                        options.push({
                            label: one.description,
                            value: one.enum[0],
                            checked: one['checked'] || false
                        });
                    }
                    // p['checkOptions'] = options;
                    schema['checkOptions'] = options;
                }
            }
            if (p.items && p.properties && p.type === 'array') {
                _this.coverProperty(p.items);
            }
        });
    };
    ZorroFormBuilderComponent.prototype.setValidators = function () {
        this.validatorRegistry.clear();
        if (this.validators) {
            for (var validatorId in this.validators) {
                if (this.validators.hasOwnProperty(validatorId)) {
                    this.validatorRegistry.register(validatorId, this.validators[validatorId]);
                }
            }
        }
    };
    ZorroFormBuilderComponent.prototype.setActions = function () {
        this.actionRegistry.clear();
        if (this.actions) {
            for (var actionId in this.actions) {
                if (this.actions.hasOwnProperty(actionId)) {
                    this.actionRegistry.register(actionId, this.actions[actionId]);
                }
            }
        }
    };
    ZorroFormBuilderComponent.prototype.onWidgetInstanciated = function (widget) {
        this.widget = widget;
        var id = 'field' + (ZorroFormBuilderComponent_1.counter++);
        this.widget.formProperty = this.rootProperty;
        this.widget.schema = this.rootProperty.schema;
        this.widget.name = id;
        this.widget.id = id;
        this.widget.control = this.control;
    };
    ZorroFormBuilderComponent.prototype.reset = function () {
        this.rootProperty.reset(null, true);
    };
    ZorroFormBuilderComponent.prototype._createForm = function (widgetInfo) {
        var widgetTemplate = Object(_builder_zorro_template_builder__WEBPACK_IMPORTED_MODULE_3__["ZorroTmplBuilder"])(this.registry, this.rootProperty);
        // let widgetTemplate = this.registry.getWidgetType(widgetInfo.id);
        var template = widgetTemplate;
        var schema = this.rootProperty.schema;
        var fileName = schema.fileName || 'template';
        var properties = (_a = {
                "formProperty": this.rootProperty,
                "control": this.control,
                "property": { visible: true },
                "_debug_": schema.debug,
                "modelName": schema.modelName || 'model'
            },
            _a[schema.modelName || 'model'] = this.rootProperty.value || {},
            _a);
        properties[properties['modelName']]['checkOptions'] = schema.checkOptions || {}; // nz-checkbox-group
        var opts = {
            fileName: fileName,
            template: template,
            modelName: properties.modelName
        };
        this.container.clear();
        if (schema.table) {
            Object.assign(properties, {
                "columns": schema.table.columns,
                "data": schema.tableComponent === 'yzt-grid' ? { content: schema.table.data } : schema.table.data
            });
            Object.assign(opts, {
                "columns": schema.table.columns,
                "data": schema.tableComponent === 'yzt-grid' ? { content: schema.table.data } : schema.table.data
            });
            this.ref = this.ZorroWidgetFactory.createTableComponent(this.container, template, properties, this);
        }
        else {
            this.ref = this.ZorroWidgetFactory.addWidget(this.container, template, properties, this);
        }
        this.widgetInstanciated.emit(this.ref.instance);
        this.widgetInstance = this.ref.instance;
        this.cdr.detectChanges();
        this.onBuilderFinish.emit(schema.table ? Object(_builder_template_zorro_component_template__WEBPACK_IMPORTED_MODULE_2__["getTableCode"])(opts) : Object(_builder_template_zorro_component_template__WEBPACK_IMPORTED_MODULE_2__["getFormCode"])(opts));
        var _a;
    };
    ZorroFormBuilderComponent.counter = 0;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ZorroFormBuilderComponent.prototype, "widgetInfo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ZorroFormBuilderComponent.prototype, "widgetInstanciated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('target', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], ZorroFormBuilderComponent.prototype, "container", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ZorroFormBuilderComponent.prototype, "validators", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ZorroFormBuilderComponent.prototype, "schema", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ZorroFormBuilderComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ZorroFormBuilderComponent.prototype, "actions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ZorroFormBuilderComponent.prototype, "onChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ZorroFormBuilderComponent.prototype, "modelChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ZorroFormBuilderComponent.prototype, "isValid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ZorroFormBuilderComponent.prototype, "onErrorChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ZorroFormBuilderComponent.prototype, "onErrorsChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ZorroFormBuilderComponent.prototype, "onBuilderFinish", void 0);
    ZorroFormBuilderComponent = ZorroFormBuilderComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'zorro-form-builder',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "<div #target></div>",
            providers: [
                _zorro_widget_factory__WEBPACK_IMPORTED_MODULE_9__["ZorroWidgetFactory"],
                _model__WEBPACK_IMPORTED_MODULE_5__["SchemaPreprocessor"],
                _model__WEBPACK_IMPORTED_MODULE_5__["ActionRegistry"],
                _model__WEBPACK_IMPORTED_MODULE_5__["ValidatorRegistry"],
                _terminator_service__WEBPACK_IMPORTED_MODULE_7__["TerminatorService"],
                {
                    provide: _model__WEBPACK_IMPORTED_MODULE_5__["FormPropertyFactory"],
                    useFactory: useFactory,
                    deps: [_schemavalidator_factory__WEBPACK_IMPORTED_MODULE_6__["SchemaValidatorFactory"], _model__WEBPACK_IMPORTED_MODULE_5__["ValidatorRegistry"]]
                },
                { provide: _widget_registry__WEBPACK_IMPORTED_MODULE_8__["WidgetRegistry"], useClass: _index__WEBPACK_IMPORTED_MODULE_4__["ZorroDefaultWidgetRegistry"] }
            ]
        }),
        __metadata("design:paramtypes", [_widget_registry__WEBPACK_IMPORTED_MODULE_8__["WidgetRegistry"],
            _model__WEBPACK_IMPORTED_MODULE_5__["FormPropertyFactory"],
            _model__WEBPACK_IMPORTED_MODULE_5__["ActionRegistry"],
            _model__WEBPACK_IMPORTED_MODULE_5__["ValidatorRegistry"],
            _zorro_widget_factory__WEBPACK_IMPORTED_MODULE_9__["ZorroWidgetFactory"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _terminator_service__WEBPACK_IMPORTED_MODULE_7__["TerminatorService"]])
    ], ZorroFormBuilderComponent);
    return ZorroFormBuilderComponent;
    var ZorroFormBuilderComponent_1;
}());



/***/ }),

/***/ "./src/lib/dnd/abstract.component.ts":
/*!*******************************************!*\
  !*** ./src/lib/dnd/abstract.component.ts ***!
  \*******************************************/
/*! exports provided: AbstractComponent, AbstractHandleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractComponent", function() { return AbstractComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractHandleComponent", function() { return AbstractHandleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dnd_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dnd.config */ "./src/lib/dnd/dnd.config.ts");
/* harmony import */ var _dnd_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dnd.service */ "./src/lib/dnd/dnd.service.ts");
/* harmony import */ var _dnd_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dnd.utils */ "./src/lib/dnd/dnd.utils.ts");
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AbstractComponent = /** @class */ (function () {
    function AbstractComponent(elemRef, _dragDropService, _config, _cdr) {
        var _this = this;
        this._dragDropService = _dragDropService;
        this._config = _config;
        this._cdr = _cdr;
        /**
         * Whether the object is draggable. Default is true.
         */
        this._dragEnabled = false;
        /**
         * Allows drop on this element
         */
        this.dropEnabled = false;
        this.dropZones = [];
        this.cloneItem = false;
        // Assign default cursor unless overridden
        this._defaultCursor = _config.defaultCursor;
        this._elem = elemRef.nativeElement;
        this._elem.style.cursor = this._defaultCursor; // set default cursor on our element
        //
        // DROP events
        //
        this._elem.ondragenter = function (event) {
            _this._onDragEnter(event);
        };
        this._elem.ondragover = function (event) {
            _this._onDragOver(event);
            //
            if (event.dataTransfer != null) {
                event.dataTransfer.dropEffect = _this._config.dropEffect.name;
            }
            return false;
        };
        this._elem.ondragleave = function (event) {
            _this._onDragLeave(event);
        };
        this._elem.ondrop = function (event) {
            _this._onDrop(event);
        };
        //
        // Drag events
        //
        this._elem.onmousedown = function (event) {
            _this._target = event.target;
        };
        this._elem.ondragstart = function (event) {
            if (_this._dragHandle) {
                if (!_this._dragHandle.contains(_this._target)) {
                    event.preventDefault();
                    return;
                }
            }
            _this._onDragStart(event);
            //
            if (event.dataTransfer != null) {
                event.dataTransfer.setData('text', '');
                // Change drag effect
                event.dataTransfer.effectAllowed = _this.effectAllowed || _this._config.dragEffect.name;
                // Change drag image
                if (Object(_dnd_utils__WEBPACK_IMPORTED_MODULE_3__["isPresent"])(_this.dragImage)) {
                    if (Object(_dnd_utils__WEBPACK_IMPORTED_MODULE_3__["isString"])(_this.dragImage)) {
                        event.dataTransfer.setDragImage(Object(_dnd_utils__WEBPACK_IMPORTED_MODULE_3__["createImage"])(_this.dragImage));
                    }
                    else if (Object(_dnd_utils__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(_this.dragImage)) {
                        event.dataTransfer.setDragImage(Object(_dnd_utils__WEBPACK_IMPORTED_MODULE_3__["callFun"])(_this.dragImage));
                    }
                    else {
                        var img = _this.dragImage;
                        event.dataTransfer.setDragImage(img.imageElement, img.x_offset, img.y_offset);
                    }
                }
                else if (Object(_dnd_utils__WEBPACK_IMPORTED_MODULE_3__["isPresent"])(_this._config.dragImage)) {
                    var dragImage = _this._config.dragImage;
                    event.dataTransfer.setDragImage(dragImage.imageElement, dragImage.x_offset, dragImage.y_offset);
                }
                else if (_this.cloneItem) {
                    _this._dragHelper = _this._elem.cloneNode(true);
                    _this._dragHelper.classList.add('dnd-drag-item');
                    _this._dragHelper.style.position = "absolute";
                    _this._dragHelper.style.top = "0px";
                    _this._dragHelper.style.left = "-1000px";
                    _this._elem.parentElement.appendChild(_this._dragHelper);
                    event.dataTransfer.setDragImage(_this._dragHelper, event.offsetX, event.offsetY);
                }
                // Change drag cursor
                var cursorelem = (_this._dragHandle) ? _this._dragHandle : _this._elem;
                if (_this._dragEnabled) {
                    cursorelem.style.cursor = _this.effectCursor ? _this.effectCursor : _this._config.dragCursor;
                }
                else {
                    cursorelem.style.cursor = _this._defaultCursor;
                }
            }
        };
        this._elem.ondragend = function (event) {
            if (_this._elem.parentElement && _this._dragHelper) {
                _this._elem.parentElement.removeChild(_this._dragHelper);
            }
            // console.log('ondragend', event.target);
            _this._onDragEnd(event);
            // Restore style of dragged element
            var cursorelem = (_this._dragHandle) ? _this._dragHandle : _this._elem;
            cursorelem.style.cursor = _this._defaultCursor;
        };
    }
    Object.defineProperty(AbstractComponent.prototype, "dragEnabled", {
        get: function () {
            return this._dragEnabled;
        },
        set: function (enabled) {
            this._dragEnabled = !!enabled;
            this._elem.draggable = this._dragEnabled;
        },
        enumerable: true,
        configurable: true
    });
    AbstractComponent.prototype.setDragHandle = function (elem) {
        this._dragHandle = elem;
    };
    /******* Change detection ******/
    AbstractComponent.prototype.detectChanges = function () {
        var _this = this;
        // Programmatically run change detection to fix issue in Safari
        setTimeout(function () {
            if (_this._cdr && !_this._cdr.destroyed) {
                _this._cdr.detectChanges();
            }
        }, 250);
    };
    //****** Droppable *******//
    AbstractComponent.prototype._onDragEnter = function (event) {
        // console.log('ondragenter._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // event.preventDefault();
            this._onDragEnterCallback(event);
        }
    };
    AbstractComponent.prototype._onDragOver = function (event) {
        // // console.log('ondragover._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // The element is over the same source element - do nothing
            if (event.preventDefault) {
                // Necessary. Allows us to drop.
                event.preventDefault();
            }
            this._onDragOverCallback(event);
        }
    };
    AbstractComponent.prototype._onDragLeave = function (event) {
        // console.log('ondragleave._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // event.preventDefault();
            this._onDragLeaveCallback(event);
        }
    };
    AbstractComponent.prototype._onDrop = function (event) {
        // console.log('ondrop._isDropAllowed', this._isDropAllowed);
        if (this._isDropAllowed(event)) {
            // Necessary. Allows us to drop.
            this._preventAndStop(event);
            this._onDropCallback(event);
            this.detectChanges();
        }
    };
    AbstractComponent.prototype._isDropAllowed = function (event) {
        if ((this._dragDropService.isDragged || (event.dataTransfer && event.dataTransfer.files)) && this.dropEnabled) {
            // First, if `allowDrop` is set, call it to determine whether the
            // dragged element can be dropped here.
            if (this.allowDrop) {
                return this.allowDrop(this._dragDropService.dragData);
            }
            // Otherwise, use dropZones if they are set.
            if (this.dropZones.length === 0 && this._dragDropService.allowedDropZones.length === 0) {
                return true;
            }
            for (var i = 0; i < this._dragDropService.allowedDropZones.length; i++) {
                var dragZone = this._dragDropService.allowedDropZones[i];
                if (this.dropZones.indexOf(dragZone) !== -1) {
                    return true;
                }
            }
        }
        return false;
    };
    AbstractComponent.prototype._preventAndStop = function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        if (event.stopPropagation) {
            event.stopPropagation();
        }
    };
    //*********** Draggable **********//
    AbstractComponent.prototype._onDragStart = function (event) {
        //console.log('ondragstart.dragEnabled', this._dragEnabled);
        if (this._dragEnabled) {
            this._dragDropService.allowedDropZones = this.dropZones;
            // console.log('ondragstart.allowedDropZones', this._dragDropService.allowedDropZones);
            this._onDragStartCallback(event);
        }
    };
    AbstractComponent.prototype._onDragEnd = function (event) {
        this._dragDropService.allowedDropZones = [];
        // console.log('ondragend.allowedDropZones', this._dragDropService.allowedDropZones);
        this._onDragEndCallback(event);
    };
    //**** Drop Callbacks ****//
    AbstractComponent.prototype._onDragEnterCallback = function (event) { };
    AbstractComponent.prototype._onDragOverCallback = function (event) { };
    AbstractComponent.prototype._onDragLeaveCallback = function (event) { };
    AbstractComponent.prototype._onDropCallback = function (event) { };
    //**** Drag Callbacks ****//
    AbstractComponent.prototype._onDragStartCallback = function (event) { };
    AbstractComponent.prototype._onDragEndCallback = function (event) { };
    AbstractComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _dnd_service__WEBPACK_IMPORTED_MODULE_2__["DragDropService"], _dnd_config__WEBPACK_IMPORTED_MODULE_1__["DragDropConfig"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], AbstractComponent);
    return AbstractComponent;
}());

var AbstractHandleComponent = /** @class */ (function () {
    function AbstractHandleComponent(elemRef, _dragDropService, _config, _Component, _cdr) {
        this._dragDropService = _dragDropService;
        this._config = _config;
        this._Component = _Component;
        this._cdr = _cdr;
        this._elem = elemRef.nativeElement;
        this._Component.setDragHandle(this._elem);
    }
    return AbstractHandleComponent;
}());



/***/ }),

/***/ "./src/lib/dnd/dnd.config.ts":
/*!***********************************!*\
  !*** ./src/lib/dnd/dnd.config.ts ***!
  \***********************************/
/*! exports provided: DataTransferEffect, DragImage, DragDropConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTransferEffect", function() { return DataTransferEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragImage", function() { return DragImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropConfig", function() { return DragDropConfig; });
/* harmony import */ var _dnd_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dnd.utils */ "./src/lib/dnd/dnd.utils.ts");
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd

var DataTransferEffect = /** @class */ (function () {
    function DataTransferEffect(name) {
        this.name = name;
    }
    DataTransferEffect.COPY = new DataTransferEffect('copy');
    DataTransferEffect.LINK = new DataTransferEffect('link');
    DataTransferEffect.MOVE = new DataTransferEffect('move');
    DataTransferEffect.NONE = new DataTransferEffect('none');
    return DataTransferEffect;
}());

var DragImage = /** @class */ (function () {
    function DragImage(imageElement, x_offset, y_offset) {
        if (x_offset === void 0) { x_offset = 0; }
        if (y_offset === void 0) { y_offset = 0; }
        this.imageElement = imageElement;
        this.x_offset = x_offset;
        this.y_offset = y_offset;
        if (Object(_dnd_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(this.imageElement)) {
            // Create real image from string source
            var imgScr = this.imageElement;
            this.imageElement = new HTMLImageElement();
            this.imageElement.src = imgScr;
        }
    }
    return DragImage;
}());

var DragDropConfig = /** @class */ (function () {
    function DragDropConfig() {
        this.onDragStartClass = "dnd-drag-start";
        this.onDragEnterClass = "dnd-drag-enter";
        this.onDragOverClass = "dnd-drag-over";
        this.onSortableDragClass = "dnd-sortable-drag";
        this.dragEffect = DataTransferEffect.MOVE;
        this.dropEffect = DataTransferEffect.MOVE;
        this.dragCursor = "move";
        this.defaultCursor = "pointer";
    }
    return DragDropConfig;
}());



/***/ }),

/***/ "./src/lib/dnd/dnd.module.ts":
/*!***********************************!*\
  !*** ./src/lib/dnd/dnd.module.ts ***!
  \***********************************/
/*! exports provided: providers, DndModule, AbstractComponent, AbstractHandleComponent, DataTransferEffect, DragImage, DragDropConfig, DragDropData, dragDropServiceFactory, DragDropService, dragDropSortableServiceFactory, DragDropSortableService, DraggableComponent, DraggableHandleComponent, DroppableComponent, SortableContainer, SortableComponent, SortableHandleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providers", function() { return providers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DndModule", function() { return DndModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dnd_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dnd.config */ "./src/lib/dnd/dnd.config.ts");
/* harmony import */ var _dnd_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dnd.service */ "./src/lib/dnd/dnd.service.ts");
/* harmony import */ var _draggable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draggable.component */ "./src/lib/dnd/draggable.component.ts");
/* harmony import */ var _droppable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./droppable.component */ "./src/lib/dnd/droppable.component.ts");
/* harmony import */ var _sortable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sortable.component */ "./src/lib/dnd/sortable.component.ts");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./abstract.component */ "./src/lib/dnd/abstract.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractComponent", function() { return _abstract_component__WEBPACK_IMPORTED_MODULE_6__["AbstractComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractHandleComponent", function() { return _abstract_component__WEBPACK_IMPORTED_MODULE_6__["AbstractHandleComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTransferEffect", function() { return _dnd_config__WEBPACK_IMPORTED_MODULE_1__["DataTransferEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragImage", function() { return _dnd_config__WEBPACK_IMPORTED_MODULE_1__["DragImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragDropConfig", function() { return _dnd_config__WEBPACK_IMPORTED_MODULE_1__["DragDropConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragDropData", function() { return _dnd_service__WEBPACK_IMPORTED_MODULE_2__["DragDropData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dragDropServiceFactory", function() { return _dnd_service__WEBPACK_IMPORTED_MODULE_2__["dragDropServiceFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragDropService", function() { return _dnd_service__WEBPACK_IMPORTED_MODULE_2__["DragDropService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dragDropSortableServiceFactory", function() { return _dnd_service__WEBPACK_IMPORTED_MODULE_2__["dragDropSortableServiceFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragDropSortableService", function() { return _dnd_service__WEBPACK_IMPORTED_MODULE_2__["DragDropSortableService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DraggableComponent", function() { return _draggable_component__WEBPACK_IMPORTED_MODULE_3__["DraggableComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DraggableHandleComponent", function() { return _draggable_component__WEBPACK_IMPORTED_MODULE_3__["DraggableHandleComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DroppableComponent", function() { return _droppable_component__WEBPACK_IMPORTED_MODULE_4__["DroppableComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortableContainer", function() { return _sortable_component__WEBPACK_IMPORTED_MODULE_5__["SortableContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortableComponent", function() { return _sortable_component__WEBPACK_IMPORTED_MODULE_5__["SortableComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortableHandleComponent", function() { return _sortable_component__WEBPACK_IMPORTED_MODULE_5__["SortableHandleComponent"]; });

// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var providers = [
    _dnd_config__WEBPACK_IMPORTED_MODULE_1__["DragDropConfig"],
    { provide: _dnd_service__WEBPACK_IMPORTED_MODULE_2__["DragDropService"], useFactory: _dnd_service__WEBPACK_IMPORTED_MODULE_2__["dragDropServiceFactory"] },
    { provide: _dnd_service__WEBPACK_IMPORTED_MODULE_2__["DragDropSortableService"], useFactory: _dnd_service__WEBPACK_IMPORTED_MODULE_2__["dragDropSortableServiceFactory"], deps: [_dnd_config__WEBPACK_IMPORTED_MODULE_1__["DragDropConfig"]] }
];
var DndModule = /** @class */ (function () {
    function DndModule() {
    }
    DndModule_1 = DndModule;
    DndModule.forRoot = function () {
        return {
            ngModule: DndModule_1,
            providers: providers
        };
    };
    DndModule = DndModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_draggable_component__WEBPACK_IMPORTED_MODULE_3__["DraggableComponent"], _draggable_component__WEBPACK_IMPORTED_MODULE_3__["DraggableHandleComponent"], _droppable_component__WEBPACK_IMPORTED_MODULE_4__["DroppableComponent"], _sortable_component__WEBPACK_IMPORTED_MODULE_5__["SortableContainer"], _sortable_component__WEBPACK_IMPORTED_MODULE_5__["SortableComponent"], _sortable_component__WEBPACK_IMPORTED_MODULE_5__["SortableHandleComponent"]],
            exports: [_draggable_component__WEBPACK_IMPORTED_MODULE_3__["DraggableComponent"], _draggable_component__WEBPACK_IMPORTED_MODULE_3__["DraggableHandleComponent"], _droppable_component__WEBPACK_IMPORTED_MODULE_4__["DroppableComponent"], _sortable_component__WEBPACK_IMPORTED_MODULE_5__["SortableContainer"], _sortable_component__WEBPACK_IMPORTED_MODULE_5__["SortableComponent"], _sortable_component__WEBPACK_IMPORTED_MODULE_5__["SortableHandleComponent"]],
        })
    ], DndModule);
    return DndModule;
    var DndModule_1;
}());



/***/ }),

/***/ "./src/lib/dnd/dnd.service.ts":
/*!************************************!*\
  !*** ./src/lib/dnd/dnd.service.ts ***!
  \************************************/
/*! exports provided: DragDropData, dragDropServiceFactory, DragDropService, dragDropSortableServiceFactory, DragDropSortableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropData", function() { return DragDropData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragDropServiceFactory", function() { return dragDropServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropService", function() { return DragDropService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragDropSortableServiceFactory", function() { return dragDropSortableServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropSortableService", function() { return DragDropSortableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dnd_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dnd.config */ "./src/lib/dnd/dnd.config.ts");
/* harmony import */ var _dnd_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dnd.utils */ "./src/lib/dnd/dnd.utils.ts");
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DragDropData = /** @class */ (function () {
    function DragDropData() {
    }
    return DragDropData;
}());

function dragDropServiceFactory() {
    return new DragDropService();
}
var DragDropService = /** @class */ (function () {
    function DragDropService() {
        this.allowedDropZones = [];
    }
    DragDropService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DragDropService);
    return DragDropService;
}());

function dragDropSortableServiceFactory(config) {
    return new DragDropSortableService(config);
}
var DragDropSortableService = /** @class */ (function () {
    function DragDropSortableService(_config) {
        this._config = _config;
    }
    Object.defineProperty(DragDropSortableService.prototype, "elem", {
        get: function () {
            return this._elem;
        },
        enumerable: true,
        configurable: true
    });
    DragDropSortableService.prototype.markSortable = function (elem) {
        if (Object(_dnd_utils__WEBPACK_IMPORTED_MODULE_2__["isPresent"])(this._elem)) {
            this._elem.classList.remove(this._config.onSortableDragClass);
        }
        if (Object(_dnd_utils__WEBPACK_IMPORTED_MODULE_2__["isPresent"])(elem)) {
            this._elem = elem;
            this._elem.classList.add(this._config.onSortableDragClass);
        }
    };
    DragDropSortableService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_dnd_config__WEBPACK_IMPORTED_MODULE_1__["DragDropConfig"]])
    ], DragDropSortableService);
    return DragDropSortableService;
}());



/***/ }),

/***/ "./src/lib/dnd/dnd.utils.ts":
/*!**********************************!*\
  !*** ./src/lib/dnd/dnd.utils.ts ***!
  \**********************************/
/*! exports provided: isString, isPresent, isFunction, createImage, callFun */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPresent", function() { return isPresent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImage", function() { return createImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callFun", function() { return callFun; });
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
/**
 * Check and return true if an object is type of string
 */
function isString(obj) {
    return typeof obj === "string";
}
/**
 * Check and return true if an object not undefined or null
 */
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
/**
 * Check and return true if an object is type of Function
 */
function isFunction(obj) {
    return typeof obj === "function";
}
/**
 * Create Image element with specified url string
 */
function createImage(src) {
    var img = new HTMLImageElement();
    img.src = src;
    return img;
}
/**
 * Call the function
 */
function callFun(fun) {
    return fun();
}


/***/ }),

/***/ "./src/lib/dnd/draggable.component.ts":
/*!********************************************!*\
  !*** ./src/lib/dnd/draggable.component.ts ***!
  \********************************************/
/*! exports provided: DraggableComponent, DraggableHandleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableComponent", function() { return DraggableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableHandleComponent", function() { return DraggableHandleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract.component */ "./src/lib/dnd/abstract.component.ts");
/* harmony import */ var _dnd_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dnd.config */ "./src/lib/dnd/dnd.config.ts");
/* harmony import */ var _dnd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dnd.service */ "./src/lib/dnd/dnd.service.ts");
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DraggableComponent = /** @class */ (function (_super) {
    __extends(DraggableComponent, _super);
    function DraggableComponent(elemRef, dragDropService, config, cdr) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        /**
         * Callback function called when the drag actions happened.
         */
        _this.onDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Callback function called when the drag action ends with a valid drop action.
         * It is activated after the on-drop-success callback
         */
        _this.onDragSuccessCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this._defaultCursor = _this._elem.style.cursor;
        _this.dragEnabled = true;
        return _this;
    }
    Object.defineProperty(DraggableComponent.prototype, "draggable", {
        set: function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "dropzones", {
        set: function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DraggableComponent.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    DraggableComponent.prototype._onDragStartCallback = function (event) {
        this._dragDropService.isDragged = true;
        this._dragDropService.dragData = this.dragData;
        this._dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
        this._elem.classList.add(this._config.onDragStartClass);
        //
        this.onDragStart.emit({ dragData: this.dragData, mouseEvent: event });
    };
    DraggableComponent.prototype._onDragEndCallback = function (event) {
        this._dragDropService.isDragged = false;
        this._dragDropService.dragData = null;
        this._dragDropService.onDragSuccessCallback = null;
        this._elem.classList.remove(this._config.onDragStartClass);
        //
        this.onDragEnd.emit({ dragData: this.dragData, mouseEvent: event });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("dragEnabled"),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], DraggableComponent.prototype, "draggable", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DraggableComponent.prototype, "onDragStart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DraggableComponent.prototype, "onDragEnd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DraggableComponent.prototype, "dragData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("onDragSuccess"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DraggableComponent.prototype, "onDragSuccessCallback", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("dropZones"),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DraggableComponent.prototype, "dropzones", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("effectAllowed"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DraggableComponent.prototype, "effectallowed", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("effectCursor"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DraggableComponent.prototype, "effectcursor", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DraggableComponent.prototype, "dragImage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DraggableComponent.prototype, "cloneItem", void 0);
    DraggableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[dnd-draggable]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _dnd_service__WEBPACK_IMPORTED_MODULE_3__["DragDropService"], _dnd_config__WEBPACK_IMPORTED_MODULE_2__["DragDropConfig"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], DraggableComponent);
    return DraggableComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_1__["AbstractComponent"]));

var DraggableHandleComponent = /** @class */ (function (_super) {
    __extends(DraggableHandleComponent, _super);
    function DraggableHandleComponent(elemRef, dragDropService, config, _Component, cdr) {
        return _super.call(this, elemRef, dragDropService, config, _Component, cdr) || this;
    }
    DraggableHandleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[dnd-draggable-handle]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _dnd_service__WEBPACK_IMPORTED_MODULE_3__["DragDropService"], _dnd_config__WEBPACK_IMPORTED_MODULE_2__["DragDropConfig"], DraggableComponent,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], DraggableHandleComponent);
    return DraggableHandleComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_1__["AbstractHandleComponent"]));



/***/ }),

/***/ "./src/lib/dnd/droppable.component.ts":
/*!********************************************!*\
  !*** ./src/lib/dnd/droppable.component.ts ***!
  \********************************************/
/*! exports provided: DroppableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DroppableComponent", function() { return DroppableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract.component */ "./src/lib/dnd/abstract.component.ts");
/* harmony import */ var _dnd_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dnd.config */ "./src/lib/dnd/dnd.config.ts");
/* harmony import */ var _dnd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dnd.service */ "./src/lib/dnd/dnd.service.ts");
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DroppableComponent = /** @class */ (function (_super) {
    __extends(DroppableComponent, _super);
    function DroppableComponent(elemRef, dragDropService, config, cdr) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        /**
         * Callback function called when the drop action completes correctly.
         * It is activated before the on-drag-success callback.
         */
        _this.onDropSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onDragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onDragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onDragLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.dropEnabled = true;
        return _this;
    }
    Object.defineProperty(DroppableComponent.prototype, "droppable", {
        set: function (value) {
            this.dropEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "allowdrop", {
        set: function (value) {
            this.allowDrop = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "dropzones", {
        set: function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DroppableComponent.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    DroppableComponent.prototype._onDragEnterCallback = function (event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.add(this._config.onDragEnterClass);
            this.onDragEnter.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    };
    DroppableComponent.prototype._onDragOverCallback = function (event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.add(this._config.onDragOverClass);
            this.onDragOver.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    };
    ;
    DroppableComponent.prototype._onDragLeaveCallback = function (event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.remove(this._config.onDragOverClass);
            this._elem.classList.remove(this._config.onDragEnterClass);
            this.onDragLeave.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    };
    ;
    DroppableComponent.prototype._onDropCallback = function (event) {
        var dataTransfer = event.dataTransfer;
        if (this._dragDropService.isDragged || (dataTransfer && dataTransfer.files)) {
            this.onDropSuccess.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
            if (this._dragDropService.onDragSuccessCallback) {
                this._dragDropService.onDragSuccessCallback.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
            }
            this._elem.classList.remove(this._config.onDragOverClass);
            this._elem.classList.remove(this._config.onDragEnterClass);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("dropEnabled"),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], DroppableComponent.prototype, "droppable", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DroppableComponent.prototype, "onDropSuccess", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DroppableComponent.prototype, "onDragEnter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DroppableComponent.prototype, "onDragOver", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DroppableComponent.prototype, "onDragLeave", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("allowDrop"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function])
    ], DroppableComponent.prototype, "allowdrop", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("dropZones"),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DroppableComponent.prototype, "dropzones", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("effectAllowed"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DroppableComponent.prototype, "effectallowed", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("effectCursor"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DroppableComponent.prototype, "effectcursor", null);
    DroppableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[dnd-droppable]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _dnd_service__WEBPACK_IMPORTED_MODULE_3__["DragDropService"], _dnd_config__WEBPACK_IMPORTED_MODULE_2__["DragDropConfig"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], DroppableComponent);
    return DroppableComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_1__["AbstractComponent"]));



/***/ }),

/***/ "./src/lib/dnd/sortable.component.ts":
/*!*******************************************!*\
  !*** ./src/lib/dnd/sortable.component.ts ***!
  \*******************************************/
/*! exports provided: SortableContainer, SortableComponent, SortableHandleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableContainer", function() { return SortableContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableComponent", function() { return SortableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableHandleComponent", function() { return SortableHandleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract.component */ "./src/lib/dnd/abstract.component.ts");
/* harmony import */ var _dnd_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dnd.config */ "./src/lib/dnd/dnd.config.ts");
/* harmony import */ var _dnd_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dnd.service */ "./src/lib/dnd/dnd.service.ts");
// Copyright (C) 2016-2018 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SortableContainer = /** @class */ (function (_super) {
    __extends(SortableContainer, _super);
    function SortableContainer(elemRef, dragDropService, config, cdr, _sortableDataService) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        _this.elemRef = elemRef;
        _this._sortableDataService = _sortableDataService;
        _this._dragCopy = false;
        _this._sortableData = [];
        _this.dragEnabled = false;
        return _this;
    }
    Object.defineProperty(SortableContainer.prototype, "draggable", {
        set: function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableContainer.prototype, "dragCopy", {
        get: function () {
            return this._dragCopy;
        },
        set: function (value) {
            this._dragCopy = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableContainer.prototype, "sortableData", {
        get: function () {
            return this._sortableData;
        },
        set: function (sortableData) {
            this._sortableData = sortableData;
            if (sortableData instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]) {
                this.sortableHandler = new SortableFormArrayHandler();
            }
            else {
                this.sortableHandler = new SortableArrayHandler();
            }
            //
            this.dropEnabled = !!this._sortableData;
            // console.log("collection is changed, drop enabled: " + this.dropEnabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableContainer.prototype, "dropzones", {
        set: function (value) {
            this.dropZones = value;
        },
        enumerable: true,
        configurable: true
    });
    SortableContainer.prototype.getId = function () {
        return this.elemRef.nativeElement.getAttribute('id');
    };
    SortableContainer.prototype._onDragEnterCallback = function (event) {
        if (this._sortableDataService.isDragged) {
            var item = this._sortableDataService.sortableContainer.getItemAt(this._sortableDataService.index);
            // Check does element exist in sortableData of this Container
            if (this.indexOf(item) === -1) {
                // Let's add it
                // console.log('Container._onDragEnterCallback. drag node [' + this._sortableDataService.index.toString() + '] over parent node');
                // Remove item from previouse list except that sourceList dragCopy is true
                if (!this._sortableDataService.sortableContainer.dragCopy) {
                    this._sortableDataService.sortableContainer.removeItemAt(this._sortableDataService.index);
                }
                else {
                    if (this._sortableDataService.sortableContainer.getId() === this.getId()) {
                        return;
                    }
                }
                if (this._sortableDataService.sortableContainer._sortableData.length === 0) {
                    this._sortableDataService.sortableContainer.dropEnabled = true;
                }
                // Add item to new list
                this.insertItemAt(item, 0);
                this._sortableDataService.sortableContainer = this;
                this._sortableDataService.index = 0;
            }
            // Refresh changes in properties of container component
            this.detectChanges();
        }
    };
    SortableContainer.prototype.getItemAt = function (index) {
        return this.sortableHandler.getItemAt(this._sortableData, index);
    };
    SortableContainer.prototype.indexOf = function (item) {
        return this.sortableHandler.indexOf(this._sortableData, item);
    };
    SortableContainer.prototype.removeItemAt = function (index) {
        this.sortableHandler.removeItemAt(this._sortableData, index);
    };
    SortableContainer.prototype.insertItemAt = function (item, index) {
        this.sortableHandler.insertItemAt(this._sortableData, item, index);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("dragEnabled"),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SortableContainer.prototype, "draggable", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SortableContainer.prototype, "dragCopy", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SortableContainer.prototype, "sortableData", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("dropZones"),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], SortableContainer.prototype, "dropzones", null);
    SortableContainer = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[dnd-sortable-container]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _dnd_service__WEBPACK_IMPORTED_MODULE_4__["DragDropService"], _dnd_config__WEBPACK_IMPORTED_MODULE_3__["DragDropConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _dnd_service__WEBPACK_IMPORTED_MODULE_4__["DragDropSortableService"]])
    ], SortableContainer);
    return SortableContainer;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"]));

var SortableArrayHandler = /** @class */ (function () {
    function SortableArrayHandler() {
    }
    SortableArrayHandler.prototype.getItemAt = function (sortableData, index) {
        return sortableData[index];
    };
    SortableArrayHandler.prototype.indexOf = function (sortableData, item) {
        return sortableData.indexOf(item);
    };
    SortableArrayHandler.prototype.removeItemAt = function (sortableData, index) {
        sortableData.splice(index, 1);
    };
    SortableArrayHandler.prototype.insertItemAt = function (sortableData, item, index) {
        sortableData.splice(index, 0, item);
    };
    return SortableArrayHandler;
}());
var SortableFormArrayHandler = /** @class */ (function () {
    function SortableFormArrayHandler() {
    }
    SortableFormArrayHandler.prototype.getItemAt = function (sortableData, index) {
        return sortableData.at(index);
    };
    SortableFormArrayHandler.prototype.indexOf = function (sortableData, item) {
        return sortableData.controls.indexOf(item);
    };
    SortableFormArrayHandler.prototype.removeItemAt = function (sortableData, index) {
        sortableData.removeAt(index);
    };
    SortableFormArrayHandler.prototype.insertItemAt = function (sortableData, item, index) {
        sortableData.insert(index, item);
    };
    return SortableFormArrayHandler;
}());
var SortableComponent = /** @class */ (function (_super) {
    __extends(SortableComponent, _super);
    function SortableComponent(elemRef, dragDropService, config, _sortableContainer, _sortableDataService, cdr) {
        var _this = _super.call(this, elemRef, dragDropService, config, cdr) || this;
        _this._sortableContainer = _sortableContainer;
        _this._sortableDataService = _sortableDataService;
        /**
         * Callback function called when the drag action ends with a valid drop action.
         * It is activated after the on-drop-success callback
         */
        _this.onDragSuccessCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onDragStartCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onDragOverCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onDragEndCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onDropSuccessCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.dropZones = _this._sortableContainer.dropZones;
        _this.dragEnabled = true;
        _this.dropEnabled = true;
        return _this;
    }
    Object.defineProperty(SortableComponent.prototype, "draggable", {
        set: function (value) {
            this.dragEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "droppable", {
        set: function (value) {
            this.dropEnabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "effectallowed", {
        /**
         * Drag allowed effect
         */
        set: function (value) {
            this.effectAllowed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortableComponent.prototype, "effectcursor", {
        /**
         * Drag effect cursor
         */
        set: function (value) {
            this.effectCursor = value;
        },
        enumerable: true,
        configurable: true
    });
    SortableComponent.prototype._onDragStartCallback = function (event) {
        // console.log('_onDragStartCallback. dragging elem with index ' + this.index);
        this._sortableDataService.sortableContainer = this._sortableContainer;
        this._sortableDataService.index = this.index;
        this._sortableDataService.isDragged = true;
        this._sortableDataService.markSortable(this._elem);
        // Add dragData
        this._dragDropService.isDragged = true;
        this._dragDropService.dragData = this.dragData;
        this._dragDropService.onDragSuccessCallback = this.onDragSuccessCallback;
        //
        this.onDragStartCallback.emit(this._dragDropService.dragData);
    };
    SortableComponent.prototype._onDragOverCallback = function (event) {
        if (this._sortableDataService.isDragged && this._elem !== this._sortableDataService.elem) {
            // console.log('_onDragOverCallback. dragging elem with index ' + this.index);
            this._sortableDataService.sortableContainer = this._sortableContainer;
            this._sortableDataService.index = this.index;
            this._sortableDataService.markSortable(this._elem);
            this.onDragOverCallback.emit(this._dragDropService.dragData);
        }
    };
    SortableComponent.prototype._onDragEndCallback = function (event) {
        // console.log('_onDragEndCallback. end dragging elem with index ' + this.index);
        this._sortableDataService.isDragged = false;
        this._sortableDataService.sortableContainer = null;
        this._sortableDataService.index = null;
        this._sortableDataService.markSortable(null);
        // Add dragGata
        this._dragDropService.isDragged = false;
        this._dragDropService.dragData = null;
        this._dragDropService.onDragSuccessCallback = null;
        //
        this.onDragEndCallback.emit(this._dragDropService.dragData);
    };
    SortableComponent.prototype._onDragEnterCallback = function (event) {
        if (this._sortableDataService.isDragged) {
            // console.log(this._sortableDataService.sortableContainer.getId())
            this._sortableDataService.markSortable(this._elem);
            if ((this.index !== this._sortableDataService.index) ||
                (this._sortableDataService.sortableContainer.sortableData !== this._sortableContainer.sortableData)) {
                // console.log('Component._onDragEnterCallback. drag node [' + this.index + '] over node [' + this._sortableDataService.index + ']');
                // Get item
                var item = this._sortableDataService.sortableContainer.getItemAt(this._sortableDataService.index);
                // Remove item from previouse list
                if (!this._sortableDataService.sortableContainer.dragCopy) {
                    this._sortableDataService.sortableContainer.removeItemAt(this._sortableDataService.index);
                    // console.log(this._sortableDataService.sortableContainer.getId(),this._sortableDataService.sortableContainer.dragCopy)
                }
                else {
                    if (this._sortableDataService.sortableContainer.getId() === this._sortableContainer.getId()) {
                        return;
                    }
                }
                if (this._sortableDataService.sortableContainer.sortableData.length === 0) {
                    this._sortableDataService.sortableContainer.dropEnabled = true;
                }
                // Add item to new list
                this._sortableContainer.insertItemAt(item, this.index);
                if (this._sortableContainer.dropEnabled) {
                    this._sortableContainer.dropEnabled = false;
                }
                this._sortableDataService.sortableContainer = this._sortableContainer;
                this._sortableDataService.index = this.index;
                this.detectChanges();
            }
        }
    };
    SortableComponent.prototype._onDropCallback = function (event) {
        if (this._sortableDataService.isDragged) {
            // console.log('onDropCallback.onDropSuccessCallback.dragData', this._dragDropService.dragData);
            this.onDropSuccessCallback.emit(this._dragDropService.dragData);
            if (this._dragDropService.onDragSuccessCallback) {
                // console.log('onDropCallback.onDragSuccessCallback.dragData', this._dragDropService.dragData);
                this._dragDropService.onDragSuccessCallback.emit(this._dragDropService.dragData);
            }
            // Refresh changes in properties of container component
            this._sortableContainer.detectChanges();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('sortableIndex'),
        __metadata("design:type", Number)
    ], SortableComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("dragEnabled"),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SortableComponent.prototype, "draggable", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("dropEnabled"),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SortableComponent.prototype, "droppable", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SortableComponent.prototype, "dragData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("effectAllowed"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SortableComponent.prototype, "effectallowed", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("effectCursor"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SortableComponent.prototype, "effectcursor", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("onDragSuccess"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SortableComponent.prototype, "onDragSuccessCallback", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("onDragStart"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SortableComponent.prototype, "onDragStartCallback", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("onDragOver"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SortableComponent.prototype, "onDragOverCallback", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("onDragEnd"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SortableComponent.prototype, "onDragEndCallback", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("onDropSuccess"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SortableComponent.prototype, "onDropSuccessCallback", void 0);
    SortableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[dnd-sortable]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _dnd_service__WEBPACK_IMPORTED_MODULE_4__["DragDropService"], _dnd_config__WEBPACK_IMPORTED_MODULE_3__["DragDropConfig"],
            SortableContainer,
            _dnd_service__WEBPACK_IMPORTED_MODULE_4__["DragDropSortableService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], SortableComponent);
    return SortableComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"]));

var SortableHandleComponent = /** @class */ (function (_super) {
    __extends(SortableHandleComponent, _super);
    function SortableHandleComponent(elemRef, dragDropService, config, _Component, cdr) {
        return _super.call(this, elemRef, dragDropService, config, _Component, cdr) || this;
    }
    SortableHandleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[dnd-sortable-handle]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _dnd_service__WEBPACK_IMPORTED_MODULE_4__["DragDropService"], _dnd_config__WEBPACK_IMPORTED_MODULE_3__["DragDropConfig"], SortableComponent,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], SortableHandleComponent);
    return SortableHandleComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_2__["AbstractHandleComponent"]));



/***/ }),

/***/ "./src/lib/index.ts":
/*!**************************!*\
  !*** ./src/lib/index.ts ***!
  \**************************/
/*! exports provided: WidgetRegistry, PrimengDefaultWidgetRegistry, BootStrapDefaultWidgetRegistry, ZorroDefaultWidgetRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _widget_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget-registry */ "./src/lib/widget-registry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WidgetRegistry", function() { return _widget_registry__WEBPACK_IMPORTED_MODULE_0__["WidgetRegistry"]; });

/* harmony import */ var _widgets_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets/primeng */ "./src/lib/widgets/primeng/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrimengDefaultWidgetRegistry", function() { return _widgets_primeng__WEBPACK_IMPORTED_MODULE_1__["PrimengDefaultWidgetRegistry"]; });

/* harmony import */ var _widgets_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets/bootstrap */ "./src/lib/widgets/bootstrap/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BootStrapDefaultWidgetRegistry", function() { return _widgets_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BootStrapDefaultWidgetRegistry"]; });

/* harmony import */ var _widgets_zorro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgets/zorro */ "./src/lib/widgets/zorro/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZorroDefaultWidgetRegistry", function() { return _widgets_zorro__WEBPACK_IMPORTED_MODULE_3__["ZorroDefaultWidgetRegistry"]; });







/***/ }),

/***/ "./src/lib/model/actionregistry.ts":
/*!*****************************************!*\
  !*** ./src/lib/model/actionregistry.ts ***!
  \*****************************************/
/*! exports provided: ActionRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionRegistry", function() { return ActionRegistry; });
var ActionRegistry = /** @class */ (function () {
    function ActionRegistry() {
        this.actions = {};
    }
    ActionRegistry.prototype.clear = function () {
        this.actions = {};
    };
    ActionRegistry.prototype.register = function (actionId, action) {
        this.actions[actionId] = action;
    };
    ActionRegistry.prototype.get = function (actionId) {
        return this.actions[actionId];
    };
    return ActionRegistry;
}());



/***/ }),

/***/ "./src/lib/model/arrayproperty.ts":
/*!****************************************!*\
  !*** ./src/lib/model/arrayproperty.ts ***!
  \****************************************/
/*! exports provided: ArrayProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayProperty", function() { return ArrayProperty; });
/* harmony import */ var _formproperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formproperty */ "./src/lib/model/formproperty.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ArrayProperty = /** @class */ (function (_super) {
    __extends(ArrayProperty, _super);
    function ArrayProperty(formPropertyFactory, schemaValidatorFactory, validatorRegistry, schema, parent, path) {
        var _this = _super.call(this, schemaValidatorFactory, validatorRegistry, schema, parent, path) || this;
        _this.formPropertyFactory = formPropertyFactory;
        return _this;
    }
    ArrayProperty.prototype.addItem = function (value) {
        if (value === void 0) { value = null; }
        var newProperty = this.addProperty();
        newProperty.reset(value, false);
        return newProperty;
    };
    ArrayProperty.prototype.addProperty = function () {
        var newProperty = this.formPropertyFactory.createProperty(this.schema.items, this);
        this.properties.push(newProperty);
        return newProperty;
    };
    ArrayProperty.prototype.removeItem = function (index) {
        this.properties.splice(index, 1);
        this.updateValueAndValidity(false, true);
    };
    ArrayProperty.prototype.setValue = function (value, onlySelf) {
        this.createProperties();
        this.resetProperties(value);
        this.updateValueAndValidity(onlySelf, true);
    };
    ArrayProperty.prototype._hasValue = function () {
        return true;
    };
    ArrayProperty.prototype._updateValue = function () {
        this.reduceValue();
    };
    ArrayProperty.prototype.reduceValue = function () {
        var value = [];
        this.forEachChild(function (property, _) {
            if (property.visible && property._hasValue()) {
                value.push(property.value);
            }
        });
        this._value = value;
    };
    ArrayProperty.prototype.reset = function (value, onlySelf) {
        if (onlySelf === void 0) { onlySelf = true; }
        value = value || this.schema.default || [];
        this.properties = [];
        this.resetProperties(value);
        this.updateValueAndValidity(onlySelf, true);
    };
    ArrayProperty.prototype.createProperties = function () {
        this.properties = [];
    };
    ArrayProperty.prototype.resetProperties = function (value) {
        for (var idx in value) {
            if (value.hasOwnProperty(idx)) {
                var property = this.addProperty();
                property.reset(value[idx], true);
            }
        }
    };
    return ArrayProperty;
}(_formproperty__WEBPACK_IMPORTED_MODULE_0__["PropertyGroup"]));



/***/ }),

/***/ "./src/lib/model/atomicproperty.ts":
/*!*****************************************!*\
  !*** ./src/lib/model/atomicproperty.ts ***!
  \*****************************************/
/*! exports provided: AtomicProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtomicProperty", function() { return AtomicProperty; });
/* harmony import */ var _formproperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formproperty */ "./src/lib/model/formproperty.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AtomicProperty = /** @class */ (function (_super) {
    __extends(AtomicProperty, _super);
    function AtomicProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AtomicProperty.prototype.setValue = function (value, onlySelf) {
        if (onlySelf === void 0) { onlySelf = false; }
        this._value = value;
        this.updateValueAndValidity(onlySelf, true);
    };
    AtomicProperty.prototype.reset = function (value, onlySelf) {
        if (value === void 0) { value = null; }
        if (onlySelf === void 0) { onlySelf = true; }
        this.resetValue(value);
        this.updateValueAndValidity(onlySelf, true);
    };
    AtomicProperty.prototype.resetValue = function (value) {
        if (value === null) {
            if (this.schema.default !== undefined) {
                value = this.schema.default;
            }
            else {
                value = this.fallbackValue();
            }
        }
        this._value = value;
    };
    AtomicProperty.prototype._hasValue = function () {
        return this.fallbackValue() !== this.value;
    };
    AtomicProperty.prototype._updateValue = function () {
    };
    return AtomicProperty;
}(_formproperty__WEBPACK_IMPORTED_MODULE_0__["FormProperty"]));



/***/ }),

/***/ "./src/lib/model/booleanproperty.ts":
/*!******************************************!*\
  !*** ./src/lib/model/booleanproperty.ts ***!
  \******************************************/
/*! exports provided: BooleanProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanProperty", function() { return BooleanProperty; });
/* harmony import */ var _atomicproperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./atomicproperty */ "./src/lib/model/atomicproperty.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BooleanProperty = /** @class */ (function (_super) {
    __extends(BooleanProperty, _super);
    function BooleanProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BooleanProperty.prototype.fallbackValue = function () {
        return null;
    };
    return BooleanProperty;
}(_atomicproperty__WEBPACK_IMPORTED_MODULE_0__["AtomicProperty"]));



/***/ }),

/***/ "./src/lib/model/formproperty.ts":
/*!***************************************!*\
  !*** ./src/lib/model/formproperty.ts ***!
  \***************************************/
/*! exports provided: FormProperty, PropertyGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProperty", function() { return FormProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyGroup", function() { return PropertyGroup; });
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs_add_observable_combineLatest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/combineLatest */ "./node_modules/rxjs-compat/_esm5/add/observable/combineLatest.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var FormProperty = /** @class */ (function () {
    function FormProperty(schemaValidatorFactory, validatorRegistry, schema, parent, path) {
        this.validatorRegistry = validatorRegistry;
        this.schema = schema;
        this._value = null;
        this._errors = null;
        this._valueChanges = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._errorsChanges = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this._visible = true;
        this._visibilityChanges = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.schemaValidator = schemaValidatorFactory.createValidatorFn(this.schema);
        this._parent = parent;
        if (parent) {
            this._root = parent.root;
        }
        else if (this instanceof PropertyGroup) {
            this._root = this;
        }
        this._path = path;
    }
    Object.defineProperty(FormProperty.prototype, "valueChanges", {
        get: function () {
            return this._valueChanges;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "errorsChanges", {
        get: function () {
            return this._errorsChanges;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "type", {
        get: function () {
            return this.schema.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "root", {
        get: function () {
            return this._root || this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "path", {
        get: function () {
            return this._path;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormProperty.prototype, "valid", {
        get: function () {
            return this._errors === null;
        },
        enumerable: true,
        configurable: true
    });
    FormProperty.prototype.updateValueAndValidity = function (onlySelf, emitEvent) {
        if (onlySelf === void 0) { onlySelf = false; }
        if (emitEvent === void 0) { emitEvent = true; }
        this._updateValue();
        if (emitEvent) {
            this.valueChanges.next(this.value);
        }
        this._runValidation();
        if (this.parent && !onlySelf) {
            this.parent.updateValueAndValidity(onlySelf, emitEvent);
        }
    };
    /**
     * @internal
     */
    FormProperty.prototype._runValidation = function () {
        var errors = this.schemaValidator(this._value) || [];
        var customValidator = this.validatorRegistry.get(this.path);
        if (customValidator) {
            var customErrors = customValidator(this.value, this, this.findRoot());
            errors = this.mergeErrors(errors, customErrors);
        }
        if (errors.length === 0) {
            errors = null;
        }
        this._errors = errors;
        this.setErrors(this._errors);
    };
    FormProperty.prototype.mergeErrors = function (errors, newErrors) {
        if (newErrors) {
            if (Array.isArray(newErrors)) {
                errors = errors.concat.apply(errors, newErrors);
            }
            else {
                errors.push(newErrors);
            }
        }
        return errors;
    };
    FormProperty.prototype.setErrors = function (errors) {
        this._errors = errors;
        this._errorsChanges.next(errors);
    };
    FormProperty.prototype.extendErrors = function (errors) {
        errors = this.mergeErrors(this._errors || [], errors);
        this.setErrors(errors);
    };
    FormProperty.prototype.searchProperty = function (path) {
        var prop = this;
        var base = null;
        var result = null;
        if (path[0] === '/') {
            base = this.findRoot();
            result = base.getProperty(path.substr(1));
        }
        else {
            while (result === null && prop.parent !== null) {
                prop = base = prop.parent;
                result = base.getProperty(path);
            }
        }
        return result;
    };
    FormProperty.prototype.findRoot = function () {
        var property = this;
        while (property.parent !== null) {
            property = property.parent;
        }
        return property;
    };
    FormProperty.prototype.setVisible = function (visible) {
        this._visible = visible;
        this._visibilityChanges.next(visible);
        this.updateValueAndValidity();
        if (this.parent) {
            this.parent.updateValueAndValidity(false, true);
        }
    };
    // A field is visible if AT LEAST ONE of the properties it depends on is visible AND has a value in the list
    FormProperty.prototype._bindVisibility = function () {
        var _this = this;
        var visibleIf = this.schema.visibleIf;
        if (typeof visibleIf === 'object' && Object.keys(visibleIf).length === 0) {
            this.setVisible(false);
        }
        else if (visibleIf !== undefined) {
            var propertiesBinding = [];
            var _loop_1 = function (dependencyPath) {
                if (visibleIf.hasOwnProperty(dependencyPath)) {
                    var property = this_1.searchProperty(dependencyPath);
                    if (property) {
                        var valueCheck = property.valueChanges.map(function (value) {
                            if (visibleIf[dependencyPath].indexOf('$ANY$') !== -1) {
                                return value.length > 0;
                            }
                            else {
                                return visibleIf[dependencyPath].indexOf(value) !== -1;
                            }
                        });
                        var visibilityCheck = property._visibilityChanges;
                        var and = rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].combineLatest([valueCheck, visibilityCheck], function (v1, v2) { return v1 && v2; });
                        propertiesBinding.push(and);
                    }
                    else {
                        console.warn('Can\'t find property ' + dependencyPath + ' for visibility check of ' + this_1.path);
                    }
                }
            };
            var this_1 = this;
            for (var dependencyPath in visibleIf) {
                _loop_1(dependencyPath);
            }
            rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].combineLatest(propertiesBinding, function () {
                var values = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    values[_i] = arguments[_i];
                }
                return values.indexOf(true) !== -1;
            }).distinctUntilChanged().subscribe(function (visible) {
                _this.setVisible(visible);
            });
        }
    };
    return FormProperty;
}());

var PropertyGroup = /** @class */ (function (_super) {
    __extends(PropertyGroup, _super);
    function PropertyGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.properties = null;
        return _this;
    }
    PropertyGroup.prototype.getProperty = function (path) {
        var subPathIdx = path.indexOf('/');
        var propertyId = subPathIdx !== -1 ? path.substr(0, subPathIdx) : path;
        var property = this.properties[propertyId];
        if (property !== null && subPathIdx !== -1 && property instanceof PropertyGroup) {
            var subPath = path.substr(subPathIdx + 1);
            property = property.getProperty(subPath);
        }
        return property;
    };
    PropertyGroup.prototype.forEachChild = function (fn) {
        for (var propertyId in this.properties) {
            if (this.properties.hasOwnProperty(propertyId)) {
                var property = this.properties[propertyId];
                fn(property, propertyId);
            }
        }
    };
    PropertyGroup.prototype.forEachChildRecursive = function (fn) {
        this.forEachChild(function (child) {
            fn(child);
            if (child instanceof PropertyGroup) {
                child.forEachChildRecursive(fn);
            }
        });
    };
    PropertyGroup.prototype._bindVisibility = function () {
        _super.prototype._bindVisibility.call(this);
        this._bindVisibilityRecursive();
    };
    PropertyGroup.prototype._bindVisibilityRecursive = function () {
        this.forEachChildRecursive(function (property) {
            property._bindVisibility();
        });
    };
    PropertyGroup.prototype.isRoot = function () {
        return this === this.root;
    };
    return PropertyGroup;
}(FormProperty));



/***/ }),

/***/ "./src/lib/model/formpropertyfactory.ts":
/*!**********************************************!*\
  !*** ./src/lib/model/formpropertyfactory.ts ***!
  \**********************************************/
/*! exports provided: FormPropertyFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPropertyFactory", function() { return FormPropertyFactory; });
/* harmony import */ var _formproperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formproperty */ "./src/lib/model/formproperty.ts");
/* harmony import */ var _numberproperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./numberproperty */ "./src/lib/model/numberproperty.ts");
/* harmony import */ var _stringproperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringproperty */ "./src/lib/model/stringproperty.ts");
/* harmony import */ var _booleanproperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booleanproperty */ "./src/lib/model/booleanproperty.ts");
/* harmony import */ var _objectproperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./objectproperty */ "./src/lib/model/objectproperty.ts");
/* harmony import */ var _arrayproperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./arrayproperty */ "./src/lib/model/arrayproperty.ts");






var FormPropertyFactory = /** @class */ (function () {
    function FormPropertyFactory(schemaValidatorFactory, validatorRegistry) {
        this.schemaValidatorFactory = schemaValidatorFactory;
        this.validatorRegistry = validatorRegistry;
    }
    FormPropertyFactory.prototype.createProperty = function (schema, parent, propertyId) {
        if (parent === void 0) { parent = null; }
        var newProperty = null;
        var path = '';
        if (parent) {
            path += parent.path;
            if (parent.parent !== null) {
                path += '/';
            }
            if (parent.type === 'object') {
                path += propertyId;
            }
            else if (parent.type === 'array') {
                path += '*';
            }
            else {
                throw 'Instanciation of a FormProperty with an unknown parent type: ' + parent.type;
            }
        }
        else {
            path = '/';
        }
        if (schema.$ref) {
            var refSchema = this.schemaValidatorFactory.getSchema(parent.root.schema, schema.$ref);
            newProperty = this.createProperty(refSchema, parent, path);
        }
        else {
            switch (schema.type) {
                case 'integer':
                case 'number':
                    newProperty = new _numberproperty__WEBPACK_IMPORTED_MODULE_1__["NumberProperty"](this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
                    break;
                case 'string':
                    newProperty = new _stringproperty__WEBPACK_IMPORTED_MODULE_2__["StringProperty"](this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
                    break;
                case 'boolean':
                    newProperty = new _booleanproperty__WEBPACK_IMPORTED_MODULE_3__["BooleanProperty"](this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
                    break;
                case 'object':
                    newProperty = new _objectproperty__WEBPACK_IMPORTED_MODULE_4__["ObjectProperty"](this, this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
                    break;
                case 'array':
                    newProperty = new _arrayproperty__WEBPACK_IMPORTED_MODULE_5__["ArrayProperty"](this, this.schemaValidatorFactory, this.validatorRegistry, schema, parent, path);
                    break;
                default:
                    throw new TypeError("Undefined type " + schema.type);
            }
        }
        if (newProperty instanceof _formproperty__WEBPACK_IMPORTED_MODULE_0__["PropertyGroup"]) {
            this.initializeRoot(newProperty);
        }
        return newProperty;
    };
    FormPropertyFactory.prototype.initializeRoot = function (rootProperty) {
        rootProperty.reset(null, true);
        rootProperty._bindVisibility();
    };
    return FormPropertyFactory;
}());



/***/ }),

/***/ "./src/lib/model/index.ts":
/*!********************************!*\
  !*** ./src/lib/model/index.ts ***!
  \********************************/
/*! exports provided: ActionRegistry, FormPropertyFactory, FormProperty, PropertyGroup, AtomicProperty, ObjectProperty, ArrayProperty, ValidatorRegistry, SchemaPreprocessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionregistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionregistry */ "./src/lib/model/actionregistry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionRegistry", function() { return _actionregistry__WEBPACK_IMPORTED_MODULE_0__["ActionRegistry"]; });

/* harmony import */ var _formpropertyfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formpropertyfactory */ "./src/lib/model/formpropertyfactory.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormPropertyFactory", function() { return _formpropertyfactory__WEBPACK_IMPORTED_MODULE_1__["FormPropertyFactory"]; });

/* harmony import */ var _formproperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formproperty */ "./src/lib/model/formproperty.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormProperty", function() { return _formproperty__WEBPACK_IMPORTED_MODULE_2__["FormProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyGroup", function() { return _formproperty__WEBPACK_IMPORTED_MODULE_2__["PropertyGroup"]; });

/* harmony import */ var _atomicproperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./atomicproperty */ "./src/lib/model/atomicproperty.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AtomicProperty", function() { return _atomicproperty__WEBPACK_IMPORTED_MODULE_3__["AtomicProperty"]; });

/* harmony import */ var _objectproperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./objectproperty */ "./src/lib/model/objectproperty.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectProperty", function() { return _objectproperty__WEBPACK_IMPORTED_MODULE_4__["ObjectProperty"]; });

/* harmony import */ var _arrayproperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./arrayproperty */ "./src/lib/model/arrayproperty.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayProperty", function() { return _arrayproperty__WEBPACK_IMPORTED_MODULE_5__["ArrayProperty"]; });

/* harmony import */ var _validatorregistry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validatorregistry */ "./src/lib/model/validatorregistry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidatorRegistry", function() { return _validatorregistry__WEBPACK_IMPORTED_MODULE_6__["ValidatorRegistry"]; });

/* harmony import */ var _schemapreprocessor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./schemapreprocessor */ "./src/lib/model/schemapreprocessor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SchemaPreprocessor", function() { return _schemapreprocessor__WEBPACK_IMPORTED_MODULE_7__["SchemaPreprocessor"]; });











/***/ }),

/***/ "./src/lib/model/numberproperty.ts":
/*!*****************************************!*\
  !*** ./src/lib/model/numberproperty.ts ***!
  \*****************************************/
/*! exports provided: NumberProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberProperty", function() { return NumberProperty; });
/* harmony import */ var _atomicproperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./atomicproperty */ "./src/lib/model/atomicproperty.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NumberProperty = /** @class */ (function (_super) {
    __extends(NumberProperty, _super);
    function NumberProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberProperty.prototype.fallbackValue = function () {
        return null;
    };
    NumberProperty.prototype.setValue = function (value, onlySelf) {
        if (onlySelf === void 0) { onlySelf = false; }
        if (typeof value === 'string') {
            if (value.length) {
                value = value.indexOf('.') > -1 ? parseFloat(value) : parseInt(value, 10);
            }
            else {
                value = null;
            }
        }
        this._value = value;
        this.updateValueAndValidity(onlySelf, true);
    };
    return NumberProperty;
}(_atomicproperty__WEBPACK_IMPORTED_MODULE_0__["AtomicProperty"]));



/***/ }),

/***/ "./src/lib/model/objectproperty.ts":
/*!*****************************************!*\
  !*** ./src/lib/model/objectproperty.ts ***!
  \*****************************************/
/*! exports provided: ObjectProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectProperty", function() { return ObjectProperty; });
/* harmony import */ var _formproperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formproperty */ "./src/lib/model/formproperty.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ObjectProperty = /** @class */ (function (_super) {
    __extends(ObjectProperty, _super);
    function ObjectProperty(formPropertyFactory, schemaValidatorFactory, validatorRegistry, schema, parent, path) {
        var _this = _super.call(this, schemaValidatorFactory, validatorRegistry, schema, parent, path) || this;
        _this.formPropertyFactory = formPropertyFactory;
        _this.propertiesId = [];
        _this.createProperties();
        return _this;
    }
    ObjectProperty.prototype.setValue = function (value, onlySelf) {
        for (var propertyId in value) {
            if (value.hasOwnProperty(propertyId)) {
                this.properties[propertyId].setValue(value[propertyId], true);
            }
        }
        this.updateValueAndValidity(onlySelf, true);
    };
    ObjectProperty.prototype.reset = function (value, onlySelf) {
        if (onlySelf === void 0) { onlySelf = true; }
        value = value || this.schema.default || {};
        this.resetProperties(value);
        this.updateValueAndValidity(onlySelf, true);
    };
    ObjectProperty.prototype.resetProperties = function (value) {
        for (var propertyId in this.schema.properties) {
            if (this.schema.properties.hasOwnProperty(propertyId)) {
                this.properties[propertyId].reset(value[propertyId], true);
            }
        }
    };
    ObjectProperty.prototype.createProperties = function () {
        this.properties = {};
        this.propertiesId = [];
        for (var propertyId in this.schema.properties) {
            if (this.schema.properties.hasOwnProperty(propertyId)) {
                var propertySchema = this.schema.properties[propertyId];
                this.properties[propertyId] = this.formPropertyFactory.createProperty(propertySchema, this, propertyId);
                this.propertiesId.push(propertyId);
            }
        }
    };
    ObjectProperty.prototype._hasValue = function () {
        return !!Object.keys(this.value).length;
    };
    ObjectProperty.prototype._updateValue = function () {
        this.reduceValue();
    };
    ObjectProperty.prototype._runValidation = function () {
        var _this = this;
        _super.prototype._runValidation.call(this);
        if (this._errors) {
            this._errors.forEach(function (error) {
                var prop = _this.searchProperty(error.path.slice(1));
                if (prop) {
                    prop.extendErrors(error);
                }
            });
        }
    };
    ObjectProperty.prototype.reduceValue = function () {
        var value = {};
        this.forEachChild(function (property, propertyId) {
            if (property.visible && property._hasValue()) {
                value[propertyId] = property.value;
            }
        });
        this._value = value;
    };
    return ObjectProperty;
}(_formproperty__WEBPACK_IMPORTED_MODULE_0__["PropertyGroup"]));



/***/ }),

/***/ "./src/lib/model/schemapreprocessor.ts":
/*!*********************************************!*\
  !*** ./src/lib/model/schemapreprocessor.ts ***!
  \*********************************************/
/*! exports provided: SchemaPreprocessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemaPreprocessor", function() { return SchemaPreprocessor; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/lib/model/utils.ts");

function formatMessage(message, path) {
    return "Parsing error on " + path + ": " + message;
}
function schemaError(message, path) {
    var mesg = formatMessage(message, path);
    throw new Error(mesg);
}
function schemaWarning(message, path) {
    var mesg = formatMessage(message, path);
    throw new Error(mesg);
}
var SchemaPreprocessor = /** @class */ (function () {
    function SchemaPreprocessor() {
    }
    SchemaPreprocessor.preprocess = function (jsonSchema, path) {
        if (path === void 0) { path = '/'; }
        jsonSchema = jsonSchema || {};
        if (jsonSchema.type === 'object') {
            SchemaPreprocessor.checkProperties(jsonSchema, path);
            SchemaPreprocessor.checkAndCreateFieldsets(jsonSchema, path);
        }
        else if (jsonSchema.type === 'array') {
            SchemaPreprocessor.checkItems(jsonSchema, path);
        }
        SchemaPreprocessor.normalizeWidget(jsonSchema);
        SchemaPreprocessor.recursiveCheck(jsonSchema, path);
    };
    SchemaPreprocessor.checkProperties = function (jsonSchema, path) {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isBlank"])(jsonSchema.properties)) {
            jsonSchema.properties = {};
            schemaWarning('Provided json schema does not contain a \'properties\' entry. Output schema will be empty', path);
        }
    };
    SchemaPreprocessor.checkAndCreateFieldsets = function (jsonSchema, path) {
        if (jsonSchema.fieldsets === undefined) {
            if (jsonSchema.order !== undefined) {
                SchemaPreprocessor.replaceOrderByFieldsets(jsonSchema);
            }
            else {
                SchemaPreprocessor.createFieldsets(jsonSchema);
            }
        }
        SchemaPreprocessor.checkFieldsUsage(jsonSchema, path);
    };
    SchemaPreprocessor.checkFieldsUsage = function (jsonSchema, path) {
        var fieldsId = Object.keys(jsonSchema.properties);
        var usedFields = {};
        for (var _i = 0, _a = jsonSchema.fieldsets; _i < _a.length; _i++) {
            var fieldset = _a[_i];
            for (var _b = 0, _c = fieldset.fields; _b < _c.length; _b++) {
                var fieldId = _c[_b];
                if (usedFields[fieldId] === undefined) {
                    usedFields[fieldId] = [];
                }
                usedFields[fieldId].push(fieldset.id);
            }
        }
        for (var _d = 0, fieldsId_1 = fieldsId; _d < fieldsId_1.length; _d++) {
            var fieldId = fieldsId_1[_d];
            if (usedFields.hasOwnProperty(fieldId)) {
                if (usedFields[fieldId].length > 1) {
                    schemaError(fieldId + " is referenced by more than one fieldset: " + usedFields[fieldId], path);
                }
                delete usedFields[fieldId];
            }
            else if (jsonSchema.required.indexOf(fieldId) > -1) {
                schemaError(fieldId + " is a required field but it is not referenced as part of a 'order' or a 'fieldset' property", path);
            }
            else {
                delete jsonSchema[fieldId];
                schemaWarning("Removing unreferenced field " + fieldId, path);
            }
        }
        for (var remainingfieldsId in usedFields) {
            if (usedFields.hasOwnProperty(remainingfieldsId)) {
                schemaWarning("Referencing non-existent field " + remainingfieldsId + " in one or more fieldsets", path);
            }
        }
    };
    SchemaPreprocessor.createFieldsets = function (jsonSchema) {
        jsonSchema.order = Object.keys(jsonSchema.properties);
        SchemaPreprocessor.replaceOrderByFieldsets(jsonSchema);
    };
    SchemaPreprocessor.replaceOrderByFieldsets = function (jsonSchema) {
        jsonSchema.fieldsets = [{
                id: 'fieldset-default',
                title: jsonSchema.title || '',
                description: jsonSchema.description || '',
                name: jsonSchema.name || '',
                fields: jsonSchema.order
            }];
        delete jsonSchema.order;
    };
    SchemaPreprocessor.normalizeWidget = function (fieldSchema) {
        var widget = fieldSchema.widget;
        if (widget === undefined) {
            widget = { 'id': fieldSchema.type };
        }
        else if (typeof widget === 'string') {
            widget = { 'id': widget };
        }
        fieldSchema.widget = widget;
    };
    SchemaPreprocessor.checkItems = function (jsonSchema, path) {
        if (jsonSchema.items === undefined) {
            schemaError('No \'items\' property in array', path);
        }
    };
    SchemaPreprocessor.recursiveCheck = function (jsonSchema, path) {
        if (jsonSchema.type === 'object') {
            for (var fieldId in jsonSchema.properties) {
                if (jsonSchema.properties.hasOwnProperty(fieldId)) {
                    var fieldSchema = jsonSchema.properties[fieldId];
                    SchemaPreprocessor.preprocess(fieldSchema, path + fieldId + '/');
                }
            }
            if (jsonSchema.hasOwnProperty('definitions')) {
                for (var fieldId in jsonSchema.definitions) {
                    if (jsonSchema.definitions.hasOwnProperty(fieldId)) {
                        var fieldSchema = jsonSchema.definitions[fieldId];
                        SchemaPreprocessor.removeRecursiveRefProperties(fieldSchema, "#/definitions/" + fieldId);
                        SchemaPreprocessor.preprocess(fieldSchema, path + fieldId + '/');
                    }
                }
            }
        }
        else if (jsonSchema.type === 'array') {
            SchemaPreprocessor.preprocess(jsonSchema.items, path + '*/');
        }
    };
    SchemaPreprocessor.removeRecursiveRefProperties = function (jsonSchema, definitionPath) {
        // to avoid infinite loop
        if (jsonSchema.type === 'object') {
            for (var fieldId in jsonSchema.properties) {
                if (jsonSchema.properties.hasOwnProperty(fieldId)) {
                    if (jsonSchema.properties[fieldId].$ref
                        && jsonSchema.properties[fieldId].$ref === definitionPath) {
                        delete jsonSchema.properties[fieldId];
                    }
                    else if (jsonSchema.properties[fieldId].type === 'object') {
                        SchemaPreprocessor.removeRecursiveRefProperties(jsonSchema.properties[fieldId], definitionPath);
                    }
                }
            }
        }
    };
    return SchemaPreprocessor;
}());



/***/ }),

/***/ "./src/lib/model/stringproperty.ts":
/*!*****************************************!*\
  !*** ./src/lib/model/stringproperty.ts ***!
  \*****************************************/
/*! exports provided: StringProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringProperty", function() { return StringProperty; });
/* harmony import */ var _atomicproperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./atomicproperty */ "./src/lib/model/atomicproperty.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var StringProperty = /** @class */ (function (_super) {
    __extends(StringProperty, _super);
    function StringProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringProperty.prototype.fallbackValue = function () {
        return '';
    };
    return StringProperty;
}(_atomicproperty__WEBPACK_IMPORTED_MODULE_0__["AtomicProperty"]));



/***/ }),

/***/ "./src/lib/model/utils.ts":
/*!********************************!*\
  !*** ./src/lib/model/utils.ts ***!
  \********************************/
/*! exports provided: isPresent, isBlank */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPresent", function() { return isPresent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlank", function() { return isBlank; });
function isPresent(o) {
    return o !== null && o !== undefined;
}
function isBlank(o) {
    return o === null || o === undefined;
}


/***/ }),

/***/ "./src/lib/model/validatorregistry.ts":
/*!********************************************!*\
  !*** ./src/lib/model/validatorregistry.ts ***!
  \********************************************/
/*! exports provided: ValidatorRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatorRegistry", function() { return ValidatorRegistry; });
var ValidatorRegistry = /** @class */ (function () {
    function ValidatorRegistry() {
        this.validators = [];
    }
    ValidatorRegistry.prototype.register = function (path, validator) {
        this.validators[path] = validator;
    };
    ValidatorRegistry.prototype.get = function (path) {
        return this.validators[path];
    };
    ValidatorRegistry.prototype.clear = function () {
        this.validators = [];
    };
    return ValidatorRegistry;
}());



/***/ }),

/***/ "./src/lib/schema-form.module.ts":
/*!***************************************!*\
  !*** ./src/lib/schema-form.module.ts ***!
  \***************************************/
/*! exports provided: SchemaFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemaFormModule", function() { return SchemaFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_bs_form_builder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/bs-form-builder.component */ "./src/lib/components/bs-form-builder.component.ts");
/* harmony import */ var _components_zorro_form_builder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/zorro-form-builder.component */ "./src/lib/components/zorro-form-builder.component.ts");
/* harmony import */ var _schemavalidator_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schemavalidator.factory */ "./src/lib/schemavalidator.factory.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var moduleProviders = [
    {
        provide: _schemavalidator_factory__WEBPACK_IMPORTED_MODULE_5__["SchemaValidatorFactory"],
        useClass: _schemavalidator_factory__WEBPACK_IMPORTED_MODULE_5__["ZSchemaValidatorFactory"]
    }
];
var SchemaFormModule = /** @class */ (function () {
    function SchemaFormModule() {
    }
    SchemaFormModule_1 = SchemaFormModule;
    SchemaFormModule.forRoot = function () {
        return {
            ngModule: SchemaFormModule_1,
            providers: moduleProviders.slice()
        };
    };
    SchemaFormModule = SchemaFormModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
            declarations: [
                _components_bs_form_builder_component__WEBPACK_IMPORTED_MODULE_3__["BsFormBuilderComponent"],
                _components_zorro_form_builder_component__WEBPACK_IMPORTED_MODULE_4__["ZorroFormBuilderComponent"]
            ],
            entryComponents: [
                _components_bs_form_builder_component__WEBPACK_IMPORTED_MODULE_3__["BsFormBuilderComponent"],
                _components_zorro_form_builder_component__WEBPACK_IMPORTED_MODULE_4__["ZorroFormBuilderComponent"]
            ],
            exports: [
                _components_bs_form_builder_component__WEBPACK_IMPORTED_MODULE_3__["BsFormBuilderComponent"],
                _components_zorro_form_builder_component__WEBPACK_IMPORTED_MODULE_4__["ZorroFormBuilderComponent"]
            ],
            providers: moduleProviders.slice()
        })
    ], SchemaFormModule);
    return SchemaFormModule;
    var SchemaFormModule_1;
}());



/***/ }),

/***/ "./src/lib/schema/index.ts":
/*!*********************************!*\
  !*** ./src/lib/schema/index.ts ***!
  \*********************************/
/*! exports provided: WidgetType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _widget_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget-type */ "./src/lib/schema/widget-type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WidgetType", function() { return _widget_type__WEBPACK_IMPORTED_MODULE_0__["WidgetType"]; });




/***/ }),

/***/ "./src/lib/schema/widget-type.ts":
/*!***************************************!*\
  !*** ./src/lib/schema/widget-type.ts ***!
  \***************************************/
/*! exports provided: WidgetType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetType", function() { return WidgetType; });
var WidgetType;
(function (WidgetType) {
    WidgetType["PRIMENG"] = "PRIMENG";
    WidgetType["BOOTSTRAP"] = "BOOTSTRAP";
    WidgetType["ZORRO"] = "ZORRO";
})(WidgetType || (WidgetType = {}));


/***/ }),

/***/ "./src/lib/schemavalidator.factory.ts":
/*!********************************************!*\
  !*** ./src/lib/schemavalidator.factory.ts ***!
  \********************************************/
/*! exports provided: SchemaValidatorFactory, ZSchemaValidatorFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemaValidatorFactory", function() { return SchemaValidatorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZSchemaValidatorFactory", function() { return ZSchemaValidatorFactory; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ZSchema = __webpack_require__(/*! z-schema */ "./node_modules/z-schema/src/ZSchema.js");
var SchemaValidatorFactory = /** @class */ (function () {
    function SchemaValidatorFactory() {
    }
    return SchemaValidatorFactory;
}());

var ZSchemaValidatorFactory = /** @class */ (function (_super) {
    __extends(ZSchemaValidatorFactory, _super);
    function ZSchemaValidatorFactory() {
        var _this = _super.call(this) || this;
        _this.zschema = new ZSchema({});
        return _this;
    }
    ZSchemaValidatorFactory.prototype.createValidatorFn = function (schema) {
        var _this = this;
        return function (value) {
            if (schema.type === 'number' || schema.type === 'integer') {
                value = +value;
            }
            _this.zschema.validate(value, schema);
            var err = _this.zschema.getLastErrors();
            _this.denormalizeRequiredPropertyPaths(err);
            return err || null;
        };
    };
    ZSchemaValidatorFactory.prototype.getSchema = function (schema, ref) {
        // check definitions are valid
        var isValid = this.zschema.compileSchema(schema);
        if (isValid) {
            return this.getDefinition(schema, ref);
        }
        else {
            throw this.zschema.getLastError();
        }
    };
    ZSchemaValidatorFactory.prototype.denormalizeRequiredPropertyPaths = function (err) {
        if (err && err.length) {
            err = err.map(function (error) {
                if (error.path === '#/' && error.code === 'OBJECT_MISSING_REQUIRED_PROPERTY') {
                    error.path = "" + error.path + error.params[0];
                }
                return error;
            });
        }
    };
    ZSchemaValidatorFactory.prototype.getDefinition = function (schema, ref) {
        var foundSchema = schema;
        ref.split('/').slice(1).forEach(function (ptr) {
            if (ptr) {
                foundSchema = foundSchema[ptr];
            }
        });
        return foundSchema;
    };
    return ZSchemaValidatorFactory;
}(SchemaValidatorFactory));



/***/ }),

/***/ "./src/lib/terminator.service.ts":
/*!***************************************!*\
  !*** ./src/lib/terminator.service.ts ***!
  \***************************************/
/*! exports provided: TerminatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminatorService", function() { return TerminatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TerminatorService = /** @class */ (function () {
    function TerminatorService() {
        this.onDestroy = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    TerminatorService.prototype.destroy = function () {
        this.onDestroy.next(true);
    };
    TerminatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TerminatorService);
    return TerminatorService;
}());



/***/ }),

/***/ "./src/lib/utils/check.ts":
/*!********************************!*\
  !*** ./src/lib/utils/check.ts ***!
  \********************************/
/*! exports provided: isNotNil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotNil", function() { return isNotNil; });
function isNotNil(value) {
    return (typeof (value) !== 'undefined') && value !== null;
}


/***/ }),

/***/ "./src/lib/utils/cls.ts":
/*!******************************!*\
  !*** ./src/lib/utils/cls.ts ***!
  \******************************/
/*! exports provided: ListOfGridSizeName, getClassMap, generateClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOfGridSizeName", function() { return ListOfGridSizeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassMap", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateClass", function() { return generateClass; });
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check */ "./src/lib/utils/check.ts");

var ListOfGridSizeName = ['xs', 'sm', 'md', 'lg', 'xl'];
function getClassMap(widget) {
    if (!widget || typeof widget !== 'object')
        return [];
    widget._prefixCls = widget._prefixCls ? widget._prefixCls : 'col';
    var grid = widget.grid;
    if (!grid && typeof grid !== 'object') {
        return [];
    }
    var _classList = [
        Object(_check__WEBPACK_IMPORTED_MODULE_0__["isNotNil"])(grid.span) && widget._prefixCls + "-" + grid.span,
        Object(_check__WEBPACK_IMPORTED_MODULE_0__["isNotNil"])(grid.order) && widget._prefixCls + "-order-" + grid.order,
        Object(_check__WEBPACK_IMPORTED_MODULE_0__["isNotNil"])(grid.offset) && widget._prefixCls + "-offset-" + grid.offset,
        Object(_check__WEBPACK_IMPORTED_MODULE_0__["isNotNil"])(grid.pull) && widget._prefixCls + "-pull-" + grid.pull,
        Object(_check__WEBPACK_IMPORTED_MODULE_0__["isNotNil"])(grid.push) && widget._prefixCls + "-push-" + grid.push
    ].concat(generateClass(widget));
    _classList = _classList.filter(function (item) {
        return !!item;
    });
    return _classList;
}
function generateClass(widget) {
    var listOfClassName = [];
    var grid = widget.grid;
    ListOfGridSizeName.forEach(function (name) {
        if (Object(_check__WEBPACK_IMPORTED_MODULE_0__["isNotNil"])(grid[name])) {
            if ((typeof (grid[name]) === 'number') || (typeof (grid[name]) === 'string')) {
                listOfClassName.push(widget._prefixCls + "-" + name + "-" + grid[name]);
            }
            else {
                listOfClassName.push(grid[name] && Object(_check__WEBPACK_IMPORTED_MODULE_0__["isNotNil"])(grid[name].span) && widget._prefixCls + "-" + name + "-" + grid[name].span);
                listOfClassName.push(grid[name] && Object(_check__WEBPACK_IMPORTED_MODULE_0__["isNotNil"])(grid[name].pull) && widget._prefixCls + "-" + name + "-pull-" + grid[name].pull);
                listOfClassName.push(grid[name] && Object(_check__WEBPACK_IMPORTED_MODULE_0__["isNotNil"])(grid[name].push) && widget._prefixCls + "-" + name + "-push-" + grid[name].push);
                listOfClassName.push(grid[name] && Object(_check__WEBPACK_IMPORTED_MODULE_0__["isNotNil"])(grid[name].offset) && widget._prefixCls + "-" + name + "-offset-" + grid[name].offset);
                listOfClassName.push(grid[name] && Object(_check__WEBPACK_IMPORTED_MODULE_0__["isNotNil"])(grid[name].order) && widget._prefixCls + "-" + name + "-order-" + grid[name].order);
            }
        }
    });
    listOfClassName = listOfClassName.filter(function (item) {
        return !!item;
    });
    return listOfClassName;
}


/***/ }),

/***/ "./src/lib/utils/firstUpperCase.ts":
/*!*****************************************!*\
  !*** ./src/lib/utils/firstUpperCase.ts ***!
  \*****************************************/
/*! exports provided: firstUpperCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstUpperCase", function() { return firstUpperCase; });
function firstUpperCase(v) {
    return v.toLowerCase().replace(/\b[a-z]/g, function (s) {
        return s.toUpperCase();
    });
}


/***/ }),

/***/ "./src/lib/widget-factory.ts":
/*!***********************************!*\
  !*** ./src/lib/widget-factory.ts ***!
  \***********************************/
/*! exports provided: WidgetFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetFactory", function() { return WidgetFactory; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_actionregistry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/actionregistry */ "./src/lib/model/actionregistry.ts");
/* harmony import */ var _widget_registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widget-registry */ "./src/lib/widget-registry.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetFactory = /** @class */ (function () {
    function WidgetFactory(registry, compiler) {
        this.compiler = compiler;
        this.registry = registry;
    }
    WidgetFactory.prototype.addWidget = function (container, template, properties, context) {
        if (properties === void 0) { properties = {}; }
        var TemplateComponent = /** @class */ (function () {
            function TemplateComponent(_differs, actionRegistry, changeDetectorRef) {
                this._differs = _differs;
                this.actionRegistry = actionRegistry;
                this.changeDetectorRef = changeDetectorRef;
                this.buttons = [];
            }
            TemplateComponent.prototype.ngOnInit = function () {
                this._differ = this._differs.find(this[this['modelName']]).create();
                if (this.interval) {
                    clearInterval(this.interval);
                    this.interval = null;
                }
                this._parseButtons();
            };
            TemplateComponent.prototype.ngDoCheck = function () {
                if (this._differ) {
                    var changes = this._differ.diff(this[this['modelName']]);
                    if (changes) {
                        this._applyChanges(changes);
                        if (this['_debug_']) {
                            console.warn('model changes', this[this['modelName']]);
                        }
                    }
                }
            };
            TemplateComponent.prototype._parseButtons = function () {
                var schema = properties.formProperty.schema;
                if (schema.buttons !== undefined) {
                    this.buttons = schema.buttons;
                    for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
                        var button = _a[_i];
                        this._createButtonCallback(button);
                    }
                }
            };
            TemplateComponent.prototype._createButtonCallback = function (button) {
                var _this = this;
                this.action = function (e, id) {
                    var action;
                    if (id && (action = _this.actionRegistry.get(id))) {
                        if (action) {
                            action(properties.formProperty, _this._getBtnParameters(id));
                            // TODO，临时解决方案
                            if (id === 'reset') {
                                _this[_this['modelName']] = {};
                            }
                        }
                    }
                    e.preventDefault();
                };
            };
            TemplateComponent.prototype._applyChanges = function (changes) {
                context.onChange.emit({ value: this[this['modelName']] });
                context.modelChanged.emit(this[this['modelName']]);
            };
            TemplateComponent.prototype._getBtnParameters = function (id) {
                for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
                    var btn = _a[_i];
                    if (id === btn.id) {
                        return btn.parameters;
                    }
                }
            };
            TemplateComponent.prototype.addItem = function () {
                this.formProperty.addItem();
            };
            TemplateComponent.prototype.removeItem = function (index) {
                this.formProperty.removeItem(index);
            };
            TemplateComponent.prototype.ngOnDestroy = function () {
                if (this.interval) {
                    clearInterval(this.interval);
                    this.interval = null;
                }
            };
            TemplateComponent = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: template }),
                __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"],
                    _model_actionregistry__WEBPACK_IMPORTED_MODULE_3__["ActionRegistry"],
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
            ], TemplateComponent);
            return TemplateComponent;
        }());
        var TemplateModule = /** @class */ (function () {
            function TemplateModule() {
            }
            TemplateModule = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [TemplateComponent],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
                    providers: [_model_actionregistry__WEBPACK_IMPORTED_MODULE_3__["ActionRegistry"]]
                })
            ], TemplateModule);
            return TemplateModule;
        }());
        var mod = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
        var factory = mod.componentFactories.find(function (comp) {
            return comp.componentType === TemplateComponent;
        });
        var component = container.createComponent(factory);
        Object.assign(component.instance, properties);
        return component;
    };
    WidgetFactory = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_widget_registry__WEBPACK_IMPORTED_MODULE_4__["WidgetRegistry"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"]])
    ], WidgetFactory);
    return WidgetFactory;
}());



/***/ }),

/***/ "./src/lib/widget-registry.ts":
/*!************************************!*\
  !*** ./src/lib/widget-registry.ts ***!
  \************************************/
/*! exports provided: WidgetRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetRegistry", function() { return WidgetRegistry; });
/* harmony import */ var _schema_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema/index */ "./src/lib/schema/index.ts");

var WidgetRegistry = /** @class */ (function () {
    function WidgetRegistry() {
        this.bootstrap_widgets = {};
        this.primeng_widgets = {};
        this.zorro_widgets = {};
    }
    WidgetRegistry.prototype.setType = function (wigetType) {
        if (wigetType === void 0) { wigetType = _schema_index__WEBPACK_IMPORTED_MODULE_0__["WidgetType"].BOOTSTRAP; }
        WidgetRegistry.wigetType = wigetType;
    };
    Object.defineProperty(WidgetRegistry.prototype, "widgets", {
        get: function () {
            switch (WidgetRegistry.wigetType) {
                case _schema_index__WEBPACK_IMPORTED_MODULE_0__["WidgetType"].BOOTSTRAP:
                    return this.bootstrap_widgets;
                case _schema_index__WEBPACK_IMPORTED_MODULE_0__["WidgetType"].PRIMENG:
                    return this.primeng_widgets;
                case _schema_index__WEBPACK_IMPORTED_MODULE_0__["WidgetType"].ZORRO:
                    return this.zorro_widgets;
                default:
                    return this.bootstrap_widgets;
            }
        },
        enumerable: true,
        configurable: true
    });
    WidgetRegistry.prototype.setDefaultWidget = function (widget) {
        this.defaultWidget = widget;
    };
    WidgetRegistry.prototype.getDefaultWidget = function () {
        return this.defaultWidget;
    };
    WidgetRegistry.prototype.hasWidget = function (type) {
        return this.widgets.hasOwnProperty(type);
    };
    WidgetRegistry.prototype.register = function (type, widget) {
        this.widgets[type] = widget;
    };
    WidgetRegistry.prototype.getWidgetType = function (type) {
        if (this.hasWidget(type)) {
            return this.widgets[type];
        }
        return this.defaultWidget;
    };
    return WidgetRegistry;
}());



/***/ }),

/***/ "./src/lib/widget.ts":
/*!***************************!*\
  !*** ./src/lib/widget.ts ***!
  \***************************/
/*! exports provided: Widget, ControlWidget, ArrayLayoutWidget, ObjectLayoutWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlWidget", function() { return ControlWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayLayoutWidget", function() { return ArrayLayoutWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectLayoutWidget", function() { return ObjectLayoutWidget; });
/* harmony import */ var _utils_cls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/cls */ "./src/lib/utils/cls.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Widget = /** @class */ (function () {
    function Widget() {
        this.id = '';
        this.name = '';
        this.schema = {};
    }
    Widget.prototype.getLayoutClass = function (widgetSchema) {
        this.setGrid(widgetSchema);
        return Object(_utils_cls__WEBPACK_IMPORTED_MODULE_0__["getClassMap"])(widgetSchema);
    };
    Widget.prototype.setGrid = function (widgetSchema) {
        Object.assign(widgetSchema, widgetSchema.grid);
    };
    return Widget;
}());

var ControlWidget = /** @class */ (function (_super) {
    __extends(ControlWidget, _super);
    function ControlWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlWidget.prototype.ngAfterViewInit = function () {
        var _this = this;
        var control = this.control;
        this.formProperty.valueChanges.subscribe(function (newValue) {
            if (control.value !== newValue) {
                control.setValue(newValue, { emitEvent: false });
            }
        });
        this.formProperty.errorsChanges.subscribe(function (errors) {
            control.setErrors(errors, { emitEvent: true });
            var messages = (errors || [])
                .filter(function (e) {
                return e.path && e.path.slice(1) === _this.formProperty.path;
            })
                .map(function (e) { return e.message; });
            _this.errorMessages = messages.filter(function (m, i) { return messages.indexOf(m) === i; });
        });
        control.valueChanges.subscribe(function (newValue) {
            _this.formProperty.setValue(newValue, false);
        });
    };
    return ControlWidget;
}(Widget));

var ArrayLayoutWidget = /** @class */ (function (_super) {
    __extends(ArrayLayoutWidget, _super);
    function ArrayLayoutWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArrayLayoutWidget.prototype.ngAfterViewInit = function () {
        var control = this.control;
        this.formProperty.errorsChanges.subscribe(function (errors) {
            control.setErrors(errors, { emitEvent: true });
        });
    };
    return ArrayLayoutWidget;
}(Widget));

var ObjectLayoutWidget = /** @class */ (function (_super) {
    __extends(ObjectLayoutWidget, _super);
    function ObjectLayoutWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectLayoutWidget.prototype.ngAfterViewInit = function () {
        var control = this.control;
        this.formProperty.errorsChanges.subscribe(function (errors) {
            control.setErrors(errors, { emitEvent: true });
        });
    };
    return ObjectLayoutWidget;
}(Widget));



/***/ }),

/***/ "./src/lib/widgets/bootstrap/array/array.widget.ts":
/*!*********************************************************!*\
  !*** ./src/lib/widgets/bootstrap/array/array.widget.ts ***!
  \*********************************************************/
/*! exports provided: ArrayWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayWidget", function() { return ArrayWidget; });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../widget */ "./src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ArrayWidget = /** @class */ (function (_super) {
    __extends(ArrayWidget, _super);
    function ArrayWidget(_formProperty, registry) {
        var _this = _super.call(this) || this;
        _this._formProperty = _formProperty;
        _this.registry = registry;
        _this.formProperty = _formProperty;
        return _this;
    }
    ArrayWidget.prototype.getTemplate = function (schema) {
        return "\n\t\t<div class=\"widget form-group\">\n\t\t\t\t<label for=\"" + schema.formId + "\" class=\"horizontal control-label\">\n\t\t\t\t\t" + (schema.title || '') + "\n\t\t\t\t</label>\n\t\t\t\t" + (schema.description ? "<span class=\"formHelp\">" + schema.description + "</span>" : '') + "\n\t\t\t\t" + this.iterateOptions(schema) + "\n\t\t\t\t\n\t\t\t\t<button (click)=\"addItem()\" class=\"btn btn-default array-add-button\">\n\t\t\t\t\t<span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Add\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t";
    };
    ArrayWidget.prototype.iterateOptions = function (schema) {
        var htmlStr = '', properties = this.formProperty.properties;
        for (var _i = 0, _a = properties; _i < _a.length; _i++) {
            var itemProperty = _a[_i];
            var widgetInfo = itemProperty.schema.widget;
            var WidgetClass = this.registry.getWidgetType(widgetInfo.id);
            htmlStr += "\n\t\t\t<div>\n\t\t\t\t" + new WidgetClass().getTemplate(itemProperty.schema) + "\n\t\t\t\t<button (click)=\"removeItem(i)\" class=\"btn btn-default array-remove-button\">\n\t\t\t\t\t<span class=\"glyphicon glyphicon-minus\" aria-hidden=\"true\"></span> Remove\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t";
        }
        return htmlStr;
    };
    return ArrayWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_0__["ArrayLayoutWidget"]));



/***/ }),

/***/ "./src/lib/widgets/bootstrap/button/button.widget.ts":
/*!***********************************************************!*\
  !*** ./src/lib/widgets/bootstrap/button/button.widget.ts ***!
  \***********************************************************/
/*! exports provided: ButtonWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWidget", function() { return ButtonWidget; });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../widget */ "./src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ButtonWidget = /** @class */ (function (_super) {
    __extends(ButtonWidget, _super);
    function ButtonWidget() {
        return _super.call(this) || this;
    }
    ButtonWidget.prototype.getTemplate = function (schema, button) {
        return "\n    <button (click)=\"action($event,'" + button.id + "')\" class=\"btn btn-default\">" + button.label + "</button>\n    ";
    };
    return ButtonWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_0__["ControlWidget"]));



/***/ }),

/***/ "./src/lib/widgets/bootstrap/checkbox/checkbox.widget.ts":
/*!***************************************************************!*\
  !*** ./src/lib/widgets/bootstrap/checkbox/checkbox.widget.ts ***!
  \***************************************************************/
/*! exports provided: CheckboxWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxWidget", function() { return CheckboxWidget; });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../widget */ "./src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CheckboxWidget = /** @class */ (function (_super) {
    __extends(CheckboxWidget, _super);
    function CheckboxWidget() {
        return _super.call(this) || this;
    }
    CheckboxWidget.prototype.getTemplate = function (schema) {
        var listOfClassName = this.getLayoutClass(schema);
        return "\n    \t<div class=\"widget form-group " + listOfClassName.join(' ') + "\">\n\t\t\t\t<label for=\"" + schema.formId + "\" class=\"horizontal control-label\">\n\t\t\t\t\t" + (schema.title || '') + "\n\t\t\t\t</label>\n\t\t\t\t" + this.iterateOptions(schema) + "\n\t\t\t</div>\n\t\t";
    };
    CheckboxWidget.prototype.iterateOptions = function (schema) {
        var htmlStr = '', options = schema.items && schema.items.oneOf;
        if (schema.type != 'array') {
            htmlStr = "\n\t\t\t<label class=\"horizontal control-label\">\n\t\t\t\t<input name=\"" + schema.name + "\" [indeterminate]=\"control.value !== false && control.value !== true ? true :null\" type=\"checkbox\" " + (schema.readOnly ? " disabled=\"true\"" : "") + ">\n\t\t\t\t" + (schema.readOnly ? "<input name=\"" + schema.name + "\" type=\"hidden\">" : "") + "\n\t\t\t\t" + schema.description + "\n\t\t\t</label>\n\t\t\t";
        }
        else if (schema.type === 'array') {
            for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
                var option = options_1[_i];
                htmlStr += "\n\t\t\t\t<div  class=\"checkbox" + (schema.grid && schema.grid.mode ? ('-' + schema.grid.mode) : '') + "\">\n\t\t\t\t\t<label class=\"horizontal control-label\">\n\t\t\t\t\t\t<input  type=\"checkbox\" name=\"" + schema.name + "\"\n\t\t\t\t\t\t\tvalue=\"" + option.enum[0] + "\"\n\t\t\t\t\t\t\t" + (schema.readOnly ? " disabled=\"true\"" : "") + ">\n\t\t\t\t\t\t\t" + option.description + "\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t";
            }
        }
        return htmlStr;
    };
    return CheckboxWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_0__["ControlWidget"]));



/***/ }),

/***/ "./src/lib/widgets/bootstrap/defaultwidget-registry.ts":
/*!*************************************************************!*\
  !*** ./src/lib/widgets/bootstrap/defaultwidget-registry.ts ***!
  \*************************************************************/
/*! exports provided: BootStrapDefaultWidgetRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootStrapDefaultWidgetRegistry", function() { return BootStrapDefaultWidgetRegistry; });
/* harmony import */ var _button_button_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button/button.widget */ "./src/lib/widgets/bootstrap/button/button.widget.ts");
/* harmony import */ var _string_string_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string/string.widget */ "./src/lib/widgets/bootstrap/string/string.widget.ts");
/* harmony import */ var _widget_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widget-registry */ "./src/lib/widget-registry.ts");
/* harmony import */ var _schema_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../schema/index */ "./src/lib/schema/index.ts");
/* harmony import */ var _integer_integer_widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./integer/integer.widget */ "./src/lib/widgets/bootstrap/integer/integer.widget.ts");
/* harmony import */ var _range_range_widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./range/range.widget */ "./src/lib/widgets/bootstrap/range/range.widget.ts");
/* harmony import */ var _textarea_textarea_widget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./textarea/textarea.widget */ "./src/lib/widgets/bootstrap/textarea/textarea.widget.ts");
/* harmony import */ var _select_select_widget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select/select.widget */ "./src/lib/widgets/bootstrap/select/select.widget.ts");
/* harmony import */ var _radio_radio_widget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./radio/radio.widget */ "./src/lib/widgets/bootstrap/radio/radio.widget.ts");
/* harmony import */ var _checkbox_checkbox_widget__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkbox/checkbox.widget */ "./src/lib/widgets/bootstrap/checkbox/checkbox.widget.ts");
/* harmony import */ var _array_array_widget__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./array/array.widget */ "./src/lib/widgets/bootstrap/array/array.widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();











var BootStrapDefaultWidgetRegistry = /** @class */ (function (_super) {
    __extends(BootStrapDefaultWidgetRegistry, _super);
    function BootStrapDefaultWidgetRegistry() {
        var _this = _super.call(this) || this;
        _this.setType(_schema_index__WEBPACK_IMPORTED_MODULE_3__["WidgetType"].BOOTSTRAP);
        _this.register('string', _string_string_widget__WEBPACK_IMPORTED_MODULE_1__["StringWidget"]);
        _this.register('search', _string_string_widget__WEBPACK_IMPORTED_MODULE_1__["StringWidget"]);
        _this.register('tel', _string_string_widget__WEBPACK_IMPORTED_MODULE_1__["StringWidget"]);
        _this.register('url', _string_string_widget__WEBPACK_IMPORTED_MODULE_1__["StringWidget"]);
        _this.register('email', _string_string_widget__WEBPACK_IMPORTED_MODULE_1__["StringWidget"]);
        _this.register('password', _string_string_widget__WEBPACK_IMPORTED_MODULE_1__["StringWidget"]);
        _this.register('color', _string_string_widget__WEBPACK_IMPORTED_MODULE_1__["StringWidget"]);
        _this.register('date', _string_string_widget__WEBPACK_IMPORTED_MODULE_1__["StringWidget"]);
        _this.register('date-time', _string_string_widget__WEBPACK_IMPORTED_MODULE_1__["StringWidget"]);
        _this.register('time', _string_string_widget__WEBPACK_IMPORTED_MODULE_1__["StringWidget"]);
        _this.register('integer', _integer_integer_widget__WEBPACK_IMPORTED_MODULE_4__["IntegerWidget"]);
        _this.register('number', _integer_integer_widget__WEBPACK_IMPORTED_MODULE_4__["IntegerWidget"]);
        _this.register('button', _button_button_widget__WEBPACK_IMPORTED_MODULE_0__["ButtonWidget"]);
        _this.register('range', _range_range_widget__WEBPACK_IMPORTED_MODULE_5__["RangeWidget"]);
        _this.register('textarea', _textarea_textarea_widget__WEBPACK_IMPORTED_MODULE_6__["TextAreaWidget"]);
        _this.register('select', _select_select_widget__WEBPACK_IMPORTED_MODULE_7__["SelectWidget"]);
        _this.register('radio', _radio_radio_widget__WEBPACK_IMPORTED_MODULE_8__["RadioWidget"]);
        _this.register('checkbox', _checkbox_checkbox_widget__WEBPACK_IMPORTED_MODULE_9__["CheckboxWidget"]);
        _this.register('boolean', _checkbox_checkbox_widget__WEBPACK_IMPORTED_MODULE_9__["CheckboxWidget"]);
        _this.register('array', _array_array_widget__WEBPACK_IMPORTED_MODULE_10__["ArrayWidget"]);
        /*
            this.register('object',  ObjectWidget);
            this.register('file', FileWidget);
     */
        _this.setDefaultWidget(_string_string_widget__WEBPACK_IMPORTED_MODULE_1__["StringWidget"]);
        return _this;
    }
    return BootStrapDefaultWidgetRegistry;
}(_widget_registry__WEBPACK_IMPORTED_MODULE_2__["WidgetRegistry"]));



/***/ }),

/***/ "./src/lib/widgets/bootstrap/index.ts":
/*!********************************************!*\
  !*** ./src/lib/widgets/bootstrap/index.ts ***!
  \********************************************/
/*! exports provided: BootStrapDefaultWidgetRegistry, IntegerWidget, RangeWidget, StringWidget, TextAreaWidget, ButtonWidget, ArrayWidget, CheckboxWidget, RadioWidget, SelectWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaultwidget_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultwidget-registry */ "./src/lib/widgets/bootstrap/defaultwidget-registry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BootStrapDefaultWidgetRegistry", function() { return _defaultwidget_registry__WEBPACK_IMPORTED_MODULE_0__["BootStrapDefaultWidgetRegistry"]; });

/* harmony import */ var _integer_integer_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./integer/integer.widget */ "./src/lib/widgets/bootstrap/integer/integer.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntegerWidget", function() { return _integer_integer_widget__WEBPACK_IMPORTED_MODULE_1__["IntegerWidget"]; });

/* harmony import */ var _range_range_widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./range/range.widget */ "./src/lib/widgets/bootstrap/range/range.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RangeWidget", function() { return _range_range_widget__WEBPACK_IMPORTED_MODULE_2__["RangeWidget"]; });

/* harmony import */ var _string_string_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./string/string.widget */ "./src/lib/widgets/bootstrap/string/string.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringWidget", function() { return _string_string_widget__WEBPACK_IMPORTED_MODULE_3__["StringWidget"]; });

/* harmony import */ var _textarea_textarea_widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./textarea/textarea.widget */ "./src/lib/widgets/bootstrap/textarea/textarea.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAreaWidget", function() { return _textarea_textarea_widget__WEBPACK_IMPORTED_MODULE_4__["TextAreaWidget"]; });

/* harmony import */ var _button_button_widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button/button.widget */ "./src/lib/widgets/bootstrap/button/button.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonWidget", function() { return _button_button_widget__WEBPACK_IMPORTED_MODULE_5__["ButtonWidget"]; });

/* harmony import */ var _array_array_widget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/array.widget */ "./src/lib/widgets/bootstrap/array/array.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayWidget", function() { return _array_array_widget__WEBPACK_IMPORTED_MODULE_6__["ArrayWidget"]; });

/* harmony import */ var _checkbox_checkbox_widget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkbox/checkbox.widget */ "./src/lib/widgets/bootstrap/checkbox/checkbox.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxWidget", function() { return _checkbox_checkbox_widget__WEBPACK_IMPORTED_MODULE_7__["CheckboxWidget"]; });

/* harmony import */ var _radio_radio_widget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./radio/radio.widget */ "./src/lib/widgets/bootstrap/radio/radio.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioWidget", function() { return _radio_radio_widget__WEBPACK_IMPORTED_MODULE_8__["RadioWidget"]; });

/* harmony import */ var _select_select_widget__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./select/select.widget */ "./src/lib/widgets/bootstrap/select/select.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectWidget", function() { return _select_select_widget__WEBPACK_IMPORTED_MODULE_9__["SelectWidget"]; });













/***/ }),

/***/ "./src/lib/widgets/bootstrap/integer/integer.widget.ts":
/*!*************************************************************!*\
  !*** ./src/lib/widgets/bootstrap/integer/integer.widget.ts ***!
  \*************************************************************/
/*! exports provided: IntegerWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegerWidget", function() { return IntegerWidget; });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../widget */ "./src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var IntegerWidget = /** @class */ (function (_super) {
    __extends(IntegerWidget, _super);
    function IntegerWidget() {
        return _super.call(this) || this;
    }
    IntegerWidget.prototype.getTemplate = function (schema) {
        var listOfClassName = this.getLayoutClass(schema);
        return "\n    <div class=\"widget form-group " + listOfClassName.join(' ') + "\">\n\t\t\t<label for=\"" + schema.formId + "\" class=\"horizontal control-label\">\n\t\t\t\t" + (schema.title || '') + "\n\t\t\t</label>\n\t\t\t<div class=\"widget form-group\">\n\t\t\t" + (schema.description ? "<span class=\"formHelp\">" + schema.description + "</span>" : '') + "\n\t\t\t<input \n\t\t\t  [(ngModel)]=\"" + schema.modelName + "." + schema.name + "\"\n\t\t\t\tid=\"" + schema.formId + "\"\n\t\t\t\tname=\"" + schema.name + "\"\n\t\t\t\tclass=\"text-widget integer-widget form-control\"\n\t\t\t\ttype=\"number\"\n\t\t\t\t[attr.min]=\"" + schema.minimum + "\"\n\t\t\t\t[attr.max]=\"" + schema.maximum + "\"\n\t\t\t\tplaceholder=\"" + (schema.placeholder ? schema.placeholder : ' ') + "\"\n\t\t\t\t" + ((schema.readOnly) ? " readonly=\"true\"" : "") + "\n\t\t\t\t" + ((schema.maxLength || schema.maxLength == 0) ? "[attr.maxLength]=\"" + schema.maxLength + "\"" : "") + "\n\t\t\t\t" + ((schema.minLength || schema.minLength == 0) ? "[attr.minLength]=\"" + schema.minLength + "\"" : "") + "\n\t\t\t>\n\t\t\t</div>\n\t\t</div>\n    ";
    };
    return IntegerWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_0__["ControlWidget"]));



/***/ }),

/***/ "./src/lib/widgets/bootstrap/radio/radio.widget.ts":
/*!*********************************************************!*\
  !*** ./src/lib/widgets/bootstrap/radio/radio.widget.ts ***!
  \*********************************************************/
/*! exports provided: RadioWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioWidget", function() { return RadioWidget; });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../widget */ "./src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RadioWidget = /** @class */ (function (_super) {
    __extends(RadioWidget, _super);
    function RadioWidget() {
        return _super.call(this) || this;
    }
    RadioWidget.prototype.getTemplate = function (schema) {
        var listOfClassName = this.getLayoutClass(schema);
        return "\n    \t<div class=\"widget form-group " + listOfClassName.join(' ') + "\">\n\t\t\t<label class=\"horizontal control-label\">\n\t\t\t\t" + (schema.title || '') + "\n\t\t\t</label>\n\t\t\t" + (schema.description ? "<span class=\"formHelp\">" + schema.description + "</span>" : '') + "\n\t\t\t" + this.iterateOptions(schema) + "\n\t\t</div>\n    ";
    };
    RadioWidget.prototype.iterateOptions = function (schema) {
        var htmlStr = '', options = schema.oneOf;
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var option = options_1[_i];
            htmlStr += "\n\t\t\t<div class=\"radio" + (schema.grid && schema.grid.mode ? ('-' + schema.grid.mode) : '') + "\">\n\t\t\t\t<label class=\"horizontal control-label\">\n\t\t\t\t\t<input name=\"" + schema.name + "\"\n\t\t\t\t\ttype=\"radio\" value=\"" + option.enum[0] + "\" " + (schema.readOnly ? " disabled=\"true\"" : "") + ">\n\t\t\t\t\t" + option.description + "\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t";
        }
        return htmlStr;
    };
    return RadioWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_0__["ControlWidget"]));



/***/ }),

/***/ "./src/lib/widgets/bootstrap/range/range.widget.ts":
/*!*********************************************************!*\
  !*** ./src/lib/widgets/bootstrap/range/range.widget.ts ***!
  \*********************************************************/
/*! exports provided: RangeWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeWidget", function() { return RangeWidget; });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../widget */ "./src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RangeWidget = /** @class */ (function (_super) {
    __extends(RangeWidget, _super);
    function RangeWidget() {
        return _super.call(this) || this;
    }
    RangeWidget.prototype.getTemplate = function (schema) {
        var listOfClassName = this.getLayoutClass(schema);
        return "\n    \t<div class=\"widget form-group " + listOfClassName.join(' ') + "\">\n\t\t\t<label for=\"" + schema.formId + "\" class=\"horizontal control-label\">\n\t\t\t\t" + (schema.title || '') + "\n\t\t\t</label>\n\t\t\t" + (schema.description ? "<span class=\"formHelp\">" + schema.description + "</span>" : '') + "\n\t\t\t<input \n\t\t\t  [(ngModel)]=\"" + schema.modelName + "." + schema.name + "\"\n\t\t\t\tid=\"" + schema.formId + "\"\n\t\t\t\tname=\"" + schema.name + "\"\n\t\t\t\tclass=\"text-widget range-widget\"\n\t\t\t\ttype=\"range\"\n\t\t\t\t[attr.min]=\"" + schema.minimum + "\"\n\t\t\t\t[attr.max]=\"" + schema.maximum + "\"\n\t\t\t\t" + ((schema.readOnly) ? " disabled=\"true\"" : "") + "\n\t\t\t>\n\t\t\t" + (schema.readOnly ? "<input name=\"" + schema.name + "\" type=\"hidden\">" : "") + "\n\t\t</div>\n    ";
    };
    return RangeWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_0__["ControlWidget"]));



/***/ }),

/***/ "./src/lib/widgets/bootstrap/select/select.widget.ts":
/*!***********************************************************!*\
  !*** ./src/lib/widgets/bootstrap/select/select.widget.ts ***!
  \***********************************************************/
/*! exports provided: SelectWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectWidget", function() { return SelectWidget; });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../widget */ "./src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SelectWidget = /** @class */ (function (_super) {
    __extends(SelectWidget, _super);
    function SelectWidget() {
        return _super.call(this) || this;
    }
    SelectWidget.prototype.getTemplate = function (schema) {
        var listOfClassName = this.getLayoutClass(schema);
        return "\n    \t<div class=\"widget form-group " + listOfClassName.join(' ') + "\">\n\t\t\t<label for=\"" + schema.formId + "\" class=\"horizontal control-label\">\n\t\t\t\t" + (schema.title || '') + "\n\t\t\t</label>\n\t\t\t" + (schema.description ? "<span class=\"formHelp\">" + schema.description + "</span>" : '') + "\n\t\t\t" + (schema.type === 'array' ? "\n\t\t\t<select multiple name=\"" + schema.name + "\" " + (schema.readOnly ? " disabled=\"true\"" : "") + " class=\"form-control\">\n\t\t\t\t" + this.iterateOptions(schema.items.oneOf) + "\n\t\t\t</select>\n\t\t\t" : "\n\t\t\t<select name=\"" + schema.name + "\" " + (schema.readOnly ? " disabled=\"true\"" : "") + " class=\"form-control\">\n\t\t\t\t" + this.iterateOptions(schema.oneOf) + "\n\t\t\t</select>\n\t\t\t") + "\n\t\t\t" + (schema.readOnly ? "<input name=\"" + schema.name + "\" type=\"hidden\">" : "") + "\n\t\t</div>\n    ";
    };
    SelectWidget.prototype.iterateOptions = function (items) {
        var htmlStr = '';
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            htmlStr += "<option  value=\"" + item.enum[0] + "\" >" + item.description + "</option>";
        }
        return htmlStr;
    };
    return SelectWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_0__["ControlWidget"]));



/***/ }),

/***/ "./src/lib/widgets/bootstrap/string/string.widget.ts":
/*!***********************************************************!*\
  !*** ./src/lib/widgets/bootstrap/string/string.widget.ts ***!
  \***********************************************************/
/*! exports provided: StringWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringWidget", function() { return StringWidget; });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../widget */ "./src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var StringWidget = /** @class */ (function (_super) {
    __extends(StringWidget, _super);
    function StringWidget() {
        return _super.call(this) || this;
    }
    StringWidget.prototype.getTemplate = function (schema) {
        var listOfClassName = this.getLayoutClass(schema);
        var templ = "";
        if (this.getInputType(schema) === 'hidden') {
            templ = "<input  [attr.name]=\"name\" type=\"hidden\" [ngModel]=\"" + schema.modelName + "\">";
        }
        else {
            templ = "\n            <div class=\"widget form-group " + listOfClassName.join(' ') + "\">\n                <label for=\"" + schema.formId + "\" class=\"horizontal control-label\">\n                    " + (schema.title || '') + "\n                </label>\n                " + (schema.description ? "<span  class=\"formHelp\"> " + schema.description + "</span>" : '') + "\n                <input\n                [(ngModel)]=\"" + schema.modelName + "." + schema.name + "\"\n                id=\"" + schema.formId + "\"\n                name=\"" + schema.name + "\"\n                " + ((schema.widget.id !== 'color' && schema.readOnly) ? "readonly=\"true\"" : "") + "\n                class=\"text-widget.id textline-widget form-control\"\n                type=\"" + this.getInputType(schema) + "\"\n                placeholder=\"" + (schema.placeholder ? schema.placeholder : ' ') + "\"\n                " + ((schema.maxLength || schema.maxLength == 0) ? "[attr.maxLength]=\"" + schema.maxLength + "\"" : "") + "\n                " + ((schema.minLength || schema.minLength == 0) ? "[attr.minLength]=\"" + schema.minLength + "\"" : "") + "\n                " + ((schema.widget.id === 'color' && schema.readOnly) ? "[attr.disabled]=\"'true'\"" : "") + "/>\n                " + ((schema.widget.id === 'color' && schema.readOnly) ? "<input name=\"" + schema.name + "\" type=\"hidden\">" : "") + "\n            </div>\n            ";
        }
        return templ;
    };
    StringWidget.prototype.getInputType = function (widgetInfo) {
        if (!widgetInfo.widget.id || widgetInfo.widget.id === 'string') {
            return 'text';
        }
        else {
            return widgetInfo.widget.id;
        }
    };
    return StringWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_0__["ControlWidget"]));



/***/ }),

/***/ "./src/lib/widgets/bootstrap/textarea/textarea.widget.ts":
/*!***************************************************************!*\
  !*** ./src/lib/widgets/bootstrap/textarea/textarea.widget.ts ***!
  \***************************************************************/
/*! exports provided: TextAreaWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAreaWidget", function() { return TextAreaWidget; });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../widget */ "./src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TextAreaWidget = /** @class */ (function (_super) {
    __extends(TextAreaWidget, _super);
    function TextAreaWidget() {
        return _super.call(this) || this;
    }
    TextAreaWidget.prototype.getTemplate = function (schema) {
        var listOfClassName = this.getLayoutClass(schema);
        return "\n    \t<div class=\"widget form-group " + listOfClassName.join(' ') + "\">\n\t\t\t<label for=\"" + schema.formId + "\" class=\"horizontal control-label\">\n\t\t\t\t" + (schema.title || '') + "\n\t\t\t</label>\n\t\t\t" + (schema.description ? "<span class=\"formHelp\">" + schema.description + "</span>" : '') + "\n\t\t\t<textarea \n\t\t\t\tclass=\"text-widget textarea-widget form-control\"\n\t\t\t  [(ngModel)]=\"" + schema.modelName + "." + schema.name + "\"\n\t\t\t\tid=\"" + schema.formId + "\"\n\t\t\t\tname=\"" + schema.name + "\"\n\t\t\t\ttype=\"range\"\n\t\t\t\tplaceholder=\"" + (schema.placeholder ? schema.placeholder : ' ') + "\"\n\t\t\t\t" + ((schema.maxLength || schema.maxLength == 0) ? "[attr.maxLength]=\"" + schema.maxLength + "\"" : "") + "\n\t\t\t\t" + ((schema.minLength || schema.minLength == 0) ? "[attr.minLength]=\"" + schema.minLength + "\"" : "") + "\n\t\t\t\t" + (schema.readOnly ? " disabled=\"true\"" : "") + "\n\t\t\t></textarea>\n\t\t</div>\n    ";
    };
    return TextAreaWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_0__["ControlWidget"]));



/***/ }),

/***/ "./src/lib/widgets/primeng/defaultwidget-registry.ts":
/*!***********************************************************!*\
  !*** ./src/lib/widgets/primeng/defaultwidget-registry.ts ***!
  \***********************************************************/
/*! exports provided: PrimengDefaultWidgetRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimengDefaultWidgetRegistry", function() { return PrimengDefaultWidgetRegistry; });
/* harmony import */ var _widget_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../widget-registry */ "./src/lib/widget-registry.ts");
/* harmony import */ var _schema_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../schema/index */ "./src/lib/schema/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var PrimengDefaultWidgetRegistry = /** @class */ (function (_super) {
    __extends(PrimengDefaultWidgetRegistry, _super);
    function PrimengDefaultWidgetRegistry() {
        var _this = _super.call(this) || this;
        _this.setType(_schema_index__WEBPACK_IMPORTED_MODULE_1__["WidgetType"].PRIMENG);
        _this.register('string', function () {
            return "<div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Email address</label>\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Email\">\n        </div>";
        });
        _this.setDefaultWidget(function () {
            return "<div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Email address</label>\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Email\">\n        </div>";
        });
        return _this;
    }
    return PrimengDefaultWidgetRegistry;
}(_widget_registry__WEBPACK_IMPORTED_MODULE_0__["WidgetRegistry"]));



/***/ }),

/***/ "./src/lib/widgets/primeng/index.ts":
/*!******************************************!*\
  !*** ./src/lib/widgets/primeng/index.ts ***!
  \******************************************/
/*! exports provided: PrimengDefaultWidgetRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaultwidget_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultwidget-registry */ "./src/lib/widgets/primeng/defaultwidget-registry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrimengDefaultWidgetRegistry", function() { return _defaultwidget_registry__WEBPACK_IMPORTED_MODULE_0__["PrimengDefaultWidgetRegistry"]; });




/***/ }),

/***/ "./src/lib/widgets/zorro/array/array.widget.ts":
/*!*****************************************************!*\
  !*** ./src/lib/widgets/zorro/array/array.widget.ts ***!
  \*****************************************************/
/*! exports provided: ArrayWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayWidget", function() { return ArrayWidget; });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../widget */ "./src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ArrayWidget = /** @class */ (function (_super) {
    __extends(ArrayWidget, _super);
    function ArrayWidget(_formProperty, registry) {
        var _this = _super.call(this) || this;
        _this._formProperty = _formProperty;
        _this.registry = registry;
        _this.formProperty = _formProperty;
        return _this;
    }
    ArrayWidget.prototype.getTemplate = function (schema) {
        return "\n\t\t<div class=\"widget form-group\">\n\t\t\t\t<label for=\"" + schema.formId + "\" class=\"horizontal control-label\">\n\t\t\t\t\t" + (schema.title || '') + "\n\t\t\t\t</label>\n\t\t\t\t" + (schema.description ? "<span class=\"formHelp\">" + schema.description + "</span>" : '') + "\n\t\t\t\t" + this.iterateOptions(schema) + "\n\t\t\t\t\n\t\t\t\t<button (click)=\"addItem()\" class=\"btn btn-default array-add-button\">\n\t\t\t\t\t<span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Add\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t";
    };
    ArrayWidget.prototype.iterateOptions = function (schema) {
        var htmlStr = '', properties = this.formProperty.properties;
        for (var _i = 0, _a = properties; _i < _a.length; _i++) {
            var itemProperty = _a[_i];
            var widgetInfo = itemProperty.schema.widget;
            var WidgetClass = this.registry.getWidgetType(widgetInfo.id);
            htmlStr += "\n\t\t\t<div>\n\t\t\t\t" + new WidgetClass().getTemplate(itemProperty.schema) + "\n\t\t\t\t<button (click)=\"removeItem(i)\" class=\"btn btn-default array-remove-button\">\n\t\t\t\t\t<span class=\"glyphicon glyphicon-minus\" aria-hidden=\"true\"></span> Remove\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t";
        }
        return htmlStr;
    };
    return ArrayWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_0__["ArrayLayoutWidget"]));



/***/ }),

/***/ "./src/lib/widgets/zorro/button/button.widget.ts":
/*!*******************************************************!*\
  !*** ./src/lib/widgets/zorro/button/button.widget.ts ***!
  \*******************************************************/
/*! exports provided: ButtonWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWidget", function() { return ButtonWidget; });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../widget */ "./src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ButtonWidget = /** @class */ (function (_super) {
    __extends(ButtonWidget, _super);
    function ButtonWidget() {
        return _super.call(this) || this;
    }
    ButtonWidget.prototype.getTemplate = function (schema, button) {
        return "<button nz-button (click)=\"action($event,'" + button.id + "')\" nzType=\"" + (button.type || 'default') + "\">" + button.label + "</button>";
    };
    return ButtonWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_0__["ControlWidget"]));



/***/ }),

/***/ "./src/lib/widgets/zorro/checkbox/checkbox.widget.ts":
/*!***********************************************************!*\
  !*** ./src/lib/widgets/zorro/checkbox/checkbox.widget.ts ***!
  \***********************************************************/
/*! exports provided: CheckboxWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxWidget", function() { return CheckboxWidget; });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../widget */ "./src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CheckboxWidget = /** @class */ (function (_super) {
    __extends(CheckboxWidget, _super);
    function CheckboxWidget() {
        return _super.call(this) || this;
    }
    CheckboxWidget.prototype.getTemplate = function (schema) {
        var templ = '<nz-form-item>';
        var listOfClassName = this.getLayoutClass(schema);
        if (schema.title) {
            templ += "\n        <nz-form-label [nzSpan]=\"" + schema.span_label + "\"  " + (schema.require ? "nzRequired" : '') + ">\n            <span> " + (schema.title || '') + "\n                " + (schema.description ? "<nz-tooltip [nzTitle]=\"'" + schema.description + "'\"> <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i> </nz-tooltip>" : '') + "\n            </span>\n        </nz-form-label>\n      ";
        }
        templ += "\n    <nz-form-control\n        " + (schema.span_control ? "[nzSpan]=\"" + schema.span_control + "\"" : "") + "\n        " + (schema.offset_control ? "[nzOffset]=\"" + schema.offset_control + "\"" : "") + ">\n        " + this.iterateOptions(schema) + "\n    </nz-form-control>\n    </nz-form-item>";
        return templ;
    };
    // ${this.iterateOptions(schema)}
    CheckboxWidget.prototype.iterateOptions = function (schema) {
        var htmlStr = '', options = schema.items && schema.items.oneOf;
        if (schema.type != 'array') {
            htmlStr = "\n            <label nz-checkbox\n                [(ngModel)]=\"" + schema.modelName + "." + schema.name + "\"\n                id=\"" + schema.formId + "\"\n                name=\"" + schema.name + "\"\n                " + (schema.readOnly ? "[nzDisabled]=\"true\"" : "") + ">\n                <span>" + schema.description + "</span>\n            </label>\n\t\t\t";
        }
        else if (schema.type === 'array') {
            htmlStr = "<nz-checkbox-group  name=\"" + schema.name + "\" [(ngModel)]=\"" + schema.modelName + ".checkOptions\"></nz-checkbox-group> \n            {{" + schema.modelName + ".checkOptions | json}}\n            ";
        }
        return htmlStr;
    };
    return CheckboxWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_0__["ControlWidget"]));



/***/ }),

/***/ "./src/lib/widgets/zorro/date-range/date-range.widget.ts":
/*!***************************************************************!*\
  !*** ./src/lib/widgets/zorro/date-range/date-range.widget.ts ***!
  \***************************************************************/
/*! exports provided: DateRangeWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateRangeWidget", function() { return DateRangeWidget; });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../widget */ "./src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DateRangeWidget = /** @class */ (function (_super) {
    __extends(DateRangeWidget, _super);
    function DateRangeWidget() {
        return _super.call(this) || this;
    }
    DateRangeWidget.prototype.getTemplate = function (schema) {
        var templ = '<nz-form-item>';
        var listOfClassName = this.getLayoutClass(schema);
        if (schema.title) {
            templ += "\n        <nz-form-label [nzSpan]=\"" + schema.span_label + "\"  " + (schema.require ? "nzRequired" : '') + " for=\"" + schema.formId + "\" " + (schema.require ? "nzRequired" : '') + ">\n                <span> " + (schema.title || '') + (schema.description ? "<nz-tooltip [nzTitle]=\"'" + schema.description + "'\"> <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i> </nz-tooltip>" : '') + "</span>\n        </nz-form-label>\n      ";
        }
        templ += "\n    <nz-form-control \n        " + (schema.span_control ? "[nzSpan]=\"" + schema.span_control + "\"" : "") + "\n        " + (schema.offset_control ? "[nzOffset]=\"" + schema.offset_control + "\"" : "") + ">\n        <nz-range-picker \n            [(ngModel)]=\"" + schema.modelName + "." + schema.name + "\"\n            id=\"" + schema.formId + "\"\n            name=\"" + schema.name + "\"\n            " + (schema.readOnl ? "[nzDisabled]=\"true\"" : "") + "\n            " + (schema.size ? "[nzSize]=\"'" + schema.size + "'\"" : '') + "\n            " + (schema.format ? "[nzFormat]=\"'" + schema.format + "'\"" : "[nzFormat]=\"'YYYY/MM/DD'\"") + "\n            " + (schema.showTime ? "[nzShowTime]=\"true\"" : "[nzShowTime]=\"false\"") + "\n            [nzPlaceHolder]=\"['" + schema.start + "', '" + schema.end + "']\"></nz-range-picker>\n    </nz-form-control>\n    </nz-form-item>";
        return templ;
    };
    return DateRangeWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_0__["ControlWidget"]));



/***/ }),

/***/ "./src/lib/widgets/zorro/date/date.widget.ts":
/*!***************************************************!*\
  !*** ./src/lib/widgets/zorro/date/date.widget.ts ***!
  \***************************************************/
/*! exports provided: DateWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateWidget", function() { return DateWidget; });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../widget */ "./src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DateWidget = /** @class */ (function (_super) {
    __extends(DateWidget, _super);
    function DateWidget() {
        return _super.call(this) || this;
    }
    DateWidget.prototype.getTemplate = function (schema) {
        var templ = '<nz-form-item>';
        var listOfClassName = this.getLayoutClass(schema);
        if (schema.title) {
            templ += "\n        <nz-form-label [nzSpan]=\"" + schema.span_label + "\"  " + (schema.require ? "nzRequired" : '') + " for=\"" + schema.formId + "\" " + (schema.require ? "nzRequired" : '') + ">\n            <span> " + (schema.title || '') + (schema.description ? "<nz-tooltip [nzTitle]=\"'" + schema.description + "'\"> <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i> </nz-tooltip>" : '') + " </span>\n        </nz-form-label>\n      ";
        }
        templ += "\n    <nz-form-control\n        " + (schema.span_control ? "[nzSpan]=\"" + schema.span_control + "\"" : "") + "\n        " + (schema.offset_control ? "[nzOffset]=\"" + schema.offset_control + "\"" : "") + ">\n        <nz-date-picker\n            [(ngModel)]=\"" + schema.modelName + "." + schema.name + "\"\n            id=\"" + schema.formId + "\"\n            name=\"" + schema.name + "\"\n            " + (schema.readOnly ? "[nzDisabled]=\"true\"" : "") + "\n            " + (schema.size ? "[nzSize]=\"'" + schema.size + "'\"" : '') + "\n            " + (schema.format ? "[nzFormat]=\"'" + schema.format + "'\"" : "[nzFormat]=\"'YYYY/MM/DD'\"") + "\n            " + (schema.showTime ? "[nzShowTime]=\"true\"" : "[nzShowTime]=\"false\"") + "\n            [nzPlaceHolder]=\"'" + (schema.placeholder ? schema.placeholder : '') + "'\"></nz-date-picker>\n    </nz-form-control>\n    </nz-form-item>";
        return templ;
    };
    return DateWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_0__["ControlWidget"]));



/***/ }),

/***/ "./src/lib/widgets/zorro/defaultwidget-registry.ts":
/*!*********************************************************!*\
  !*** ./src/lib/widgets/zorro/defaultwidget-registry.ts ***!
  \*********************************************************/
/*! exports provided: ZorroDefaultWidgetRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZorroDefaultWidgetRegistry", function() { return ZorroDefaultWidgetRegistry; });
/* harmony import */ var _string_string_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string/string.widget */ "./src/lib/widgets/zorro/string/string.widget.ts");
/* harmony import */ var _widget_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../widget-registry */ "./src/lib/widget-registry.ts");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../schema */ "./src/lib/schema/index.ts");
/* harmony import */ var _button_button_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button/button.widget */ "./src/lib/widgets/zorro/button/button.widget.ts");
/* harmony import */ var _date_date_widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date/date.widget */ "./src/lib/widgets/zorro/date/date.widget.ts");
/* harmony import */ var _time_time_widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./time/time.widget */ "./src/lib/widgets/zorro/time/time.widget.ts");
/* harmony import */ var _date_range_date_range_widget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./date-range/date-range.widget */ "./src/lib/widgets/zorro/date-range/date-range.widget.ts");
/* harmony import */ var _checkbox_checkbox_widget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkbox/checkbox.widget */ "./src/lib/widgets/zorro/checkbox/checkbox.widget.ts");
/* harmony import */ var _array_array_widget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./array/array.widget */ "./src/lib/widgets/zorro/array/array.widget.ts");
/* harmony import */ var _radio_radio_widget__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./radio/radio.widget */ "./src/lib/widgets/zorro/radio/radio.widget.ts");
/* harmony import */ var _textarea_textarea_widget__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./textarea/textarea.widget */ "./src/lib/widgets/zorro/textarea/textarea.widget.ts");
/* harmony import */ var _select_select_widget__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./select/select.widget */ "./src/lib/widgets/zorro/select/select.widget.ts");
/* harmony import */ var _table_table_widget__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./table/table.widget */ "./src/lib/widgets/zorro/table/table.widget.ts");
/* harmony import */ var _tree_select_tree_select_widget__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tree-select/tree-select.widget */ "./src/lib/widgets/zorro/tree-select/tree-select.widget.ts");
/* harmony import */ var _yzt_grid_yzt_grid_widget__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./yzt-grid/yzt-grid.widget */ "./src/lib/widgets/zorro/yzt-grid/yzt-grid.widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();















var ZorroDefaultWidgetRegistry = /** @class */ (function (_super) {
    __extends(ZorroDefaultWidgetRegistry, _super);
    function ZorroDefaultWidgetRegistry() {
        var _this = _super.call(this) || this;
        _this.setType(_schema__WEBPACK_IMPORTED_MODULE_2__["WidgetType"].ZORRO);
        _this.register('string', _string_string_widget__WEBPACK_IMPORTED_MODULE_0__["StringWidget"]);
        _this.register('button', _button_button_widget__WEBPACK_IMPORTED_MODULE_3__["ButtonWidget"]);
        _this.register('date', _date_date_widget__WEBPACK_IMPORTED_MODULE_4__["DateWidget"]);
        _this.register('time', _time_time_widget__WEBPACK_IMPORTED_MODULE_5__["TimeWidget"]);
        _this.register('date-range', _date_range_date_range_widget__WEBPACK_IMPORTED_MODULE_6__["DateRangeWidget"]);
        _this.register('checkbox', _checkbox_checkbox_widget__WEBPACK_IMPORTED_MODULE_7__["CheckboxWidget"]);
        _this.register('radio', _radio_radio_widget__WEBPACK_IMPORTED_MODULE_9__["RadioWidget"]);
        _this.register('textarea', _textarea_textarea_widget__WEBPACK_IMPORTED_MODULE_10__["TextAreaWidget"]);
        _this.register('array', _array_array_widget__WEBPACK_IMPORTED_MODULE_8__["ArrayWidget"]);
        _this.register('select', _select_select_widget__WEBPACK_IMPORTED_MODULE_11__["SelectWidget"]);
        _this.register('table', _table_table_widget__WEBPACK_IMPORTED_MODULE_12__["TableWidget"]);
        _this.register('yzt-grid', _yzt_grid_yzt_grid_widget__WEBPACK_IMPORTED_MODULE_14__["YztGridWidget"]);
        _this.register('tree-select', _tree_select_tree_select_widget__WEBPACK_IMPORTED_MODULE_13__["TreeSelectWidget"]);
        //   this.register('search', StringWidget);
        //   this.register('tel', StringWidget);
        //   this.register('url', StringWidget);
        //   this.register('email', StringWidget);
        //   this.register('password', StringWidget);
        //   this.register('color', StringWidget);
        //   this.register('date', StringWidget);
        //   this.register('date-time', StringWidget);
        //   this.register('time', StringWidget);
        //   this.register('integer', IntegerWidget);
        //   this.register('number', IntegerWidget);
        //   this.register('range', RangeWidget);
        //   this.register('boolean', CheckboxWidget);
        _this.setDefaultWidget(_string_string_widget__WEBPACK_IMPORTED_MODULE_0__["StringWidget"]);
        return _this;
    }
    return ZorroDefaultWidgetRegistry;
}(_widget_registry__WEBPACK_IMPORTED_MODULE_1__["WidgetRegistry"]));



/***/ }),

/***/ "./src/lib/widgets/zorro/index.ts":
/*!****************************************!*\
  !*** ./src/lib/widgets/zorro/index.ts ***!
  \****************************************/
/*! exports provided: ZorroDefaultWidgetRegistry, ButtonWidget, DateWidget, TimeWidget, DateRangeWidget, CheckboxWidget, TextAreaWidget, SelectWidget, TableWidget, YztGridWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaultwidget_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultwidget-registry */ "./src/lib/widgets/zorro/defaultwidget-registry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZorroDefaultWidgetRegistry", function() { return _defaultwidget_registry__WEBPACK_IMPORTED_MODULE_0__["ZorroDefaultWidgetRegistry"]; });

/* harmony import */ var _button_button_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button/button.widget */ "./src/lib/widgets/zorro/button/button.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonWidget", function() { return _button_button_widget__WEBPACK_IMPORTED_MODULE_1__["ButtonWidget"]; });

/* harmony import */ var _date_date_widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date/date.widget */ "./src/lib/widgets/zorro/date/date.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateWidget", function() { return _date_date_widget__WEBPACK_IMPORTED_MODULE_2__["DateWidget"]; });

/* harmony import */ var _time_time_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./time/time.widget */ "./src/lib/widgets/zorro/time/time.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeWidget", function() { return _time_time_widget__WEBPACK_IMPORTED_MODULE_3__["TimeWidget"]; });

/* harmony import */ var _date_range_date_range_widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date-range/date-range.widget */ "./src/lib/widgets/zorro/date-range/date-range.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateRangeWidget", function() { return _date_range_date_range_widget__WEBPACK_IMPORTED_MODULE_4__["DateRangeWidget"]; });

/* harmony import */ var _checkbox_checkbox_widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkbox/checkbox.widget */ "./src/lib/widgets/zorro/checkbox/checkbox.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxWidget", function() { return _checkbox_checkbox_widget__WEBPACK_IMPORTED_MODULE_5__["CheckboxWidget"]; });

/* harmony import */ var _textarea_textarea_widget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./textarea/textarea.widget */ "./src/lib/widgets/zorro/textarea/textarea.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAreaWidget", function() { return _textarea_textarea_widget__WEBPACK_IMPORTED_MODULE_6__["TextAreaWidget"]; });

/* harmony import */ var _select_select_widget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select/select.widget */ "./src/lib/widgets/zorro/select/select.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectWidget", function() { return _select_select_widget__WEBPACK_IMPORTED_MODULE_7__["SelectWidget"]; });

/* harmony import */ var _table_table_widget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./table/table.widget */ "./src/lib/widgets/zorro/table/table.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableWidget", function() { return _table_table_widget__WEBPACK_IMPORTED_MODULE_8__["TableWidget"]; });

/* harmony import */ var _yzt_grid_yzt_grid_widget__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./yzt-grid/yzt-grid.widget */ "./src/lib/widgets/zorro/yzt-grid/yzt-grid.widget.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YztGridWidget", function() { return _yzt_grid_yzt_grid_widget__WEBPACK_IMPORTED_MODULE_9__["YztGridWidget"]; });











/* export { IntegerWidget } from './integer/integer.widget';
export { RangeWidget } from './range/range.widget';
export { StringWidget } from './string/string.widget';
export { ArrayWidget } from './array/array.widget';
export { RadioWidget } from './radio/radio.widget';
 */


/***/ }),

/***/ "./src/lib/widgets/zorro/radio/radio.widget.ts":
/*!*****************************************************!*\
  !*** ./src/lib/widgets/zorro/radio/radio.widget.ts ***!
  \*****************************************************/
/*! exports provided: RadioWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioWidget", function() { return RadioWidget; });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../widget */ "./src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RadioWidget = /** @class */ (function (_super) {
    __extends(RadioWidget, _super);
    function RadioWidget() {
        return _super.call(this) || this;
    }
    RadioWidget.prototype.getTemplate = function (schema) {
        var templ = '<nz-form-item>';
        // let listOfClassName = this.getLayoutClass(schema);
        if (schema.title) {
            templ += "<nz-form-label [nzSpan]=\"" + schema.span_label + "\" for=\"" + schema.formId + "\">\n                <span> " + (schema.title || '') + "\n                    " + (schema.description ? "<nz-tooltip [nzTitle]=\"'" + schema.description + "'\"> <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i> </nz-tooltip>" : '') + "\n                </span>\n            </nz-form-label>";
        }
        templ += "\n        <nz-form-control\n            " + (schema.span_control ? "[nzSpan]=\"" + schema.span_control + "\"" : "") + "\n            " + (schema.offset_control ? "[nzOffset]=\"" + schema.offset_control + "\"" : "") + ">\n            " + this.iterateOptions(schema) + "\n        </nz-form-control>\n    </nz-form-item>\n    ";
        return templ;
    };
    // ${this.iterateOptions(schema)}
    RadioWidget.prototype.iterateOptions = function (schema) {
        var htmlStr = '', options = schema.oneOf || [];
        if (!options.length) {
            htmlStr = "\n            <label nz-radio\n                [(ngModel)]=\"" + schema.modelName + "." + schema.name + "\"\n                id=\"" + schema.formId + "\"\n                name=\"" + schema.name + "\"\n                " + (schema.readOnly ? "[nzDisabled]=\"true\"" : "") + ">\n                <span>" + schema.description + "</span>\n            </label>\n\t\t\t";
        }
        else {
            htmlStr = "<nz-radio-group  name=\"" + schema.name + "\" [(ngModel)]=\"" + schema.modelName + "." + schema.name + "\">";
            for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
                var option = options_1[_i];
                htmlStr += "\n                <label nz-radio [nzValue]=\"'" + option.enum[0] + "'\">\n                    <span>" + option.description + "</span>\n                </label>\n\t\t\t\t";
            }
            htmlStr += "</nz-radio-group>";
        }
        return htmlStr;
    };
    return RadioWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_0__["ControlWidget"]));



/***/ }),

/***/ "./src/lib/widgets/zorro/select/select.widget.ts":
/*!*******************************************************!*\
  !*** ./src/lib/widgets/zorro/select/select.widget.ts ***!
  \*******************************************************/
/*! exports provided: SelectWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectWidget", function() { return SelectWidget; });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../widget */ "./src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SelectWidget = /** @class */ (function (_super) {
    __extends(SelectWidget, _super);
    function SelectWidget() {
        return _super.call(this) || this;
    }
    SelectWidget.prototype.getTemplate = function (schema) {
        var listOfClassName = this.getLayoutClass(schema);
        var templ = "\n        <nz-form-item>\n            <nz-form-label for=\"" + schema.formId + "\" [nzSpan]=\"" + schema.span_label + "\" " + (schema.require ? "nzRequired" : '') + ">\n                <span> " + (schema.title || '') + " " + (schema.description ? "<nz-tooltip [nzTitle]=\"'" + schema.description + "'\"> <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i> </nz-tooltip>" : '') + "</span>\n            </nz-form-label>\n            <nz-form-control \n                " + (schema.span_control ? "[nzSpan]=\"" + schema.span_control + "\"" : "") + "\n                " + (schema.offset_control ? "[nzOffset]=\"" + schema.offset_control + "\"" : "") + ">\n                <nz-select nzShowSearch nzAllowClear\n                [(ngModel)]=\"" + schema.modelName + "." + schema.name + "\"\n                id=\"" + schema.formId + "\"\n                name=\"" + schema.name + "\"\n                " + (schema.readOnly ? "[nzDisabled]=\"true\"" : "") + "\n                nzPlaceHolder=\"" + (schema.placeholder ? schema.placeholder : ' ') + "\">\n                    " + this.iterateOptions(schema) + "\n                </nz-select>\n            </nz-form-control>\n        </nz-form-item>\n        ";
        return templ;
    };
    SelectWidget.prototype.iterateOptions = function (schema) {
        var htmlStr = '', options = (schema.items && schema.items.oneOf) || schema.oneOf;
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var option = options_1[_i];
            htmlStr += "<nz-option nzValue=\"" + option.enum[0] + "\" nzLabel=\"" + option.description + "\"></nz-option>\n            ";
        }
        return htmlStr;
    };
    return SelectWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_0__["ControlWidget"]));



/***/ }),

/***/ "./src/lib/widgets/zorro/string/string.widget.ts":
/*!*******************************************************!*\
  !*** ./src/lib/widgets/zorro/string/string.widget.ts ***!
  \*******************************************************/
/*! exports provided: StringWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringWidget", function() { return StringWidget; });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../widget */ "./src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var StringWidget = /** @class */ (function (_super) {
    __extends(StringWidget, _super);
    function StringWidget() {
        return _super.call(this) || this;
    }
    StringWidget.prototype.getTemplate = function (schema) {
        var listOfClassName = this.getLayoutClass(schema);
        var templ = "";
        if (this.getInputType(schema) === 'hidden') {
            templ = "<input  nz-input [attr.name]=\"name\" type=\"hidden\" [ngModel]=\"" + schema.modelName + "\">";
        }
        else {
            templ = "\n            <nz-form-item>\n                <nz-form-label for=\"" + schema.formId + "\" [nzSpan]=\"" + schema.span_label + "\" " + (schema.require ? "nzRequired" : '') + ">\n                    <span> " + (schema.title || '') + (schema.description ? "<nz-tooltip [nzTitle]=\"'" + schema.description + "'\"> <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i> </nz-tooltip>" : '') + "</span>\n                </nz-form-label>\n                <nz-form-control \n                    " + (schema.span_control ? "[nzSpan]=\"" + schema.span_control + "\"" : "") + "\n                    " + (schema.offset_control ? "[nzOffset]=\"" + schema.offset_control + "\"" : "") + ">\n                    <input nz-input\n                    [(ngModel)]=\"" + schema.modelName + "." + schema.name + "\"\n                    id=\"" + schema.formId + "\"\n                    name=\"" + schema.name + "\"\n                    " + ((schema.widget.id !== 'color' && schema.readOnly) ? "[readonly]=\"true\"" : "") + "\n                    type=\"" + this.getInputType(schema) + "\"\n                    placeholder=\"" + (schema.placeholder ? schema.placeholder : ' ') + "\"\n                    " + ((schema.maxLength || schema.maxLength == 0) ? "[attr.maxLength]=\"" + schema.maxLength + "\"" : "") + "\n                    " + ((schema.minLength || schema.minLength == 0) ? "[attr.minLength]=\"" + schema.minLength + "\"" : "") + "\n                    " + ((schema.widget.id === 'color' && schema.readOnly) ? "[attr.disabled]=\"'true'\"" : "") + "/>\n                    " + ((schema.widget.id === 'color' && schema.readOnly) ? "<input  nz-input name=\"" + schema.name + "\" type=\"hidden\"/>" : "") + "\n                </nz-form-control>\n            </nz-form-item>\n            ";
        }
        return templ;
    };
    StringWidget.prototype.getInputType = function (widgetInfo) {
        if (!widgetInfo.widget.id || widgetInfo.widget.id === 'string') {
            return 'text';
        }
        else {
            return widgetInfo.widget.id;
        }
    };
    return StringWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_0__["ControlWidget"]));



/***/ }),

/***/ "./src/lib/widgets/zorro/table/table.widget.ts":
/*!*****************************************************!*\
  !*** ./src/lib/widgets/zorro/table/table.widget.ts ***!
  \*****************************************************/
/*! exports provided: TableWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableWidget", function() { return TableWidget; });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../widget */ "./src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TableWidget = /** @class */ (function (_super) {
    __extends(TableWidget, _super);
    function TableWidget() {
        return _super.call(this) || this;
    }
    TableWidget.prototype.getTemplate = function (schema) {
        return "\n<nz-table [nzScroll]=\"{ x: '1800px', y: '400px' }\"\n\t#rowSelectionTable\n\t[nzData]=\"data\"\n\t(nzCurrentPageDataChange)=\"currentPageDataChange($event)\"\n\t(nzPageIndexChange)=\"refreshStatus()\"\n\t(nzPageSizeChange)=\"refreshStatus()\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th nzShowCheckbox [(nzChecked)]=\"allChecked\" [nzIndeterminate]=\"indeterminate\" (nzCheckedChange)=\"checkAll($event)\"></th>\n\t\t\t<th *ngFor=\"let c of _columns\">{{c.header}}</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr *ngFor=\"let data of rowSelectionTable.data\">\n\t\t\t<td nzShowCheckbox [(nzChecked)]=\"data.checked\" [nzDisabled]=\"data.disabled\" (nzCheckedChange)=\"refreshStatus($event)\"></td>\n\t\t\t<td  *ngFor=\"let c of _columns\">{{data[c.field]}}</td>\n\t\t</tr>\n\t</tbody>\n</nz-table>";
    };
    return TableWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_0__["ControlWidget"]));



/***/ }),

/***/ "./src/lib/widgets/zorro/textarea/textarea.widget.ts":
/*!***********************************************************!*\
  !*** ./src/lib/widgets/zorro/textarea/textarea.widget.ts ***!
  \***********************************************************/
/*! exports provided: TextAreaWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAreaWidget", function() { return TextAreaWidget; });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../widget */ "./src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TextAreaWidget = /** @class */ (function (_super) {
    __extends(TextAreaWidget, _super);
    function TextAreaWidget() {
        return _super.call(this) || this;
    }
    TextAreaWidget.prototype.getTemplate = function (schema) {
        var listOfClassName = this.getLayoutClass(schema);
        var templ = "<nz-form-item>\n        <nz-form-label [nzSpan]=\"" + schema.span_label + "\"  " + (schema.require ? "nzRequired" : '') + " for=\"" + schema.formId + "\" " + (schema.require ? "nzRequired" : '') + ">\n            <span> " + (schema.title || '') + (schema.description ? "<nz-tooltip [nzTitle]=\"'" + schema.description + "'\"> <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i> </nz-tooltip>" : '') + "</span>\n        </nz-form-label>\n        <nz-form-control \n            " + (schema.span_control ? "[nzSpan]=\"" + schema.span_control + "\"" : "") + "\n            " + (schema.offset_control ? "[nzOffset]=\"" + schema.offset_control + "\"" : "") + ">\n            <textarea  nz-input\n            [(ngModel)]=\"" + schema.modelName + "." + schema.name + "\"\n            id=\"" + schema.formId + "\"\n            name=\"" + schema.name + "\"\n            nzType=\"textarea\" rows=\"2\" \n            placeholder=\"" + (schema.placeholder ? schema.placeholder : ' ') + "\"\n            " + (schema.readOnly ? "[readonly]=\"true\"" : "") + "\n            " + ((schema.autosize) ? "[nzAutosize]=\"" + schema.autosize + "\"" : "") + "></textarea>\n        </nz-form-control>\n        </nz-form-item>";
        return templ;
    };
    return TextAreaWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_0__["ControlWidget"]));



/***/ }),

/***/ "./src/lib/widgets/zorro/time/time.widget.ts":
/*!***************************************************!*\
  !*** ./src/lib/widgets/zorro/time/time.widget.ts ***!
  \***************************************************/
/*! exports provided: TimeWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeWidget", function() { return TimeWidget; });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../widget */ "./src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TimeWidget = /** @class */ (function (_super) {
    __extends(TimeWidget, _super);
    function TimeWidget() {
        return _super.call(this) || this;
    }
    TimeWidget.prototype.getTemplate = function (schema) {
        var templ = '<nz-form-item>';
        var listOfClassName = this.getLayoutClass(schema);
        if (schema.title) {
            templ += "\n        <nz-form-label [nzSpan]=\"" + schema.span_label + "\"  " + (schema.require ? "nzRequired" : '') + " for=\"" + schema.formId + "\" " + (schema.require ? "nzRequired" : '') + ">\n            <span> " + (schema.title || '') + " " + (schema.description ? "<nz-tooltip [nzTitle]=\"'" + schema.description + "'\"> <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i> </nz-tooltip>" : '') + "</span>\n        </nz-form-label>\n      ";
        }
        templ += "\n    <nz-form-control\n        " + (schema.span_control ? "[nzSpan]=\"" + schema.span_control + "\"" : "") + "\n        " + (schema.offset_control ? "[nzOffset]=\"" + schema.offset_control + "\"" : "") + ">\n        <nz-time-picker\n            [(ngModel)]=\"" + schema.modelName + "." + schema.name + "\"\n            id=\"" + schema.formId + "\"\n            name=\"" + schema.name + "\"\n            " + (schema.readOnly ? "[nzDisabled]=\"true\"" : "") + "\n            " + (schema.size ? "[nzSize]=\"'" + schema.size + "'\"" : '') + "\n            " + (schema.format ? "[nzFormat]=\"'" + schema.format + "'\"" : "[nzFormat]=\"'HH:mm:ss'\"") + "\n            [nzPlaceHolder]=\"'" + (schema.placeholder ? schema.placeholder : '') + "'\"></nz-time-picker>\n    </nz-form-control>\n  </nz-form-item>\n    ";
        return templ;
    };
    return TimeWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_0__["ControlWidget"]));



/***/ }),

/***/ "./src/lib/widgets/zorro/tree-select/tree-select.widget.ts":
/*!*****************************************************************!*\
  !*** ./src/lib/widgets/zorro/tree-select/tree-select.widget.ts ***!
  \*****************************************************************/
/*! exports provided: TreeSelectWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeSelectWidget", function() { return TreeSelectWidget; });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../widget */ "./src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TreeSelectWidget = /** @class */ (function (_super) {
    __extends(TreeSelectWidget, _super);
    function TreeSelectWidget() {
        return _super.call(this) || this;
    }
    TreeSelectWidget.prototype.getTemplate = function (schema) {
        var listOfClassName = this.getLayoutClass(schema);
        var templ = "\n        <nz-form-item>\n            <nz-form-label for=\"" + schema.formId + "\" [nzSpan]=\"" + schema.span_label + "\" " + (schema.require ? "nzRequired" : '') + ">\n                <span> " + (schema.title || '') + " " + (schema.description ? "<nz-tooltip [nzTitle]=\"'" + schema.description + "'\"> <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i> </nz-tooltip>" : '') + "</span>\n            </nz-form-label>\n            <nz-form-control \n                " + (schema.span_control ? "[nzSpan]=\"" + schema.span_control + "\"" : "") + "\n                " + (schema.offset_control ? "[nzOffset]=\"" + schema.offset_control + "\"" : "") + ">\n                <nz-tree-select nzShowSearch nzAllowClear\n                [nzNodes]=\"[]\"\n                [(ngModel)]=\"" + schema.modelName + "." + schema.name + "\"\n                id=\"" + schema.formId + "\"\n                name=\"" + schema.name + "\"\n                " + (schema.readOnly ? "[nzDisabled]=\"true\"" : "") + "\n                nzPlaceHolder=\"" + (schema.placeholder ? schema.placeholder : ' ') + "\">\n                </nz-tree-select>\n            </nz-form-control>\n        </nz-form-item>\n        ";
        return templ;
    };
    TreeSelectWidget.prototype.iterateOptions = function (schema) {
        var htmlStr = '', options = (schema.items && schema.items.oneOf) || schema.oneOf;
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var option = options_1[_i];
            htmlStr += "<nz-option nzValue=\"" + option.enum[0] + "\" nzLabel=\"" + option.description + "\"></nz-option>\n            ";
        }
        return htmlStr;
    };
    return TreeSelectWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_0__["ControlWidget"]));



/***/ }),

/***/ "./src/lib/widgets/zorro/yzt-grid/yzt-grid.widget.ts":
/*!***********************************************************!*\
  !*** ./src/lib/widgets/zorro/yzt-grid/yzt-grid.widget.ts ***!
  \***********************************************************/
/*! exports provided: YztGridWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YztGridWidget", function() { return YztGridWidget; });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../widget */ "./src/lib/widget.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var YztGridWidget = /** @class */ (function (_super) {
    __extends(YztGridWidget, _super);
    function YztGridWidget() {
        return _super.call(this) || this;
    }
    YztGridWidget.prototype.getTemplate = function (schema) {
        return "\n\t<yzt-grid\n\t\t[scroll]=\"{ x: '2400px', y: '800px' }\"\n\t\t#grid_basic\n\t\t[data]=\"data\"\n\t\t[columns]=\"_columns\"\n\t\t[(selection)]=\"selection\"\n\t\t[hideCheck]=\"true\"\n\t\t(load)=\"load($event)\">\n\t</yzt-grid>";
    };
    return YztGridWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_0__["ControlWidget"]));



/***/ }),

/***/ "./src/lib/zorro-widget-factory.ts":
/*!*****************************************!*\
  !*** ./src/lib/zorro-widget-factory.ts ***!
  \*****************************************/
/*! exports provided: ZorroWidgetFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZorroWidgetFactory", function() { return ZorroWidgetFactory; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _model_actionregistry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/actionregistry */ "./src/lib/model/actionregistry.ts");
/* harmony import */ var _widget_registry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widget-registry */ "./src/lib/widget-registry.ts");
/* harmony import */ var _app_shared_components_yzt_grid_yzt_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/shared/components/yzt-grid/yzt-grid.component */ "./src/app/shared/components/yzt-grid/yzt-grid.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ZorroWidgetFactory = /** @class */ (function () {
    function ZorroWidgetFactory(registry, compiler) {
        this.compiler = compiler;
        this.registry = registry;
    }
    ZorroWidgetFactory.prototype.addWidget = function (container, template, properties, context) {
        if (properties === void 0) { properties = {}; }
        var TemplateComponent = /** @class */ (function () {
            function TemplateComponent(_differs, actionRegistry, changeDetectorRef) {
                this._differs = _differs;
                this.actionRegistry = actionRegistry;
                this.changeDetectorRef = changeDetectorRef;
                this.buttons = [];
            }
            TemplateComponent.prototype.ngOnInit = function () {
                this._differ = this._differs.find(this[this['modelName']]).create();
                if (this.interval) {
                    clearInterval(this.interval);
                    this.interval = null;
                }
                this._parseButtons();
            };
            TemplateComponent.prototype.ngDoCheck = function () {
                if (this._differ) {
                    var changes = this._differ.diff(this[this['modelName']]);
                    if (changes) {
                        this._applyChanges(changes);
                        if (this['_debug_']) {
                            console.warn('model changes', this[this['modelName']]);
                        }
                    }
                }
            };
            TemplateComponent.prototype._parseButtons = function () {
                var schema = properties.formProperty.schema;
                if (schema.buttons !== undefined) {
                    this.buttons = schema.buttons;
                    for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
                        var button = _a[_i];
                        this._createButtonCallback(button);
                    }
                }
            };
            TemplateComponent.prototype._createButtonCallback = function (button) {
                var _this = this;
                this.action = function (e, id) {
                    var action;
                    if (id && (action = _this.actionRegistry.get(id))) {
                        if (action) {
                            action(properties.formProperty, _this._getBtnParameters(id));
                            // TODO，临时解决方案
                            if (id === 'reset') {
                                _this[_this['modelName']] = {};
                            }
                        }
                    }
                    e.preventDefault();
                };
            };
            TemplateComponent.prototype._applyChanges = function (changes) {
                context.onChange.emit({ value: this[this['modelName']] });
                context.modelChanged.emit(this[this['modelName']]);
            };
            TemplateComponent.prototype._getBtnParameters = function (id) {
                for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
                    var btn = _a[_i];
                    if (id === btn.id) {
                        return btn.parameters;
                    }
                }
            };
            TemplateComponent.prototype.addItem = function () {
                this.formProperty.addItem();
            };
            TemplateComponent.prototype.removeItem = function (index) {
                this.formProperty.removeItem(index);
            };
            TemplateComponent.prototype.ngOnDestroy = function () {
                if (this.interval) {
                    clearInterval(this.interval);
                    this.interval = null;
                }
            };
            TemplateComponent = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: template }),
                __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"],
                    _model_actionregistry__WEBPACK_IMPORTED_MODULE_4__["ActionRegistry"],
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
            ], TemplateComponent);
            return TemplateComponent;
        }());
        var TemplateModule = /** @class */ (function () {
            function TemplateModule() {
            }
            TemplateModule = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [TemplateComponent],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NgZorroAntdModule"]],
                    providers: [_model_actionregistry__WEBPACK_IMPORTED_MODULE_4__["ActionRegistry"]]
                })
            ], TemplateModule);
            return TemplateModule;
        }());
        var mod = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
        var factory = mod.componentFactories.find(function (comp) {
            return comp.componentType === TemplateComponent;
        });
        var component = container.createComponent(factory);
        Object.assign(component.instance, properties);
        return component;
    };
    ZorroWidgetFactory.prototype.createTableComponent = function (container, template, properties, context) {
        if (properties === void 0) { properties = {}; }
        var TemplateComponent = /** @class */ (function () {
            function TemplateComponent(_differs, actionRegistry, changeDetectorRef) {
                this._differs = _differs;
                this.actionRegistry = actionRegistry;
                this.changeDetectorRef = changeDetectorRef;
                this.buttons = [];
                // table
                this.allChecked = false;
                this.indeterminate = false;
                this.displayData = [];
                this._columns = [];
                this.columns = [];
                this.data = [];
            }
            TemplateComponent.prototype.load = function ($event) {
                var schema = properties.formProperty.schema;
                if (schema.tableComponent === 'yzt-grid') {
                    this.data = this.data;
                }
            };
            TemplateComponent.prototype.ngOnInit = function () {
                this.initCloumn();
                this._differ = this._differs.find(this[this['modelName']]).create();
                if (this.interval) {
                    clearInterval(this.interval);
                    this.interval = null;
                }
                this._parseButtons();
            };
            TemplateComponent.prototype.ngDoCheck = function () {
                if (this._differ) {
                    var changes = this._differ.diff(this[this['modelName']]);
                    if (changes) {
                        // debug code
                        this._applyChanges(changes);
                        if (this['_debug_']) {
                            console.warn('model changes', this[this['modelName']]);
                        }
                    }
                }
            };
            TemplateComponent.prototype._parseButtons = function () {
                var schema = properties.formProperty.schema;
                if (schema.buttons !== undefined) {
                    this.buttons = schema.buttons;
                    for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
                        var button = _a[_i];
                        this._createButtonCallback(button);
                    }
                }
            };
            TemplateComponent.prototype._createButtonCallback = function (button) {
                var _this = this;
                this.action = function (e, id) {
                    var action;
                    if (id && (action = _this.actionRegistry.get(id))) {
                        if (action) {
                            action(properties.formProperty, _this._getBtnParameters(id));
                            // TODO，临时解决方案
                            if (id === 'reset') {
                                _this[_this['modelName']] = {};
                            }
                        }
                    }
                    e.preventDefault();
                };
            };
            // debug code
            TemplateComponent.prototype._applyChanges = function (changes) {
                context.onChange.emit({ value: this[this['modelName']] });
                context.modelChanged.emit(this[this['modelName']]);
            };
            TemplateComponent.prototype._getBtnParameters = function (id) {
                for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
                    var btn = _a[_i];
                    if (id === btn.id) {
                        return btn.parameters;
                    }
                }
            };
            // table
            TemplateComponent.prototype.initCloumn = function () {
                for (var i = 0; i < this.columns.length; i++) {
                    var arr = this.columns[i].split('-');
                    this._columns[i] = {};
                    Object.assign(this._columns[i], {
                        header: arr[0],
                        field: arr[1],
                        width: arr[2]
                    });
                }
            };
            TemplateComponent.prototype.currentPageDataChange = function ($event) {
                this.displayData = $event;
                this.refreshStatus();
            };
            TemplateComponent.prototype.refreshStatus = function () {
                var allChecked = this.displayData.filter(function (value) { return !value.disabled; }).every(function (value) { return value.checked === true; });
                var allUnChecked = this.displayData.filter(function (value) { return !value.disabled; }).every(function (value) { return !value.checked; });
                this.allChecked = allChecked;
                this.indeterminate = (!allChecked) && (!allUnChecked);
            };
            TemplateComponent.prototype.checkAll = function (value) {
                this.displayData.forEach(function (data) {
                    if (!data.disabled) {
                        data.checked = value;
                    }
                });
                this.refreshStatus();
            };
            TemplateComponent.prototype.ngOnDestroy = function () {
                if (this.interval) {
                    clearInterval(this.interval);
                    this.interval = null;
                }
            };
            TemplateComponent = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: template }),
                __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"],
                    _model_actionregistry__WEBPACK_IMPORTED_MODULE_4__["ActionRegistry"],
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
            ], TemplateComponent);
            return TemplateComponent;
        }());
        var TemplateModule = /** @class */ (function () {
            function TemplateModule() {
            }
            TemplateModule = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [TemplateComponent],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NgZorroAntdModule"], _app_shared_components_yzt_grid_yzt_grid_component__WEBPACK_IMPORTED_MODULE_6__["UIGridModule"],],
                    providers: [_model_actionregistry__WEBPACK_IMPORTED_MODULE_4__["ActionRegistry"]]
                })
            ], TemplateModule);
            return TemplateModule;
        }());
        var mod = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
        var factory = mod.componentFactories.find(function (comp) {
            return comp.componentType === TemplateComponent;
        });
        var component = container.createComponent(factory);
        Object.assign(component.instance, properties);
        return component;
    };
    /* yapi yzt-grid */
    ZorroWidgetFactory.prototype.createYztGridComponent = function (container, template, properties, context) {
        if (properties === void 0) { properties = {}; }
        var TemplateComponent = /** @class */ (function () {
            function TemplateComponent(_differs, actionRegistry, changeDetectorRef) {
                this._differs = _differs;
                this.actionRegistry = actionRegistry;
                this.changeDetectorRef = changeDetectorRef;
                this.buttons = [];
                // table
                this.allChecked = false;
                this.indeterminate = false;
                this.displayData = [];
                this._columns = [];
                this.columns = [];
                this.data = [];
            }
            TemplateComponent.prototype.ngOnInit = function () {
                this.initCloumn();
                this._differ = this._differs.find(this[this['modelName']]).create();
                if (this.interval) {
                    clearInterval(this.interval);
                    this.interval = null;
                }
                this._parseButtons();
            };
            TemplateComponent.prototype.ngDoCheck = function () {
                if (this._differ) {
                    var changes = this._differ.diff(this[this['modelName']]);
                    if (changes) {
                        // debug code
                        this._applyChanges(changes);
                        if (this['_debug_']) {
                            console.warn('model changes', this[this['modelName']]);
                        }
                    }
                }
            };
            TemplateComponent.prototype._parseButtons = function () {
                var schema = properties.formProperty.schema;
                if (schema.buttons !== undefined) {
                    this.buttons = schema.buttons;
                    for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
                        var button = _a[_i];
                        this._createButtonCallback(button);
                    }
                }
            };
            TemplateComponent.prototype._createButtonCallback = function (button) {
                var _this = this;
                this.action = function (e, id) {
                    var action;
                    if (id && (action = _this.actionRegistry.get(id))) {
                        if (action) {
                            action(properties.formProperty, _this._getBtnParameters(id));
                            // TODO，临时解决方案
                            if (id === 'reset') {
                                _this[_this['modelName']] = {};
                            }
                        }
                    }
                    e.preventDefault();
                };
            };
            // debug code
            TemplateComponent.prototype._applyChanges = function (changes) {
                context.onChange.emit({ value: this[this['modelName']] });
                context.modelChanged.emit(this[this['modelName']]);
            };
            TemplateComponent.prototype._getBtnParameters = function (id) {
                for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
                    var btn = _a[_i];
                    if (id === btn.id) {
                        return btn.parameters;
                    }
                }
            };
            // table
            TemplateComponent.prototype.initCloumn = function () {
                for (var i = 0; i < this.columns.length; i++) {
                    var arr = this.columns[i].split('-');
                    this._columns[i] = {};
                    Object.assign(this._columns[i], {
                        header: arr[0],
                        field: arr[1],
                        width: arr[2]
                    });
                }
            };
            TemplateComponent.prototype.currentPageDataChange = function ($event) {
                this.displayData = $event;
                this.refreshStatus();
            };
            TemplateComponent.prototype.refreshStatus = function () {
                var allChecked = this.displayData.filter(function (value) { return !value.disabled; }).every(function (value) { return value.checked === true; });
                var allUnChecked = this.displayData.filter(function (value) { return !value.disabled; }).every(function (value) { return !value.checked; });
                this.allChecked = allChecked;
                this.indeterminate = (!allChecked) && (!allUnChecked);
            };
            TemplateComponent.prototype.checkAll = function (value) {
                this.displayData.forEach(function (data) {
                    if (!data.disabled) {
                        data.checked = value;
                    }
                });
                this.refreshStatus();
            };
            TemplateComponent.prototype.ngOnDestroy = function () {
                if (this.interval) {
                    clearInterval(this.interval);
                    this.interval = null;
                }
            };
            TemplateComponent = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: template }),
                __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"],
                    _model_actionregistry__WEBPACK_IMPORTED_MODULE_4__["ActionRegistry"],
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
            ], TemplateComponent);
            return TemplateComponent;
        }());
        var TemplateModule = /** @class */ (function () {
            function TemplateModule() {
            }
            TemplateModule = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [TemplateComponent],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NgZorroAntdModule"]],
                    providers: [_model_actionregistry__WEBPACK_IMPORTED_MODULE_4__["ActionRegistry"]]
                })
            ], TemplateModule);
            return TemplateModule;
        }());
        var mod = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
        var factory = mod.componentFactories.find(function (comp) {
            return comp.componentType === TemplateComponent;
        });
        var component = container.createComponent(factory);
        Object.assign(component.instance, properties);
        return component;
    };
    ZorroWidgetFactory = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_widget_registry__WEBPACK_IMPORTED_MODULE_5__["WidgetRegistry"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"]])
    ], ZorroWidgetFactory);
    return ZorroWidgetFactory;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5__);






Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5___default.a);
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\1zitonFE\ngx-form-builder\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map