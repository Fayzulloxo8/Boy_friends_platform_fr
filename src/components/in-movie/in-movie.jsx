import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './in-movie.scss'

const MovieDetail = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        fetch(`https://boy-friends-platform-bk.onrender.com/movie/${id}/`)
            .then(res => res.json())
            .then(data => setMovie(data))
            .catch(err => console.error("❌ MovieDetail error:", err))
    }, [id])

    if (!movie) return <p>Yuklanmoqda...</p>

    return (
        <>
            <div className='movie-detail'>
                <h1>{movie.title}</h1>
                <div className='description'>
                    <img src={movie.img} alt={movie.title} />
                    <div className='title'>
                        <p><span>NAME</span>{movie.title}</p>
                        <p><span>STATE</span>{movie.davlat}</p>
                        <p><span>AGE LIMIT</span>{movie.yosh}</p>
                        <p><span>GENRE</span>{movie.janir}</p>
                        <p><span>LANGUAGE</span>{movie.til}</p>
                    </div>
                </div>
                <div className='in-movie'>
                    <video src={movie.movie} controls></video>
                </div>
            </div>
            <div className='reklama'>
                {/* Reklama joyi */}
            </div>
        </>
    )
}

export default MovieDetail
