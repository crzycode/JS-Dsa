let data =[]
let currentSize = data.length
let max = 5
// function push(newval){
//     if(currentSize>=max){
//         alert("you cannot add in stack"+newval)


//     }
//     data[currentSize] = newval;
//     currentSize+=1
  
// }

// console.log(data)
// function pop(){
//     if(currentSize>0){
//         currentSize-=1;
//         data.length = currentSize;
//     }else{
//         alert("stack is already empty ")
//     }
// }


// push(20);
// push(22);
// push(23);
// push(25);
//  pop();
//  pop();

// function loop(){
//     for(let i =0;i<5;i++){
//         push(i)
//     }
// }
// loop();

//reverse string with stack 
function push(newval){
    data[currentSize] = newval
    currentSize+=1;

}
function pop(){
    lastremoveitem = data[currentSize-1];
    currentSize-=1;
    data.length = currentSize;
    return lastremoveitem;
}
function reversestr(item){
    for(let i = 0;i<item.length;i++){
        push(item[i]);
    }
    for(let i = 0;i<item.length;i++){
        console.log(pop())
        // item[i] = pop();
    }
}
let str = "mangal";
str=str.split("");
reversestr(str)
console.log("stack",data)
// console.log("stack",data.join(""))