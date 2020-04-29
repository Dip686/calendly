import React from 'react';
import { Grid, Image, Button, Icon } from 'semantic-ui-react';
import earthIcon from '../../resources/icons/earth.svg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SpotPicker from './spot-picker';
import {timeSlots} from '../../utils/util';

class MeetingSchedulerWidget extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
  }
  render() {
    let currState =  this.state;
    return (
      <div>
        <h4>Select a Date & Time</h4>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column computer={10} tablet={16} mobile={16}>
              <Calendar
                onChange={this.props.updateMeetingDate}
                value={this.props.meetingDate}
              />
              <div className="time-zone">
                <Image disabled src={earthIcon}/>
                <span> India Standard Time{currState.date.getHours() + ':'+currState.date.getMinutes()} </span>
              </div>
              <Button basic className="troubleshoot-btn"> <Icon className="wrench"/>Troubleshoot</Button>
            </Grid.Column>
            <Grid.Column computer={6} tablet={16} mobile={16}>
              <SpotPicker meetingDate = {this.props.meetingDate} updateMeetingConfirmed = {this.props.updateMeetingConfirmed} meetingTime = {this.props.meetingTime} timeSlots={timeSlots} updateMeetingTime={this.props.updateMeetingTime}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default MeetingSchedulerWidget;
