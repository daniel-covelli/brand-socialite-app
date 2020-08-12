import { Form, TextArea } from 'semantic-ui-react';

function instructions({ handleChange }) {
  const [count, setCount] = React.useState(0);

  return (
    <Form.Input label='Instructions'>
      <>{console.log('a rerender occured')}</>
      <TextArea
        name='instructions'
        placeholder='List the oblications of this position...'
        onChange={handleChange}
      />
    </Form.Input>
  );
}

export default instructions;
