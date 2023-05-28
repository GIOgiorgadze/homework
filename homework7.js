//დავალება 1
const wrapper = document.querySelector(".modal");
const button = document.querySelector(".btn");
const exit = document.querySelector(".extBtn");

button.addEventListener("mousedown",()=>{
    wrapper.style.display="block";
})
exit.addEventListener("mousedown",()=>{
    wrapper.style.display="none";
})
//დავალება 2
const body = document.body;
const userColor = document.querySelector('.userInteraction');
const validColor = ["black","red","blue","green","white"];


userColor.addEventListener("submit",(e) => {
    e.preventDefault();

    const inputColor = document.querySelector('input[name="sendcolor"]');
    if(inputColor.value){
        if(validColor.includes(inputColor.value)){
            body.style.backgroundColor = inputColor.value;
            inputColor.value="";
        }else{
            alert("Invalid color interaction!");
            inputColor.value="";
        }
    } 
})
//დავალება 3
const numberTaker = document.querySelector('.numbertaker');
const element = document.querySelector('input[name="setnumber"]');
const resultPara = document.getElementById("result");


numberTaker.addEventListener("input",() => {
    let text = element.value;

    if (text.length >= 2) {
      let newString = text.slice(0, -1) + ':' + text.slice(-1);
      element.value = newString;
    }
})
numberTaker.addEventListener("submit",(e)=>{
    e.preventDefault();
    let text = element.value;

    let arr = Array.from(text);

    function conCat(string){
        if(parseInt(string)){
            return string;
        }
    }
    let newArr = arr.filter(conCat);
    let toNumber = newArr.map((elem)=>{
        return parseInt(elem);
    })
    function computation(total,numb){
        return total + numb;
    }
    let averige = toNumber.reduce(computation);
    let result = averige/toNumber.length;
    let fixResult = Math.round(result);
    
    resultPara.innerHTML = `Numbers' round averige is : ${fixResult}`;

    element.value = "";
})