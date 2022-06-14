import { useState } from 'react'

const Display = (props) => (
  <div>
    {props.text}
    {' '}
    {props.value}
  </div>
  
)
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}  
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
        <h2><strong>Give us feedback</strong></h2>
      
      <Button handleClick={()=> setGood(good + 1)} text="Good"/>
      <Button handleClick={()=> setNeutral(neutral + 1)} text="Neutral"/>
      <Button handleClick={()=> setBad(bad + 1)} text="Bad"/>
      
        <div>
      
            <h2><strong>Satistics</strong></h2>    
            <Display value={good} text='Good'/>
            <Display value={neutral} text='Neutral'/>
            <Display value={bad} text='Bad'/>
        </div>
 
    </div>
  )
}

export default App