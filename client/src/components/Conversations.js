import React from 'react'
import { useConversations } from '../context/ConversationsProvider'
import GroupAvatar from './GroupAvatar'

export default function Conversations({id}) {

    const {conversations, selectConversationIndex} = useConversations()

    return (
        <section className="pane">
            {conversations.map((conversation, index) => (
                <section className={conversation.selected ? 'conversation-active' : 'conversation' } key={index} onClick={() => selectConversationIndex(index)}>
                    {conversation.recipients.length >= 2 ? <GroupAvatar img1={conversation.recipients[0].avatar === conversation.recipients[0].name ? null : conversation.recipients[0].avatar} img2={conversation.recipients[1].avatar === conversation.recipients[1].name ? null : conversation.recipients[1].avatar}/> : conversation.recipients[0].avatar === conversation.recipients[0].name ? <div className='unknown-contact'>?</div> : <img className='image' src={conversation.recipients[0].avatar} alt="Avatar 1"></img>}
                    <article className='text'>
                        <h1>{conversation.recipients.map(r => r.name).join(', ')}</h1>
                    </article>
                </section>
            ))}
            <p>Your ID: {id}</p>
        </section>
    )
}
