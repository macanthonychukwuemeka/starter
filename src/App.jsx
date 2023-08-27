import { useState } from "react"
import data from "./data"
import Questions from "./Questions"

const App = () => {
  const [questions, setQuestions] = useState(data)
  const [activeId, setActiveId] = useState(false)

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id
    setActiveId(newActiveId)
    //in the question is already open, lets write a code to close it
    // console.log(id)
  }
  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  )
}
export default App
