import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function Pokerus(props) {
  const { usingPokerus, handleUsingPokerus } = props

  return (
    <>
      <div className="increments-section">
        <div className="increments-text">
        <label>Using Pokerus?</label>
        </div>
        <FormControlLabel control={
          <Switch
            checked={usingPokerus}
            onChange={handleUsingPokerus}
            color="primary"
          />
        } />
      </div>
    </>
  )
}