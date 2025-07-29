import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

const RegisterModal = ({ isOpen, onRegister, onClose, onSwitchToLogin }) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      resetForm();
      setError("");
    }
  }, [isOpen, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!isValid) {
      setError("Please fix the validation errors.");
      setIsLoading(false);
      return;
    }

    onRegister(values)
      .catch(() => setError("This email is not available."))
      .finally(() => setIsLoading(false));
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Sign up"
      buttonText={isLoading ? "Signing up..." : "Sign up"}
      onClose={onClose}
      onSubmit={handleSubmit}
      isDisabled={!isValid || isLoading}
      altText="or Sign in"
      onAltClick={onSwitchToLogin}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
          className="modal__input"
          placeholder="Enter email"
          required
          disabled={isLoading}
        />
        {errors.email && <span className="modal__error">{errors.email}</span>}
      </label>

      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          value={values.password || ""}
          onChange={handleChange}
          className="modal__input"
          placeholder="Enter password"
          required
          disabled={isLoading}
        />
        {errors.password && (
          <span className="modal__error">{errors.password}</span>
        )}
      </label>

      <label className="modal__label">
        Username
        <input
          type="text"
          name="name"
          value={values.name || ""}
          onChange={handleChange}
          className="modal__input"
          placeholder="Enter username"
          required
          disabled={isLoading}
        />
        {errors.name && <span className="modal__error">{errors.name}</span>}
      </label>

      {error && <p className="modal__error modal__error--main">{error}</p>}
    </ModalWithForm>
  );
};

export default RegisterModal;
