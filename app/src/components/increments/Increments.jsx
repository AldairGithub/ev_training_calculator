import Pokerus from './pokerus/Pokerus'
import MachoBrace from './macho-brace/MachoBrace'
import Brace from './brace/Brace'

import './Increments.css'

export default function Increments(props) {
  const {
    usingPokerus,
    handleUsingPokerus,
    usingMachoBrace,
    handleUsingMachoBrace,
    usingBrace,
    handleUsingBrace
  } = props

  return (
    <>
      <div className="increments-container">
        <Pokerus
          usingPokerus={usingPokerus}
          handleUsingPokerus={handleUsingPokerus}
        />
        <MachoBrace
          usingMachoBrace={usingMachoBrace}
          handleUsingMachoBrace={handleUsingMachoBrace}
        />
        <Brace
          usingBrace={usingBrace}
          handleUsingBrace={handleUsingBrace}
        />
      </div>
    </>
  )
}