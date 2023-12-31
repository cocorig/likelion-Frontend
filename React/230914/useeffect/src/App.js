import {useState, useEffect} from 'react'

// useEffect(()=>{
	// state가 변경되어 렌더링 될 때 실행하는 부분!
	// 공부하려고 책 펴는 타이밍!
	// return()=>{
    // 언마운트 또는 다음 이펙트가 일어나기전에 실행하는 부분
    // 다시 렌더링을 하기 이전에 컴포넌트를 지우고 다시 그리겠죠?
    // 이 과정에서 지우기 전에 실행되는 부분입니다! clean-up이라고도 하죠. 
    // 여러분들 시험 공부 하나를 마치고 다음 시험 공부 전에 책상 정리하는 느낌이랄까요..
	// }
// },[/*state값이 들어갑니다.(들어가지 않으면 최초 1번만 실행됩니다.*/)]) 



function Counter (){

  const [count, setCount] = useState(0)
  const handleCountUp = (e) => {
    setCount(count + 1);
  }

  //  Counter컴포넌트가 일어날 때 마다 매번 실행
  useEffect(()=>{
    console.log("이펙트~!");
    if (count%2===0) {
      console.log(count, "짝수입니다~!");
    } else {
      console.log(count, "홀수입니다~!");
    }
    return ()=>{
      console.log(count,"이펙트가 일어나기 직전입니다~!")
    }
  })
  
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;

// 최초 interval -> 1초에 1번 setState 해주는 interval이 1개 추가됨 -> 총 1개

// 1초마다 setState후 -> cleanup에서 cleaerinterval을 통해 interval삭제 -> 총0개 -> interval추가 생성 -> 1초에 1번 setState 해주는 interval이 1개 추가됨 -> 총 1개 -> 반복

// 최초 렌더
// -> 인터벌(1초마다 setState가 일어남)하나가 생성됨
// -> 1초뒤 setState가 일어남
// -> setState가 일어나서 리렌더링이 일어남
// -> 또 렌더가 되면서 인터벌 하나가 더 추가됨.
// -> 이제 1초뒤 setState가 2번일어남..
// -> 렌더가 2번일어남
// -> 인터벌이 2개가 추가됨
// -> 이제 1초에 setState하는게 4개가 쌓인다.
// -> 1초뒤에 setState 4번이 일어남
// -> 리렌더링이 몇번 4번
// -> 인터벌이 4개 추가됨
// -> 총 1초에 setState하는게 8개 쌓인다.

// 1번 만들어진 setInterval은 지워지지 않습니다
// 최초 interval -> 1초에 1번 setState 해주는 interval이 1개 추가됨 -> 총 1개

// 1초마다 setState후 interval추가 생성 -> 1초에 1번 setState 해주는 interval이 1개 추가됨 -> 총 2개

// 1초마다 setState후 interval추가 생성(2번일어남) -> 1초에 1번 setState 해주는 interval이 2개추가됨 -> 총 4개
// 컴퓨터특성상 정확히 이런식으로 추가되진않지만
// 이런 느낌으로 interval이 쌓이게 됩니다




// 컴포넌트가 업데이트 될 때마다 매번 실행
// useEffect(()=>{
// 	console.log('hello world');
// })

// 처음에만 실행
// useEffect(()=>{
// 	console.log('hello world');
// }, [])

// 변수들의 변화가 일어날 때마다 실행
// useEffect(()=>{
// 	console.log('hello world');
// }, [변수1, 변수2...])


//   API 통신
//  서버와 통신하는 방식중에 구독하는 기능, 어떤 회원의 정보를 구독하고 있다가 글을 썼을 때 서버애 저장하면 그 내용이 클라이언트로 전달이 되는 경우
//  구독 - 서버와 클라이언트가 연결되있는 상태
//  주의 할 점 - 구독을 해제하는 함수가 있아야 한다
//  클린업 함수안에서 구독 해제를 요청함

//  렌더링 
// 바로 유즈이펙트 실행
//  클린업 함수가있다면 클린업 함수가 먼저 실행되고 유지이팩트의 콜백함수가 실행된다
// 유즈이팩트가 언마운트됐을 땐 클린업 함수만 실행