//დავალება 1
function expo(num,quant,fu){ 
  if(quant === 0) return num;
  return expo(fu(num,quant),quant-quant,fu)
}
const a = expo(5,4,(num,quant)=>Math.pow(num,quant));
const b = expo(6,6,(num,quant)=>Math.pow(num,quant));
const c = expo(3,4,(num,quant)=>Math.pow(num,quant));

console.log(a)
console.log(b)
console.log(c)

//დავალება 2
function makePostMaket(id,title,body){
    const list = document.createDocumentFragment();
    const div = document.createElement("div");
    
    let person = document.createElement("h1")
    let header = document.createElement("h2");
    let content = document.createElement("p");

    person.innerText = `${id}`;
    header.innerText = `${title}`;
    content.innerText = `${body}`;

    div.append(person,header,content);
    div.classList.add("post");

    list.appendChild(div);
    //document.body.appendChild(list);
    return list;
}

async function getdata(){
    try{
       let response = await fetch("https://jsonplaceholder.typicode.com/posts");
       if(!response.ok){
        throw Error("not succsefull!");
       }

       let data = await response.json();
       data.forEach((u)=>{
        const user = makePostMaket(u.id,u.title,u.body);
        document.body.appendChild(user)
       })
    }catch(err){
        console.log(err.message)
    }  
}
getdata()
