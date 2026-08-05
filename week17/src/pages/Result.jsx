import React, { useEffect, useState } from 'react'
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

    const buttonStyle = "px-6 py-[10px] text-[16px] text-[#4a4a4a] font-semibold bg-[#b8edfb] border-none rounded-[20px] cursor-pointer"

    return (
        <div className="flex flex-col items-center g-5 bg-white p-[50px] rounded-[16px] shadow-[2px_2px_10px_rgba(0,0,0,0.1)] m-5">
            <div className="text-[32px] text-[#535353] font-bold">퀴즈 결과</div>
            <div className="text-[48px] font-extrabold text-[#75b5f5] mt-6">{result?.score} / 5</div>
            <div className="text-[22px] text-[#555] text-center mt-6">{result?.message}</div>
            <div className="flex gap-3 mt-10">
                <button onClick={() => navigate("/quiz")} className={buttonStyle}>다시 풀기</button>
                <button onClick={() => navigate("/")} className={buttonStyle}>홈으로</button>
            </div>
        </div>
    )
}

export default Result
