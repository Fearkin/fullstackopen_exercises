import { useState } from 'react'


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => {
  if (text === "positive") {
    return <p>{text} {value}%</p>
  }
  return <p>{text} {value}</p>
}
const Statistics = ({good, neutral, bad, all, score}) => {
  if (all === 0){
    return (<p>No feedback given.</p>)
  }
  return (<div>
    <StatisticLine text="good" value={good}/>
    <StatisticLine text="neutral" value={neutral}/>
    <StatisticLine text="bad" value={bad}/>
    <StatisticLine text="all" value={all}/>
    <StatisticLine text="average" value={score / all}/>
    <StatisticLine text="positive" value={(good / all) * 100}/>
  </div>
)}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [score, setScore] = useState(0)

  const handleGoodClick = () => {
    setAll(all + 1)
    setGood(good + 1)
    setScore(score + 1)
  }

  const handleNeutralClick = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(all + 1)
    setBad(bad + 1)
    setScore(score - 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad"/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} score={score}/>
    </div>
  )
}

export default App