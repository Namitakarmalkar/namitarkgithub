function outer(){
    let outer_fun_variable=100;
    let outer_fun=function(){
        let inner__fun_variable=200;
        console.log(inner__fun_variable,function);
    }
    return inner_fun;
}
let returnValue=outer();
returnValue();