import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <h1>Добро пожаловать!</h1>
            <Button variant="contained" color="primary">
                <Link style={{color: '#fff', textDecoration: 'none'}} to="/catalog">В каталог</Link>
            </Button>
        </div>
    )
}

export default Home
