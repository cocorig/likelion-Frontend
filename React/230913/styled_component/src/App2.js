import React from "react";
import styled from "styled-components";

const ContentDiv = styled.div`
  margin: 40px;
`;

// 함수를 실행해서 스타일을 만들게됨 , 안에 내용이 바뀌면 클래스이름도 바뀜
const ContentH2 = styled.h2`
  width: 200px;
  margin: 0 auto;
  text-align: center;
  color: red;
`;


function Hello(){
  return <h2>hello world</h2>
}

const App = () => {
    return (
        <ContentDiv>
            <ContentH2>Q&A</ContentH2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
                corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
                aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
                Nemo, ullam.
            </p>
            <Hello/>
        </ContentDiv>
    );
    
};

export default App;