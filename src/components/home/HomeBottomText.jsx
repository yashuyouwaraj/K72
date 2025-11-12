import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2'>
        <Link className="text-[6.5vw] border-5 uppercase border-white rounded-full px-10 pt-5 pb-2 leading-[5.5vw]">Projects</Link>
        <Link className="text-[6.5vw] border-5 uppercase border-white rounded-full px-10 pt-5 pb-2 leading-[5.5vw]">Agence</Link>
    </div>
  )
}

export default HomeBottomText