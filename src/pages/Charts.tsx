import { useDispatch } from 'react-redux'
import SongsList from '../components/SongsList'
import { useSelector } from 'react-redux'
import { searchedSongs, selectSongs } from '../store/songs/selectors'
import { useEffect, useState } from 'react'
import { fetchSearchedSongsRequest, fetchSongsRequest } from '../store/songs/actions'
import Input from '../components/UI/Input'
import Modal from '../components/UI/Modal'

const Charts = () => {
  const [search, setSearch] = useState<string>('')
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false)

  const dispatch = useDispatch()

  const songs = useSelector(selectSongs)
  const searchSongs = useSelector(searchedSongs)
  console.log(searchSongs)

  const handleOnCloseModal = () => setShowSearchModal(false)

  useEffect(() => {
    dispatch(fetchSongsRequest())
    dispatch(fetchSearchedSongsRequest(search))
  }, [dispatch, search])

  return (
    <div className="flex flex-col">
      <span>
        <p className="text-center font-bold text-2xl">Songs</p>
      </span>
      <div className="flex flex-col w-full self-center">
        <Input
          className="w-3/12 self-center my-3"
          placeholder="Search..."
          value={search}
          onClick={() => setShowSearchModal(true)}
        />
      </div>
      <div className="w-9/12 self-center">
        <SongsList songs={songs} />
      </div>
      <Modal className='' onClose={handleOnCloseModal} visible={showSearchModal}>
        <h1 className='mt-1 self-center font-bold text-3xl'>Search</h1>
        <Input
          className="w-4/12 my-4 self-center"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Modal>
    </div>
  )
}

export default Charts
