import React from 'react'
import Navbar from '../Navbar'

const Homee = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

            <h2>Welcome to home</h2>
            <p>this is the home page of the website</p>
             <section
        style={{
          marginTop: "50px",
          backgroundColor: "#f4f4f4",
          borderRadius: "12px",
          padding: "40px",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src=".src\20241126-elon-musk-sj-144p-c75407.webp" 
          alt="Profile"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "20%",
            objectFit: "cover",
            border: "4px solid #0b132b",
          }}
        />
        <h2 style={{ marginTop: "20px" }}>Swathi Nath N</h2>
        <p style={{ fontSize: "15px", color: "#555", margin: "10px 0" }}>
          Frontend Developer | React Enthusiast | Lifelong Learner
        </p>
        <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6" }}>
          Passionate about crafting beautiful, responsive, and user-friendly web
          experiences using modern tools like React, JavaScript, and CSS.
        </p>

        <button
          style={{
            marginTop: "20px",
            backgroundColor: "#0b132b",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          View Projects
        </button>
      </section>

        </div>
    )
}

export default Homee
