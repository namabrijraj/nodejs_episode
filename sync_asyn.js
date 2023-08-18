console.log("BEFORE");
getUser(1,getUserInfo);

console.log("AFTER");

function getMarks(mark){
    console.log("MARK ",mark);
}

function getSubject(sub){
    console.log("User subject "+sub);
    getUserSubjectMarks(sub,getMarks)
}
function getUserInfo(users){
    console.log(users);
    getUserSubject(users.name,getSubject)
}

function getUser(id,callback){
    setTimeout(()=>{
        console.log("ASYNC OPERATION");
        callback({id:id,name:'NAMA'}) 
    },2000);
}

function getUserSubject(name,callback){
    setTimeout(()=>{
        callback(['ENGLISH,HINDI,PUNJABI,URDU']) 
    },2000);
}
function getUserSubjectMarks(sub,callback){
    setTimeout(()=>{
        callback(25) 
    },2000);
}

