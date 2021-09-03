import React from "react";
import { BirthdayList, Image, Details } from "../Styles/Reminder_Styles";
import image from "../Images/image.jpg";

const Birthday = (props) => {

  const handleDelete = (id) => {
    const newData = props.celebrants.filter(celebrant => {
      return celebrant.id !== id;
    });
    props.setCelebrant(newData);
  };

  const birthdayCollection = props.celebrants.map((celebrant) => {
    const { id, name, age, image } = celebrant;

    return (
      <BirthdayList key={id} onClick={() => handleDelete(id)}>
        <Image>
          <img src={image} alt={name} />
        </Image>
        <Details>
          <h2>{name}</h2>
          <h3>{age} years</h3>
        </Details>
      </BirthdayList>
    );
  });

  return <>{birthdayCollection}</>;
};

export default Birthday;
