import { Song } from '../store/songs/types'
import SongItem from './SongItem'

export interface SongsListProps {
  songs: Song[]
  className: string
}

const SongsList = ({ songs, className }: SongsListProps) => {
  return (
    <div className={className}>
      <div>
        {songs.map((song, index) => (
          <SongItem key={index} song={song} index={index + 1} />
        ))}
      </div>
    </div>
  )
}

export default SongsList
