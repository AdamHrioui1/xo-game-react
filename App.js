import { useState, useEffect } from 'react';
import './App.css';
import Cube from './Cube';

function App() {
  let matrixArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  const [matrix, setMatrix] = useState(matrixArray)
  const [switchPlayer, setSwitchPlayer] = useState(true)
  const [index, setIndex] = useState(0)
  
  const winner = () => {
    for (let i = 0; i < matrix.length; i++) {
      if(matrix[0] === 'x' && matrix[1] === 'x' && matrix[2] === 'x') {
        return 'x'
      }
      else if(matrix[3] === 'x' && matrix[4] === 'x' && matrix[5] === 'x') {
        return 'x'
      }
      else if(matrix[6] === 'x' && matrix[7] === 'x' && matrix[8] === 'x') {
        return 'x'
      }
      else if(matrix[0] === 'x' && matrix[3] === 'x' && matrix[6] === 'x') {
        return 'x'
      }
      else if(matrix[1] === 'x' && matrix[4] === 'x' && matrix[7] === 'x') {
        return 'x'
      }
      else if(matrix[2] === 'x' && matrix[5] === 'x' && matrix[8] === 'x') {
        return 'x'
      }  
      else if(matrix[0] === 'x' && matrix[4] === 'x' && matrix[8] === 'x') {
        return 'x'
      }  
      else if(matrix[2] === 'x' && matrix[4] === 'x' && matrix[6] === 'x') {
        return 'x'
      }
      else if(matrix[0] === 'o' && matrix[1] === 'o' && matrix[2] === 'o') {
        return 'o'
      }
      else if(matrix[3] === 'o' && matrix[4] === 'o' && matrix[5] === 'o') {
        return 'o'
      }
      else if(matrix[6] === 'o' && matrix[7] === 'o' && matrix[8] === 'o') {
        return 'o'
      }
      else if(matrix[0] === 'o' && matrix[3] === 'o' && matrix[6] === 'o') {
        return 'o'
      }
      else if(matrix[1] === 'o' && matrix[4] === 'o' && matrix[7] === 'o') {
        return 'o'
      }
      else if(matrix[2] === 'o' && matrix[5] === 'o' && matrix[8] === 'o') {
        return 'o'
      }  
      else if(matrix[0] === 'o' && matrix[4] === 'o' && matrix[8] === 'o') {
        return 'o'
      }  
      else if(matrix[2] === 'o' && matrix[4] === 'o' && matrix[6] === 'o') {
        return 'o'
      }
      else if(index === 9) {
        return '/'
      }    
    }
        
  }

  useEffect(() => {

    if(winner() === 'x' || winner() === 'o') {
      alert(`Player ${winner().toUpperCase()} win!!!`)
      document.location.reload()
    }
    else if(winner() === '/'){
      alert('No player win!!!')
      document.location.reload()
    }
    setIndex(index+1)
    
  }, [switchPlayer])

  return (
    <div className="App">
      <div className="container">
        <span></span>
        <span></span>
        <span></span>
        <span></span>

        {
          matrix.map((m, index) => {
            return (
              <Cube key={index} setMatrix={setMatrix} matrix={matrix} cubeId={m} switchPlayer={switchPlayer} setSwitchPlayer={setSwitchPlayer} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;