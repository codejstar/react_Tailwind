/* eslint-disable */
import { FaArrowRightLong } from "react-icons/fa6";
function RightCardContent(props) {
  console.log(props);
  return (
      <div className="absolute top-0 left-0 h-full w-full    p-8 flex flex-col justify-between">
          <h1 className="bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-bold">{props.id + 1}</h1>
          <div>

          <p className="text-lg leading-normal text-white mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, voluptas.</p>
         
       <div className="flex justify-between ">
          <button className="bg-blue-600 text-white font-medium px-6 py-2 rounded-full  text-md">{props.tag}</button>
          <button className="bg-blue-600 text-white font-medium px-5 py-2 rounded-full  text-lg"><FaArrowRightLong /></button>
          </div>
          </div>
        </div>
  )
}

export default RightCardContent