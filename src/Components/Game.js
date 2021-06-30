import '../Style/Game.css';
import { useState, useEffect } from "react";
import Square from './Square';
import { Patterns } from './Helpers';


function App() {
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
    const [player, setPlayer] = useState("O");
    const [result, setResult] = useState({ winner: "none", state: "none" });
    const [message, setMessage] = useState('');
    
    const player1 = localStorage.getItem('player1');
    const player2 = localStorage.getItem('player2');
    
   

    useEffect(() => {
        checkWin();
        checkIfTie();
        rss();
        
        

        if (player === "X") {
            setPlayer("O");
            setMessage(`${player2}`);
            
            
        } else {
            setPlayer("X");
            setMessage(` ${player1}`);
            
            
        }
    }, [board]);

    // useEffect(() => {
    //     if(result.state !== 'none') {
    //         setResult(`Pobjedadaaaa! Pobijedio je : ${result.winner}`);
            
    //     }
    // },[result]);

    const rss = () => {
        if(result.state !== 'none') {
            setResult(`Pobjedadaaaa! Pobijedio je : ${result.winner}`);
            console.log(result);
            
        }
    }

 

    

    

   

    const chooseSquare = (square) => {
        setBoard(
            board.map((val, idx) => {
                if (idx === square && val === "") {
                    return player;
                }

                return val;
            })
        );
    };

    const checkWin = () => {
        Patterns.forEach((currPattern) => {
            const firstPlayer = board[currPattern[0]];
            if (firstPlayer === "") return;
            let foundWinningPattern = true;
            currPattern.forEach((idx) => {
                if (board[idx] !== firstPlayer) {
                    foundWinningPattern = false;
                }
            });

            if (foundWinningPattern) {
                setResult({winner:player === player1 ? player2 : player1, state:'Won'});
                
                // console.log(result);
                
                
            }
        });
    };




    const checkIfTie = () => {
       
;        let filled = true;
        board.forEach((square) => {
            if (square === "") {
                filled = false;
            }
        });

        if (filled) {
            setResult({ winner: "No One", state: "Tie" });
            
            
        }
        
    };

    const restartGame = () => {
        setBoard(["", "", "", "", "", "", "", "", ""]);
        setPlayer("O");
    };

    return (
        
        <div>
            <h2>Next player: {message}</h2>
            
            
            
            
            
        <div className="App">

            <div className="board">

                <div className="row">
                    <Square
                        val={board[0]}
                        chooseSquare={() => {
                            chooseSquare(0);
                        }}
                    />
                    <Square
                        val={board[1]}
                        chooseSquare={() => {
                            chooseSquare(1);
                        }}
                    />
                    <Square
                        val={board[2]}
                        chooseSquare={() => {
                            chooseSquare(2);
                        }}
                    />
                </div>
                <div className="row">
                    <Square
                        val={board[3]}
                        chooseSquare={() => {
                            chooseSquare(3);
                        }}
                    />
                    <Square
                        val={board[4]}
                        chooseSquare={() => {
                            chooseSquare(4);
                        }}
                    />
                    <Square
                        val={board[5]}
                        chooseSquare={() => {
                            chooseSquare(5);
                        }}
                    />
                </div>
                <div className="row">
                    <Square
                        val={board[6]}
                        chooseSquare={() => {
                            chooseSquare(6);
                        }}
                    />
                    <Square
                        val={board[7]}
                        chooseSquare={() => {
                            chooseSquare(7);
                        }}
                    />
                    <Square
                        val={board[8]}
                        chooseSquare={() => {
                            chooseSquare(8);
                        }}
                    />
                </div>
                <button onClick={restartGame}>Restart</button>
            </div>
            
        </div>
        </div>
    );
}

export default App;


































