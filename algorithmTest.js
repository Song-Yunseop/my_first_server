// const a = {
//     a : 1,
//     b : 2
// }

const test = (date1, date2, date3) => {
    let a
    if (date3.length >= 10) {
        a = "너무길어요"       
    } else if (date3.length < 4){
        a = {
            box1 : date1 + date2,
            box2 : date1 - date2
        }      
    } else if (date3.length >= 4){
        a = {
            box1 : date1 - date2,
            box2 : date1 + date2
        }
    } 
    return a;
}; 
console.log(test(5,3,"dㅁㄴㅇㅁㄴㅇㅁㄴㅇf3"));




// 만약에 데이터3의 길이가 4이상이면 박스1은 데이터1-데이터2 박스2는 데이타1+데이타2 데이터3의 길이가 4미만이면 둘이 거꾸로 그리고 데이터3의 길이가 10이상이면 "너무길어요" 리턴
