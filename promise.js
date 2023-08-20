console.log("BEFORE");


getUser(1)
.then((users) => getUserSubject(users.name))
.then((sub) => getUserSubjectMarks(sub))
.catch((err) => console.log(err.message))

console.log("AFTER");

function getUser(id){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("ASYNC OPERATION");
            resolve({id:id,name:'NAMA'}) 
        },2000);
    });
}

function getUserSubject(name){
    return new Promise((resolve,reject) => {
    setTimeout(()=>{
        console.log(['ENGLISH,HINDI,PUNJABI,URDU']);
        resolve(['ENGLISH,HINDI,PUNJABI,URDU']) 
    },2000);
    });
}
function getUserSubjectMarks(sub){
    return new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve(25) 
    },2000);
    });
}

