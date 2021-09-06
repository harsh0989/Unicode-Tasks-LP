import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

const Navbarcomp = () => {
    return (
        <div>
            <Navbar bg="transparent" variant="primary">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                </Container>
            </Navbar>
        </div >
    )
}

export default Navbarcomp
