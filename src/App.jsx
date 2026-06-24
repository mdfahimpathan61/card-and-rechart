

import { Suspense } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import PricingCardContainer from './Component/pricingCardContainer/pricingCardContainer'
import RechartLine from './Component/RechartLine/RechartLine'

function App() {

  const pricingPromis = fetch('/public/gymData.json').then(res => res.json())

  const rechartPromis = fetch('/public/rechartData.json').then(res => res.json())

  return (
    <>
      <Navbar></Navbar>
      <main>
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <PricingCardContainer pricingPromis={pricingPromis}></PricingCardContainer>
        </Suspense>

        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <RechartLine rechartPromis={rechartPromis}></RechartLine>

        </Suspense>
      </main>
    </>
  )
}

export default App
