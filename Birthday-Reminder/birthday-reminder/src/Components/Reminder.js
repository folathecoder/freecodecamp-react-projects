import React from "react";
import {
  Container,
  ContainerInner,
  ClearButton,
} from "../Styles/Reminder_Styles";
import Birthday from "./Birthday";
import BirthdayCounter from "./BirthdayCounter";
import data from "../data";

const Reminder = () => {
  const [celebrant, setCelebrant] = React.useState(data);

  return (
    <div>
      <Container>
        <ContainerInner>
          <BirthdayCounter index={celebrant.length} />
          <Birthday celebrants={celebrant} setCelebrant={setCelebrant}/>
          <ClearButton onClick={() => setCelebrant([])}>Clear All</ClearButton>
        </ContainerInner>
      </Container>
    </div>
  );
};

export default Reminder;
