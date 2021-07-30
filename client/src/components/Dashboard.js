import React from 'react'
import { useConversations } from '../context/ConversationsProvider'
import OpenConversation from './OpenConversation'
import Sidebar from './Sidebar'

export default function Dashboard({id, avatar}) {

    const {selectedConversation} = useConversations()
    
    return (
        <div style={{display: "flex"}}>
            <Sidebar id={id} avatar={avatar}/>
            { selectedConversation && <OpenConversation/>}
        </div>
    )
}
