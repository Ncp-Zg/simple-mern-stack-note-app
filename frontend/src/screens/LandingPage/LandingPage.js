import React from 'react'
import { Container, Row, Button } from 'react-bootstrap'

import "./LandingPage.css"

const LandingPage = () => {
    return (
        <div className="main">
            <Container>
                <Row>
                    <div className="intro-text">
                        <div>
                            <h1 className="title">Welcome to NoteApp</h1>
                        </div>
                        <div className="buttonContainer">
                            <a href="/login">
                              <Button className = "landingbutton" size="lg ">Login</Button>  
                            </a>
                            <a href="/register">
                              <Button className = "landingbutton" size="lg" variant="outline-primary">Register</Button>  
                            </a>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage
