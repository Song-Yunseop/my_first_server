// const isidtest = "asde";
// const ispwtest = "112312312q"


// const regExp = /^[a-z]+[a-z0-9]{3,20}$/g

// const regExp1 = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(=.*?[!@#$]).{8,}$/


// console.log(regExp.test(isidtest))
// console.log(regExp1.test(ispwtest));
// console.log(ispwtest);


const test = (data1:number, data2:number, data3:string)=>{
    let a : { box1 : number, box2: number}|string
    if(data3.length >= 10){
        a = "넘나 김"
    }else if(data3.length >=4){
        a = {
            box1: data1 - data2,
            box2: data1 + data2
        }
    }else {
        a = {
            box1: data1 + data2,
            box2: data1 - data2
        }
    }
    return a;
}
console.log(test(1,2,"12312345456456456"));
