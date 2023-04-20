import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Header from './components/Header'
import { useSelector } from 'react-redux'
import { SongsState } from './store/song/songs.types'
import { State } from './store/store'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchSongsRequest } from './store/song/songs.actions'

function App() {

  const songs = useSelector((state: State) => state.songs.songs)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongsRequest())
  }, [])

  console.log(songs);

  return (
    <BrowserRouter>
      <Header />
      <button onClick={() => dispatch(fetchSongsRequest())}>BUTTON</button>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
