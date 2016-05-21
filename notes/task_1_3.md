## 居中有对象区别
`text-align: center;`指的是Block内部的元素居中。

`margin: 0 atuo;`能让Block自身居中
## 为Body设置background-color会导致颜色铺满屏幕
如下代码中，如果html元素没有设置背景色，body内设置的背景色将铺满屏幕。

```css
html {
  background-color: yellow;
}

body {
  background-color: blue;
  width: 200px;
  height: 200px;
  margin: 0 auto;
}
```
参考资料: [css applying width on the body](http://stackoverflow.com/questions/11721574/css-applying-width-on-the-body)

## Markdown编辑器
可以使用WebStorm来编辑md文件，需要安装插件Markdown Support，可实现立即预览，甚至可以检查出代码中的错误，好厉害。

## 绝对定位实现三栏式布局，使用position：absolute的元素会超出父元素
父元素是relative，子元素是absolute的布局主要是用在小地方（而且很有用）。因为它既脱离了父元素，但定位又以父元素为基准。
属性值为 absolute 会将对象拖离出正常的文档流,用时进行绝对定位而且不考虑它周围内容的布局

## 可以使用lorem产生随机文字
在支持Emmet的文本编辑器中输入`lorem`，再按`Tab`键将会产生如下文字：
```
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
```
可以通过输入`p*4>lorem`随机产生四段文本：
```
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
<p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</p>
<p>Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!</p>
<p>Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident delectus ducimus necessitatibus reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel odio?</p>
```

## 三列布局，中部自适应
### 将两边列设置为position:absolute用于脱离文档流，而中间列设置左右的margin值
这个方法有毒，见上方。
###