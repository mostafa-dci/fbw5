let htmlObj = document.getElementsByTagName('h1');// => the first h1 tag
console.log(htmlObj);// => a spicial type of objects (you can use indexing)
// Indexing is array[number], you can use forEach()
// for objects : obj[String] or obj.prop
Array.from(htmlObj).forEach(element=>{
    console.log(element)
})
// for(let i = 0 ; i< htmlObj.length; i++){
//     console.log(htmlObj[i])
// }
let obj = {
    t:"t",
    b:"b",
    ob:{
        ddd:5,
        st:[5,20,60,"someString",{
            pr: true
        }]
    }
}
console.log(obj[0])// => Not working
console.log(obj.ob.ddd)// => 5
console.log(obj.ob.st[3])
// what is the type of obj.ob.st[2]
console.log(obj.ob.st[4].pr)// => true
let firstH1 = document.getElementsByTagName('h1')[0]
console.log(firstH1)
firstH1.innerHTML
console.log(firstH1.innerHTML)// the previoos vale
firstH1.innerHTML = "<input type='text'>"// changeing the content
console.log(firstH1.innerHTML)// new value
document.getElementsByTagName('h1')[1].innerText ="only text" // not rendering



