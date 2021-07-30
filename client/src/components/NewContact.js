import React, {useRef} from 'react'
import { useContacts } from '../context/ContactsProvider'
import chickenIcon from "../assets/chickenIcon.svg"
import catIcon from "../assets/catIcon.svg"
import bearIcon from "../assets/bearIcon.svg"

export default function NewContact({closeModal, modalOpen}) {

    const avatarPosibilities = [chickenIcon, catIcon, bearIcon]

    const idRef = useRef()
    const nameRef = useRef()
    const {createContact} = useContacts()

    function handleSubmit (e) {
        e.preventDefault()
        createContact(idRef.current.value, nameRef.current.value, avatarPosibilities[Math.floor(Math.random()*avatarPosibilities.length)])
        closeModal()
    }
    return (
        <section style={modalOpen ? {display: "flex"} : {display: "none"}} className='modal-container'>
            <article className='modal'>
            <header>
                <h1>Crear Contacto</h1>
                <button onClick={closeModal} className='close'>Cerrar</button>
            </header>
            <form onSubmit={handleSubmit}>
                <section className="formGroup">
                    <label htmlFor="id">Ingresar ID:</label>
                    <input type="text" name="id" className="input" ref={idRef} required/>
                </section>
                <section className="formGroup">
                    <label htmlFor="id">Nombre:</label>
                    <input type="text" name="name" className="input" ref={nameRef} required/>
                </section>
                <button type='submit'>Crear</button>
            </form>
            </article>
        </section>
    )
}
