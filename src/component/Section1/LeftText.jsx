import { CgArrowTopRight } from "react-icons/cg";
const LeftText = () => {
  return (
    <div className="h-full w-1/3 bg-blue-600 flex flex-col justify-between wrap-anywhere overflow-hidden">
    <div className="p-7">
      <h3 className="font-bold text-6xl mb-5">Prospective <br /><span>Customer </span><br />segmentation </h3>
      <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam a rerum itaque ut in distinctio magni, adipisci quis voluptate porro?</p>
    </div>
    <div className="text-5xl"><CgArrowTopRight /></div>
    </div>
  )
}

export default LeftText