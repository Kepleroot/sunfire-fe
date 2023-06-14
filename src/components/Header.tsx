import { Link, useNavigate } from 'react-router-dom'
import LogoIcon from './UI/icons/LogoIcon'

const Header = () => {
  const navigate = useNavigate()

  const linkClasses: string =
    'my-2 px-5 border-r-2 last:border-0 font-semibold text-white hover:text-gray-100'
    
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center bg-yellow-100">
        <div className='flex flex-row'>
          <LogoIcon />
          <div className='flex flex-row align-middle'>
            <Link className='mt-6 text-lg' to="login">sign in</Link>
            <Link className='mt-6 ml-3 text-lg' to="registration">sign up</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center bg-black">
        <Link to="" className={linkClasses}>
          CHARTS
        </Link>
        <Link to="" className={linkClasses}>
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
