// Hooks
import { useSelector } from "react-redux"
// Components
import FormLogin from "./components/FormLogin"

function App() {
  const {token} = useSelector(state=> state)
  return (
    <main>
      {
        token ? <p>{token}</p> :<FormLogin/>
      }
    </main>
  )
}

export default App
