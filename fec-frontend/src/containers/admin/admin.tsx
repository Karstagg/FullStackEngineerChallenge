import React, { useState, useEffect } from 'react'
import axios, {AxiosResponse} from 'axios'
import {AdminFormContainer, AdminForm, AddUserButton, AdminFormItem, AdminFormInput, EmployeeCard, EmployeeArea} from './styles.admin'
//import {signInWithEmail} from '../../firebase';

interface Employee {
  id: string,
  name: string,
  isAdmin: boolean,
  createdAt: Date,
  email: string
}


const Admin: React.FC = () => {
  const [validEmail, setValidEmail] = useState<boolean>(false)
  const [formData, setFormData] = useState<object>({})
  const [employeeData, setEmployeeData] = useState([])
  const handleChange = (e: any) => {
    setValidEmail(e.target.checkValidity())
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    alert('Email sign-in link sent')
    console.log(formData)
    //validEmail && signInWithEmail(email)
  }

  useEffect(() => {
    axios.get('https://us-central1-employee-reviewer-f9da9.cloudfunctions.net/webApi/employees').then((response: AxiosResponse) =>{
      setEmployeeData(response.data)
    })
  }, [])

  return <>
  <AdminFormContainer>
    <AdminForm>
      <h3>Add User</h3>
      <AdminFormItem>
        Email: <AdminFormInput required onChange={handleChange} type="email" name="email" placeholder="example@example.com" />
      </AdminFormItem>
      <AdminFormItem>
        name: <AdminFormInput required onChange={handleChange} type="name" name="email" placeholder="name" />
      </AdminFormItem>
      <AdminFormItem>
        admin: <AdminFormInput autoFocus required onChange={handleChange} type="checkbox" name="admin" />
      </AdminFormItem>
    </AdminForm>
    <AddUserButton disabled={!validEmail} onClick={handleSubmit}>Submit</AddUserButton>
  </AdminFormContainer>
    <EmployeeArea>
    {employeeData.map((employee: Employee) => {
      const {
        name,
        email,
      } = employee
      return <EmployeeCard>
        <h3>{name}</h3>
        <div>{email}</div>
      </EmployeeCard>
    })}
    </EmployeeArea>
  </>
}

export default Admin
