import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import BookDetailDom from './BookDetail';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const BookList = () => {
    // books: 책 목록 상태 변수 (초기값 빈 배열), setBooks로 값 변경 시 화면 자동 재렌더링
    const [books, setBooks] = useState([]);

    // useNavigate 훅으로 페이지 이동 함수 가져오기
    const navigate = useNavigate();

    // 홈("/")으로 이동하는 함수 - Title 클릭 시 호출됨
    const goHome = () => {
        navigate("/")
    }

    // [실습 18] useEffect로 렌더링 될 때 한 번만 데이터 가져오기
    // [실습 17] public/databases/books.json에 저장할 데이터를 axios로 불러오기
    useEffect(() => {
        const fetchBooks = async () => {
            const response = await axios.get("/databases/books.json");
            setBooks(response.data);
        }
        fetchBooks();
    }, [])

  return (
    <div className="flex justify-start items-center gap-5 w-full h-[80vh] m-5">
        <div className="flex flex-col justify-start bg-white p-[50px] h-[80vh] rounded-r-[10px] shadow-[2px_2px_5px_rgba(0,0,0,0.1)]">
            <div className="text-[40px] text-[#535353] font-bold" onClick={goHome}>🏡</div>
            <div className="text-[40px] text-[#535353] font-bold">🦁Book List🦁</div>
            <ul className="list-disc pl-10">
                {/* [실습 12] id와 매치되는 책 정보 링크로 연결 */}
                {books.map((book) => (
                    <Link key={book.id} to={`/books/${book.id}`}>
                        <li>{book.title}</li>
                    </Link>
                ))}
            </ul>
        </div>
        <BookDetailDom>
            <Outlet />
        </BookDetailDom>
    </div>
  )
}

export default BookList

const BookListDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: white;
  padding: 50px;
  height: 80%;
  border-radius: 0 10px 10px 0;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;