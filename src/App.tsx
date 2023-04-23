import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Header from './components/Header'
import { useSelector } from 'react-redux'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { State } from './store/store'
import { Song } from './store/songs/types'
import { fetchSongsRequest } from './store/songs/actions'

function App() {
  const dispatch = useDispatch()
  const songs = useSelector((state: State) => state.songs.songs)

  console.log(songs)
  return (
    <BrowserRouter>
      <Header />
      <button onClick={() => dispatch(fetchSongsRequest())}>BUTTON</button>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
