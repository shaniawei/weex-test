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

#### weex-toolkit的一些命令

- 安装weex-toolkit工具 

​	`npm install -g weex-toolkit`

- 创建项目

  `weex create your_project_name`

- 预览项目

​	进入到项目运行 `npm start`

- 调试项目

​	`weex debug`

- 编译单个weex文件或者整个文件夹中的weex文件

  weex compile source-src(入口)  dest(导出路径) 

- ​

### weex的调试工具

weexplayground

输入命令 `weex debug` 查看手机运行情况，主要观察UI显示情况以及基本的交互逻辑



### weex开发基本环境的搭建

1. **安装node**   node官网下载安装
2. `npm install weex-toolkit -g`   weex-toolkit是一个命令行工具，帮助开发者使用weex 安装完成后 可输入 `weex -v`查看weex版本  [weex完整命令](https://www.npmjs.com/package/weex-toolkit)
3. `weex create myproject(项目名称)`   创建一个空的模板项目
4. `npm install` 安装依赖  第三步创建模板项目时候回询问 是否安装依赖 ，选择是 即可省略第四步。
5. `npm start` 启动一个本地服务




### 在真机上运行 Android项目需配置的环境

- 安装Java   JDK
- 安装Android studio
- 安装SDK   adb
- 配置 SDK环境变量 `ANDROID_HOME`  [配置方法](https://www.cnblogs.com/harlem/p/6794616.html)

配置完成后 在项目根目录下 输入命令`weex platform add android` 添加Android平台项目模板；

完成后输入`weex run android`  真实设备上启动应用 (此时电脑需与Android手机链接，启用USB调试)

`weex build android`  用于将项目打包成apk



**一个问题：**

Android正式打包 需要一些签名之类的 如何操作？



### 在真机上运行 IOS项目需配置的环境

- 安装XCode


IOS运行打包有问题，未解决



### 引入css的三种方式

- 内联在vue文件中
- **`<style src='./Home.css'></style>`**
- `<style scoped> @import url('./Home.css');</style>`

### weex通用样式

​	[UI组件](https://alibaba.github.io/weex-ui/#/packages/wxc-button/)

1. 只支持像素值，不支持相对值，适配以750像素为标准

2. 设定边框，border目前不支持`border:1px solid #f00;` 这样的组合写法，目前支持分开编辑的写法，即`border-width:1px;border-style:solid;border-color:#f00;`

3. 设定背景，background目前不支持`background:#f00;` 这样的组合写法，与border同理，需分开编辑，即`background-color:#f00;`

4. weex支持position定位:relative | absolute |fixed |sticky ，默认值是relative

5. weex不支持z-index设置元素层级关系，但是靠后的元素层级越高

6. 如果定位元素超过容器边界，在Android下，超出部分将不可见，原因在于在Android端元素overflow默认值为hidden 

7. 支持线性渐变：linea-gradient，不支持径向渐变：radius-gradient

8. weex中box-shadow仅仅支持ios

9. 目前image组件无法定义一个或多个角的border-radius，只对ios有效，ios只能直接使用border-radius定义圆角，Android可随意定义

10. weex中，flexbox是默认并且唯一的布局模型，每个元素都默认拥有display:flex属性

11. weex没有background-image属性

12. Weex 盒模型的 box-sizing 默认为 border-box

13. weex中编辑css 没有标签选择器，只能通过类选择器和id选择器增加css样式，一般用类选择器

14. 文字必须放在text标签中，不可以直接放在div标签中

15. **图片路径 image使用相对路径在IOS上显示不出来，使用绝对路径运行*`weex run Android`*在Android机上显示不出来，必须使用完整路径，如下图，ip在data里面注册一下，赋上域名的值**

   ![](https://raw.githubusercontent.com/shaniawei/resource/master/images/weex-src.png)

16. **width，height这些不可以用百分比，只能用像素px**

26. **position:fixed;定义元素宽高，才可以精准定位，真机没问题，web元素块会偏下(调试工具有毛病)**

36. **页面底部固定悬浮一个元素块，页面内容往下滑动问题**


底部元素块样式：position:fixed;bottom:0;width:***xxx***px;height:***xxx***px;宽高都定义一下

![](https://raw.githubusercontent.com/shaniawei/resource/master/images/weex-scoll2.png)

所有需要滑动的元素放在scroller标签中，添加样式：position:fixed;top:0;left:0;right:0;bottom:***xx***px，bottom值根据底部固定元素高度而定。如果最外层如下图 `m-order-detail`加了背景颜色，那么这个时候背景颜色时不会显示出来的，将背景样式放在scroller标签上就OK。

scroller标签内的子div需要添加css:`width:750px;` 

![](https://raw.githubusercontent.com/shaniawei/resource/master/images/weex-scroll1.png)



![](https://raw.githubusercontent.com/shaniawei/resource/master/images/weex-css.png)


**问题：**

1. 文字上下标效果

2. 数字偏小

3. 安卓真机滑动卡顿

   ​

   ​


### weex内建组件

具体使用方法 请参考weex文档

- clipboard——  *从系统的粘贴板获取或设置内容
- globalEvent—— 目前使用该组件 调用安卓的方法 获取是否触发物理返回键
- modal—— toast confirm等提示框
- storage—— 存储数据 类似于h5的localstorage
- stream—— 发送请求


### Image引入图片方面

因为Weex 没有内置的图片下载器，需要Android和iOS 进行一些配置才可正常使用。
[配置方法](http://weex.apache.org/cn/references/components/image.html)

### weex嵌入到已有应用方面

Android和iOS进行一些weex配置，web前端将项目打包好bundle.js给Android/iOS
[嵌入方法](http://weex.apache.org/cn/guide/integrate-to-your-app.html)

![](https://raw.githubusercontent.com/shaniawei/resource/master/images/图片1.png)

![](https://raw.githubusercontent.com/shaniawei/resource/master/images/%E5%9B%BE%E7%89%872.png)



### weex页面之间 点击物理返回键返回上一页的代码编辑在入口文件中

**运用globalEvent内置组件**

> var globalEvent = weex.requireModule('globalEvent');
>
> globalEvent.addEventListener('androidback', function(e) {  //androidback是安卓那边写好的方法
>
> ​	// 这里就可以做返回事件操作了，如返回上一页或退出应用
>
> ​	if (that.$router.currentRoute.name == 'Home') { //weex项目首页
>
> ​		weex.requireModule('close').closeApp() //跳转到native页面
>
> ​	} else {
>
> ​		that.$router.go(-1);
>
> ​	}
>
> })

![](https://raw.githubusercontent.com/shaniawei/resource/master/images/%E5%9B%BE%E7%89%873.png)



### Weex页面之间使用vue-router跳转  **weex debug手机调试出现问题**，打包的bundleJS没问题

问题还未解决



#### 数据交互

发送请求仅支持以下几种协议类型：

1. http
2. https
3. data
4. chrome
5. chrome-extension

   与客户端约定请求拦截格式 可选择 `http://sdy//xxxx?params=xxxx`

#### 更新打包好的js文件方式

1. 直接替换服务器上的js文件
2. 为避免客户端加载的不是最新版的，在加载的时候添加时间戳参数

#### 尚未解决的问题

1. weex compile 编译文件 导出文件 访问方式不清楚





​	

