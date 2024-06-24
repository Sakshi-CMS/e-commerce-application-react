import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollection from '../components/NewCollections/NewCollection'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import Carousel from '../components/Carousel/Carousel'
import Discounts from '../components/Discounts/Discounts'
import Carousel_Cards from '../components/Carousel_Cards/Carousel_Cards'
import HelpMe from '../components/HelpMe/HelpMe'

const Shop = () => {
  return (
    <div>
      <HelpMe/>
      <Carousel/>
      <Discounts/>
      {/* <Carousel_Cards/> */}
       <Hero/>
       <Popular/> 
       <Offers/>
       <NewCollection/>
       <NewsLetter/>
    </div>
  )
}

export default Shop
