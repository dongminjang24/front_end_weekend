// const callback = (number) => new Promise();

// 프로미스를 리턴하므로 비동기 함수
const callback = (number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        number += 1;
        if (number > 10) 
        {return resolve(number)}
        // reject("err");
        
      }, 3000);
    });
  };
  // 원래 프로미스라면
  /*
  callback(5)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  */
  
  // then catch (x) ---> 동기적인 흐름으로 코드를 읽을 수 있다
  
  const asyncAddNumber = async (number) => {
    try {
      const result = await callback(number);
      // then 과 catch를 고려하지 않아도 된다
      // const result = await callback(number); 이놈이 끝날 때까지 기다림(현재는 3초 기다리는 중)
      // 성공이나 실패 중 하나의 결과가 나오잖아 
      console.log(result); // resolve되면 얘 실행
    } catch (err) {
      console.log(err); // reject되면 얘
    }
  };
  
  asyncAddNumber(5);

  // 기다려, 실패, 성공 반환