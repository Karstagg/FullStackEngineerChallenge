import React, { useState } from 'react'
import {SignInForm, SignInFormItem, SignInFormInput, SignInButton} from './styles.signin'

const SignIn: React.FC = () => {
  const [validEmail, setValidEmail] = useState<boolean>(false)
  const [formData, setFormData] = React.useState({})
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  console.log(validEmail, formData)
  return <SignInForm>
    <SignInFormItem>
      Email: <SignInFormInput required onChange={handleChange} onBlur={(e) => setValidEmail(e.target.checkValidity())} type="email" name="email" placeholder=" example@example.com" />
    </SignInFormItem>
    <SignInButton disabled={!validEmail}>Submit</SignInButton>
  </SignInForm>

}

export default SignIn
