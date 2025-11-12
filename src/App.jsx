import { useState } from "react";
import C1 from "./Cards/C1"
import C2 from "./Cards/C2"
import C3 from "./Cards/C3"
import "./App.css"

const cards = [C1, C2, C3]


export default function App() {
  const [current, setCurrent] = useState(0)


  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % cards.length)
  }

  const handleBefore = () => {
    setCurrent((prev) => (prev - 1 + cards.length) % cards.length)
  }


  const CurrentCard = cards[current]

  return (
    <div className="a-container">
      <div className="c-wrapper">
        <CurrentCard handleNext={handleNext} handleBefore={handleBefore} />
      </div>
    </div>
  )
}