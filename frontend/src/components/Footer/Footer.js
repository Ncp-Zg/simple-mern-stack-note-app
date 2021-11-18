import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer style={{width:"%100", position:"relative",botom:"0",display:"flex",justifyContent:"center"}}>
            <Container>
                <Row>
                    <Col className="text-center py-3">Copyright</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
