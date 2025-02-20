import React from 'react'
import styles from './NotFound.module.css'
import { useNavigate } from 'react-router-dom'
const Notfound = () => {
    const navigate = useNavigate()
  return (
    <div className={styles.body}>
        <h1>404 Not Found</h1>
        <button onClick={() => navigate('/')}>Go Home</button>
    </div>
  )
}

export default Notfound