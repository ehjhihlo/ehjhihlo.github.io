// 申明變量
var btn = document.getElementById("btn"),
prize = document.getElementsByTagName("i"),
needNum,
result;

//封裝生成隨機數函數
function getRandom(n, m) {
return Math.floor(Math.random() * (m - n + 1) + n);
}

//點擊按概率生成隨機數
btn.onclick = function () {

//開始抽獎後限制按鈕功能及按鈕樣式變化
btn.setAttribute("disabled","disabled");
btn.style.backgroundColor = "#FFC8AD";
btn.innerHTML="鏗，打擊出去，球還在飛......";

//生成1-100的隨機整數，用於分配概率
var rand = getRandom(1, 100);

// console.log(rand);

//分配概率，需保證所有獎品的概率總和為100%
var rang = 0, //此數值必須為0，不能變
rang1 = rang + 8, //rang1對應下面第一個if，依次類推，修改後面的數值設置概率，如概率13%，則設置數值13
rang2 = rang1 + 4,
rang3 = rang2 + 8, //代表50積分中獎概率為89%
rang4 = rang3 +20,
rang5 = rang4 +7,
rang6 = rang5 + 10,
rang7 = rang6 + 6,
rang8 = rang7 + 10,
rang9 = rang8 + 7,
rang10 = rang9 + 8,
rang11 = rang10 + 6,
rang12 = rang11 + 6;

if (rand > rang && rand <= rang1) {
needNum = 1;
result = "一壘安打";
} else if (rand > rang1 && rand <= rang2) {
needNum = 2;
result = "三振";
} else if (rand > rang2 && rand <= rang3) {
needNum = 3;
result = "一壘安打";
} else if (rand > rang3 && rand <= rang4) {
needNum = 4;
result = "全壘打";
} else if (rand > rang4 && rand <= rang5) {
needNum = 5;
result = "觸身球";
} else if (rand > rang5 && rand <= rang6) {
needNum = 6;
result = "二壘安打";
} else if (rand > rang6 && rand <= rang7) {
needNum = 7;
result = "滾地球";
} else if (rand > rang7 && rand <= rang8) {
needNum = 8;
result = "三壘安打";
} else if (rand > rang8 && rand <= rang9) {
needNum = 9;
result = "四壞球";
} else if (rand > rang9 && rand <= rang10) {
needNum = 10;
result = "接殺";
} else if (rand > rang10 && rand <= rang11) {
needNum = 11;
result = "失誤上壘";
} else if (rand > rang11 && rand <= rang12) {
needNum = 12;
result = "雙殺打";
}

//執行滾動

var index = 0, //當前獎品位置下標，起始值為0，不要修改
roundNum = 1, //滾動次數，起始值為1，不要修改
round = prize.length * 4, //數值代表滾動圈數
end = round + needNum; //隨機獲得的結束序號
scrollStart();

//封裝高亮函數
function active(){
for (var j = 0; j < prize.length; j++) { //遍歷所有獎品，清除高亮
prize[j].removeAttribute("class");
}
prize[index].className = "active"; //給當前獎品加上高亮
}

//封裝開始滾動函數

function scrollStart() {
var timer1 = setInterval(function () {
if (roundNum == end-4) { //滾動到倒數第四個時停止timer1，執行結束滾動函數
clearInterval(timer1);
scrollEnd();
// console.log("index:"+index+"roundNum:"+roundNum+"end:"+end)
}

active();
roundNum++;
index++;

if (index > 11) index = 0;
}, 65) //此數值代表滾動速度，越小越快
}

//封裝結束滾動函數

function scrollEnd() {
var timer2 = setInterval(function () {
if (roundNum == end) { //當滾動的次數跟隨機獲得的結束序號一致時，停止timer2
clearInterval(timer2);
setTimeout(function () { //延時彈出彈框
alert(result);


//恢復按鈕功能及樣式
btn.removeAttribute("disabled");
btn.style.backgroundColor = "lightsalmon";
btn.innerHTML = "打擊區";
},400) //此數值代表彈出延時多少毫秒彈出

}

active();
roundNum++;
index++;
if (index > 11) index = 0;
},220) //次數值代表最後幾個滾動的速度，約小越快
}
};