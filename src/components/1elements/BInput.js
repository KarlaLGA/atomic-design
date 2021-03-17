import { TextField } from '@material-ui/core'
import React from 'react'

export default function BInput ({ text, onChange, type, id }) {
  return (
    <TextField
      value={text}
      onChange={e => onChange(e.target.value, e.target.id)}
      variant='outlined'
      type={type}
      id={id} label={id}
    />
  )
}
