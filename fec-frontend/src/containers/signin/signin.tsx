import React, { useState } from 'react'
import {SignInForm, SignInFormItem, SignInFormInput, SignInButton} from './styles.signin'
import {signInWithEmail} from '../../firebase';

const SignIn: React.FC = () => {
  const [validEmail, setValidEmail] = useState<boolean>(false)
  const [email, setEmail] = React.useState<string>("")
  const handleChange = (e: any) => {
    setValidEmail(e.target.checkValidity())
    setEmail(e.target.value)
  }
  const handleSubmit = () => {
    alert('Email sign-in link sent')
    validEmail && signInWithEmail(email)
  }

  return <SignInForm>
    <SignInFormItem>
      Email: <SignInFormInput autoFocus required onChange={handleChange} type="email" name="email" placeholder=" example@example.com" />
    </SignInFormItem>
    <SignInButton disabled={!validEmail} onClick={handleSubmit}>Submit</SignInButton>
  </SignInForm>

}

export default SignIn
