import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function Pokerus(props) {
  const { usingBrace, handleUsingBrace } = props
  
  return (
    <>
      <div className="increments-section">
        <div className="increments-text">
          <label>Using Brace?</label>
        </div>
        <FormControlLabel control={
          <Switch
            checked={usingBrace}
            onChange={handleUsingBrace}
            color="primary"
          />
        } />
      </div>
    </>
  )
}