import React, {useState, useContext} from 'react'
import axios from 'axios'
import {AdminFormContainer, AdminForm, AddUserButton, AdminFormItem, AdminFormInput, EmployeeCard, EmployeeArea} from './styles.admin'
import {Employee} from '../../interfaces/employee';
import {signInWithEmail} from '../../firebase';
import {UserContext} from '../../providers/userProvider/userProvider';

const Admin: React.FC = () => {
  const [validEmail, setValidEmail] = useState<boolean>(false)
  const [formData, setFormData] = useState<Employee>({id: "", email: "", name: "", admin: false})
  const employeeData = useContext(UserContext).users

  const handleChange = (e: any) => {
    let name = e.target.name
    let value = e.target.value
    if(name === 'email') {
      console.log(e.target.checkValidity())
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
    axios.post('https://us-central1-employee-reviewer-f9da9.cloudfunctions.net/webApi/addEmployee', JSON.stringify(formData))
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
  <AdminFormContainer>
    <AdminForm>
      <h3>Add User</h3>
      <AdminFormItem>
        Email: <AdminFormInput autoComplete="off" required onChange={handleChange} type="email" name="email" placeholder="example@example.com" />
      </AdminFormItem>
      <AdminFormItem>
        name: <AdminFormInput autoComplete="off" onChange={handleChange} type="test" name="name" placeholder="name" />
      </AdminFormItem>
      <AdminFormItem>
        admin: <AdminFormInput onChange={handleChange} type="checkbox" name="admin"/>
      </AdminFormItem>
    </AdminForm>
    <AddUserButton disabled={!validEmail} onClick={handleSubmit}>Submit</AddUserButton>
  </AdminFormContainer>
    <EmployeeArea>
    {employeeData.map((employee: Employee, index: number) => {
      const {
        name,
        email,
      } = employee
      return <EmployeeCard key={index}>
        <h3>{name}</h3>
        <div>{email}</div>
      </EmployeeCard>
    })}
    </EmployeeArea>
  </>
}

export default Admin
