# weex-test
### weex

跨平台移动开发工具

解决频繁发版和多端研发的两大痛点

解决了前端语言性能差和显示效果受限的问题

只需要在app中嵌入weex的sdk，就可通过编写html、css、JavaScript开发native级别的weex界面，weex界面的生成码其实就是一小段js，可以像发布网页一样轻松部署在服务端，然后再app中请求执行。

### weex的优势

- 遵循es6规范

- 跨平台

- 开发简洁，性能优异，体积小巧

  ​

### weex的调试工具

weexplayground，真机调试

输入命令 `weex debug` 可查看真机上程序运行的情况，并进行调试

### weex开发环境的搭建

1. **安装node**   node官网下载安装
2. `npm install weex-toolkit -g`   weex-toolkit是一个命令行工具，帮助开发者使用weex 安装完成后 可输入 `weex -v`查看weex版本
3. `weex create myproject(项目名称)`   创建一个空的模板项目
4. `npm install` 安装依赖  第三步创建模板项目时候回询问 是否安装依赖 ，选择是 即可省略第四步。
5. `npm start` 启动一个本地服务



### weex通用样式

​		只支持像素值，不支持相对值，适配以750像素为标准

​		设定边框，border目前不支持`border:1px solid #f00;` 这样的组合写法，目前支持分开编辑的写法，即`border-width:1px;border-style:solid;border-color:#f00;`

​		设定背景，background目前不支持`background:#f00;` 这样的组合写法，与border同理，需分开编辑，即`background-color:#f00;`

​		weex支持position定位:relative | absolute |fixed |sticky ，默认值是relative

​		weex不支持z-index设置元素层级关系，但是靠后的元素层级越高

​		如果定位元素超过容器边界，在Android下，超出部分将不可见，原因在于在Android端元素overflow默认值为hidden  ????

​		支持线性渐变：linea-gradient，不支持径向渐变：radius-gradient

​		weex中box-shadow仅仅支持ios

​		目前image组件无法定义一个或多个角的border-radius，只对ios有效，ios只能直接使用border-radius定义圆角，Android可随意定义

​		weex中，flexbox是默认并且唯一的布局模型，每个元素都默认拥有display:flex属性

​		

### weex内建组件

​	

