
export default function Vitamins(props) {
  const { vitamins, handleVitamins } = props
  
  return (
    <>
      <div className="consumable-container">
        <div className="consumable-text">
          <label>Using vitamins?</label>
        </div>

        <div className="consumable-buttons">
          <button onClick={() => handleVitamins("-") }>-</button>
          <label>{vitamins}</label>
          <button onClick={() => handleVitamins("+") }>+</button>
        </div>
      </div>
    </>
  )
}