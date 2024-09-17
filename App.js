import React, { useState } from "react";
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    errors: {
      username: "",
      password: ""
    },
    loading: false
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};

    // Check if username has not been provided
    if (!formData.username) {
      errors.username = "Username is required";
    }

    // Check if password has not been provided
    if (!formData.password) {
      errors.password = "Password is required";
    }

    setFormData((prevState) => ({ ...prevState, errors }));
    // Return true if there are no errors (both username and passwrod provided)
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Form is valid, submit data
      setFormData({
        ...formData,
        loading: true,
      });

      // Simulate form submission delay
      setTimeout(() => {
        console.log(formData);
        setFormData({
          ...formData,
          loading: false,
        });
      }, 2000);
    } else {
      // Form is invalid, do nothing
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {formData.errors.username && (
          <p style={{ color: "red" }}>{formData.errors.username}</p>
        )}
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {formData.errors.password && (
          <p style={{ color: "red" }}>{formData.errors.password}</p>
        )}
      </label>
      <input type="submit" value="Submit" disabled={formData.loading} />
      {formData.loading && (
        <div style={{ marginTop: 5, fontWeight: "bold" }}>Loading...</div>
      )}
    </form>
  );
}

export default App;
