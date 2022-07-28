import React from 'react'
import Image from "next/image"
export default function UserInfo({ user }) {
  return (
    <div className="user-info">
        <div className="user-info__img">
          <Image src={user.img} alt="user" width={50} height={50}/>
            
        </div>
        <div className="user-info__name">
            <span>{user.name}</span>
        </div>
    </div> 
  )
}
