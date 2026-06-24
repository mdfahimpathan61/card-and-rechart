

import { Suspense } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import PricingCardContainer from './Component/pricingCardContainer/pricingCardContainer'

function App() {

  const pricingPromis = fetch('/public/gymData.json').then(res => res.json())

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <PricingCardContainer pricingPromis={pricingPromis}></PricingCardContainer>
      </Suspense>
    </>
  )
}

export default App
