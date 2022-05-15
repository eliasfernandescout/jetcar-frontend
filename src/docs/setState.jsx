import { useState } from 'react';
import './App.scss';

function App() {
  let name = 'Elias'
  const state = useState('Ragnar')

  console.log(state[0], state[1])

  const useState2 = (initialValue) => {
    let state = initialValue
    const setState = (newValue) => {
      state = newValue
    }

    return [state, setState]

  }

  const changeName = () => {
    name = 'Jhess'
    console.log(name)
  }
  const changeName2 = () => {
    const input = 'Ivvar'
    // setName2(input)
    console.log(input)
  }


  return (
    <div className="App">
      <button onClick={changeName}>
        Click
      </button>
      <button onClick={changeName2}>
        Click2
      </button>
      <p>
        {name}
      </p>
      {/* {name2} */}
    </div>
  );
}

export default App;
