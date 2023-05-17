import { useDispatch } from 'react-redux'
import SongsList from '../components/SongsList'
import { useSelector } from 'react-redux'
import { selectSongs } from '../store/songs/selectors'
import { useEffect } from 'react'
import { fetchSongsRequest } from '../store/songs/actions'

const Charts = () => {
  const dispatch = useDispatch()

  const songs = useSelector(selectSongs)

  useEffect(() => {
    dispatch(fetchSongsRequest())
  }, [dispatch])
  
  return (
    <div>
      <SongsList songs={songs} />
    </div>
  )
}

export default Charts
