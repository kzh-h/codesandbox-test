/*
 * const, letの変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var1変数の上書き
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // let は上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// val3 = "const変数を上書き";

// // const変数は再宣言不可
// const val3 = "const変数を再宣言";

// // constで適宜下オブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "abc",
//   age: 28,
// };
// val4.name = "cdf";
// console.log(val4);

// constで定義下オブジェクトはプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push('monkey');
// console.log(val5);

/*
 * テンプレート文字列
 */
// const name = "abc";
// const age = 28;

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// function func1(str){
//   return str;
// };
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です。"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20))

/**
 * 分割代入
 */
// const myProfile = {
//   name: "abc",
//   age: 28
// };
// // const message1 = `name is ${myProfile.name}. age is ${myProfile.age}.`;
// // console.log(message1);

// const {name, age} = myProfile;
// const message2 = `name is ${name}. age is ${age}.`;
// console.log(message2);

// const myProfile = ['abc', 28];
// const message3 = `name is ${myProfile[0]}.`;
// console.log(message3);
// const [name, age] = myProfile;
// const message4 = `name is ${name}.`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name = "gust") => console.log(`Hello ${name}!`);
// sayHello("abc");

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(...arr1)

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7)

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);
// console.log(arr8);

/**
 * map, filter
 */
// const nameArr = ["tanaka", "yamada", "sato"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index])
// };

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// 第2引数がインデックスになる
// nameArr.map((name, index) => console.log(`${index + 1}: ${name}`));

// // filter
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(newNumArr)

// const newNameArr = nameArr.map((name) => {
//   if (name === 'tanaka'){
//     return name;
//   } else {
//     return `${name} san`
//   }
// });
// console.log(newNameArr)

/**
 * 三項演算子
 */
// ある条件 ? True : False
// const val1 = 1 > 0 ? "ture" : "false";
// console.log(val1);
// const num = "1300";
// console.log(num.toLocaleString())

// const formattedNum = typeof num === "number" ? num.toLocaleString() : "enter number"
// console.log(formattedNum)

/**
 * 論理演算子
 */
// console.clear()
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("either true")
// };

// // || 左がfalseなら右側を返す
// console.clear()
// const num = null;
// const fee = num || "noset num";
// console.log(fee)

// &&左側がTrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "something set";
console.log(fee2);
