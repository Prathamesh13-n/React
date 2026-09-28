import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    //     const [data, SetData] = useState([])
    //     useEffect(() => {
    //         fetch('https://api.github.com/users/Prathamesh13-n')
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 console.log(data)
    //                 SetData(data)
    //             })
    //     }, [])

    return (
        <div className='text-center bg-red-400 m-5 p-3 text-white text-3xl'>
            Github Followers: {data.followers}

            <img
                src={data.avatar_url}
                alt="Git photo"
                width={200}
            />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch(
        'https://api.github.com/users/Prathamesh13-n'
    )

    return response.json()
}