const errObj={
    404:'Not Found',
    500:'Network Error',
    400:'Bad Request',
    403: "Not Authorization"
}

 /* // 400번 에러 클라이언트 에러
// 500번에러 서버에러 */

/* console.log(errObj[404])=> 강제형변환
    404는 원래 안되는 게 맞음
*/

const errMap = new Map([
    [404,'Not Found'],
    [400,'Bad Request'],
    [403,'Not Authorization'],
    [500,'Network Error']
])
console.log(errMap.get(404))
console.log(errMap.get(403))

for (let err of errMap){
    console.log(err)
    console.log(err[0])
    console.log(err[1])

}
/* 맵 -> 객체 */
let mapObj = Object.fromEntries(errMap)
console.log(mapObj)