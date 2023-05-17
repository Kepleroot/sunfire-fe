import { Song } from '../store/songs/types'
import SongItem from './SongItem'

export interface SongsListProps {
  songs: Song[]
}

const SongsList = ({songs}: SongsListProps) => {
  return (
    <div>
      <div>{songs.map((song, index) => <SongItem key={index} song={song}/>)}</div>
    </div>
  )
}

export default SongsList
