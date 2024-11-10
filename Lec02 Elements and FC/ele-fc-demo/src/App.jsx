import './App.css'
import CCStudent from './ClassComps/CCStudent';
import EHeader from './Elements/EHeader';
import FCStudent from './FuncComps/FCStudent';

function App() {
  return (
    <>
      {EHeader}
      <div>
        Ruppin
      </div>
      <h1>Vite + React</h1>
      <CCStudent name="charlie" grade={97}/>
      <CCStudent name="dora" grade={98}/>
      <FCStudent id="7" name="avi" grade={100}/>
      <FCStudent id="8" name="benny" grade={99}/>
    </>
  )
}

export default App
