function Header(props: {course?: string}) {
  
  return (
    <>
     <h1>{props.course}</h1>
    </>
  )
}

function Part(props: {part?: {name: string, exercises: number}}) {
  
  return (
    <>
     <p>{props.part?.name}: {props.part?.exercises}</p>
    </>
  )
}

function Content(props: {parts?: {name: string, exercises: number}[]}) {
  
  return (
    <>
     <Part part={props.parts?.[0]} />
     <Part part={props.parts?.[1]} />
     <Part part={props.parts?.[2]} />
    </>
  )
}

function Total(props: {parts?: {name: string, exercises: number}[]}) {
  
  return (
    <>
     <p>Number of exercises { (props.parts?.[0].exercises || 0) + (props.parts?.[1].exercises || 0) + (props.parts?.[2].exercises || 0) }</p>
    </>
  )
}

function App() {
  const course = 'Half Stack application development'
  const parts = [
    {'name': 'Fundamentals of React', 'exercises': 10},
    {'name': 'Using props to pass data', 'exercises': 7},
    {'name': 'State of a component', 'exercises': 14}
  ];
  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}

export default App
