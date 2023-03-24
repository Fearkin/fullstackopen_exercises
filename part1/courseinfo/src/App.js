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

const Total = (props) => <p>Number of exercises {props.total[0] + props.total[1] + props.total[2]}</p>

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content content={[
        {id: 0, name: part1, exercises: exercises1},
        {id: 1, name: part2, exercises: exercises2},
        {id: 2, name: part3, exercises: exercises3},
      ]
      } />
      <Total total={[exercises1, exercises2, exercises3]}/>
    </div>
  )
}

export default App