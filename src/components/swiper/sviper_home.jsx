import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './sviper_home.scss';

const MySwiper = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('https://boy-friends-platform-bk.onrender.com/swiper/')
            .then(response => response.json())
            .then(data => setImages(data))
            .catch(error => console.error('Rasimlarni olishda xatolik:', error));
    }, []);

    return (
        <>
            <h1 className='premyera'>Premieres</h1>

            <div className="swiper">
                <Swiper
                    className="mySwiper"
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={2}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        }
                    }}
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className='sviper_imgs'>
                                <img src={img.img} alt={`Slide ${index}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default MySwiper;
