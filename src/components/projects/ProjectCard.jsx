
const ProjectCard = ({image1, image2}) => {
  return (
    <>
          <div className="group transition-all w-1/2 relative rounded-none hover:rounded-[70px] overflow-hidden h-full">
            <img className="h-full w-full object-cover" src={image1} alt="" />
            <div className="opacity-0 group-hover:opacity-100 transition-all absolute items-center flex justify-center top-0 left-0 w-full h-full bg-black/10">
              <h2 className="uppercase text-4xl px-8 pt-4 pb-2 font-[font1] border-4 rounded-full text-white border-white"> Vior le project</h2>
            </div>
          </div>
          <div className="group transition-all w-1/2 relative rounded-none hover:rounded-[70px] overflow-hidden h-full">
            <img className="h-full w-full object-cover" src={image2} alt="" />
            <div className="opacity-0 group-hover:opacity-100 transition-all absolute items-center flex justify-center top-0 left-0 w-full h-full bg-black/10">
              <h2 className="uppercase text-4xl px-8 pt-4 pb-2 font-[font1] border-4 rounded-full text-white border-white"> Vior le project</h2>
            </div>
          </div>
        </>
  )
}

export default ProjectCard