import React from 'react'
import { useContacts } from '../context/ContactsProvider'

export default function DeleteContact({contact}) {

    // ESTO LO HICE SOLITA

    const {deleteContact} = useContacts()

    function handleClick (e) {
        e.preventDefault()
        deleteContact(e.target.id)
    }

    return (
                <button id={contact.id} onClick={handleClick}>
                            Borrar
                </button>
    )
}
