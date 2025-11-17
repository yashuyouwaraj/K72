
import HomeHeroText from '../components/home/HomeHeroText.jsx'
import HomeBottomText from '../components/home/HomeBottomText.jsx'
import VideoPlay from '../components/home/VideoPlay.jsx'

export const Home = () => {
  return (
    <div className='text-white' >
        <div className='h-screen w-screen fixed'>
            <VideoPlay />
        </div>
        <div className='h-screen w-screen pb-5 overflow-hidden relative flex flex-col justify-between'>
            <HomeHeroText />
            <HomeBottomText />
        </div>
    </div>
    
  )
}
