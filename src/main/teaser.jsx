import { useEffect, useState } from "react";
import Moviedisplay from "./moviedisplay";
import { useNavigate } from "react-router";
import Seemore from "../home/seemore";

export default function Teaser({teaserupdate}){
    const apikey= 'AIzaSyD7RhwJZstj_cmTt2vdCIBkzfJQIB6LHjs';
    const[videoid,setvideoid]= useState("");
    async function Video(){
        const url= `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${teaserupdate}%20official%20teaser&type=video&key=${apikey}`;
        let res= await fetch(url);
        let data= await res.json();
        console.log(data);
 
        if(data.items && data.items.length>0){
            setvideoid(data.items[0].id.videoId)
        }else{
            console.log("No teaser found");
            setvideoid("");
        }
    }
        useEffect(()=>{
         if(teaserupdate){
            Video();
         }
        },[teaserupdate])
    

    return(
        <div>
            {videoid?(
                <>
                {/*
                <iframe
                width= "500"
                height="300"
                src={`https://www.youtube.com/embed/${videoid}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                />
*/}
                <br/>
              <button
                onClick={()=>{window.open(`https://www.youtube.com/watch?v=${videoid}`), '_blank'}}
                style={{marginBottom: "200px", marginLeft: "60px"}}
                >
                Watch trailer on YouTube
                </button>
                
                </>
            ):(
             <p>no teser available</p>
            )}
        </div>
    );
}