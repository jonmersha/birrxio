import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you can send data to your backend or a service like Formspree
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
          rows={5}
          required
        />
        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "4rem auto",
    padding: "2rem",
    backgroundColor: "#fff",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    borderRadius: "8px",
  },
  heading: {
    textAlign: "center" as const,
    marginBottom: "2rem",
    fontSize: "1.8rem",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1rem",
  },
  input: {
    padding: "0.8rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "1rem",
  },
  textarea: {
    padding: "0.8rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "1rem",
    resize: "vertical" as const,
  },
  button: {
    padding: "0.8rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    fontWeight: "bold" as const,
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default Contact;
