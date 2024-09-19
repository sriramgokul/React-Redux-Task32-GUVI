
import './App.css'
import { Card } from './Components/Card'
import { store } from './Components/Store'
import { Provider } from 'react-redux'
function App() {

  return (
    <>
    <Provider store={store}>
    <Card  />
    </Provider>

       </>
  )
}

export default App
