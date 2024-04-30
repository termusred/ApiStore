import Form from "./components/Form.jsx"
import { useState } from "react";

function App() {
  const [user , setUser]  = useState([
  {
    username:"hacker",
    password:"123"
  },
  {
    username:"bruh",
    password:"321"
  }
])
  user.map((el) => {
    
  })
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
