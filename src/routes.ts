import ROUTES from './constants'
import Auth from './pages/Auth'
import Charts from './pages/Charts'
import CreateSong from './pages/CreateSong'
import SongPage from './pages/SongPage'

export const adminRoutes = []

export const userRoutes = [
  {
    path: ROUTES.CREATE_SONG,
    Component: CreateSong,
  },
]

export const publicRoutes = [
  {
    path: ROUTES.CHARTS,
    Component: Charts,
  },
  {
    path: ROUTES.SONG + '/:id',
    Component: SongPage,
  },
  {
    path: ROUTES.LOGIN,
    Component: Auth,
  },
  {
    path: ROUTES.REGISTRATION,
    Component: Auth,
  },
]
