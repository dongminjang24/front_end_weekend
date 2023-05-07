const pr1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('반갑습니다.')
    },5000)
})

const pr2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('안녕하세요')
    },2000)
})

const pr3 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('제 이름은 장동민입니다.')
    },3000)
})

Promise.all([pr1,pr2,pr3]).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
});
// promise all은 무조건 성공해야함

//배열 순서대로 나옴
//결과 나온 시간하고 배열 순서는 관계가 없음

Promise.race([pr1,pr2,pr3]).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
}); //가장 먼저 온 것만 찍힘


// console.clear()

// all의 가장 큰 담점은 하나라도 실패하면 catch문으로 throw
// status를 통해 fulfilled와 rejected를 나누고 성공과 실패의 분기를 나누어 사용이 가능
//allSettled
//데이터 통신에도 순서가 있음
Promise.allSettled([pr1,pr2,pr3]).then((result)=>console.log(result))

try{
    //성공과 실패가능성이 잇는 실행문
    // 성공시 실행할 문장
}catch{
// 실패시 실행할 문장
}

//try문에서 error가 나오면 상위 예외 처리문인 catch문에서 
//예외를 캐치하여 예외를 처리해준다.