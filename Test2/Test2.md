
問題 1.
```
.container .shop-list li.item-blue {				
/* Explain why does this color not works, and how to fix make it work on 1st list */				
  color: blue;
}

```

答案
```
.item 已經被佔用

提供一個解法
將 .item 分開命名成

li.item-blue

li.item-green

```

問題 2.
```
/* Write styling make every other line give background color to next one */

```

答案
```
li:nth-child(even) { 
    background-color: Lightgreen; 
} 
```

參考資料
https://developer.mozilla.org/en-US/docs/Web/CSS