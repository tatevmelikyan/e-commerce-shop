
import {FC, useState} from 'react';
 import  './components.css'
interface FormProps {
    title: string;
    handleClick: (email: string, pass: string) => void;
}

const Form: FC<FormProps> = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div className='loginbox'>
            <div className="logintext">
              <h1>Sign In or Create an Account</h1>
              <p>Enter your email address to get started.</p>
            </div>
            
            <div   className='inputdivlogin'>
          <form>
            <input
                className=' emailinput'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <input
            className=' paswordinput'
                // autoComplete = 'current-password'
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="password"
                
            />
            </form>
            </div>
            <button className='loginbutton' onClick={() => handleClick(email, pass)}>  {title} </button>
        </div>
    )
}

export {Form}
