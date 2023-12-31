import { FormEvent, useRef } from "react"
import {Button, Col, Form, Row, Stack} from "react-bootstrap"
import { Link } from "react-router-dom"
import CreatableReactSelect from "react-select/creatable"
import { NoteData } from "./App"


type NoteFormProps = {
  onSubmit:{data:NoteData} => void
}

export function NoteForm() {
    const titleRef = useRef<HTMLInputElement>(null)
    const markdownRef = useRef<HTMLTextAreaElement>(null)
    
    function handleSubmit(e:FormEvent){
      e.preventDefault()
    }

    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags : []
    })

  
    


    return(
    <Form onSubmit={handleSubmit} >
       <Stack gap={3}>
        <Row>
          <Col>
          <Form.Group controlId="markdown">
            <Form.Label>Title</Form.Label>
            <Form.Control ref = {titleRef} required />
          </Form.Group>
          </Col>
          <Col>
          <Form.Group>
            <Form.Label>Tags</Form.Label>
            <CreatableReactSelect isMulti />

          </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="markdown">
            <Form.Label>Body</Form.Label>
            <Form.Control required as="textarea" ref = {markdownRef} rows={15} />
          </Form.Group>
      
       <Stack direction="horizontal" gap = {3} className="justify-content-end">
        <Button type="submit" variant="primary ">Save</Button>
        <Link to= "..">
        <Button type="button" variant="outline-secondary">Cancel</Button>
        </Link>
        
       </Stack>
       </Stack>
    </Form>

      
    )

}