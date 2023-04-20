import { useState } from 'react';
import './App.css';

function App() {

  const [box, setBox] = useState([
    { id: 1, text: "서대식과 react를 배워봅시다." },
  ])

  const [text, setText] = useState("")

  const textAdd = (e) => {
    setText(e.target.value)
  }

  const addButton = () => {
    const addBox = {
      id : box.length + 1,
      text,
    }

    setBox([...box, addBox])
  }

  return (
    <>
      <div className='top'>
        <input
          value={text}
          onChange={(e) => { textAdd(e) }}></input>
        <button onClick={(addButton)}>추가하기</button>
      </div>
      <h2 className='title'>Todo List</h2>
      <div className='list'>
        {
          box.map((a) => {
            return (
              <div key={a.id} className='box'>{a.text}</div>
            )
          })
        }
      </div>
    </>
  );
}

export default App;
