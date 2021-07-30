import React from 'react'

export default function GroupAvatar({img1, img2}) {
    return (
        <article className='multiple-image'>
                        {img1 ? 
                        <img src={img1} className='first-image' alt="Avatar 1"></img> : <div className="unknown-group-first">?</div>}
                        {img2 ?
                        <img src={img2} alt="Avatar 2" className='second-image'></img> : <div className="unknown-group-second">?</div>}
        </article>
    )
}
