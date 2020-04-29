import React from 'react';
import { Icon, Image } from 'semantic-ui-react';
import { days, months } from '../../utils/util';
import earthIcon from '../../resources/icons/earth.svg';

function meetingDetails(props) {
  return (
    <div>
      {
        (props.confirmStatus) ?
          <Icon onClick={() => { props.updateMeetingConfirmed(false) }} className="arrow alternate circle left outline blue" size="large" />
          : ''
      }
      <div className="host-username">{props.userName}</div>
      <h2 className="meeting-details-header">{props.meetingDuration} {props.meetingUnit} meeting</h2>
      <div className="summary-container">
        <Icon disabled name='clock' />
        <span className="summary-duration">{props.meetingDuration} {props.meetingUnit}</span>
      </div>
      {
        (props.confirmStatus) ?
          <>
            <div className="confirmed-message">
              <Icon className="calendar" />
              {props.meetingTime + ' ' + days[props.meetingDate.getDay()] + ' , ' + months[props.meetingDate.getMonth()] + ' ' + props.meetingDate.getDate()
                + ', ' + props.meetingDate.getFullYear()
              }
            </div>
            <div className="time-zone">
              <Image disabled src={earthIcon}/>
              <span> India Standard Time</span>
            </div>
          </>
        : ''
      }
    </div>
  );
}

export default meetingDetails;
