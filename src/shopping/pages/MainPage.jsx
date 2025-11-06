
import React, {useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Collections from './components/collections.jsx'
import WomenCollections from './components/womenCollections.jsx'
import Banner from './components/Banner'
import {Gents,Ladies} from "./data.js"
const MainPage = () => {
  const [gentsFashion, setGentsFashion] = useState(Gents)
  const [LadiesFashion, setLadiesFashion] = useState(Ladies)
  
  return (
      <div>
        <Header/>
        <Banner/>
        <Collections gentsFashion={gentsFashion} />
        <WomenCollections ladiesFashion={LadiesFashion}/>
        <Footer/>
        
        
      </div>
  )
}

export default MainPage