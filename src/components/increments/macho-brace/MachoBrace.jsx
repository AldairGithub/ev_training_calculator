import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function MachoBrace(props) {
  const { usingMachoBrace, handleUsingMachoBrace } = props
  
  return (
    <>
      <div className="increments-section">
        <div className="increments-text">
        <label>Using Macho Brace?</label>
        </div>
        <FormControlLabel control={
          <Switch
            checked={usingMachoBrace}
            onChange={handleUsingMachoBrace}
            color="primary"
          />
        } />
      </div>
    </>
  )
}