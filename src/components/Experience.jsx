import { OrbitControls, ScrollControls } from "@react-three/drei"

import Overlay from "./Overlay"
import { NB_FLOORS, Office } from "./Office"



const Experience = ()=> {
  return (
   <>
   <ambientLight intensity={1} />
   <OrbitControls enableZoom={false}/>
   <ScrollControls pages={NB_FLOORS} damping={0.25}>
    <Overlay />
     <Office />
   </ScrollControls>
  
   </>
  )
}



export default Experience