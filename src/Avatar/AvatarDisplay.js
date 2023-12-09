import React from 'react'
import './Avatar.css'
import AvatarList from './AvatarList'

const AvatarDisplay = (props) => {
    const { id, name, designation, gender } = props

    return (

        <div class='card cardStyle' style={{ display: 'inline-block', marginLeft : 20 }}>
            <div class='avatarStyle'>
                     <img src={`https://joesch.moe/api/v1/${name}`} className="card-img-top" alt={name} />
            </div>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{designation}</p>
            </div>
        </div>

    )
}

export default AvatarDisplay