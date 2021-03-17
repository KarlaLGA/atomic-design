import React from 'react'
import BButton from '../1elements/BButton'
import BCard from './BCard'
import BInput from '../1elements/BInput'
import Joke from './Joke'

export default function SignUpForm ({ user, handleInput }) {
  return (
    <BCard height={300}>

      {/* Joke component shows an example on how to use the SWR library */}

      <Joke />
      <BInput text={user.email} onChange={handleInput} type='text' id='name' />
      <BInput
        text={user.password}
        onChange={handleInput}
        type='password'
        id='password'
      />
      <BButton text='Sign Up' />
    </BCard>
  )
}
