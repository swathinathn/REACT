import React from 'react'
import Navbar from '../Navbar'

const Aboutt = () => {
  return (
        <div style={{ display: 'flex', flexDirection: 'column', 
        justifyContent: 'center', alignItems: 'center' }}>
            <h2>About Us</h2>
            <p>we are the company that provides services</p>

                  <div style={{ marginTop: "30px" }}>
        <iframe
          width="900px"
          height="500px"
          src="https://www.youtube.com/embed/_4jqA-mz_Ig?si=7jLvjUZpdbqgY0AF"  // example link
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        ></iframe>
      </div>

   
      
    </div>
  )
}

export default Aboutt
