import { Link, useNavigate } from 'react-router-dom'
import LogoIcon from './UI/icons/LogoIcon'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from '../store/user/selectors'
import { useDispatch } from 'react-redux'
import { logout } from '../store/user/actions'
import { fetchSongsRequest } from '../store/songs/actions'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isAuthAuthenticated = useSelector(selectIsAuthenticated)

  const logOut = () => {
    dispatch(logout())
  }

  const linkClasses: string =
    'my-2 px-5 border-r-2 last:border-0 font-semibold text-white hover:text-gray-100'

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3 place-items-center bg-yellow-100">
        <div></div>
        <div>
          <LogoIcon />
        </div>
        <div className="h-full mr-10 place-self-end flex items-center text-lg font-bold">
          {isAuthAuthenticated ? (
            <span className="hover:cursor-pointer" onClick={logOut}>log out</span>
          ) : (
            <div>
              <Link className="" to="login">
                sign in
              </Link>
              <Link className="ml-3 text-lg" to="registration">
                sign up
              </Link>
            </div>
          )}
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
