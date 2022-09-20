console.log("hellos ")
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
    let data3 = []
    for(i = 0; i<data.length;i++){
        data3[i] = data[i];
    
    }
    for(i = 0; i<data2.length;i++){
        data3[data.length+i]=data2[i]
    }
    console.log(data)
    console.log(data2)
    console.log(data3)
}
merge();
// (3) [1, 2, 3]

// Traversing.js:86 (2) [4, 5]
//after merged 
// Traversing.js:87 (5) [1, 2, 3, 4, 5]

