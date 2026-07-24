function Header(props: {name?: string}) {
  
  return (
    <>
     <h1>{props.name}</h1>
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


  const course = {
    name: 'Half Stack application development',
    parts : [
      {'name': 'Fundamentals of React', 'exercises': 10},
      {'name': 'Using props to pass data', 'exercises': 7},
      {'name': 'State of a component', 'exercises': 14}
    ]
  }

  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default App
