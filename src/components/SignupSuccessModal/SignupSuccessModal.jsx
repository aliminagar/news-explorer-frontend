// SignupSuccessModal.jsx
import Modal from "../Modal/Modal";

function SignupSuccessModal({ isOpen, onClose, onSignInClick }) {
  return (
    <Modal isOpen={isOpen} name="signup-success" onClose={onClose}>
      <header className="modal__header">
        <button
          className="success__close"
          onClick={onClose}
          aria-label="Close modal"
        />
        <h2 className="modal__success-message">
          Registration successfully completed!
        </h2>
      </header>
      <footer className="modal__footer">
        <button className="modal__switch-button" onClick={onSignInClick}>
          Sign in
        </button>
      </footer>
    </Modal>
  );
}

export default SignupSuccessModal;
