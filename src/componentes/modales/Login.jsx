import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";

const ModalLogin = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Ingresar
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title><b>Ingresar</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="Usuario" />
            <label for="floatingInput">Usuario</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña" />
            <label for="floatingPassword">Contraseña</label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info">
            Ingresar
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalLogin