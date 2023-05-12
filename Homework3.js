//დავალება 1:

const work = function(n1,n2,...args) {
    
    let sum1 = n1 + n2; 
    let sum2 = 1;
    for(let arg of args){
        sum2 *= arg;
    }
    let final = [sum1,sum2];
    return final;
}    
console.log(work(3,4,6,7,8));

//დავალება 2 :

const user = {
    banks : [{},{},{address: {
        city: "Temka"
    }}]
}        

function hola({banks:[,,{address:{city}}]={}}){
  return `Terrain name is ${city}`; 
}
console.log(hola(user));

//დავალება 3

const exObj = {
    name: "Giorgi",
    surname: "Giorgadze",
    fullname: function(){
      let sum = `${this.name} ${this.surname}`;
      return sum;
    },
    other: {
      adress:{
        terrain:"Temka"
      }
    }
    
  }
  
  function copyObj(obj){
     const newobj = Object.assign({}, obj);
     return newobj; 
  }
  let doObj = copyObj(exObj);
  let doObj2 = copyObj(exObj);
  
  doObj2.name = "Merab"
  console.log(doObj.fullname());
  console.log(doObj2.fullname());