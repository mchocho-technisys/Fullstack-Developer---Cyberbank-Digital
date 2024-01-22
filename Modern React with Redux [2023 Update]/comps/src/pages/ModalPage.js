import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button
        onClick={() => {
          setShowModal(true);
        }}
        primary
      >
        Open Modal
      </Button>
      {showModal && (
        <Modal
          onClose={handleClose}
          actionBar={
            <div>
              <Button onClick={handleClose} primary>
                I accept
              </Button>
            </div>
          }
        >
          <p>I'm a Modal</p>
        </Modal>
      )}
    </div>
  );
};

export default ModalPage;
