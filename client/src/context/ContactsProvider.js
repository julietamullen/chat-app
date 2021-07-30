import React, {useContext} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const ContactsContext = React.createContext()

export function useContacts() {
    return useContext(ContactsContext)
}

export function ContactsProvider({children}) {

    // 1. Esta es la lista de contactos
    const [contacts, setContacts] = useLocalStorage('contacts', []) // Key: contacts, InitialValue: [], porque empezamos con 0 contactos
    
    // 2. Esto crea un contacto, en base a la id y el nombre
    function createContact(id, name, avatar) {
        setContacts(prevContacts => {
            // 3. Devuelve la lista de contactos + el nuevo que creamos
            return [...prevContacts, {id, name, avatar}]
        })
    }

    // ESTO LO HICE SOLA SOLITA
    function deleteContact (id) {
        setContacts(prevContacts => (
            prevContacts.filter(contact => contact.id !== id))
        )
    }

    return (
        <ContactsContext.Provider value={{contacts, createContact, deleteContact}}>
            {children}
        </ContactsContext.Provider>
    )
}
