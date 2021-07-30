import React, { useState, useCallback } from 'react'
import { useConversations } from "../context/ConversationsProvider"

export default function OpenConversation() {

    const [text, setText] = useState('')
    const setRef = useCallback(node => {
        if (node) {
            node.scrollIntoView({smooth: true})
        }
    }, [])
    const { sendMessage, selectedConversation } = useConversations()

    function handleSubmit (e) {
        e.preventDefault()
        sendMessage(selectedConversation.recipients.map(r => r.id), // A quienes les va a llegar el mensaje
        text)
        setText('')
    }

    return (
        <main className="open-conversation">
            <section className="messages">
                {selectedConversation.messages && selectedConversation.messages.map((message, index) => {
                    const lastMessage = selectedConversation.messages.length - 1 === index
                    return (
                        <section key={index} className={message.fromMe ? 'from-me' : 'from-contact'} ref={lastMessage ? setRef : null}>
                            <article className='bubble'>{message.text}</article>
                            <article className='sender'>{message.fromMe ? 'Yo' : message.sender.name}</article>
                        </section>
                    )
                })}
            </section>
            <form id="message-form" onSubmit={handleSubmit}>
                <textarea
                    name="message"
                    id="message"
                    rows="3"
                    required
                    value={text}
                    onChange={e => setText(e.target.value)}></textarea>
                    <button type="submit" id="send-message">Enviar</button>
            </form>
        </main>
    )
}
