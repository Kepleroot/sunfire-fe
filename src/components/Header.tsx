import { Link } from 'react-router-dom'

const Header = () => {
  const linkClasses: string =
    'my-2 px-5 border-r-2 last:border-0 font-semibold text-white hover:text-gray-100'

  return (
    <div className="flex flex-col">
      <div className="bg-yellow-100">Logo</div>
      <div className="flex flex-row justify-center bg-black">
        <Link to="" className={linkClasses}>
          CHARTS
        </Link>
        <Link to="create-song" className={linkClasses}>
          FAVORITE SONGS
        </Link>
        <Link to="create-song" className={linkClasses}>
          ADD SONG
        </Link>
        <Link to="" className={linkClasses}>
          ABOUT
        </Link>
      </div>
    </div>
  )
}

export default Header
