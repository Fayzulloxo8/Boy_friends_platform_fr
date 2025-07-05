import React, { useState, useEffect } from 'react'
import './movie.scss'
import { Link } from 'react-router-dom'


const Movie = () => {
    const [moive, setMovie] = useState([])
    const [categories, setCategories] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        fetch('https://boy-friends-platform-bk.onrender.com/movie/')
            .then(response => response.json())
            .then(data => {
                // console.log("🎥 Movie data:", data)
                setMovie(data)
            })
            .catch(error => console.error('Movie xatosi:', error))

        fetch('https://boy-friends-platform-bk.onrender.com/category/')
            .then(response => response.json())
            .then(data => {
                // console.log("📁 Category data:", data)
                setCategories(data)
            })
            .catch(error => console.error('Category xatosi:', error))
    }, [])

    const filteredMovies = moive.filter(movie => {
        const titleMatch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());

        let categoryName = '';
        if (typeof movie.category === 'object' && movie.category !== null) {
            categoryName = movie.category.name;
        } else {
            const matchedCategory = categories.find(cat => cat.id === movie.category);
            categoryName = matchedCategory ? matchedCategory.name : '';
        }

        const categoryMatch = categoryName.toLowerCase().includes(searchTerm.toLowerCase());

        return titleMatch || categoryMatch;
    });


    return (
        <>
            <div className='search'>
                <div className='imgs'>
                    {moive.map(item => (
                        <>
                            <img src={item.img} alt="" />
                        </>
                    ))}
                </div>
                <div className='input'>
                    <input
                        type="text"
                        placeholder="Search....."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className='movie-container'>
                {categories.map(cat => {
                    const moviesInCategory = filteredMovies.filter(movie => {
                        if (typeof movie.category === 'object') {
                            return movie.category.id === cat.id
                        }   
                        return movie.category === cat.id
                    })


                    if (moviesInCategory.length === 0) return null

                    return (
                        <div key={cat.id} id={`category-${cat.id}`} className='category-block'>
                            <h2>{cat.name}</h2>
                            <div className='movie-list'>
                                {moviesInCategory.map(movie => (
                                    <div className='movie' key={movie.id}>
                                        <Link to={`/movie/${movie.id}`}>
                                            <img src={movie.img} alt="kino rasmi" />
                                            <div className='movie-text'>
                                                <p>{movie.title}</p>
                                            </div>
                                        </Link>
                                    </div>
                                ))}

                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Movie
