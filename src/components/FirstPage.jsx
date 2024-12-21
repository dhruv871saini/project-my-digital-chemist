import React from 'react'
import HomeCategories from './Categories/HomeCategories'
import ProductList from './product/ProductList'
import FirstSection from './header/FirstSection'



const FirstPage = () => {
  return (
    <div>
        <FirstSection/>
      <HomeCategories />
      <ProductList />
    </div>
  )
}

export default FirstPage
