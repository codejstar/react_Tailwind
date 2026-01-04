import ImageContainer from "./ImageContainer"
import LeftText from "./LeftText"


const Page1Content = (props) => {
  return (
    <div className="py-10  px-18 items-center h-[90vh]  flex gap-10">
    <LeftText />
    <ImageContainer users={props.users}/>
    </div>
  )
}

export default Page1Content