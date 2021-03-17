import { Typography } from '@material-ui/core'
import React from 'react'

import { useRandomJoke } from '../../services/dataHooks/Example'

export default function Joke () {
  const { joke, isLoading, isError } = useRandomJoke()

  if (isLoading) { return <Typography>Loading...</Typography> }
  if (isError) { return <Typography>No joke :(</Typography> }
  return (
    <div>
      <Typography>{joke.setup}</Typography>
      <Typography>{joke.punchline}</Typography>
    </div>
  )
}
