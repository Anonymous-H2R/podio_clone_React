import React, { useState } from "react";
import VidAPI from "./API/driveapi";
import './layout.css';


function Drive(props) {
    const[vid2,setvid]=useState(VidAPI)
    console.log(vid2)
    return (
        <>
         

        <div className="tv-back">
        
            <div className="row py-5 d-flex align-items-center">
                <div className='col-6'><img className='tv2-img' src="https://www.podio.com/content/dam/podio/images/homepage/pc.png" alt="" /></div>
                <div className="px-5 col-6">
                {vid2.map((res)=>{
                    console.log(res.quote);
                    
                    return(
                        <><div>

                            <div className="">
                                <p className="sma-p">Consolidated Data</p>
                                <h1 className='v2h1'>{res.title}</h1>
                                <p className='quot2'>{res.quote}</p>
                            </div>
                        </div>
                        <div><button type="submit" class=" le-more rounded-pill text-light">Learn More</button></div>
                        </>

                    )
                })}
                </div>
               

            </div>
        </div>
        </>
        
    );
}

export default Drive;