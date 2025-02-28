import React from 'react'

const Podcast = ({params}:{params:{podcastId:string}}) => {
  return (
    <div>
        
      <p className='text-white-1'>this is {params.podcastId}</p>
      
    </div>
  )
}

export default Podcast
