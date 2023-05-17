import { ChangeEvent, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { useDispatch } from 'react-redux'
import Button from '../components/UI/Button'
import { createSongRequest } from '../store/songs/actions'
import Input from '../components/UI/Input'
import TextArea from '../components/UI/TextArea'
import { useNavigate } from 'react-router-dom'
import { CreateInfo } from '../types'

const CreateSong = () => {
  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [imgFile, setImgFile] = useState<File>()
  const [audioFile, setAudioFile] = useState<File>()
  const [info, setInfo] = useState<CreateInfo[]>([])

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }])
  }

  const editInfo = (key: string, value: string, number: number) => {
    setInfo(info.map((i) => (i.number == number ? { ...i, [key]: value } : i)))
  }

  const removeInfo = (number: number) => {
    setInfo(info.filter((i) => i.number != number))
  }

  const sendData = () => {
    const formData = new FormData()
    formData.append('name', title)
    formData.append('author', author)
    formData.append('text', text)
    if (imgFile) formData.append('image', imgFile)
    if (audioFile) formData.append('audio', audioFile)
    if (info.length > 0) {
      const newInfos = info;
      newInfos.forEach((i, index) => {
        for(let key in i){
          formData.append(`infos[${index}][${key}]`, i[key])
        }
      })
    }
    dispatch(createSongRequest(formData))
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
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <span className={labelClasses}>Author</span>
          <Input
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <span className={labelClasses}>Lyrics</span>
          <TextArea
            placeholder="Lyrics"
            value={text}
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
        <div className="flex flex-col justify-center">
          <Button
            className="w-max mt-4 self-center"
            text="Add new info"
            onClick={() => addInfo()}
          ></Button>
          {info.map((i) => (
            <div className="flex flex-row justify-around mt-2" key={i.number}>
              <Input
                placeholder="Title"
                value={i.title}
                onChange={(e) => editInfo('title', e.target.value, i.number)}
              />
              <Input
                className="ml-3"
                placeholder="Description"
                value={i.description}
                onChange={(e) =>
                  editInfo('description', e.target.value, i.number)
                }
              />
              <Button
                className="ml-3 bg-red-400 hover:bg-red-500"
                text="Delete"
                onClick={() => removeInfo(i.number)}
              />
            </div>
          ))}
        </div>
        <Button text="Send" className="mt-4" onClick={() => sendData()} />
      </div>
    </>
  )
}

export default CreateSong
