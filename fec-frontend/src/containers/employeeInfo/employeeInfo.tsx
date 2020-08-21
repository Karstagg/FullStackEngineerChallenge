import React, { useContext, useState, useEffect} from 'react'
import {FormContainer, Form, AddButton, FormItem,  ItemCard, CardArea, FormInput} from '../../styles/global.css'
import {Employee} from '../../interfaces/employee';
import {UserContext} from '../../providers/userProvider/userProvider';
import {useLocation} from 'react-router-dom'
import Select from 'react-select';
import styled from 'styled-components';
import axios from 'axios';
import {Review} from '../../interfaces/reviews'

const StyledSelect = styled(Select)`
  width: 90%;
  justify-self: end;
  color: black;
`
const EmployeeInfo: React.FC = () => {
  const {
    state: {
      employee: {
        name,
        id,
      }
    }
  } = useLocation()
  const [formData, setFormData] = useState({})
  const [reviews, setReviews] = useState<Array<Review>>([])
  const employeeData = useContext(UserContext).users

  useEffect(() => {
    axios.post('https://us-central1-employee-reviewer-f9da9.cloudfunctions.net/webApi/getReviewsByUser', {id})
        .then(function (response) {
          //handle success
          console.log(response);
          setReviews(response.data)
        })
        .catch(error => {
          console.log(error)
        });
  }, [id])

  const handleChange = (reviewers: any) => {
    setFormData({ ...formData, reviewers})
    console.log(formData)
  };

  const handleChangeInput = (e: any) => {
    let name = e.target.name
    let value = e.target.value
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    alert('Review Added')
    axios.post('https://us-central1-employee-reviewer-f9da9.cloudfunctions.net/webApi/addReview', {id, formData})
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(error => {
          console.log(error)
        });

    // I hate this but I don't have time to figure out why the above cloud function times out
   const timeOut = window.setTimeout(() => {axios.post('https://us-central1-employee-reviewer-f9da9.cloudfunctions.net/webApi/getReviewsByUser', {id})
        .then(function (response) {
          //handle success
          console.log(response);
          window.clearTimeout(timeOut);
          setReviews(response.data)
        })
        .catch(error => {
          console.log(error)
        })}, 5000)
  }
  const options = employeeData.map((employee: Employee) => {
      return {value: employee, label: employee.name + ": " + employee.email}
  })

  return <>
    <FormContainer>
      <Form>
        <h3>Add Reviews for {name}</h3>
        <FormItem>
          Title: <FormInput autoComplete="off" onChange={handleChangeInput} type="text" name='title' placeholder="title..."/>
        </FormItem>
        <FormItem>
          Reviewers: <StyledSelect isMulti options={options} onChange={handleChange} />
        </FormItem>
      </Form>
      <AddButton onClick={handleSubmit}>Submit</AddButton>
    </FormContainer>
    <CardArea>
      {reviews.map((review, index: number) => {
        const {
          title,
          reviewers
        } = review
        return <ItemCard to="#" key={index}>
          <h3>{title}</h3>
          <div>Reviewers: {reviewers.length}</div>
        </ItemCard>
      })}
    </CardArea>
  </>
}

export default EmployeeInfo
