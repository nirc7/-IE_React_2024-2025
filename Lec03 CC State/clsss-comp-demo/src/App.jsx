import './App.css'
import CCParent from './ClassComps/CCParent'
import CCStudent from './ClassComps/CCStudent'
import CCStudentsListDemo from './ClassComps/CCStudentsListDemo'
import EHeader from './Elements/EHeader'
import FCPerson from './FuncComps/FCPerson'

function App() {
  return (
    <>
      {EHeader}
      <h1>Vite + React</h1>
      <div className="card">
        <CCStudentsListDemo />
        <CCParent />
        <CCStudent id={7} name="avi" grade={100} /> <br />
        <CCStudent id={8} name="benny" grade={101} /> <br />
        <FCPerson id={7} name="avi" /> <br />
        <FCPerson id={8} name="benny" /> <br />
        <FCPerson id={4} name="benny" /> <br />
      </div>
    </>
  )
}

export default App
