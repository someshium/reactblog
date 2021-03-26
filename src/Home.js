import React from 'react'

import Bloglist from './Bloglist'
import useFetch from './useFetch'
const Home = () => {



   const {data: blogs, isPending, error } = useFetch('http://localhost:5000/blogs')

    
    return (
        <div className="home">
          { error && <div>{error}</div>}
            {  isPending && <div> Its loading... </div>}
            <Bloglist blogs={blogs} />
        </div>
    )
}

export default Home
