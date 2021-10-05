import './EncounterTarget.css'

export default function EncounterTarget(props) {
  const {
    start,
    handleStart,
    counter,
    point,
    handlePoint,
    addons,
    handleDecrease,
    encounter
  } = props

  return (
    <>
      <div>
        <div className="starting-point-container">
          <div className="point-container">
            <label className="">Desired EV Points : </label>
            <input
              className="input-container"
              type="number"
              placeholder="Initial number"
              min="0"
              max="255"
              value={start}
              onChange={handleStart}
            />
          </div>

          <div className="point-container" style={{marginTop: "22px"}}>
            <label>Pokemon EV Points : </label>
            <input
              className="input-container"
              type="number"
              placeholder="Ev point"
              min="1"
              max="3"
              value={point}
              onChange={handlePoint}
            />
          </div>
        </div>


        <div style={{marginTop: "15px"}} onClick={() => handleDecrease()} className="encounter-container">
          <p className="center-text">{counter > 0 ? counter : "0"}</p>
          <p className="center-text">-{ addons }</p>
        </div>
        <div style={{ marginTop: "15px" }} className="left-container">
          <label className="center-text">Encounters met : </label>
          <p className="center-text">{encounter !== 0 ? encounter : 0}</p>
          <label className="center-text">Encounters left : </label>
          <p className="center-text">{counter ? counter / addons : "0"}</p>
        </div>
      </div>
    </>
  )
}