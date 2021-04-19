import { useParams } from 'react-router-dom'
import { UserComponent } from "../Components"
import { useEffect, useState } from "react"
import axios from "axios";

export const User = () => {
  const { id } = useParams()
  const [ user, setUser ] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3005/user', {
      params: { id }
    })
      .then(response => {
        setUser(response.data.user)
      })
      .catch(error => {
        console.log(error)
      })
  }, [ id ])

  return <UserComponent user={ user } />
}