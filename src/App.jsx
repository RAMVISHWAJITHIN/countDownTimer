
import './App.css'
import CountdownTimer from './CountdownTimer'

function App() {
  const targetDate = new Date("2025-12-31T23:59:59");

  return (
    <>
    <CountdownTimer targetDate={targetDate} />

    </>
  )
}

export default App

