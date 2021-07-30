import React, {useState} from 'react'
import { useContacts } from '../context/ContactsProvider'
import { useConversations } from '../context/ConversationsProvider'

export default function NewConversation({closeModal, modalOpen}) {

const [selectedContactIds, setSelectedContactIds] = useState([])
const {contacts} = useContacts()
const {createConversation} = useConversations()

function handleCheckboxChange (contactId) {
    setSelectedContactIds(prevSelectedContactIds => {
        if (prevSelectedContactIds.includes(contactId)) {
            return prevSelectedContactIds.filter(prevId => {
                return contactId !== prevId
            })
        } else {
            return [...prevSelectedContactIds, contactId]
        }
    })
}

function handleSubmit (e) {
    e.preventDefault()
    createConversation(selectedContactIds)
    closeModal()
}
    return (<>
        <section style={modalOpen ? {display: "flex"} : {display: "none"}} className='modal-container'>
            <article className='modal'>
                <header>
                    <h1>Crear Conversación</h1>
                    <button onClick={closeModal} className='close'>Cerrar</button>
                </header>
                <form onSubmit={handleSubmit}>
                    {contacts.map(contact => (
                        <section className="formGroup" id={contact.id} key={contact.id}>
                            <label htmlFor="id">{contact.name}</label>
                            <input
                                type="checkbox"
                                value={selectedContactIds.includes(contact.id)}
                                name="id"
                                className="input"
                                onChange={() => handleCheckboxChange(contact.id)}/>
                        </section>
                    ))}
                    <button type='submit'>Crear</button>
                </form>
            </article>
        </section>
        </>
    )
}
