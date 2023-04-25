import { ChangeEvent, useState } from 'react'

const CreateSong = () => {
  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [imgFile, setImgFileName] = useState<File>()

  console.log(title)

  const inputClasses: string = 'border rounded border-gray-300 min-h-[25px]'
  const labelClasses: string = 'mt-2 font-medium text-base'

  return (
    <>
      <div className="flex flex-col mx-12 items-center">
        <h1 className="pt-2 text-center font-bold text-3xl">Add new song</h1>
        <div className="flex flex-col max-w-[500px] w-1/2">
          <label className={labelClasses} htmlFor="song__tilte">
            Enter the title of the song
          </label>
          <input
            className={inputClasses}
            id="song__title"
            placeholder="Enter..."
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className={labelClasses} htmlFor="song__author">
            Enter the author of the song
          </label>
          <input
            className={inputClasses}
            id="song__author"
            placeholder="Enter..."
          />
          <label className={labelClasses} htmlFor="song__text">
            Enter the lyrics of the song
          </label>
          <textarea
            className={inputClasses}
            id="song__text"
            placeholder="Enter..."
          ></textarea>
        </div>
        <div className="mt-3">
          <input
            type="file"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setImgFileName(e.target.files[0])}
          />
          {imgFile ? <img src={URL.createObjectURL(imgFile)} alt={imgFile?.name} /> : <></>}
        </div>
      </div>
    </>
  )
}

export default CreateSong
