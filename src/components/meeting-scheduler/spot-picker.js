import React from 'react';
import {days, months} from '../../utils/util';
function spotPicker(props) {
  return (
    <div>
      <h4 className="spot-header">{days[props.meetingDate.getDay()] + ' , ' + months[props.meetingDate.getMonth()] + ' ' + props.meetingDate.getDate()}</h4>
      <div className="spot-picker-container">
          {
            props.timeSlots.map(function blockGenerator(val, i){
              if (val === props.meetingTime) {
                return <div key={i} className="spot-btn-container">
                  <span className='spot-btn spot-btn-time'>{props.meetingTime}</span>
                  <span className='spot-btn spot-btn-confirm' onClick={()=> {props.updateMeetingConfirmed(true)}}>Confirm</span>
                </div>;
              } else {
                return <div key={i} onClick={()=>{props.updateMeetingTime(val)}} className="spot-time-row" size='huge'>{val}</div>;
              }
            })
          }
      </div>
    </div>
  );

}

export default spotPicker;
