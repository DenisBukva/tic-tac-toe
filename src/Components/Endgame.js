import React, { useEffect} from 'react';

import '../Style/Endgame.css';

let history = [];


function Endgame({ winMsg, restartGame,player1, player2, restartGame0  }) {

        
        let month = new Date().getMonth() + 1;
        let day = new Date().getDate();
        let hour = new Date().getHours();
        let minute = new Date().getMinutes();

        let time = `${day}.${month} ${hour}:${minute} ${player1} vs ${player2} ${winMsg}`;
        localStorage.setItem('time', JSON.stringify(time));

        useEffect(() => {
            history.push(<p key={Math.random()}>{JSON.parse(localStorage.getItem('time'))}</p>)
        }, []);


    return (
        <div className='container'>
            <div className='screen'>
                <div className='msg'>
                    <h2>{winMsg}</h2>
                   <h2 className='history'>{history}</h2>
                   <button onClick={restartGame0} id='btn-endd' className='btn btn-outline-danger rounded'>Restart Game</button>
                    <button id='btn-end' className='btn  btn-outline-success rounded ' onClick={restartGame}>Wanna try again?</button>
                </div> 


            </div>

        </div>
    );
}

export default Endgame;