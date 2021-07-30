import Login from "./Login";
import Dashboard from "./Dashboard";
import useLocalStorage from "../hooks/useLocalStorage";
import { ContactsProvider } from "../context/ContactsProvider";
import { ConversationsProvider } from '../context/ConversationsProvider'
import { SocketProvider } from "../context/SocketProvider";

function App() {

  // 4. En este caso avisa al LS que hay una actualización en la ID
  const [id, setId] = useLocalStorage('id')
  const [avatar, setAvatar] = useLocalStorage('avatar')

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id} avatar={avatar}>
          <Dashboard id={id} avatar={avatar}/>
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )

  return (
    // 5. Si ya cuento con una id, me manda al dashboard, si no, me manda a que me loggee
    // Prox en Login.js
    id ? dashboard : <Login onIdSubmit={setId} onAvatarSubmit={setAvatar} avatar={avatar}/>
  );
}

export default App;
