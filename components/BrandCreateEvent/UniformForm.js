import { Form, Divider, TextArea } from 'semantic-ui-react';

function UniformForm({ props }) {
  return (
    <>
      <Form.Group>
        <Form.Input
          name='uniforms'
          value={props.event.uniforms}
          label='Uniforms'
          placeholder='Ex. Will be Provided'
          onChange={props.handleChange}
        />
      </Form.Group>
      <Form.Group style={{ marginBottom: '3em' }} widths='equal'>
        <Form.Input label='Uniform Instructions'>
          <TextArea
            name='uniformsInstructions'
            value={props.event.uniformsInstructions}
            placeholder='Ex. Bartenders should wear black..'
            onChange={props.handleChange}
          />
        </Form.Input>
      </Form.Group>
    </>
  );
}

export default UniformForm;
