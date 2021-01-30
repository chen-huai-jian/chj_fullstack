# css布局
- 水平居中
    >子元素不同，分为行内元素与块级元素  <br>
        1. 行级元素
            对父元素设置 text-align：center  <br>
        2. 定宽块级元素
            子元素设置margin:0 auto;          <br>
        3. 不定宽块级
            子元素设置成行级 display：inline；父元素设置text-align：center;                <br>
    > flex 布局: 父元素display:flex;justify:center;

- 垂直居中
    >子元素不同               <br>
        1. 子元素单行文本： 让父元素height 等于 子元素line-height  <br>
        2.  子元素多行文本: 父元素display：table-cell | inline-block ,再 vertical-align:middle          <br>
        3. 块级元素： 设置子元素position：absolute，margin:auto;    <br>
    > flex 布局：父元素display：flex；align-items：center

    
- 二列&三列布局（二列可以看做是三列少一个侧边栏）  <br>
    1. float + margin 
    2. position + margin 
    3. 圣杯布局(float + 负margin + padding + position)
    4. 双飞翼布局(float + 负margin + margin)

