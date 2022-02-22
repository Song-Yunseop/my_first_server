const text = "Deeper neural networks are more difficult to train. We present a residual learning framework to ease the training of networks that are substantially deeper than those used previously.     [ some_paper_a, some_paper_b ] We explicitly reformulate the layers as learning residual functions with reference to the layer inputs, instead of learning unreferenced functions.[ some_book_a, some_paper_a ]We provide comprehensive empirical evidence showing that these residual networks are easier to optimize, and can gain accuracy from considerably increased depth. [ some_book_b ]";

const List:(string | number)[] = [];
const testList:(string | number)[] = ["some_paper_a","some_paper_b"];

const textList:(string | number)[] = text.split(" ");
let boolen = false;
let boolen2 = 0;
console.log(text);
for(let i = 0 ; i < textList.length; i++){
    const temp = (textList[i] as string);
    
    if(temp[temp.length-1] =="["){
        while (true) {
            if((textList[i+1] as string )[0] == "]"){
                break;
            }
            if((textList[i+1] as string)[(textList[i+1] as string).length-1] == "," ){
                textList[i+1] = (textList[i+1] as string).slice(0,-1)
                boolen = true;
            }
            let tempIndex = List.indexOf(textList[i+1]);
            if(tempIndex >= 0){
                if(tempIndex+1 < boolen2){
                    textList[i] = `${tempIndex+1},`;
                    textList[i+1] = boolen2;
                }else{
                    textList[i+1] = tempIndex+1;
                    boolen2 = tempIndex+1
                }
            }else{
                List.push(textList[i+1])
                if(List.length < boolen2){
                    textList[i] = `${List.length},`;
                    textList[i+1] = boolen2
                }else{
                    textList[i+1] = List.length;
                    boolen2 = List.length
                }
            }
            if(boolen){
                textList[i+1] = `${textList[i+1]},`
                boolen = false;
            }
            i++;
        }
        boolen2 = 0;
    }
}
console.log(textList.join(" "));
List.forEach((data,index)=>{
        console.log(`[${index+1}] ${data}`)
    })
