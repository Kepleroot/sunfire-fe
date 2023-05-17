import { Song } from '../store/songs/types'

export interface SongItemProps {
  song: Song
}

const SongItem = ({song}: SongItemProps) => {
  return (
    <div>{song.name}</div>
  )
}

export default SongItem