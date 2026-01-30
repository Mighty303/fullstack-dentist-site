import React from 'react'

const BwsVirtualTour = () => {
  return (
    <div>
      <video src={'/assets/bws-virtual-tour-compressed.mp4'} poster={'/assets/bws-virtual-tour-compressed.png'} autoPlay loop muted playsInline />
    </div>
  )
}

export default BwsVirtualTour
