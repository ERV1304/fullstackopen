function Header(props: {course: {name?: string}}) {
  console.log(props)
  return (
    <>
     <h1>{props.course.name}</h1>
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

const Course = (props) => {
    const { course } = props

    console.log(course)
  return (
    <div>
        <Header course={course} />
        <Content parts={course.parts} />
    </div>
  )
  }

export default Course