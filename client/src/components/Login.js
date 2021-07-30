import React, { useRef } from 'react'
import {v4 as uuidV4} from 'uuid'
import chickenIcon from "../assets/chickenIcon.svg"
import catIcon from "../assets/catIcon.svg"
import bearIcon from "../assets/bearIcon.svg"

export default function Login({onIdSubmit, onAvatarSubmit, avatar}) {

    const idRef = useRef()
    const avatarRef = useRef()

    const avatarPosibilities = [chickenIcon, catIcon, bearIcon]

    const handleSubmit = (e) => {
        e.preventDefault()
        onIdSubmit(idRef.current.value)
        onAvatarSubmit(avatarRef.current.value)
    }

    function handleAvatarChange (e) {
        onAvatarSubmit(e.target.value)
    }
    function createNewId (e) {
        onIdSubmit(uuidV4()) // 6. Va a settear (usando el setID, que acá pasamos como onIdSubmit, 
                            // la ID a la nueva ID generada por uuidV4()
                            // Prox en useLocalStorage.js
        if (avatar !== undefined) {
            onAvatarSubmit(avatar)
        } else {
            onAvatarSubmit(avatarPosibilities[Math.floor(Math.random()*avatarPosibilities.length)])
        }
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <section className="formGroup">
                    <label htmlFor="id">Ingresar ID:</label>
                    <input type="text" name="id" className="input" ref={idRef} required/>
                </section>
                <div className="buttons">
                    <button type="submit">Log In</button>
                    <button type="submit" className="secondary"  onClick={createNewId}>Crear ID</button>
                </div>
                <fieldset className='avatar-choices' value={avatar} onChange={(e) => handleAvatarChange(e)} ref={avatarRef}>
                <label htmlFor="avatar">Seleccionar avatar:</label>
                <section className='options'>
                    <article className="option">
                        <label htmlFor="cat-icon"><img src={catIcon} alt="Cat Avatar"></img></label>
                        <input name='avatar' type='radio' value={catIcon}/>
                    </article>
                    <article className="option">
                        <label htmlFor="chicken-icon"><img src={chickenIcon} alt="Chicken Avatar"></img></label>
                        <input name='avatar' type='radio' value={chickenIcon}/>
                    </article>
                    <article className="option">
                        <label htmlFor="bear-icon"><img src={bearIcon} alt="Bear Avatar"></img></label>
                        <input name='avatar' type='radio' value={bearIcon}/>
                    </article>
                </section>
                </fieldset>
            </form>
        </div>
    )
}
