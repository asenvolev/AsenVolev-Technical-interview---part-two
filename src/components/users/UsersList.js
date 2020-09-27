import React from 'react'
import { useSelector } from 'react-redux'
import { User } from './User'
import { selectAllUsers } from './usersSlice'

export const UsersList = () => {
  const users = useSelector(selectAllUsers)

  const renderedUsers = users.map(user => (
    <li key={user.id}>
      <User userId={user.id}/>
    </li>
  ))

  return (
    <section>
      <ul>{renderedUsers}</ul>
    </section>
  )
}