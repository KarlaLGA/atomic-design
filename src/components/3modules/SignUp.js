import React, { useState } from 'react'
import SignUpForm from '../2compounds/SignUpForm'

export default function SignUp () {
  const [user,
    setUser] = useState({ name: '', password: '' })

  const handleInput = (value, key) => {
    setUser({
      ...user,
      [key]: value
    })
  }
  return (
    <div>
      <SignUpForm user={user} handleInput={handleInput} />
    </div>
  )
}
