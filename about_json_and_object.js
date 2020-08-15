//json 跟object 的区别 跟js 的json 对象有什么关系

let obj={}  //js 对象

let js_obj1={length:10,size:20}             //js 对象
let js_obj2={'length':10,'size':20}         //js 对象

let js_json_obj={"length":10,"size":20}     //json格式的js对象


let json_string='{"length":10,"size":20}'   //json 格式的字符串

let arr=[                                  //json 格式的数组
    {"length":10,"size":20},
    {"length":50,"size":10},
    {"length":20,"size":30}
]


//将json格式的字符串变为json格式的js对象 使用JSON.parse() 方法: JSONをエンコード encode

var json_s = '{"ID": 1,"name": "user01","gender": "women"}'


console.log(typeof(json_s))      //string

var json_o = JSON.parse(json_s)

console.log(typeof(json_o))    //object
console.log(json_o.ID)         //1


//将json格式的js对象转换为json格式的字符串，使用JSON.stringify()方法。JSONをデコード　decode
var decoded_json = JSON.stringify(json0)

console.log(typeof(decoded_json))