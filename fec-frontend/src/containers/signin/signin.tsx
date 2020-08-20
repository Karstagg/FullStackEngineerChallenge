import React, { useState } from 'react'
import {SignInForm, SignInFormItem, SignInFormInput, SignInButton} from './styles.signin'

const SignIn: React.FC = () => {
  const [validEmail, setValidEmail] = useState<boolean>(false)
  const [formData, setFormData] = React.useState({})
  const handleChange = (e: any) => {
    setValidEmail(e.target.checkValidity())
    if(validEmail) {
      setFormData({...formData, [e.target.name]: e.target.value})
    }
  }

  console.log(validEmail, formData)
  return <SignInForm>
    <SignInFormItem>
      Email: <SignInFormInput autoFocus required onChange={handleChange}  type="email" name="email" placeholder=" example@example.com" />
    </SignInFormItem>
    <SignInButton disabled={!validEmail}>Submit</SignInButton>
  </SignInForm>

}

export default SignIn
