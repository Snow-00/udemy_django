// function f1()
// {
//     alert("Welcome to JS")
//     console.log('Welcome to Java Script')
// }

// anonymous function
// let f1=()=>
// {
//     alert("Welcome to JS")
//     console.log('Welcome to Java Script')
// }

// still quite unclear what for
// public void f1()
// {
//     System.out.println("")
// }

// var a; --> undefined
// var a=null;  --> type is object
// var a=10;

// // console.log(a)
// console.log(typeof(a))

// var salary=130000.1414
// console.log(typeof(salary))

// var mstatus=true
// console.log(typeof(mstatus))

// var arr1=[]
// var arr1=[1,2,30,20]  --> homogenous array
var arr1=[1,2,30,20,true,200,'Python',"JS"]
// console.log(typeof(arr1))
// console.log(Array.isArray(arr1))
// console.log('Length of arr1:', arr1.length)
// console.log(arr1)
// // console.log('Element idex 3:', arr1[3])
// console.log('Element idex 3:', arr1[33])

// for(var i=0;i<arr1.length;i++)
// {
//     console.log('Element index ', i, ' is: ', arr1[i])
// }

// for(var i in arr1)
// {
//     console.log('Element at index position:', i, 'is', arr1[i])
// }

// for(var i of arr1)
// {
//     console.log(i)
// }

// arr1.forEach(function(e)
// {
//     console.log(e)
// })

// arr1.forEach((e)=>console.log(e))

let arr2 = new Array(10, 2, 3, 1, 4)

let arr3 = arr2.sort((e1,e2)=>e1-e2)
console.log(arr3)

let arr4 = arr2.sort((e1,e2)=>e2-e1)
console.log(arr4)