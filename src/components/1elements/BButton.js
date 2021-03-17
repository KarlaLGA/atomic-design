import React from 'react'

import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  primary: {
    backgroundColor: 'rea'
  },
  secondary: {
    backgroundColor: 'green'
  }
}))

export default function BButton ({ text, type }) {
  const classes = useStyles()
  return (
    <Button className={classes[type]} color='primary' variant='contained'>
      {text}
    </Button>
  )
}
