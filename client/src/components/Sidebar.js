import {useState} from 'react'
import Contacts from './Contacts'
import Conversations from './Conversations'
import NewContact from './NewContact'
import NewConversation from './NewConversation'

export default function Sidebar({id, avatar}) {

    const CONVERSATIONS_KEY = 'conversations'
    const CONTACTS_KEY = "contacts"
    const [activeTab, setActiveTab] = useState(CONVERSATIONS_KEY)
    const [modalOpen, setModalOpen] = useState(false)
    const conversationIsOpen = activeTab === CONVERSATIONS_KEY

    function handleTabs (e) {
        e.preventDefault()
        setActiveTab(e.target.value)
    }

    function closeModal () {
        setModalOpen(false)
    }

    return (
        <>
        <nav className="nav-container">
            <section className="links">
                <button onClick={handleTabs} value={CONVERSATIONS_KEY} className={activeTab === CONVERSATIONS_KEY ? "active" : "not-active"}>
                    Conversaciones
                </button>
                <button onClick={handleTabs} value={CONTACTS_KEY} className={activeTab === CONTACTS_KEY ? "active" : "not-active"}>
                    Contactos
                </button>
                </section>
            {activeTab === CONVERSATIONS_KEY ? 
            <Conversations id={id} avatar={avatar}/> : 
            <Contacts id={id} avatar={avatar}/>}
            <button className="new" onClick={() => setModalOpen(true)}>Nuev{conversationIsOpen ? 'a conversación' : 'o contacto'}</button>
            {conversationIsOpen ? 
            <NewConversation closeModal={closeModal} modalOpen={modalOpen}/> :
            <NewContact closeModal={closeModal} modalOpen={modalOpen}/>}
        </nav>
        </>
    )
}
