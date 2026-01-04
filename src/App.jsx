import Section1 from "./component/Section1/Section1"
import Section2 from "./component/Section2/Section2"

function App() {

  

  const users = [
    {
      img:'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg',
      intro:'',
      color:'',
      tag:'Satisfied'
    },
     {
      img:'https://images.pexels.com/photos/35303517/pexels-photo-35303517.jpeg',
      intro:'',
       color:'',
      tag:'Underserved'
    },
     {
      img:'https://images.pexels.com/photos/35283610/pexels-photo-35283610.jpeg',
      intro:'',
      color:'',
      tag:'Underbanked'
    },
     {
      img:'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg',
      intro:'',
      color:'',
      tag:'Satisfied'
    }

  ]


  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App