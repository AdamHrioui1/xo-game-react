import React from 'react'

function Cube({ setMatrix, cubeId, matrix, switchPlayer, setSwitchPlayer }) {
    
    const changeMatrix = (id) => {
        for (let i = 0; i < 9; i++) {
            if(parseInt(id-1) === i) {
                if(switchPlayer) {
                    matrix[id-1] = 'x'  
                    setMatrix(matrix)
                    setSwitchPlayer(!switchPlayer)
                }
                else {
                    matrix[id-1] = 'o'  
                    setMatrix(matrix)
                    setSwitchPlayer(!switchPlayer)
                }
            }
        }
    }

    return (
        <div key={cubeId} className='cube' onClick={() => changeMatrix(cubeId)}>
            <div className={cubeId === 'x' ? 'x' : cubeId === 'o' ? 'o' : '' }></div>
        </div>
    )
}

export default Cube
