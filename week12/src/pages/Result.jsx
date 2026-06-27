import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = "https://week12-api-rcwo.onrender.com";

const Result = () => {
    const [searchParams] = useSearchParams();
    const score = searchParams.get("score");

    const navigate = useNavigate();

    const [result, setResult] = useState(null);

    useEffect(() => {
        const fetchResult = async() => {
            const response = await axios.get(`${BASE_URL}/api/result?score=${score}`);
            setResult(response.data);
        }
        fetchResult();
    }, [score])


    return (
        <Container>
            <Title>퀴즈 결과</Title>
            <ScoreText>{result?.score} / 5</ScoreText>
            <Message>{result?.message}</Message>
            <ButtonRow>
                <StyledButton onClick={() => navigate("/quiz")}>다시 풀기</StyledButton>
                <StyledButton onClick={() => navigate("/")}>홈으로</StyledButton>
            </ButtonRow>
        </Container>
    )
}

export default Result

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: white;
  padding: 50px;
  border-radius: 16px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  margin: 20px;
`;

const Title = styled.div`
  font-size: 32px;
  color: #535353;
  font-weight: 700;
`;

const ScoreText = styled.div`
  font-size: 48px;
  font-weight: 800;
  color: #75b5f5;
`;

const Message = styled.div`
  font-size: 22px;
  color: #555;
  text-align: center;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
`;

const StyledButton = styled.button`
  padding: 10px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #4a4a4a;
  background-color: #b8edfb;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;