import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './styles.css'
import { Link } from 'react-router-dom'
import { IProduct } from '../../pages/productPage/productPage'

const Carousel: React.FC<{ slideContent: IProduct[] }> = ({ slideContent }) => {
  return (
    <div className='slider-container'>
      <h3 className='slider-header'>Recently Viewed</h3>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slideContent.map((item) => {
          return (
            <>
              <SwiperSlide>
                <div className='slide-item'>
                  <Link to={`/products/${item.id}`}>
                    <img
                      src={item.imageUrls[0]}
                      alt='product'
                    />
                  </Link>
                  <div className='slide-item-info'>
                    <Link to={`/products/${item.id}`}>
                      <span className='item-name'>{item.title}</span>
                    </Link>
                    <span>$ {item.price.toLocaleString()}</span>
                  </div>
                </div>
              </SwiperSlide>
            </>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Carousel
