
import Video from './video.jsx'

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-5 text-center">
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]">L'étincelle</div>
      <div className="text-[9.5vw] justify-center flex uppercase leading-[8vw] items-start">
        qui
        <div className='h-[7vw] w-[16vw] rounded-full overflow-hidden'>
          <Video />
        </div>
        génère
      </div>
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]">la créativité</div>
    </div>
  );
};

export default HomeHeroText;
