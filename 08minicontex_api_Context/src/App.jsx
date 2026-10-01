import { useState } from 'react'
import UsercontextProvider from './Context/UsercontextProvider';
import Login from './compontents/Login';
import Profile from './compontents/Profile';


function App() {
  const [count, setCount] = useState(0)

  return (
    <UsercontextProvider>
      <h1>
        viperX is prathamesh Nehete 
      </h1>

      <Login />
      <Profile />
    </UsercontextProvider>
  )
}

export default App;
