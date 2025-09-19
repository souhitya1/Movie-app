import Navbar from "./navbar"
import Mainh from "./mainh"
import Mainb from "./mainb"
export default function Home(){
    return(
        <div style={{height: "100vh", width: "100vw", margin: "0",backgroundColor: "#2E0C58", overflow: "hidden"}}>
      <Navbar/>
      <Mainh/>
        </div>
    )
}