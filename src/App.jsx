import { Suspense } from 'react'
import './App.css'
import Nav from './Components/Nav/Nav'
import PricingCards from './Components/PricingCards/PricingCards'
import Recharts from './Components/Recharts/Recharts'
import Axios from './Components/Axios/Axios'
import axios from 'axios'


function App() {
  const pricingPromise =fetch("pricingData.json")
  .then(res=>res.json())

  // Axios response
  const axiosPromise =axios.get("dataAxios.json")

  return (
    <>
      <Nav></Nav>
      <Suspense fallback={<span className="loading loading-ball loading-lg"></span>}>
        <PricingCards pricingPromise={pricingPromise}></PricingCards>
      </Suspense>

      <Recharts></Recharts>

      <Suspense fallback={<span className="loading loading-ball loading-lg"></span>}>
        <Axios axiosPromise ={axiosPromise }></Axios>
      </Suspense>
    </>
  )
}

export default App
