import Vitamins from "./vitamins/Vitamins"
import Wings from "./wings/Wings"

import './Consumables.css'

export default function Consumables(props) {
  const {vitamins, handleVitamins, wings, handleWings} = props

  return (
    <>
      <div className="consumables-container">
        <Vitamins
          vitamins={vitamins}
          handleVitamins={handleVitamins}
        />
        <Wings
          wings={wings}
          handleWings={handleWings}
        />
      </div>
    </>
  )
}