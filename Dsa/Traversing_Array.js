
//Inser the element in array 
function traversingh(){

    let data  = [1,2,3,4,5,6,7,8]
    let newEl = 4;
    let position = 5;
    console.log(data);

    for(let i = data.length-1; i>=0;i--){
        if(i >=position){
            data[i+1] = data[i];
            if(i == position){
                data[i] = newEl;
            }
        }
    }
    console.log(data);
}
//After
// (8) [1, 2, 3, 4, 5, 6, 7, 8]
//befor
// (9) [1, 2, 3, 4, 5, 4, 6, 7, 8]
//----------------------------------------

//delete the element from array
function del_element_in_array(){
    let data  = [1,2,3,4,5,6,7,8]
    let position = 5;
    for(let i = position;i<data.length-1;i++){
        data[i] = data[i+1]
    }
    data.length = data.length-1
    console.log(data);
    

}
//After
// (8) [1, 2, 3, 4, 5, 6, 7, 8]
//before
//(7) [1, 2, 3, 4, 5, 7, 8]

//---------------------------------
//search the element in the array 
function search_el_in_array(){
    let data = [54,34,22,46,87,44,99,22]
    let find = 22;
    let findable = []
    let index = undefined;
    for(let i = 0; i< data.length;i++){
        if(data[i] === find){
            //find one value 
            index = i
            
            //find for multiple same value
            findable.push(index = i)
            
        }
    }
    if(index === undefined){
       console.log("data not found ") 
    }else{
        //find one value
        console.log("yes found the value:"+" "+index)
        //find multiple value
        console.log("yes found multiple value:"+" "+findable)
    }
 
}
// yes found the value: 7
// yes found multiple value: 2,7

//array merge
function merge(){
    let data = [1,2,3];
    let data2 = [4,5];
    let data3 = [...data,...data2] // Easy way to merge with spread operator
    
    // for(i = 0; i<data.length;i++){
    //     data3[i] = data[i];
    
    // }
    // for(i = 0; i<data2.length;i++){
    //     data3[data.length+i]=data2[i]
    // }
    // console.log(data)
    // console.log(data2)
     console.log(data3)
}



// (3) [1, 2, 3]

// Traversing.js:86 (2) [4, 5]
//after merged 
// Traversing.js:87 (5) [1, 2, 3, 4, 5]

//----------------------------
//Merge array with while in shorted form
function Merge_while_shorted(){
    let data1 = [3,6,8,24,26,35,64,88,99]
    let data2 = [4,9,55,66,76]
    let data3 = [];
    let d1 =0
    let d2 =0
    let d3 =0
    console.log("data1 details"+" "+data1)
    console.log("data2 details"+" "+data2)
    while(d1<data1.length && d2<data2.length){
        if(data1[d1]<data2[d2]){
            data3[d3] = data1[d1];
            d1++;
        }else{
            data3[d3] = data2[d2];
            d2++;
        }
        d3++;


    }
    while(d1<data1.length){
        data3[d3] = data1[d1];
            d1++;
            d3++;

    }
    console.log("after merge"+" "+data3)
}

// data1 details 3,6,8,24,26,35,64,88,99
// Traversing.js:109 data2 details 4,9,55,66,76
// Traversing.js:128 after merge 3,4,6,8,9,24,26,35,55,64,66,76,88,99

//Array sorting with bubble short

function array_sorting(){
    let data = [40,3,2,25,55,7]
    for(i=0;i<data.length;i++){
        for(j=0;j<data.length;j++){
            if(data[j]>data[j+1]){
                let temp = data[j]
                data[j]=data[j+1]
                data[j+1] = temp
            }
        }
    }
    console.log(data)

}
// array_sorting();

//itirate the data with while loop 

function dataitirate(){
    let data=['superman','batman','ironman','spiderman']
    let i = 0;
    while(i<data.length){
        console.log(data[i]);
        i++;
    }
}
// dataitirate();

// superman
//  batman
// ironman
// spiderman


