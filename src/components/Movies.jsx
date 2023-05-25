import React from 'react'

const Movies = ({title, episode_id, opening_crawl, release_date}) => {
    return(
        <main>
        <div key={episode_id} className='px-6 py-3 hover:border-2 hover:border-[#125372] rounded bg-[#282425]/60 hover:shadow-[#0E445E] hover:shadow-lg'>
            
        <h1 className='lg:text-2xl text-xl font-bold pt-6'>{title}</h1>
        <p className='text-[#878787] lg:text-lg text-sm'>{release_date}</p>
         <p className='lg:text-lg text-sm font-medium py-4'>{ `${opening_crawl.substring(0, 200)}...`}</p>
         <hr className='border-[#8E2E2E]'/>
         
         <a href='#' className='text-[#E0CC21] md:text-base text-xs'>More Info</a>
      </div>
      </main>
     )
}

export default Movies
