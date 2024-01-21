import React from "react";
import ReactPlayer from "react-player";
import { Modal } from "react-bootstrap";

const PreviewModal = ({ showModal, setShowModal, preview }) => {
  return (
    <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
      <Modal.Header closeButton>
        <Modal.Title>Course Preview</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="wrapper">
          <ReactPlayer
            url={preview}
            playing={showModal}
            controls
            width="100%"
            height="100%"
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PreviewModal;
