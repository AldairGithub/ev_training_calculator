
export default function Wings(props) {
  const { wings, handleWings } = props
  
  return (
    <>
      <div className="consumable-container">
        <div className="consumable-text">
          <label>Using wings?</label>
        </div>
        <div className="consumable-buttons">
          <button onClick={() => handleWings("-") }>-</button>
          <label>{wings}</label>
          <button onClick={() => handleWings("+") }>+</button>
        </div>
      </div>
    </>
  )
}