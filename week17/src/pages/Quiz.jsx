import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = "https://week12-api-rcwo.onrender.com";

const Quiz = () => {
    const [questions, setQuestions] = useState([]);

    const [current, setCurrent] = useState(0);

    const [selected, setSelected] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        const fetchQuestions = async() => {
            const response = await axios.get(`${BASE_URL}/api/questions`);
            setQuestions(response.data);
        }
        fetchQuestions();
    }, [])

    const handleSelect = async(answer) => {
        const question = questions[current];

        const updated = { ...selected, [question.id]: answer };
        setSelected(updated);

        if(current < questions.length - 1) {
            setCurrent(current + 1);
        } else {
            await submitAnswers(updated);
        }
    }

    const submitAnswers = async(finalAnswers) => {
        const answers = questions.map((q) => ({
            id: q.id,
            answer: finalAnswers[q.id],
        }));

        try {
            const response = await axios.post(`${BASE_URL}/api/answers`, { answers });
            const score = response.data.results.filter((r) => r.correct).length;
            navigate(`/result?score=${score}`);
        } catch(error) {
            alert(error.response.data.error);
        }
    }

    const question = questions[current];

    return (
        <div className="flex flex-col items-center gap-6 w-[650px] max-w-[90%] m-5">
            <div className="text-xl font-bold text-[#75b5f5]">
                {current + 1} / {questions.length}
            </div>

            <div className="w-full bg-white px-[30px] py-10 rounded-[16px] shadow-[2px_2px_10px_rgba(0,0,0,0.1)]
                            flex flex-col items-center justify-center gap-[30px]">
                <div className="text-[24px] font-semibold text-[#535353] text-center">{question?.question}</div>
                <div className="flex flex-col gap-4 w-full items-center">
                    {question?.answers.map((answer) => (
                        <button
                            className="w-[90%] p-4 text-[17px] text-[#535353] text-left border-2 border-[#ddd] bg-white rounded-[12px] cursor-pointer
                                       transition-all duration-200 ease-in-out hover:border-[#75b5f5] hover:bg-[#f0f8ff]"
                            key={answer}
                            onClick={() => handleSelect(answer)}
                        >
                            {answer}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Quiz
