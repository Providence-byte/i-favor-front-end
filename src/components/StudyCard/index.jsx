import React from 'react';
import { Card } from 'antd';
import styled from "styled-components";
import MyButton from '../Button';
const StudyCard = () => {
    return (
        <NewCard
            bordered
        >
            <p>StudyCard</p>
            <ButtonBox>
                <MyButton href="/study">开始学习</MyButton>
            </ButtonBox>
        </NewCard>
    );
};
// 这个按钮的置底布局可以优化一下，暂时想不出来
const ButtonBox = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 30px;
`
const NewCard = styled(Card)`
  position: relative;
  width: 300px;
  border-radius: 25px; 
  background: linear-gradient(145deg, var(--card-bg), var(--card-fg));
  box-shadow:  20px 20px 40px var(--card-sd),
               -20px -20px 40px var(--card-sf);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  :hover {
    transform: translateY(-10px);
  }
`

export default StudyCard;