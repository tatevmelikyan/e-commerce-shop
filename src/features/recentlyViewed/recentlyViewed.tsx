import React from 'react'
import Carousel from '../carousel/carousel'

const RecentlyViewed: React.FC = () => {
   
    const recentlyViewed = localStorage.getItem('recentlyViewed')
    let recentlyViewedProducts
    if(recentlyViewed) {
        recentlyViewedProducts = JSON.parse(recentlyViewed)
    }
 
    if(recentlyViewedProducts?.length) {
        return (
            <Carousel slideContent={recentlyViewedProducts} sliderHeader='recently viewed'/>
        )
    } else {
        return <></>
    }

 
}

export default RecentlyViewed