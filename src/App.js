import React, {useState} from "react";

function App() {

  const [color, setColor] = useState('#fff');

  const generateColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16999999).toString(16)}`;
    setColor(randomColor);
  }


  return(
   <div style={{...styles.container, backgroundColor: color}}>
  <h1>Color Generator</h1>
  <p>This color: {color}</p>
  <button style={styles.button} onClick={generateColor}>Generator color</button>
  <div></div>
   </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    transition: 'background-color 0.5s ease',
    height: '100vh'
  },
  heading: {
    color: '#007bff'
  },
  button: {
    padding: '10px 20px',
    margin: '5px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    background: '#007bff',
    color: '#fff',
  }
}

export default App;
