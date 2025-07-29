import Modal from "../Modal/Modal";

function ModalWithForm({
  isOpen,
  name,
  onClose,
  title,
  children,
  buttonText,
  onSubmit,
  isDisabled,
  altText = "or Sign up",
  onAltClick,
  keyboardImgSrc = null,
}) {
  return (
    <Modal isOpen={isOpen} name={name} onClose={onClose}>
      <header className="modal__header">
        <button
          className="modal__close"
          onClick={onClose}
          aria-label="Close modal"
        />
        <h2 className="modal__title">{title}</h2>
      </header>
      <form onSubmit={onSubmit} className="modal__form">
        {children}
        <footer className="modal__submit-wrapper">
          <button type="submit" className="modal__submit" disabled={isDisabled}>
            {buttonText}
          </button>
        </footer>
      </form>

      <footer className="modal__footer">
        {altText && (
          <button className="modal__alt-button" onClick={onAltClick}>
            {altText}
          </button>
        )}
      </footer>

      {keyboardImgSrc && (
        <img
          src={keyboardImgSrc}
          alt="Mobile keyboard"
          className="modal__keyboard-img"
        />
      )}
    </Modal>
  );
}

export default ModalWithForm;
