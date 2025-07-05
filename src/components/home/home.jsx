import React, {useState, useEffect} from 'react'
import MySwiper from '../swiper/sviper_home'
import './home.scss'
import Movie from '../movies/movie'
import YandexAd from '../asd/asd'


const Home = () => {
    return (
        <div className='home'>
            <MySwiper />
            <YandexAd />
            <Movie />
        </div>
    )
}

export default Home