import { useState, useEffect } from 'react'

import EncounterTarget from "./encounter-target/EncounterTarget"
import Increments from './increments/Increments'
import Consumables from './consumables/Consumables'
import { checkValueOfPoint } from './resources'

export default function Main() {
  const [start, setStart] = useState(0)
  const [counter, setCounter] = useState(0)
  const [encounter, setEncounter] = useState(0)
  const [point, setPoint] = useState(1)
  const [addons, setAddons] = useState(1)
  const [usingPokerus, setUsingPokerus] = useState(false)
  const [usingMachoBrace, setUsingMachoBrace] = useState(false)
  const [usingBrace, setUsingBrace] = useState(false)
  const [vitamins, setVitamins] = useState(0)
  const [wings, setWings] = useState(0)

  useEffect(() => {

    const value = checkValueOfPoint(usingPokerus, usingMachoBrace, usingBrace, point)
    setAddons(value)

  },[usingMachoBrace, usingBrace, usingPokerus])
  
  const handleDecrease = () => {

    setCounter(counter - addons)
    setEncounter(encounter + 1)
  }

  const handleStart = e => {
    const { value } = e.target
    setStart(value)
    setCounter(value)
  }
  const handlePoint = e => {
    const { value } = e.target
    setPoint(value)
    setAddons(value)

  }

  const handleUsingPokerus = e => {
    const { checked } = e.target
    setUsingPokerus(checked)
  }
  const handleUsingMachoBrace = e => {
    const { checked } = e.target
    setUsingMachoBrace(checked)
    setUsingBrace(false)
  }
  const handleUsingBrace = e => {
    const { checked } = e.target
    setUsingBrace(checked)
    setUsingMachoBrace(false)
  }

  const handleVitamins = (symbol) => {
    if (counter > 0) {
      
      if (symbol === "+" && vitamins < 10) {
        const newCounter = counter - 10
        if (newCounter < 0) {
          setCounter(0)
        } else {
          setCounter(newCounter)
        }
        setVitamins(vitamins + 1)
      }
  
      if (symbol === "-" && vitamins > 0) {
        const newCounter = counter + 10
        setCounter(newCounter)
        setVitamins(vitamins - 1)
      }
    }

  }

  const handleWings = (symbol) => {
    if (counter > 0) {
      if (symbol === "+" && counter < 255) {
        const newCounter = counter - 1
        if (newCounter < 0) {
          setCounter(0)
        } else {
          setCounter(newCounter)
        }
  
        setWings(wings + 1)
      }
      
      if (symbol === "-" && wings > 0) {
  
        const newCounter = counter + 1
        setCounter(newCounter)
        setWings(wings - 1)
      } 
    }
  }

  return (  
    <main>
      <h1 style={{textAlign: "center"}}>Ev Training</h1>
      <EncounterTarget
        start={start}
        counter={counter}
        handleStart={handleStart}
        point={point}
        handlePoint={handlePoint}
        addons={addons}
        handleDecrease={handleDecrease}
        encounter={encounter}
      />
      <Consumables
        vitamins={vitamins}
        handleVitamins={handleVitamins}
        wings={wings}
        handleWings={handleWings}
      />
      <Increments
        usingPokerus={usingPokerus}
        handleUsingPokerus={handleUsingPokerus}
        usingMachoBrace={usingMachoBrace}
        handleUsingMachoBrace={handleUsingMachoBrace}
        usingBrace={usingBrace}
        handleUsingBrace={handleUsingBrace}
      />
      <div style={{height: "50px"}}></div>
    </main>
  )
}