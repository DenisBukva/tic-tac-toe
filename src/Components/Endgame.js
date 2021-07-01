import React from 'react';

import '../Style/Endgame.css';


function Endgame({ winMsg, restartGame}) {
    
    
  


  

    return (
        <div className='container'>
            <div className='screen'>
            <div className='msg'>
                <h2>{winMsg}</h2>
                <button id='btn-end' className='btn w- btn-outline-success rounded ' onClick={restartGame}>Wanna try again?</button>
            </div>
           

            </div>

        </div>
    );
}

export default Endgame;