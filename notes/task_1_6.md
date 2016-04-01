# 问题记录
## 如何设置网页固定宽度？
设置一个wrpper包裹层，并给予确定宽度
```css
.wrapper {
  width: 980px;
  margin: 0 auto;
  background-color: #000;
}
```
## Font如何简写？
ont 简写属性在一个声明中设置所有字体属性。
可设置的属性是（按顺序）： "font-style font-variant font-weight font-size/line-height font-family"
font-size和font-family的值是必需的。如果缺少了其他值，默认值将被插入，如果有默认值的话。
```
p {
  font:italic bold 12px/30px Georgia, serif;
}
```
## 如何设置黑体？
```css
p {
 font:12px SimHei;
}
```

## 如何将背景图标设置到文本前面
```css
h2 {
    background: url("../img/up_triangle.png") no-repeat  left center;
}

```

# 知识点
## 内联元素设置了float后会自动产生格式化块级上下文，所以不需要设置`display: block;`
## 常见中文字体
- 楷体：KaiTi
- 黑体：SimHei
- 宋体：SimSun
- 微软雅黑：Microsoft YaHei
## 为h1设置border-bottom时,横线长度等于父元素宽度

# 犯了一些小错误
## 设置了绝对定位就把`float`删掉啊，白痴！