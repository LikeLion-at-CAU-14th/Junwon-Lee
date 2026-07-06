import React from 'react'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import MyPage from './pages/MyPage'
import { useReducer } from 'react'
import { UserInfoContext } from './context/UserInfoContext'

const initialState = {
  name: '',
  email: '',
  birth: '',
  gender: '',
};

const userInfoReducer = (state, action) => {
  switch(action.type) {
    case 'SET_USER_INFO':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(userInfoReducer, initialState);

  return (
    <UserInfoContext.Provider value={{ state, dispatch }}>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mypage' element={<MyPage />} />
        </Routes>
      </Layout>
    </UserInfoContext.Provider>
  )
}

export default App