import './App.css';
import Button from './Button.js'
import UserList from './UserList.js'

function App() {
  const handleClick = () => {
    alert("Tu as cliqué !")
  }

  const userData = [
    { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
    { id: 2, name: "Bob", email: "bob@example.com", role: "User" },
  ]

  return (
    <>
      <h1>Start to learn React</h1>
      <Button label="Click me !" onClick={handleClick}></Button>

      <UserList users={userData}></UserList>
    </>
  );
}

export default App;
