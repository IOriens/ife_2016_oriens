# 绝对定位的一些问题
## 疑问
### 使用`ponsition: absolute;`时为什么要将父元素设置为 `positon: relative`？
绝对定位元素的位置直接和父容器是否设置了相对定位（绝对定位）有直接关系。绝对定位元素需要至少一个祖先元素设置了相对定位（绝对定位），不然元素定位会相对于页面的主体进行定位。
### float的元素还可以使用position定位吗？为什么这时可以使用margin-left来移动和覆盖float元素？
### 父元素设置了`position:relative`对子元素设置`positon: relative`有什么影响？
测试了一下，好像没有什么影响
### position: relative; 的top，bottom到底往哪个方向移动
对于相对定位元素，这些属性的设置让元素从默认位置移动。例如，top设置一个值“20px”在一个相对定位的元素上，这个元素会在原来位置向下移动“20px”。反之，“top”设置一个“-20px”，这个元素会在原来的位置向上移动“20px”。
对于绝对定位和固定定位，这些属性指定了元素与父元素边缘之间的距离，例如，绝对定位的元素设置一个“top”值为“20px”，将使绝对定位元素相对于其设置了相对定位的祖先元素顶部边缘向下移动“20px”，反之，如果设置一个“top”值为“-20px”，将使绝对定位元素相对于其设置了相对定位的祖先元素顶部边缘向上移动“20px”。（绝对定位的参考点是其祖先元素设置了“relative”或者“absolute”值）。
### 当相对定位元素同时设置了`top`和`bottom`时，到底用谁？
事实上，一个相对定位元素同时设置了“top”和“bottom”位移属性值，实际上“top”优先级高于“bottom”。然而，一个相对定位元素同时设置了“left”和“right”位移属性，他们的优先级取决于页面使用的是哪种语言，例如，如果你的页面是英文页面，那么“left”位移属性优先级高，如果你的页面是阿拉伯语，那么“right”的位移属性优先级高。
### 同上问题，对于绝对定位怎么处理呢？
当一个绝对定位的元素有固定的高度和宽度，并且盒子位移同时设置了“top”和“bottom”时，“top”更具优先组，另外和相对定位元素一样，当同时设置了“left”和“right”时，优先级取决于他的页面使用的语言。
## 其它
### 相对定位是相对于包含块的content-box来说的
### 绝对定位会脱离文档流，相对定位不会

# 居中相关
## 如何进行垂直居中
[所有居中的方法](https://css-tricks.com/centering-css-complete-guide/)
## 未看上文实现的方法
将级联的父级元素高度设置为100%，再使用绝对定位将其放至屏幕中间，最后使用margin的负值将其向左上方移

## 采用上述方法出现了滚动条
需将body和html的高度设置为100%，同时需要将`padding`和`margin`置零
```css
html,body {
  height: 100%;
  position: relative;
  margin: 0;
  padding: 0;
}

.square {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```
# Overflow相关问题
## 使用`overflow: hidden;`可以将超出div的元素隐藏，即使他们脱离了文档流
## overflow的用法，及其对脱离文档流元素的影响？
```css
/* 默认值。内容不会被修剪，会呈现在元素框之外 */
overflow: visible;

/* 内容会被修剪，并且其余内容不可见 */
overflow: hidden;

/* 内容会被修剪，浏览器会显示滚动条以便查看其余内容 */
overflow: scroll;

/* 由浏览器定夺，如果内容被修剪，就会显示滚动条 */
overflow: auto;

/* 规定从父元素继承overflow属性的值 */
overflow: inherit;
```
# 其它
## border-collapse
The border-collapse CSS property determines whether a table's borders are separated or collapsed. In the separated model, adjacent cells each have their own distinct borders. In the collapsed model, adjacent table cells share borders.









