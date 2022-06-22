import { useState } from 'react'

const Display = (props) => (
  <div>
    {props.text}
    {' '}
    {props.value}
  </div>
  
)
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
  // the average score (good: 1, neutral: 0, bad: -1

  return (
    <div>
        <h2><strong>Give us feedback</strong></h2>
      
      <Button onClick={handleGoodClick} text="Good"/>
      <Button onClick={handleNeutralClick} text="Neutral"/>
      <Button onClick={handleBadClick} text="Bad"/>
      
        <div>
            <h2><strong>Satistics</strong></h2>    
            <Display value={good} text='Good'/>
            <Display value={neutral} text='Neutral'/>
            <Display value={bad} text='Bad'/>
            <Display value={total} text='All'/>
            <Display value={average} text='Average'/>
            <Display value={positive} text='Positive'/>
        </div>
 
    </div>
  )
}

export default App