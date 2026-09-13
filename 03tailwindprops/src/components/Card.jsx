import React from 'react'

// export const Card = (props) => {   // this an one of the way and there is a this a second way i had been mention already in below 
//   console.log(props.username)
export const Card = ({username="abx" , btnTxt="visit_me ->"}) => {
  console.log(username)
    return (
        <div className="relative h-[400px] w-[300px] rounded-md">
            <img
                src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&w=800&q=60"
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-md object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">
                    {username}
                </h1>

                <p className="mt-2 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, debitis?
                </p>

                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    {btnTxt} →
                </button>
            </div>
        </div>
    )
}

export default Card