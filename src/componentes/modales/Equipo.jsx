import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Avatar from "../../images/avatar.jpeg";

const ModalEquipo = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <p className="m-0" onClick={handleShow}>
                Conócenos
            </p>

            <Modal show={show} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title><b>Nuestro equipo</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-around"> 
                        <div>
                            <div className="d-flex justify-content-center">
                                <img alt='' src={Avatar} className="radius-50 img-100" />
                            </div>
                            <p className="text-center"><b>Beatriz Rodriguez</b></p>
                        </div>
                        <div>
                            <div className="d-flex justify-content-center">
                                <img alt='' src={Avatar} className="radius-50 img-100" />
                            </div>
                            <p className="text-center"><b>Alejandro Palacios</b></p>
                        </div>
                        <div>
                            <div className="d-flex justify-content-center">
                                <img alt='' src={Avatar} className="radius-50 img-100" />
                            </div>
                            <p className="text-center"><b>Antenor Diaz</b></p>
                        </div>
                        <div>
                            <div className="d-flex justify-content-center">
                                <img alt='' src={Avatar} className="radius-50 img-100" />
                            </div>
                            <p className="text-center"><b>Victor Arias</b></p>
                        </div>
                        <div>
                            <div className="d-flex justify-content-center">
                                <img alt='' src={Avatar} className="radius-50 img-100" />
                            </div>
                            <p className="text-center"><b>William Martinez</b></p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="info" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalEquipo