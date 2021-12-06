import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";

const ModalContacto = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p className="m-0" onClick={handleShow}>
        Contáctenos
      </p>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title><b>Contáctenos</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="m-0">Línea Gratuita Nacional 018000111111 - Cel: 301000000 - 313000000 - Redes Sociales: @pethomeservice - Intagram - Facebook</p>
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

export default ModalContacto