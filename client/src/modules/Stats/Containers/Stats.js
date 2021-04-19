import { useEffect, useState } from "react"
import axios from 'axios'
import { StatsComponent } from "../Components"

export const Stats = () => {
  const [ users, setUsers ] = useState({})
  const [ btnActive, setBtnActive ] = useState(1)

  useEffect(() => {
    const offset = btnActive * 150 - 150

    axios.get('http://localhost:3005/users', {
      params: {
        limit: 150,
        offset
      }
    })
      .then(response => {
        setUsers(response.data.users)
      })
      .catch(error => {
        console.log(error)
      })
  }, [ btnActive ])

  return <StatsComponent users={ users } btnActive={ btnActive } setBtnActive={ setBtnActive } />
}