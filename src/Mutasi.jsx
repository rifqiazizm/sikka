import React, { useEffect } from 'react'
import { Content, Row, Col, Button, Box } from 'adminlte-2-react'
import $ from 'jquery';



const Mutasi = () => {


    const modalClick = () => {
        $('#open').on('click',() => {
            console.log("poke")
        })
    }

    useEffect(() => {
        $('#open').on('click',() => {
            console.log("poke")
        })
    }, [])
    

  return (
    <Content title='Home Page'>
    <Row>
        <Col sm={4} className="d-flex flex-column justify-content-center align-items-center">
        <Box title="My first box" type="primary" closable collapsable>
        <Button type="success" text="Home" to="/modal" />
        <div className="card" style={{width: '18rem'}}>
            <img src="" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
      </Box>
        </Col>    
        <Col sm={8}>
                        <button id="open" type="button" className="btn btn-primary" >
                Launch modal with jquery
                </button>

                <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>  
                </div>
                </div>
               
        </Col>
    </Row> 
</Content>
  )
}

export default Mutasi