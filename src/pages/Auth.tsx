import React, { useState } from 'react'
import ROUTES from '../constants'
import Input from '../components/UI/Input'
import Button from '../components/UI/Button'
import { NavLink } from 'react-router-dom'

const Auth = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const isLogin: boolean = location.pathname === ROUTES.LOGIN

  const enter = () => {}

  return (
    <div className="flex justify-center align-middle">
      <div className="flex flex-col justify-center w-2/6 mt-20 border border-gray-300 rounded bg-gray-100">
        <h1 className="mt-2 self-center font-bold text-3xl">
          {isLogin ? 'Authorization' : 'Registration'}
        </h1>
        <Input
          className="mt-3 mx-5"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          className="mt-1 mx-5"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <span className="mx-5 mt-2">
          {isLogin ? (
            <div>
              Doesn't have account?{' '}
              <NavLink className="text-blue-700" to={ROUTES.REGISTRATION}>
                Sign up here!
              </NavLink>
            </div>
          ) : (
            <div>
              Already have account?{' '}
              <NavLink className="text-blue-700" to={ROUTES.LOGIN}>
                Sign in here!
              </NavLink>
            </div>
          )}
        </span>
        <Button
          className="my-4 self-center h-[50px] rounded"
          onClick={enter}
          text={isLogin ? 'Sign In' : 'Sign Up'}
        />
      </div>
    </div>
  )
}

export default Auth
