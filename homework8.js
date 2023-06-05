//დავალება 1
let mySetTimeout = (callback,delay) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(resolve(callback,delay));
    })
}

function makeToys(delay) {
    return new Promise(function exec(resolve, reject) {
      if (Math.random() > 0.1) {
        resolve(mySetTimeout("undefected",delay))
      } else {
        reject("defected");
      }
    });
}
function sellToys(status,delay) {
    return new Promise(function exec(resolve, reject) {
      if (status === "undefected") {
        if (Math.random() > 0.5) {
          resolve(mySetTimeout("Toy sold",delay))
        } else {
          reject("Toy did not sell");
        }
      }
    });
}
function deliverToys(delay){
    return new Promise((resolve,reject)=>{
        resolve(mySetTimeout("item send to client"),delay)
    })
}


// makeToys(3000)
//     .then((status)=>sellToys(status,1000))
//     .then((res)=>console.log(res))
//     .then((item)=>deliverToys(2000))                 // then/catch
//     .then((recieve)=>console.log(recieve))
//     .catch((err)=>console.log(err));




async function promisify(){
    try {
       const status = await makeToys(3000);
       const result = await sellToys(status,1000);
       console.log(result);                             //async/await
       const item = await deliverToys(2000);
       console.log(item);
    } catch (error) {
        console.log(error);
    }
}
promisify();
