import React, {useState, useContext} from 'react'
import axios from 'axios'
import {FormContainer, Form, AddButton, FormItem, FormInput, ItemCard, CardArea, ItemCardText} from '../../styles/global.css'
import {Employee, EmployeePost} from '../../interfaces/employee';
import {signInWithEmail} from '../../firebase';
import {UserContext} from '../../providers/userProvider/userProvider';

const Admin: React.FC = () => {
  const [validEmail, setValidEmail] = useState<boolean>(false)
  const [formData, setFormData] = useState<EmployeePost>({email: "", name: "", admin: false})
  const employeeData = useContext(UserContext).users


  const handleChange = (e: any) => {
    let name = e.target.name
    let value = e.target.value
    if(name === 'email') {
      setValidEmail(e.target.checkValidity())
    }
    if(name === 'admin') {
      value = e.target.value === 'on'
    }
    setFormData({ ...formData, [name]: value })
  }


  const handleSubmit = () => {
    alert('Send Invitation Email')
    const {
      email,
    } = formData
    axios.post('https://us-central1-employee-reviewer-f9da9.cloudfunctions.net/webApi/addEmployee', formData)
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(error => {
          console.log(error)
        });

     validEmail && signInWithEmail(email)
  }

  return <>
  <FormContainer>
    <Form>
      <h3>Add User</h3>
      <FormItem>
        Email: <FormInput autoComplete="off" required onChange={handleChange} type="email" name="email" placeholder="example@example.com" />
      </FormItem>
      <FormItem>
        Name: <FormInput autoComplete="off" onChange={handleChange} type="text" name="name" placeholder="name" />
      </FormItem>
      <FormItem>
        Admin: <FormInput onChange={handleChange} type="checkbox" name="admin"/>
      </FormItem>
    </Form>
    <AddButton disabled={!validEmail} onClick={handleSubmit}>Submit</AddButton>
  </FormContainer>
    <CardArea>
    {employeeData.map((employee: Employee, index: number) => {
      const {
        name,
        email,
      } = employee
      return <ItemCard to={{
        pathname: '/employee-info',
        state: {
          employee
        }
      }} key={index}>
        <h3>{name}</h3>
        <ItemCardText>{email}</ItemCardText>
      </ItemCard>
    })}
    </CardArea>
  </>
}

export default Admin
