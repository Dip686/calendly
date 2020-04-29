import React from 'react';
import { Form, Button } from 'semantic-ui-react';

function meetingConfirmView() {
  return (
    <div className="meeting-confirm-container">
      <h5>Enter details</h5>
      <Form>
        <Form.Field>
          <label>Name *</label>
          <input placeholder='Name' />
        </Form.Field>
        <Form.Field>
          <label>Email *</label>
          <input type="email" placeholder='Email' />
        </Form.Field>
        <Form.Field>
          <Button basic color='blue'>
            Add Guests
          </Button>
        </Form.Field>
        <Form.TextArea label='Please share anything that will help prepare for our meeting'/>
        <Button type='submit' primary>Schedule Event</Button>
      </Form>
    </div>
  );
}

export default meetingConfirmView;
