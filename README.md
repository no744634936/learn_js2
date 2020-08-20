关于js 一些零散的知识


find_result 是一个object javascript中object没有length属性。

if(find_result.length>0){
    ctx.body=new Error(email_exist)
    console.log(new Error(email_exist));
    return
}
