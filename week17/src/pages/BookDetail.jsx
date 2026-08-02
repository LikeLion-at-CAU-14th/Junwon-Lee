import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const BookDetail = () => {
    // useParams로 파라미터 id 값 가져오기
    const params = useParams();
    const id = params.id;

    const [books, setBooks] = useState([]);

    // [실습 18] useEffect로 렌더링 될 때 한 번만 데이터 가져오기
    // [실습 17] public/databases/books.json에 저장할 데이터를 axios로 불러오기
    useEffect(() => {
        const fetchBooks = async () => {
            const response = await axios.get("/databases/books.json");
            setBooks(response.data);
        }
        fetchBooks();
    }, [])

    const book = books.find((b) => b.id === parseInt(id));

    const [likes, setLikes] = useState(0);

    const updateLikes = () => {
        setLikes(likes + 1);
    };

    useEffect(() => {
        setLikes(0);
    }, [id])

    // 예외 처리
    if(!book) {
        return <div>찾는 책이 없습니다.</div>
    }

  return (
    <div>
        <h1 className="text-3xl font-extrabold my-4">{book.title}</h1>
        <h3 className="text-xl font-bold my-4">{book.author}</h3>
        <p className="my-4">{book.description}</p>
        <button 
          onClick={updateLikes}
          className="bg-[#75b5f5] text-white text-base border-none rounded-[25px] px-[15px] py-[5px] cursor-pointer flex items-center justify-center
                     transition-colors duration-300 ease-in-out hover:bg-[#9ecfff] active:bg-[#3d9dfd]"
        >
            <span className="mr-2 text-[20px]">👍</span> {likes}
        </button>
    </div>
  )
}

export default BookDetail
