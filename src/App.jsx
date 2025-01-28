import Chat from './components/chat/chat'
import Details from './components/details/details'
import List from './components/list/list'
import Login from './components/Login/login'
import Notification from './components/notification/notification'

const App = () => {

const user = true

  return (
    <div className='container'>
      {
        user ? (
          <>
          <List/>
          <Chat/>
          <Details/>
          </>
        ) : (
          <Login/>
        )
      }
      <Notification/>
    </div>
  )
}

export default App