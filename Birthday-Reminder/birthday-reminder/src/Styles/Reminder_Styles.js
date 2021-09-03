import styled from "styled-components";

export const Container = styled.section`
  max-width: 100vw;
  min-height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerInner = styled.section`
  width: 450px;
  min-height: 100px;
  background-color: white;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 0px 5px gray;
  padding: 10px;
`;

export const ReminderHeader = styled.div`
  /* background-color: green; */
  min-height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 20px;
`;

export const BirthdayList = styled.div`
  background-color: white;
  min-height: 50px;
  display: flex;
  margin: 5px 0px;
  box-shadow: 1px 1px 1px lightgray;

  &:hover {
    transition: 0.5s;
    background-color: black;
    color: white;
  }
`;

export const Image = styled.div`
  & img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    margin: 5px;
    border-radius: 50%;
  }
`;

export const Details = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
`

export const ClearButton = styled.button `
    background-color: red;
    border: none;
    display: inline-block;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    color: white;
    font-size: 18px;
    margin-top: 20px;

    &:hover {
      transition: 0.5 ease-in-out;
      background-color: tomato;
    }
`