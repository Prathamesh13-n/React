import React from 'react'
import user_Context from './User'


const UsercontextProvider = ({children}) => {

    const [user , setUser] = React.useState(null)
  return (
    <user_Context.Provider value={{user , setUser}}>
    
    {children}
    
    </user_Context.Provider>
  )
}

export default UsercontextProvider