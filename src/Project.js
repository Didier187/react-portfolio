import React from "react"
export default function Project({title, description,source, live}){
    return(
        <div className="project">
            <p className="title">{title}</p>
            <p className="description">{description}</p>
            <a href={source} target="_blank" rel="external" type="text/html">source</a>
            {live && <a href={live} target="_blank" rel="external" type="text/html">live</a>}           
        </div>
    )
}