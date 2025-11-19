import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'

const Home = () => {
  return (
    <div className='bg-linear-to-b from-primary-50 to-white'>
        <Header />
        <Blogs/>
    </div>
  )
}

export default Home