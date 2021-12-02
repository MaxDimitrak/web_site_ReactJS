import React from 'react';
import s from './LeaveARequest.module.css';
import StepName from './StepName/StepName';
import StepTel from './StepTel/StepTel';
import StepMessanger from './StepMessanger/StepMessanger';
import StepTarif from './StepTarif/StepTarif';
import StepEmail from './StepEmail/StepEmail';


const LeaveARequest = () => {
    return (
        <div className={s.leaveARequest}>
            <StepName/>
        </div>
    );
};

export default LeaveARequest;