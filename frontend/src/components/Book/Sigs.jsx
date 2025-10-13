import React from "react";
import HTMLFlipBook from "react-pageflip";
import backgroundImg from '../../assets/Vector.png'

export default function Sigs() {
const containerStyle = {
  width: "80%",               // wider container, adjust as needed
  maxWidth: "1200px",         // optional, prevents it from getting too big on large screens
  height: "90vh",             // slightly smaller than full viewport
  backgroundImage: `url(${backgroundImg})`,
  backgroundSize: "contain",  // ensures full book image fits
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",           // center horizontally
};
  return (
    <div style={containerStyle}>
      <h1></h1>

      <HTMLFlipBook
        width={400}
        height={600}
        showCover={false}
        className="flipbook"
      >
        <div className="page" style={pageStyle}>
          <h2>Cover Page</h2>
          <p>Welcome to the Sigs Flipbook!</p>
        </div>

        <div className="page" style={pageStyle}>
          <h2>Page 1</h2>
          <p>It was a rat's nest. Not a literal one, but that is what her hair seemed to 
            resemble every morning when she got up. It was going to take at least an hour
             to get it under control and she was sick and tired of it. She peered into the
              mirror and wondered if it was worth it. It wasn't. She opened the drawer and picked up the hair clippers.</p>
        </div>

        <div className="page" style={pageStyle}>
          <h2>Page 2</h2>
          <p>It was a rat's nest. Not a literal one, but that is what her hair seemed to 
            resemble every morning when she got up. It was going to take at least an hour
             to get it under control and she was sick and tired of it. She peered into the
              mirror and wondered if it was worth it. It wasn't. She opened the drawer and picked up the hair clippers..</p>
        </div>

        <div className="page" style={pageStyle}>
          <h2>Page 3</h2>
          <p>It was a rat's nest. Not a literal one, but that is what her hair seemed to 
            resemble every morning when she got up. It was going to take at least an hour
             to get it under control and she was sick and tired of it. She peered into the
              mirror and wondered if it was worth it. It wasn't. She opened the drawer and picked up the hair clippers.</p>
        </div>
        <div className="page" style={pageStyle}>
          <h2>Page 3</h2>
          <p>It was a rat's nest. Not a literal one, but that is what her hair seemed to 
            resemble every morning when she got up. It was going to take at least an hour
             to get it under control and she was sick and tired of it. She peered into the
              mirror and wondered if it was worth it. It wasn't. She opened the drawer and picked up the hair clippers.</p>
        </div>
        
        <div className="page" style={pageStyle}>
          <h2 class="">Page 3</h2>
          <p>It was a rat's nest. Not a literal one, but that is what her hair seemed to 
            resemble every morning when she got up. It was going to take at least an hour
             to get it under control and she was sick and tired of it. She peered into the
              mirror and wondered if it was worth it. It wasn't. She opened the drawer and picked up the hair clippers.</p>
        </div>
        
        

        <div className="page" style={pageStyle}>
          <h2>Back Cover</h2>
          <p>End of the book — made with ❤️ using react-pageflip.</p>
        </div>
      </HTMLFlipBook>
    </div>
  );
}
const pageStyle = {
  width: "500px",
  height: "600px",
  backgroundColor: "#fdfaf5", // solid off-white
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  
};