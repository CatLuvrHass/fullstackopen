
function App() {
  const course = {
    name:  'Half Stack application development', 
    parts: [
      {
      name: 'Fundementals of React',
      exercises: 10,
      }
      ,{
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      }
    ]
  }
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
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
      <p> {props.parts[0].name} {props.parts[0].exercises}</p>
      <p> {props.parts[1].name} {props.parts[1].exercises}</p>
      <p> {props.parts[2].name} {props.parts[2].exercises}</p>
    </div>
  )
}
function Total(props){
  const parts = props.parts.map(val => val.exercises)

  const initialValue = 0;
  const sumWithInitial = parts.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
  );

  return (
    <div>
      <p>
        Number of exercises {sumWithInitial}
      </p>
    </div>
  )  
}

export default App;
