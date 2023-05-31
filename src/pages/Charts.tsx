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
      <span>
        <p className="text-center font-bold text-2xl">Charts</p>
      </span>
      <div className="flex flex-row justify-center">
        <SongsList className="w-9/12" songs={songs} />
      </div>
    </div>
  )
}

export default Charts
