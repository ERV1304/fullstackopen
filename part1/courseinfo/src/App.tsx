function Header(props: {course?: string}) {
  
  return (
    <>
     <h1>{props.course}</h1>
    </>
  )
}

function Content(props: {part1?: {name: string, exercises: number}, part2?: {name: string, exercises: number}, part3?: {name: string, exercises: number}}) {
  
  return (
    <>
     <p>{props.part1?.name}: {props.part1?.exercises}</p>
     <p>{props.part2?.name}: {props.part2?.exercises}</p>
     <p>{props.part3?.name}: {props.part3?.exercises}</p>
    </>
  )
}

function Total(props: {total?: number}) {
  
  return (
    <>
     <p>Number of exercises {props.total}</p>
    </>
  )
}

function App() {
  const course = 'Half Stack application development'
  const part1 = {'name': 'Fundamentals of React', 'exercises': 10};
  const part2 = {'name': 'Using props to pass data', 'exercises': 7};
  const part3 = {'name': 'State of a component', 'exercises': 14};
  return (
    <>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </>
  )
}

export default App
