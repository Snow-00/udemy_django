// let employee=
// {
//     'eid' : 1,
//     'ename' : 'Jack',
//     'ecity' : 'Jakarta',
//     'mobile' : [1234123, 1244555523],
//     'address' :{
//         'dno':'6-1022',
//         'street':'electronic',
//         'city':'Jakarta',
//         'zipcode':24241
//     }
// }   // object

// console.log(typeof(employee)) // object

// console.log(employee)

// console.log(`Employee ID : ${employee.eid}`)
// console.log(`Employee Name : ${employee.ename}`)
// console.log(`Employee City : ${employee.ecity}`)
// console.log(`Employee Mobile : ${employee.mobile[0]}`)
// console.log(`Employee Addr : ${employee.address.dno}`)



let employees=[
    {'eid':1,'ename':'Jack', 'ecity':'Jakarta'},
    {'eid':2,'ename':'James', 'ecity':'Min'},
    {'eid':3,'ename':'Dull', 'ecity':'Shitake'},
    {'eid':4,'ename':'Meme', 'ecity':'Goam'}
]

// console.log(employee)

for(employee of employees)
{
    console.log(`Employee ID : ${employee.eid}`)
    console.log(`Employee Name : ${employee.ename}`)
    console.log(`Employee City : ${employee.ecity}`)
    console.log('******************************')
}