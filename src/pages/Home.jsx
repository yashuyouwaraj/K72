
import HomeHeroText from '../components/home/HomeHeroText.jsx'
import HomeBottomText from '../components/home/HomeBottomText.jsx'
import VideoGame from '../components/home/VideoGame.jsx'

export const Home = () => {
  return (
    <div className='text-white' >
        <div className='h-screen w-screen fixed'>
            <VideoGame />
        </div>
        <div className='h-screen w-screen pb-5 overflow-hidden relative flex flex-col justify-between'>
            <HomeHeroText />
            <HomeBottomText />
        </div>
    </div>
    
  )
}
