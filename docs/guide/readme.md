# Vue

## 一、vue-resource请求报错`emuleteJson emulateHTTP`

> 作者：sponing
> 链接：https://www.jianshu.com/p/8d66070eac20

<img src="/image/a.png">

> 控制台报错

<img src="/image/b.png">

> 报错信息

``` bash
**报错信息**
 Request header field Content-Type is not allowed by Access-Control-Allow-Headers in preflight response.
```

在main.js里边定义

``` bash
Vue.http.options.emulateHTTP = true;
Vue.http.options.emulateJSON = true;
```

在使用的时候遇到一个小坑,这个$http请求和jquery的ajax还是有点区别，这里的post的data默认不是以form data的形式，而是request payload。解决起来也很简单：在vue实例中添加headers字段:

``` bash
http: { headers: {'Content-Type': 'application/x-www-form-urlencoded'} }
```

后来翻了下vue-resource
的源码，发现有更加简单的做法:

``` bash
Vue.http.options.emulateJSON = true;
```

> emulateHTTP

emulateJSON(布尔值)
默认值为：false,当值为true并且data为对象时，设置请求头Content-Type的值为application/x-www-form-urlencoded

如果服务器无法处理编码为application/json的请求，可以启用emulateJSON选项。启用之后，请求会以application/x-www-form-urlencoded为MIME type，就像普通的HTML表单一样。

```bash
Vue.http.options.emulateJSON = true;
```

> crossOrigin

crossOrigin（布尔值）
默认值为：null，表示是否跨域，如果没有设置该属性，vue-resource内部会判断浏览器当前URL和请求URL是否跨域。

``` Javascript
if ( request.crossOrgin === null ) {
    request.corssOrigin = corssOrigin(request);
}
if ( request.corssOrigin ) {
    if ( !xhrCors ) {
        request.client = xdrClient;
    }
    request.enumlateHTTP = false;
}
```

如果最终crossOrigin为true并且浏览器不支持CORS，即不支持XMLHttpRequest2时，则会使用XDomainRequest来请求。目前XDomainRequest 只有IE8，IE9 浏览器支持用来进行AJAX跨域。

[vue-resource](https://segmentfault.com/a/1190000007087934)
## 二、书签

- [webpack项目提示Invalid Host header](https://blog.csdn.net/bodhiye/article/details/78523333)
- [vue2移动端上传，预览，压缩图片，解决拍照旋转问题](https://blog.csdn.net/xiaogezl/article/details/70156500)
- [window.open被浏览器拦截的解决方案](https://www.cnblogs.com/firstdream/p/6008521.html)
- [vue2 config配置说明](https://www.cnblogs.com/whkl-m/p/6627864.html)
- [vue中使用axios post上传头像/图片并实时显示到页面](https://blog.csdn.net/myt_Never/article/details/80106426)
- [vuex工作原理](https://juejin.im/entry/5b7a21bf51882542eb2dd685?utm_source=gold_browser_extension)
