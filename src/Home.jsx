import React from 'react'
import { Content, Row, Col, Button,Box } from 'adminlte-2-react'




const Home = () => {
  return (
    <Content title='Home Page'>
        <Row>
            <Col sm={4} className="d-flex flex-column justify-content-center align-items-center">
            <Box title="My first box" type="primary" closable collapsable footer={<Button type="danger" text="Danger Button" />}>
            <Button type="success" text="cek aja" to="/modal" />
          </Box>
            </Col>    
            <Col sm={8}>
            
            </Col>
        </Row> 
    </Content>
  )
}

export default Home