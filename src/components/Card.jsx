import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Movies from './Movies'
const url = 'https://swapi.dev/api/films/?format=json'
const Card = () => {
    const [ loading, setLoading ] = useState(false)
    const [movie, setMovie] = useState([])
     console.log(movie)
    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await fetch(url)
            const data = await res.json()
            setMovie(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
     
    }
    useEffect(() => {
       fetchData()
       
    }, [])
    if(loading){
      return  <Loading />
    }

  return (   
    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 2xl:max-w-[1400px] lg:max-w-[1000px] md:max-w-[700px] mx-auto sm:max-w-[500px] px-3'>
    
        {movie?.results?.map((movies, index) => {
            const {title, episode_id, opening_crawl, release_date} = movies
            return (
               
                 <Movies key={index}  title={title} episode_id={episode_id} release_date={release_date} opening_crawl={opening_crawl}/>
            ) 
       
        })}
    </div>
  
  )
}

export default Card
