import React, { useState, useEffect } from 'react'
import './nav.scss'
import { Link } from 'react-router-dom'
import logo from '../imgs/logo.png'

const Nav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://boy-friends-platform-bk.onrender.com/category/')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Hatolik', error))
    }, [])

    const scrollToCategory = (id) => {
        const element = document.getElementById(`category-${id}`)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            document.getElementById("toggle").checked = false // menyuni yopamiz
        }
    }

    return (
        <nav>
            <div className='nav'>
                <Link to='/'>
                    <div className='logo'>
                        <img src={logo} alt="" />
                        <p>platform.com</p>
                    </div>
                </Link>

                <input type="checkbox" id="toggle" />
                <label htmlFor="toggle" className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <div className='menu'>
                    <Link to='/' onClick={() => document.getElementById("toggle").checked = false}>Home page</Link>
                    {categories.map(category => (
                        <a key={category.id} onClick={() => scrollToCategory(category.id)}>
                            {category.name}
                        </a>
                    ))}
                    <Link to='/login'>
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav
