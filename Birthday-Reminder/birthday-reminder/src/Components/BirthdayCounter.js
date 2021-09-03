import React, { useState } from 'react';
import { ReminderHeader } from "../Styles/Reminder_Styles";


const BirthdayCounter = ({index}) => {

    return (
        <>
            <ReminderHeader>
                <h1>{index} birthdays today</h1>
            </ReminderHeader>
        </>
    )
}

export default BirthdayCounter
