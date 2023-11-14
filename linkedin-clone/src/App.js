import './App.css'
import Aside from './components/Aside'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import TestComp from './components/TestComp'
import ModalProfiles from './components/modal/ModarlProfiles'
import { useSelector } from 'react-redux'
import Home from './components/Home'
function App() {
  const modal = useSelector(
    (state) => state.profile.modal && state.profile.modal[0]
  )
  return (
    <>
      <div className={modal ? 'active-modal' : ''}>
        {/* <Aside />
				<ModalProfiles />
				<Footer />
				<TestComp /> */}
        <Home />
      </div>
    </>
  )
}

export default App
