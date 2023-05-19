// Hooks
import { useSelector } from "react-redux"
// Components
// Components
import FormLogin from "./components/FormLogin"
import StudentsView from "./templates/StudentsView"

function App() {
  const {token} = useSelector(state=> state)
  return (
    <main>

      {
        token ? <StudentsView/> :<FormLogin/>
      }
    </main>
  )
}

export default App
