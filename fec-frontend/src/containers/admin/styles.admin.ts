import styled from 'styled-components';
import {Button, Card} from '../../styles/global.css';

export const AdminFormContainer = styled.div`
  justify-self: center;
  width: 90%;
  height: 50%;
  margin-top: 50px;
  display: grid;
  justify-items: center;
  grid-template-columns: 50% 50%;
  @media(max-width: 750px) {
    grid-template-columns: 100%;
  }
  box-shadow: 
    5px 5px 7px 0 rgba(0, 0, 0, 0.25),
    -2px -2px 4px 0 rgba(255, 255, 255, 1);
`
export const AdminForm = styled.div`
  width: 90%;
  display: grid;
  grid-template-rows: 25% 25% 25% 25%;
  align-items: center;
`
export const AdminFormItem = styled.label`
  display: grid;
  justify-items: start;
  grid-template-columns: 8% auto;
  width: 100%;
  grid-column-gap: 10px;
`
export const AdminFormInput = styled.input`
  width: auto;
`
export const AddUserButton = styled(Button)`
  width: 50%;
  height: 50%;
  font-size: 1.5rem;
  justify-self: center;
  align-self: center;
`

export const EmployeeArea = styled.div`
  width: 90%;
  justify-self: center;
  grid-template-columns: repeat(auto-fill, 25%);
  grid-column-gap: 20px;
`

export const EmployeeCard = styled(Card)`
  grid-template-rows: 50% 50%;
  justify-items: center;
  align-items: center;
  max-width: 200px;
  height: 100px;
`
