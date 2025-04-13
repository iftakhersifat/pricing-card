import { Suspense } from 'react'
import './App.css'
import Nav from './Components/Nav/Nav'
import PricingCards from './Components/PricingCards/PricingCards'


function App() {
  const pricingPromise =fetch("pricingData.json")
  .then(res=>res.json())

  return (
    <>
      <Nav></Nav>
      <Suspense fallback={<span className="loading loading-ball loading-lg"></span>}>
        <PricingCards pricingPromise={pricingPromise}></PricingCards>
      </Suspense>

    </>
  )
}

export default App
