import {
  Header,
  Label,
  Icon,
  Modal,
  Divider,
  Responsive
} from 'semantic-ui-react';

const DateTimeModal = ({ props }) => {
  return (
    <>
      <Responsive minWidth={768}>
        <Modal
          trigger={
            <Label
              as='a'
              size={'large'}
              style={{ margin: '0 1em 1em 0' }}
              basic>
              <Icon name={props.icon} />
              {props.eventdate}
            </Label>
          }
          centered={false}>
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
      </Responsive>
      <Responsive maxWidth={768}>
        <Modal
          trigger={
            <Label
              as='a'
              size={'small'}
              style={{ margin: '0 1em 1em 0' }}
              basic>
              <Icon name={props.icon} />
              {props.eventdate}
            </Label>
          }
          centered={false}>
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
      </Responsive>
    </>
  );
};

export default DateTimeModal;
