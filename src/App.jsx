import Dates from "./commponent/dates"
import Input from "./commponent/input"
import Buttons from "./commponent/button"
import { useState } from "react"

function App() {
  let person
  if (localStorage.getItem("dateData")) {
    const str = localStorage.getItem("dateData")
    person =  JSON.parse(str)
  } else {
    person = []
  }

  const [personData, setPersonData] = useState(person)
  const onDelete = () => {
    setPersonData([])
  }

  const data = (obj) => {
    setPersonData(personData.concat(obj))
  }

  const onDeleteDate = (index) => {
    const newPeraon = [...personData]
    newPeraon.splice(index, 1)
    setPersonData(newPeraon)
  }

  let mode;
  if(localStorage.getItem("mode")) {
    const modeToB = localStorage.getItem("mode")
    mode = JSON.parse(modeToB)
  }
  const [DarkM, setDarkM] = useState(mode)
  const dark = () => {
    setDarkM(!DarkM)
    const modeToJason = JSON.stringify(!DarkM)
    localStorage.setItem("mode", modeToJason)
  }

  const objToStr = JSON.stringify(personData)
  localStorage.setItem("dateData", objToStr)

  if (DarkM) {
    document.body.style.backgroundColor = "white"   
  } else {
    document.body.style.backgroundColor = "#333"
  }

  return (
    <>
      <div className={DarkM ? "all" : "all dark-mode"}>
        {DarkM ? <p className="d-m" onClick={dark}>☀️</p> : <p className="d-m" onClick={dark}>🌒</p>}
        <Input person={personData} dataSend={data} dark={DarkM} />
        <Dates person={personData} deleteDate={onDeleteDate} dark={DarkM} />
        <Buttons deleteData={onDelete} dark={DarkM} />
      </div>
    </>
  )
}

export default App
