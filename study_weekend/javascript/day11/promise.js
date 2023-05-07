
let a = 5;

const pr = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        a+=1;
        if(a===6){
            resolve(a)
        }else{
            reject('error')
        }//실패할리 없음
    },1000)
})

pr.then((res)=>{
    console.log(res); //6
})

console.log('')