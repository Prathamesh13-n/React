import React, { useContext } from 'react'
import user_Context from '../Context/User'

const Profile = () => {

    const { user } = useContext(user_Context)
    // console.log( "user"  , user)

    if (!user) {
        return <div>Please login</div>
    }

    return <div>Welcome {user.username}</div>
}

export default Profile