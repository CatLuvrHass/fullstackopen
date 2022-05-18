
function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header course={course}/>
      
      <Content part={part1} exercies={exercises1} />
      <br/>
      <Content part={part2} exercies={exercises2} />
      <br/>
      <Content part={part3} exercies={exercises3} />
      <br/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  );
}

function Header(props) {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
}
function Content(props) {
  return (
    <div>
      <p>
        <Part part={props.part} exercies={props.exercies}/>
        <Part part={props.part} exercies={props.exercies}/>
        <Part part={props.part} exercies={props.exercies}/>
      </p>
    </div>
  )
}
function Total(props){
  return (
    <div>
      <p>
        Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  )  
}
function Part(props){
  return (
    <p>
      {props.part} {props.exercies}
    </p>
  )
}

export default App;
