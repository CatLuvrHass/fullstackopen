import { useState } from 'react'


const Satistic = (props) => {
  return(
    <div>
      {props.text}{' '}{props.value}
    </div>
  )
}

const Satistics = (props) => { 
    if(props.total === 0){
      return <p> No feedback is given.</p>
    } else {
      return (
        <div>
          <Satistic text='Good' value={props.good} />
          <Satistic text='Neutral' value={props.neutral} />
          <Satistic text='Bad' value={props.bad} />
          <Satistic text='Average' value={props.average} />
          <Satistic text='Positive' value={props.positive} />
        </div>
      )
    }
  }
const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}  
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])
  const total = allClicks.length

  const average = total 
  ? ((good * 1 + neutral * 0 + bad * -1) / total).toFixed(2)
    : 0;
  const positive = total 
  ? `${((good / total) * 100).toFixed(2)} %` : "0 %"

  const handleGoodClick = () => {
    setAll(allClicks.concat('G'))
    setGood(good+1)
  }
  const handleNeutralClick = () => {
    setAll(allClicks.concat('N'))
    setNeutral(neutral+1)
  }
  const handleBadClick = () => {
    setAll(allClicks.concat('B'))
    setBad(bad+1)
  }

  return (
    <div>
        <h2><strong>Give us feedback</strong></h2>
      
      <Button onClick={handleGoodClick} text="Good"/>
      <Button onClick={handleNeutralClick} text="Neutral"/>
      <Button onClick={handleBadClick} text="Bad"/>
      
        <div>
            <h2><strong>Satistics</strong></h2>    
            <Satistics 
            good={good}
            bad={bad}
            neutral={neutral}
            total={total}
            average={average}
            positive={positive}
            />
        </div>
 
    </div>
  )
}

export default App