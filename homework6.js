
//დავალება 1
let div = document.getElementById("text");
let button = document.getElementById("button");
let indicator = false;

button.addEventListener("click", ()=>{
    if(indicator === false){
        div.style.display = "none";
        indicator = true;
    }else{
        div.style.display = "block";
        indicator = false;
    }    
});

// დავალება 2
let div2 = document.createElement("div");
div2.setAttribute("id","card");

let h2tag = document.createElement("h2");
let h2text = document.createTextNode("Gandalf");
h2tag.append(h2text);

let anktag = document.createElement("a");
anktag.setAttribute("href","#");
let anktext = document.createTextNode("Go to profile");
anktag.append(anktext);

div2.appendChild(h2tag);
div2.appendChild(anktag);

document.body.insertBefore(div2,div);

//დავალება 3

const check = document.querySelector("#checkAnswers");

let answers = ["Romulus","Minato Namikaze"];
let point = 0;

check.addEventListener("click",function(){
    const showPoint = document.getElementById("point"); // დავალება 4-ის
    let answers1 = document.querySelectorAll(".question");
    answers1.forEach((ans)=>{
        if(ans.checked){
            if(answers.includes(ans.getAttribute("value"))){
                ans.nextElementSibling.style.color = "green";
                point ++;
            }else{
                 ans.nextElementSibling.style.color = "red";
            }
        }
    })
    showPoint.innerHTML = "Your Point is: " + point; // დავალება 4-ის
})



