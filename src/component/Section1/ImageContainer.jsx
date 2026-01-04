import RightCard from "./RightCard"

const ImageContainer = (props) => {
  return (
    <div id="right" className=" w-2/3 h-full p-4 flex flex-nowrap gap-5 overflow-x-auto">
    {
      props.users.map((user,index)=>(
        <RightCard key={index} id={index} img={user.img} tag={user.tag}/>
    
      ))
    }
  
    </div>
  )
}

export default ImageContainer