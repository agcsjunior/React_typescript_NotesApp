import {Col, Form, Row, Stack} from "react-bootstrap"
import CreatableReactSelect from "react-select/creatable"


export function NoteForm() {
    
    
    return(
    <Form>
       <Stack>
        <Row>
          <Col>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control required />
          </Form.Group>
          </Col>
          <Col>
          <Form.Group>
            <Form.Label>Tags</Form.Label>
            <CreatableReactSelect isMulti />

          </Form.Group>
          </Col>
        </Row>
       </Stack>
      
    </Form>

      
    )

}