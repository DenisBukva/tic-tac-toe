import React, {useState} from 'react';

import '../Style/Login.css';





function Login({hideLogin}){

const [player1, setPlayer1] = useState('');
const [player2, setPlayer2] = useState('');


const saveLocal = () =>{
    localStorage.setItem('player1', player1);
    localStorage.setItem('player2', player2);

}

 const  handleInput = (e) => {
    if(/^$/.test(player1) || /^$/.test(player2)){}
    else{
        e.preventDefault();
        setPlayer1(player1);
        setPlayer2(player2);
        saveLocal();
        hideLogin()
    }
    

 }
  
        return (
            
               <div className='container-login'>
                <div className='screen'>
                    <form onSubmit={handleInput}>
                        <div className='form-group'>
                            <label>Name Player1</label>
                            <input
                                value={player1}
                                onChange={(e) => setPlayer1(e.target.value)}
                                className='form-control'
                                
                                
                            />

                            <label>Name Player2</label>
                            <input
                                value={player2}
                                onChange={(e) => setPlayer2(e.target.value)}
                                className='form-control'
                               
                                
                            />
                        </div>

                        <button id='btn'
                            className='btn btn-outline-success'
                            type='submit'
                            
                            >
                            Start
                        </button>
                       
                    </form>
                </div>
            </div>
            
         
            
        );
    }


export default Login;