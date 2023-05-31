import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectSong } from '../store/songs/selectors'
import { fetchOneSongRequest } from '../store/songs/actions'
import { Song } from '../store/songs/types'
import InfoItem from '../components/InfoItem'

const SongPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const song: Song = useSelector(selectSong)
  const image = import.meta.env.VITE_API_URL + '/' + song.img
  console.log(song)

  useEffect(() => {
    dispatch(fetchOneSongRequest(Number(id)))
  }, [dispatch])

  return (
    <div>
      <div className="flex flex-row py-4 bg-gray-100">
        <img
          className="w-[300px] h-[300px] ml-56"
          src={image}
          alt={song.name}
        />
        <div className="ml-4">
          <div className="text-2xl font-extrabold">{song.name}</div>
          <div className="">{song.author}</div>
          <div className="">{song.views}</div>
          {song.albums ? <div>{song.albums}</div> : null}
        </div>
      </div>

      <div className="mt-6  flex flex-row justify-center text-clip whitespace-pre-line">
        <span>{song.text}</span>
      </div>

      {song.infos ? (
        <div className="flex flex-col mt-4 pt-4 bg-black text-white">
          <span className="flex justify-center font-bold text-3xl">
            <p>ABOUT</p>
          </span>
          <div className='flex justify-center'>
            {song.infos.map((i, index) => (
              <InfoItem key={index} info={i} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default SongPage
