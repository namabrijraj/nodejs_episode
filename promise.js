const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(new Error('message'))
    },2000);
})
p.then((res) => console.log("RESULT ",res)).catch((err)=>console.log("ERROR",err.message))