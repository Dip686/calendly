import React from 'react';
import { Grid, Card, Container } from 'semantic-ui-react';
import { USER_NAME, MINUTE_UNIT, FIFTEEN_NUMBER} from '../utils/constants';
import MeetingDetails from './metting-details/meeting-details';
import MeetingSchedulerWidget from './meeting-scheduler/meeting-scheduler-widget';
import MeetingConfirmView from './meeting-scheduler/meeting-confirmed-view';
import {timeSlots} from '../utils/util';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      meetingDuration : FIFTEEN_NUMBER,
      meetingUnit : MINUTE_UNIT,
      userName : USER_NAME,
      meetingDate: new Date(),
      meetingTime: timeSlots[0],
      confirmStatus: false
    };
  }
  updateMeetingDate = date => this.setState({meetingDate: date})
  updateMeetingTime = time => this.setState({meetingTime: time})
  updateMeetingConfirmed = val => this.setState({confirmStatus: val})
  render(){
    let currState = this.state;
    return (
      <Container>
        <Card className="meeting-card-widget-container">  
          <Card.Content>
            <Grid columns={2} divided>
              <Grid.Row>
                <Grid.Column className="meeting-details-container" computer={5} tablet={16} mobile={16}>
                  <MeetingDetails updateMeetingConfirmed = {this.updateMeetingConfirmed} confirmStatus={currState.confirmStatus} meetingDate={currState.meetingDate} meetingTime={currState.meetingTime} meetingDuration = {currState.meetingDuration} meetingUnit  = {currState.meetingUnit} userName = {currState.userName}/>
                </Grid.Column>
                <div className="vertical-devider"></div>
                <Grid.Column className="meeting-scheduler-container"  computer={11} tablet={16} mobile={16}>
                  {
                    (currState.confirmStatus) ?
                    <MeetingConfirmView />
                    : <MeetingSchedulerWidget updateMeetingConfirmed = {this.updateMeetingConfirmed} meetingDate={currState.meetingDate} meetingTime={currState.meetingTime} updateMeetingDate={this.updateMeetingDate} updateMeetingTime={this.updateMeetingTime}/>
                  }
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

export default App;
