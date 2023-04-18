import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Header from './components/Header'
import { useSelector } from 'react-redux'

function App() {

  const songs = useSelector((state: any) => state.songs.currentSongs)
  console.log(songs)
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
