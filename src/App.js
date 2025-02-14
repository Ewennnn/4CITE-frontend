import './App.css';
import BankUser from './components/BankUser/BankUser.js';
import Button from './components/button/Button.js'
import UserForm from './components/userForm/userForm.js';
import UserList from './components/userList/UserList.js'

function App() {
  const handleClick = () => {
    alert("Tu as cliqué !")
  }

  const handleSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  const userData = [
    { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
    { id: 2, name: "Bob", email: "bob@example.com", role: "User" },
  ]

  return (
    <>
      <h1>Start to learn React</h1>
      <Button label="Click me !" onClick={handleClick} className="click-me-button"></Button>

      <UserList users={userData}></UserList>

      <UserForm onSubmit={handleSubmit}/>

      <BankUser username="Ewen"/>
    </>
  );
}

export default App;
