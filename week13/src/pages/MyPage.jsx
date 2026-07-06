import React from 'react'
import { useContext } from 'react'
import { UserInfoContext } from '../context/UserInfoContext'
import { ThemeColorContext } from '../context/context';
import { Card, Title, Wrapper } from '../components/layout/common'
import styled from 'styled-components';

const MyPage = () => {
    const { state } = useContext(UserInfoContext);
    const mode = useContext(ThemeColorContext);

  return (
    <Wrapper>
      <Card>
        <Title>마이페이지</Title>
        <InfoRow>
          <Key>이름</Key>
          <Value>{state.name || '-'}</Value>
        </InfoRow>
        <InfoRow>
          <Key>이메일</Key>
          <Value>{state.email || '-'}</Value>
        </InfoRow>
        <InfoRow>
          <Key>생년월일</Key>
          <Value>{state.birth || '-'}</Value>
        </InfoRow>
        <InfoRow>
          <Key>성별</Key>
          <Value accent={mode.main}>{state.gender || '-'}</Value>
        </InfoRow>
      </Card>
    </Wrapper>
  )
}

export default MyPage

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
`;

const Key = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #71717a;
`;

const Value = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #18181b;
`;