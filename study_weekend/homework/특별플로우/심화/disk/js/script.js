const musicListData = [
  {
    src: './assets/img/iu_0.jpg',
    color: ['#0272a4', '#f6a564'],
  },
  {
    src: './assets/img/iu_1.jpg',
    color: ['#b6bfc8', '#36595b'],
  },
  {
    src: './assets/img/iu_2.jpg',
    color: ['#e58e82', '#6f569f'],
  },
];

const btnContainer = document.querySelector('.list_btn_group')
musicListData.forEach((v,i)=>{
  const element= document.createElement('img')
  element.src=`${v.src}`
  console.log(element)
  btnContainer.querySelector('ul').appendChild(element)
}
)

const prevBtn = btnContainer.querySelectorAll('button')[0]
const nextBtn = btnContainer.querySelectorAll('button')[1]
console.log(prevBtn);
console.log(nextBtn);
let i = -1
const imgAll =btnContainer.querySelectorAll('ul > img')
window.onload= ()=>{
  const mainContainer = document.querySelector('main')

  const imgAll =btnContainer.querySelectorAll('ul > img')
  imgAll.forEach(v=>{
    v.style='width:40px;height:auto;'
  })

    i =0
    imgAll[i].style='border:3px solid white'
    mainContainer.style=
    `background:linear-gradient(120deg, ${musicListData[i].color[0]}, ${musicListData[i].color[1]});`
}


nextBtn.addEventListener('click',()=>{
  const filterContainer = document.querySelector('.filter')
  const mainContainer = document.querySelector('main')
  const imgAll =btnContainer.querySelectorAll('ul > img')
  imgAll.forEach(v=>{
    v.style='width:40px;height:auto;'
  })
  if (i === imgAll.length -1 ){
    i =0
    imgAll[i].style='border:3px solid white'
    mainContainer.style=
    `background:linear-gradient(120deg, ${musicListData[i].color[0]}, ${musicListData[i].color[1]});`
   
  }   
    else{
    i += 1
    imgAll[i].style='border:3px solid white'
    mainContainer.style=
    `background:linear-gradient(120deg, ${musicListData[i].color[0]}, ${musicListData[i].color[1]});`
  
  }

}
)

prevBtn.addEventListener('click',()=>{
  const filterContainer = document.querySelector('.filter')
  const mainContainer = document.querySelector('body > main')
  const imgAll =btnContainer.querySelectorAll('ul > img')
  imgAll.forEach(v=>{
    v.style='width:40px;height:auto;'
  })
  if (i === 0 ){
    i =2
    imgAll[i].style='border:3px solid white'
    mainContainer.style=
    `background:linear-gradient(120deg, ${musicListData[i].color[0]}, ${musicListData[i].color[1]});`
   
  }else{
    i -= 1
    imgAll[i].style='border:3px solid white'
    mainContainer.style=
    `background:linear-gradient(120deg, ${musicListData[i].color[0]}, ${musicListData[i].color[1]});`
   
  }

}
)

imgAll.forEach((v,index,arr)=>{
  const mainContainer = document.querySelector('main')
  v.addEventListener('click',(event)=>{
    arr.forEach(innerV=>{
      innerV.style='width:40px;height:auto;'
    })
    event.target.style='border:3px solid white'
    i=index
    mainContainer.style=
    `background:linear-gradient(120deg, ${musicListData[i].color[0]}, ${musicListData[i].color[1]});`
  
  })

})
const playBtnContainer = document.querySelector('.play_btn_group')
const playBtn = playBtnContainer.querySelectorAll('button')[0]
const stopBtn = playBtnContainer.querySelectorAll('button')[1]
const disk = document.querySelector('.disk')



playBtn.addEventListener('click',()=>{
  const mainContainer = document.querySelector('main')
  disk.classList.add('active')
  if(mainContainer.querySelector('.big')!==null){
    mainContainer.querySelector('.big').remove()
  }
  const element= document.createElement('img')
  element.src=`${musicListData[i].src}`
  element.className="big"
  console.log(element)
  element.style='width:100%;height:100vh;animation:upToDown 2s'
  mainContainer.appendChild(element)
})


stopBtn.addEventListener('click',()=>{
  const mainContainer = document.querySelector('main')
  disk.classList.remove('active')
  
  const img = mainContainer.querySelector('.big')
  img.style='width:100%;height:100vh; animation:downToUp 2s'
  setTimeout(() => {
    mainContainer.removeChild(img);
  }, 2000);  })

const filterContainer = document.querySelector('.filter')
console.log(filterContainer);
console.log(`<img src="${musicListData[0].src} >"`)


/*

문제1.
    디스크 문제 구현하기. 필요한 html, css, animation은 모두 구현하였으나
    혹 본인 재량하에 추가하고 싶은 css와 animation이 있으면 추가해두시면 됩니다.

    요구사항
    
        (1) 구현영상을 참고하여 구현영상과 같은 효과를 진행해보세요
        (2) play 버튼 클릭시에는 해당 이미지에 맞는 이미지가 배경화면으로 보이고 disk가 회전되어야합니다
        (3) stop 버튼을 누르면 배경화면이 사라지고 disk는 멈추어야합니다.
        (4) 앨범은 총 3개가 있으며 만약 진행 중 다른 앨범을 선택하고 play를 누르면 다른 앨범이 play 되어야합니다.
        (5) 앨범 리스트는 (next, prev) 버튼으로도 움직일 수 있으며 클릭으로도 원하는 앨범으로 이동할 수 있습니다.
        (6) 현재 선택된 앨범은 focus되어 크기가 커지는 효과를 추가해야합니다.
        (7) 저작권 상 음악은 넣지 못했지만 만약 넣고 싶다면 본인이 다운로드 하여 audio 태그를 활용하여 실행할 수 있습니다.
        (8) 이 외 다른 구현 사항은 영상을 참고하여 만들어보세요 :)

    주의사항

        단, 아래의 조건만 채운다면 반드시 똑같이 만들 필요는 없습니다.
        즉 애니메이션과 css를 구현 영상과 똑같이 하실 필요는 없으며, 이를 위해 html이나 css를 따로 건드셔도 괜찮습니다.
        해당 html과 css, animation은 제가 빠른 시일 내에 급히 작성한 것이기 때문에 이해가 조금 어려울 수 있습니다

        (1) 각 노래에 맞는 앨범 자켓 이미지로 배경이 바뀌어야함 
        (2) 각 노래에 맞는 색상으로 disk_inner와 stop 상태의 배경이 바뀌어야함
        (3) start 시에는 disk가 돌아가고 stop 시에는 disk가 멈춰야함
        (4) 선택된 앨범에는 하이라이트 호과가 있어야하며 클릭 및 버튼을 통해 선택이 가능함
*/
