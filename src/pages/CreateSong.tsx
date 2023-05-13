import { ChangeEvent, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { useDispatch } from 'react-redux'
import Button from '../components/UI/Button'
import { createSongRequest } from '../store/songs/actions'
import Input from '../components/UI/Input'
import TextArea from '../components/UI/TextArea'
import { redirect, useNavigate } from 'react-router-dom'

const CreateSong = () => {
  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [imgFile, setImgFile] = useState<File>()
  const [audioFile, setAudioFile] = useState<File>()
  const [status, setStatus] = useState<string>()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const sendData = () => {
    const formData = new FormData()
    formData.append('name', title)
    formData.append('author', author)
    formData.append('text', text)
    if (imgFile) formData.append('image', imgFile)
    if (audioFile) formData.append('audio', audioFile)
    const d = dispatch(createSongRequest(formData))
    return navigate('/')
  }

  const inputClasses: string = 'border rounded-sm border-gray-300 min-h-[25px]'
  const labelClasses: string = 'mt-2 font-medium text-base'

  return (
    <>
      <div className="flex flex-col mx-12 items-center">
        <h1 className="pt-2 text-center font-bold text-3xl">Add new song</h1>
        <div className="flex flex-col max-w-[500px] w-1/2">
          <span className={labelClasses}>Title</span>
          <Input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <span className={labelClasses}>Author</span>
          <Input
            type="text"
            placeholder="Author"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <span className={labelClasses}>Lyrics</span>
          <TextArea
            placeholder="lyrics"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        {/* files */}
        <div className="mt-3 flex flex-row">
          <div className="flex flex-col">
            <label htmlFor="image" className={labelClasses}>
              Select a song cover
            </label>
            <input
              id="image"
              type="file"
              onChange={(e) => setImgFile(e.target.files[0])}
            />
            <label htmlFor="audio" className={labelClasses}>
              Select a track
            </label>
            <input
              id="audio"
              type="file"
              onChange={(e: ChangeEvent) => setAudioFile(e.target.files[0])}
            />
            {audioFile ? (
              <ReactAudioPlayer
                className="mt-3 mr-2"
                src={URL.createObjectURL(audioFile)}
                controls
              />
            ) : (
              <></>
            )}
          </div>
          <div className="w-[200px] h-[200px] border border-dashed rounded-sm border-black bg-gray-100">
            {imgFile ? (
              <img
                className="w-full h-full"
                src={URL.createObjectURL(imgFile)}
                alt={imgFile?.name}
              />
            ) : (
              <span className="h-full flex flex-row justify-center content-center">
                <p className="text-gray-300 self-center">Cover preview</p>
              </span>
            )}
          </div>
        </div>
        <Button text="Send" className="mt-4" onClick={() => sendData()} />
      </div>
    </>
  )
}

export default CreateSong
