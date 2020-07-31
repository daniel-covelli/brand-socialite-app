import { Comment } from 'semantic-ui-react';

function ContentExtra({ event }) {
  return (
    <Comment.Group>
      <Comment>
        <Comment.Avatar src={event.adminMediaUrl} />
        <Comment.Content>
          <Comment.Author>Stevie Feliciano</Comment.Author>
          <Comment.Text>Event Manager</Comment.Text>
        </Comment.Content>
      </Comment>
    </Comment.Group>
  );
}

export default ContentExtra;
