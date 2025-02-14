import './App.css';
import Button from './Button.js'

function App() {
  const handleClick = () => {
    alert("Tu as cliqué !")
  }

  return (
    <>
      <h1>Start to learn React</h1>
      <Button label="Click me !" onClick={handleClick}></Button>
    </>
  );
}

export default App;
