import { FC, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import './components.css'
interface FormProps {
  title: string
  handleClick: (email: string, pass: string) => void
}

type Inputs = {
  example: string,
  exampleRequired: string,
};

const Form: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data:any) => console.log(data);



  return (
    <div className='loginbox'>
      <div className='logintext'>
        <h1>Sign In or Create an Account</h1>
        <p>Enter your email address to get started.</p>
      </div>

      <div className='inputdivlogin'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className=' emailinput'
            type='email'
            value={email}
            // @ts-ignore
             onChange={(e) => setEmail(e.target.value)}
            placeholder='email'
            // {...register('mail', { required: 'Email Address is required' })}  aria-invalid={errors.mail ? 'true' : 'false'} 
          />
          <input
            className=' paswordinput'
            // autoComplete = 'current-password'
            type='password'
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder='password'
          />
        </form>
      </div>
      <button
        className='loginbutton'
        onClick={() => handleClick(email, pass)}
      >
        {' '}
        {title}{' '}
      </button>
    </div>
  )
}

export { Form }
