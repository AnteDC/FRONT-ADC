import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";

const ModalOfertas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p className="m-0" onClick={handleShow}>
        Ofertas
      </p>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title><b>Ofertas</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam est repellat laborum explicabo rerum quasi ut, quas culpa quis rem nemo repudiandae neque suscipit dignissimos cupiditate voluptatibus iure doloribus sequi!</p>
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

export default ModalOfertas