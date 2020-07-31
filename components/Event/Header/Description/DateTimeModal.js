import { Header, Label, Icon, Modal, Divider } from 'semantic-ui-react';

const DateTimeModal = ({ props }) => {
  return (
    <>
      <Modal
        trigger={
          <Label as='a' size={'large'} style={{ margin: '0 1em 1em 0' }}>
            <Icon name={props.icon} />
            {props.eventdate}
          </Label>
        }>
        <Modal.Header>Event Schedule</Modal.Header>
        <Modal.Content>
          <Header sub>Date</Header>
          {props.date_formatted_long}

          <Divider hidden />

          <Header sub>
            <Icon name='wrench' />
            Set Up
          </Header>
          {props.setup_timespan}

          <Divider hidden />

          <Header sub>
            <Icon name='certificate' />
            Event
          </Header>
          <p>{props.event_timespan}</p>

          <Divider hidden />

          <Header sub>
            <Icon name='wrench' />
            Breakdown
          </Header>
          <p>{props.breakdown_timespan}</p>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default DateTimeModal;
