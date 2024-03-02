
### 列舉 (Enum)

列舉（Enum）型別用於取值被限定在一定範圍內的場景，比如一週只能有七天，顏色限定為紅綠藍等。

簡單的例子
列舉使用 enum 關鍵字來定義：
```
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
```

```
enum Color {Red, Green, Blue};
```

### 介面 (Interfaces)

在物件導向程式語言中，介面（Interfaces）是一個很重要的概念，它是對行為的一種抽象，而具體如何行動則需要由類別（classes）去實現（implement）。

TypeScript 中的介面是一個非常靈活的概念，除了可用於對類別的一部分行為進行抽象以外，也常用於對「物件的形狀（Shape）」進行描述。

簡單的例子
```
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};
```
上面的例子中，我們定義了一個介面 Person，接著定義了一個變數 tom，它的型別是 Person。這樣，我們就約束了 tom 的形狀必須和介面 Person 一致。
