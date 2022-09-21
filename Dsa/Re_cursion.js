//re-cursion mean function called by itself
//Direct re-cursion
function re_cursion(x){
    console.log(x) //Head re-cursion 
    if(x<10){
        re_cursion(x+1);
    }
   
}
// let data = 0
//re_cursion(5);
//output we get number from 1 to 10 

function factorial(x){
    if(x == 0){
       return 1 
     
       
    }
    return x*factorial(x-1)
   

}
// let data = 5;
// console.log(factorial(data))
//output 120

//Indirect re-cursion 

var money = 100
var apple = 0
function BuyApple(x){
if(x >0){
    console.log("i have " +x+ "RS" +apple)
    
    BuyMore(x-10);

}else{
    console.log("i don't have more money",apple)
}

}
function BuyMore(x){
   apple++  
    
BuyApple(x-5)
}
// BuyApple(money)

// head and tail recursion 
function test(x){
    console.log(x) //head recursion 
    if(x>0){
        test(x-1)
    }
    console.log(x) // tail recursion 
}
// console.log(test(5))
// 5
// Re_cursion.js:52 4
// Re_cursion.js:52 3
// Re_cursion.js:52 2
// Re_cursion.js:52 1
// Re_cursion.js:52 0
// Re_cursion.js:56 0
// Re_cursion.js:56 1
// Re_cursion.js:56 2
// Re_cursion.js:56 3
// Re_cursion.js:56 4
// Re_cursion.js:56 5
//---------------------------------
//recursion array with reverse 
let data = [1,2,3,4,5]
let temp
console.log(data.reverse())// same thing it can do with reverse array 
//or
function customreverse(data,start,end){
    console.log(data)
    
    if(start <= end){
        temp = data[start]
        data[start] = data[end]
        data[end] = temp
        customreverse(data,start+1,end-1)
    }
}
customreverse(data,0,data.length-1)
// (5) [1, 2, 3, 4, 5]
// Re_cursion.js:76 (5) [5, 2, 3, 4, 1]
// Re_cursion.js:76 (5) [5, 4, 3, 2, 1]
// Re_cursion.js:76 (5) [5, 4, 3, 2, 1]




