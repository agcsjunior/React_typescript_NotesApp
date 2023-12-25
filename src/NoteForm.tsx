import {Form} from "react-bootstrap"

export function NoteForm() {
    
    
    return(<Form>
    <Stack gap ={4}>
      <Row>
        <Col1>
        <Form.Group controlId = "title">
          <Form.Label > Title</Form.Label>
          <Form.Control required />

        </Form.Group>

        </Col1>
      </Row>
    </Stack>
      
    </Form>

      
    )

}