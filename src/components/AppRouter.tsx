import { Route, Routes } from 'react-router-dom'
import { publicRoutes, userRoutes } from '../routes'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        {userRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </div>
  )
}

export default AppRouter
