import { useNavigate } from 'react-router-dom'
import { Song } from '../store/songs/types'
import cx from 'classnames'
import ROUTES from '../constants'

export interface SongItemProps {
  song: Song
  index: number
}

const SongItem = ({ song, index }: SongItemProps) => {
  const image = import.meta.env.VITE_API_URL + '/' + song.img

  const navigate = useNavigate()

  return (
    <div
      className={cx('h-24', 'grid', 'grid-cols-5', 'place-items-center', 'border-b', 'border-gray-100', 'hover:bg-gray-100')}
      onClick={() => navigate(ROUTES.SONG + '/' + song.id)}
    >
      <div>{index}</div>
      <div>
        <img className="w-20 h-20" src={image} alt={song.name} />
      </div>
      <div className='text-lg'>{song.name}</div>
      <div>{song.author}</div>
      <div>{song.views}</div>
    </div>
  )
}

export default SongItem
