import React from 'react'
import { useContacts } from '../context/ContactsProvider'
import DeleteContact from './DeleteContact'

export default function Contacts() {

    const {contacts} = useContacts()

    return (
        <section className="pane">
            {
                contacts.map(contact => (
                    <section className='conversation' key={contact.id}>
                        <article className='image'>
                            <img src={contact.avatar} alt="Avatar"></img>
                        </article>
                        <article className='text'>
                            <h1>{contact.name}</h1>
                            <p>{contact.id}</p>
                        </article>
                        <DeleteContact contact={contact}/>
                    </section>
            ))
            }
        </section>
    )
}
