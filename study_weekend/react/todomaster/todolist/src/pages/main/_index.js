import {Link, useNavigate, useSearchParams } from "react-router-dom"

function MainPage(){
    const [searchParams,setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const onClicknavigateTodo=()=>{
        // window.location.href  = '/todo/3'
        // 뭉탱이로 받아오게됨
        // navigate('/todo/3')
        // navigate('-1')
        //뒤로가기
        setSearchParams({
            todoId:3,
            page:12
        })
    }; 
    // console.log(searchParams.get("todoId"))
    return(
        <>
            {/*태그명이 없는 태그를 Fragment라고 부른다.만약 해당 Fragment에 속성을 줄 경우 */}
            <div>·ᴗ·</div>
            <div>·ᴗ·</div>
            <button onClick={onClicknavigateTodo}>TodoPage로 이동</button>
            <a href="/todo/3">TODOPAGE</a>
            {/*뭉탱이를 전체 받아와주는 것*/}

            <Link to="/todo/5">Todo</Link> 
            {/*뭉탱이가 아니고 일부만 받아옴 */}

        </>
    )
}

export default MainPage