const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.content[0].name} exercises={props.content[0].exercises}/>
      <Part name={props.content[1].name} exercises={props.content[1].exercises}/>
      <Part name={props.content[2].name} exercises={props.content[2].exercises}/>
    </div>
  )
}

const Part = (props) => <p>{props.name} {props.exercises}</p>

const Total = (props) => <p>Number of exercises {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</p>

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content content={parts} />
      <Total total={parts}/>
    </div>
  )
}

export default App