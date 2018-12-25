## webpack 配置

### 1、DefinePlugin

``` bash
new webpack.DefinePlugin({
    'process.env': env
}),
```

### 2、ProvidePlugin
> 这个东西不得不说，在我不知道之前，引入jquery真是麻烦的一腿。 
> 官方文档的使用方法是：

``` bash
new webpack.ProvidePlugin({
  identifier: 'module',
})
# 在使用了ProvidePlugin之后，我们只需要指定一个
plugins:[
    new webpack.ProvidePlugin({x
        $:'jquery',
        jQuery:'jquery',
        'window.jQuery':'jquery'
    })
],
```


### 4、完整的从建立到上线的配置
> 1、我们需要SCSS/SASS来写样式
> 2、我们需要对图片进行处理
> 3、我们需要bable来支持Es6
> 4、我们需要一个本地Server来提供测试环境
> 5、我们需要Eslint进行代码检测

## CSS:
```bash
{
    如果仅仅使用了CSS，那么一般是使用CSSLoader(常见于超小型的项目，如一个网页？)
    test: /\.css$/,
    loaders: [ 'style-loader',
    'css-loader' ]
},
```


## SASS:
```bash
{
    一般最终我们会选择这样的配置:
   rules: [{
    test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader", options: {
                sourceMap: true
            }
        }, {
            loader: "sass-loader", options: {
                sourceMap: true
            }
        }]
    }]
},
注意：1:一般我们会开启sourceMap 用于定位错误位置
     2:打包出来的文件其实是没有css的，而是通过webpack类似管道的流程进行了源文件的转换
{
    test: /\.scss$/,
    loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ]
},
```


## 图片的处理