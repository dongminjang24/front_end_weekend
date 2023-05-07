import mockPost from './mock.json' assert { type: 'json' };

const $postDetail = document.querySelector('#post-detail');
const $repliesList = document.querySelector('#replies-list');
$postDetail.innerHTML=`
<div>
<p>작성자 : ${mockPost.post.User.nickName}</p>
<p>작성글 제목 : ${mockPost.post.title}</p>
<p>${mockPost.post.content}</p>
</div>
`;

$repliesList.innerHTML=`
<div>
<p>${mockPost.post.Replies[0].User.nickName} :${mockPost.post.Replies[0].content}</p>
<p>${mockPost.post.Replies[1].User.nickName} :${mockPost.post.Replies[1].content}</p>
<p>${mockPost.post.Replies[2].User.nickName} :${mockPost.post.Replies[2].content}</p>
<p>${mockPost.post.Replies[3].User.nickName} :${mockPost.post.Replies[3].content}</p>

</div>
`
console.log(mockPost.post)
console.log(mockPost.post.title)
console.log(mockPost.post.content)
console.log(mockPost.post.User)
console.log(mockPost.post.Replies[0]) //user nickName, content

const $addBtn = document.querySelector('button')
const $input = document.querySelector('input')
let inputVal 

$addBtn.addEventListener('click',()=>{
    inputVal=$input.value
    const container =$repliesList.querySelector('div')
    const pTag = document.createElement('p')
    pTag.innerText=inputVal
    container.appendChild(pTag)
})

/* 
    import(참조)한 json data를
    게시글 상세와 댓글창에 나타내고 게시글 객체의 상세 내용은 console.log로 출력해두었습니다

    댓글 추가 버튼을 누르면 댓글이 추가되도록 해보세요 :)

    삭제 및 수정기능은 본인의 자유로 구현하시면 됩니다 :)
*/
