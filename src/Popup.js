

//------------------ MODAL POPUP BOOTSTRAP MDB 👇---------

import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

export default function App() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBBtn onClick={toggleShow}>LAUNCH DEMO MODAL</MDBBtn>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>...</MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}


//------------------ MODAL POPUP BOOTSTRAP 👇---------

// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// function Example() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <div className='App'>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default Example;


//------------------ MODAL POPUP 👇---------

// import React, { useState } from "react";
// import Modal from "react-modal";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     backgroundColor: "white",
//     width: 400,
//   },
// };

// function Popup() {
//   const [modalOpen, setModalOpen] = useState(false);

//   return (
//     <div className="App">
//       <button onClick={setModalOpen}>Open Modal</button>
//       <Modal
//         isOpen={modalOpen}
//         onRequestClose={() => setModalOpen(false)}
//         style={customStyles}
//       >
//         <div>Login/Signup</div>

//         <button onClick={() => setModalOpen(false)}>Close Modal</button>
//       </Modal>
//     </div>
//   );
// }

// export default Popup;
