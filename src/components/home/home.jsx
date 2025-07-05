import React, {useState, useEffect} from 'react'
import MySwiper from '../swiper/sviper_home'
import './home.scss'
import Movie from '../movies/movie'


const Home = () => {
    return (
        <div className='home'>
            <MySwiper />
            <Movie />
        </div>
    )
}

export default Home