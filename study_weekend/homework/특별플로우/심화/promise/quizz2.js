/* 
문제 2

1. 
당신은 3가지 비동기 요청에 대하여 이 3가지 요청이 모두 실행되고 나서
console.log로 (정상적으로 실행되었습니다)라는 콘솔로그를 보여주려고 한다.

각각의 비동기 요청은
console.log("비동기 요청 1")
console.log("비동기 요청 2")
console.log("비동기 요청 3")
를 결과값으로 출력한다


2. 결과
[콘솔창]
      ... 비동기 요청

      1. case: success(fullfield)
      "비동기 요청 1"
      "비동기 요청 2"
      "비동기 요청 3"
      "정상적으로 실행되었습니다"

      2. case errer(rejected)
      "결과값을 가지고 오는데 실패하였습니다"


3. 조건
기초. 반복문 (for)을 사용하지말 것, resolve, reject의 반환 값으로 전달하는 데이터의 제한은 없다.
기초. 모든 요청 중 단 하나의 요청이라도 실패하면 "결과값을 가지고 오는데 실패하였습니다"를 출력 할 것

심화. 
      모든 요청 중 일부가 실패했다면 나머지 비동기 요청에 대해서는 정상적으로 console.log를 실행할 것
      만약 실패하였다면 어느 요청이 실패하였는지 consoe.log로 출력할 것

            ex) "비동기 요청 2 호출 실패"

      모든 요청에 대하여 일부요청이 실패하고 나머지는 정상적으로 작동되었기 때문에
      결과 값으로는 반드시 "정상적으로 실행되었습니다"가 출력되어야한다
      그러나, 3가지 요청이 모두 실패했을 때는 "결과값을 가지고 오는데 실패하였습니다"가 출력되어야한다.
*/
const pr1 = new Promise((resolve,reject)=>{
      //          setTimeout(()=>{
      //     resolve(
      //       console.log('비동기 요청1'))
      //       },2000)
      
            reject(console.log("비동기 요청1 호출 실패"))
      // 실패시 실행할 문장
      
     })
  
  const pr2 = new Promise((resolve)=>{
//       try{  
//             setTimeout(()=>{
//        resolve(
//          console.log('비동기 요청2'))
//    },3000)
//    }catch{
//          console.log("비동기 요청2 호출 실패")
//    // 실패시 실행할 문장
//    }
reject(console.log("비동기 요청2 호출 실패"))

  })
  
  const pr3 = new Promise((resolve)=>{
//       try{  
//             setTimeout(()=>{
//        resolve(
//          console.log('비동기 요청3'))
//    },4000)
//    }catch{
//          console.log("비동기 요청3 호출 실패")
//    // 실패시 실행할 문장
//    }
reject(console.log("비동기 요청3 호출 실패"))

  })
  
//   Promise.all([pr1,pr2,pr3]).then((result)=>{
//       console.log("정상적으로 실행되었습니다.")
//   }).catch((err)=>{
//       console.log("결과값을 가지고 오는데 실패하였습니다.")
//   });

//   Promise.allSettled([pr1,pr2,pr3]).then((result)=>{
//       console.log("정상적으로 실행되었습니다.")  })
//       .catch((err)=>{
//             console.log("결과값을 가지고 오는데 실패하였습니다.")
//       });
//데이터 통신에도 순서가 있음
Promise.allSettled([pr1,pr2,pr3]).then(result=>{
      try{
            console.log("정상적으로 실행되었습니다.")
          //성공과 실패가능성이 잇는 실행문
          // 성공시 실행할 문장
      }catch{
            console.log("결과값을 가지고 오는데 실패하였습니다.")
      // 실패시 실행할 문장
      }}
      )

