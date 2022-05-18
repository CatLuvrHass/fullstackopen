
function App() {
  const course = 'Half Stack application development'
  
  const part1 = {
    name: 'Fundementals of React',
    exercises: 10,
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  }
  return (
    <div>
      <Header course={course}/>
      
      <Content part={part1.name} exercies={part1.exercises} />
      <br/>
      <Content part={part2.name} exercies={part2.exercises} />
      <br/>
      <Content part={part3.name} exercies={part3.exercises} />
      <br/>
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  );
}

function Header(props) {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
}
function Content(props) {
  console.log(props)
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
  console.log(props)
  return (
    <div>
      <p>
        Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  )  
}
function Part(props){
  console.log(props)
  return (
    <p>
      {props.part} {props.exercies}
    </p>
  )
}

export default App;
