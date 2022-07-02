import React from 'react'
import { Content, Row, Col, Button } from 'adminlte-2-react'


const Modal = () => {
  return (
    <Content modal>
        <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
            <Box title="My first box" type="primary" closable collapsable footer={<Button type="danger" text="Danger Button" />}>
                <h1>Tes aja bosku ini </h1>
            </Box>
            </Col>
        </Row>
    </Content>
  )
}

export default Modal