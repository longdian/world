# es6
- 1、文章转载地址：http://www.rockyxia.com/?p=669
- 2、[ES6书籍地址](http://es6.ruanyifeng.com/#docs/intro)


## 解决让浏览器兼容ES6特性
* 1、为什么ES6会有兼容性问题？
> 由于广大用户使用的浏览器版本在发布的时候也许早于ES6的定稿和发布，而到了今天，我们在编程中如果使用了ES6的新特性，浏览器若没有更新版本，或者新版本中没有对ES6的特性进行兼容，那么浏览器肯定无法识别我们的ES6代码，好比浏览器根本看不懂我写的let和const是什么东西？只能报错了。这就是浏览器对ES6的兼容性问题。


* 2、好消息
> 哪里有灾难，哪里就有勇士和救兵，针对ES6的兼容性问题，很多团队为此开发出了多种语法解析转换工具，把我们写的ES6语法转换成ES5，相当于在ES6和浏览器之间做了一个翻译官。比较通用的工具方案有babel，jsx，traceur，es6-shim等。此外，浏览器自身也加快速度兼容ES6的新特性，其中对ES6新特性最友好的是Chrome和Firefox浏览器。各大转换工具、javascript解析引擎对ES6的支持程度情况，可以参查看这个[地址：](http://kangax.github.io/compat-table/es6/)

* 3、使用转换工具babel 我们选择`Babel`作为学习和讲解的工具，以及最多人使用的`windows`作为操作系统。
> 步骤1：制作ES6文件
```JavaScript
<script>
   const Name = '张三';//使用新增的关键字：const声明常量
   alert(Name);
</script>
```
> 步骤2：测试const兼容性
1. 我们在chrome浏览器（版本不能太低）运行ES6.html，会正常运行，弹出“张三”。

<img src="/image/20160704001.png"></img>

2.接下来我们运行在IE 9，会看到这样的情况

<img src="/image/20160704-002.png"></img>

IE 9浏览器会提示我们第9行出现一个语法错误，相当于告诉我们它看不懂const是什么鬼，但是学过ES6入门系列第三节的我们都知道const是ES6的新增关键字，用于声明一个常量。这个时候我们知道const在IE9浏览器出现了兼容性问题了。

<img src="/image/20160704-003.jpg"></img>

下面我们开始用Babel来兼容它。

我们可以使用npm来安装babel，npm是随同Nodejs一起安装的包管理工具，新版的nodejs已经继承了npm，我们只要安装nodejs即可。对于nodejs的安装，不在本节的学习范围，我就不作展开说明了……….才怪。（说好的简单易懂，前端君怎么会半途掉链子）


> 步骤3：安装node

来，没安装过的node的同学，我们来一起安装：

node官网（下载安装包.msi）：https://nodejs.org/

> 步骤4：检测node是否安装成功

<img src="/image/20160704-005.png"></img>

> 步骤5：用npm安装babel
1、npm install babel-core@5
2、cnpm install babel-core@5

看到上面的界面就是表示你安装babel成功，你会在电脑盘中找到这样的目录：C:\Users\Administrator\node_modules\babel-core，打开后你会看到：

<img src="/image/20160704-007.png"></img>

在这个目录里面我们找到babel的浏览器版本browser.js(未压缩版)和browser.min.js(压缩版)。

> 步骤6：使用babel

然后我们将这个文件使用在我们的ES6.html中。

```JavaScript
<script src="browser.min.js"></script>
<script type="text/babel">
   const Name = '张三';//使用新增的关键字：const声明常量
   alert(Name);
</script>
```
我们把browser.min.js引入（文件位置的路径要确保正确）。并且设置第二个script标签的type为”text/babel”。

> 步骤7：让const运行在IE9浏览器上

然后我们再在IE9浏览器上运行一下：

<img src="/image/20160704-008.png"></img>

这个时候IE9能正常运行我们的ES6新特性了，也就是babel转换起作用了，讲const转换成IE9能执行的代码了。

这节内容操作教学的比较多，属于很干的干货，很多东西没有展开讲解，比如：node是什么？命令提示符怎么操作等问题，对于刚刚接触编程的新手来说，如果看不懂或者很多不理解也没关系，不会阻碍后面章节的学习，因为你可以使用Chrome或者Firefox浏览器进行学习和练习，在这两款浏览器上可以执行大部分的ES6新特性，不需要使用类似babel的转换工具。

这一节的讲解只是作为一个学习的入门案例，起到抛砖引玉的作用，让新手们能对ES6的兼容问题和babel转换工具有个`感性认知`，并没有覆盖所有兼容方案的介绍，以后的开发中我们一定会发现更多关于ES6特性的坑，也会找到更多相对应的解决办法。填上这些坑，就是进步的表现。
