import React,{useState} from 'react'
import Loader from 'react-loader-spinner'
import {Button,Modal} from 'react-bootstrap'
const Loading = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <Button variant="primary" onClick={() => setShow(true)}>
                Custom Width Modal
            </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Body>

                    <Loader
                    type="Puff"
                    width={100}
                    height={100}
                    timeout={5000} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Loading
