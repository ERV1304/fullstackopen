function Header(props: {course: {name?: string}}) {
  console.log(props)
  
  return (
    <>
     <h2>{props.course?.name || ''}</h2>
    </>
  )
}

function Part(props: {part: {name: string, exercises: number}}) {
  
  return (
    <>
     <p>{props.part?.name}: {props.part?.exercises}</p>
    </>
  )
}

function Content(props: {parts?: {name: string, exercises: number, id: number}[]}) {
  console.log(props.parts)

  return (
    <>
    {props.parts?.map(part => 
        <Part key={part.id} part={part} />
    )}

    </>
  )
}

function Total(props: {parts?: {exercises: number}[]}) {
  const total = props.parts?.reduce( (sum, part) => 
        sum + part.exercises, 0)

  return (
    <>
     <p>
        <strong>Number of exercises {total}</strong>
     </p>
    </>
  )
}

const Course = (props: {course: {name: string, parts: {name: string, exercises: number, id: number}[]}}) => {
    const { course } = props

    console.log(course)
    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
  }

export default Course