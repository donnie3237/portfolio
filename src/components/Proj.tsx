import { project } from "../project"
import './proj.scss'
import { Component } from "solid-js";
export default function Proj({}:any):Component {
  return (
    <div class="love grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 w-[100%]">
        {project && project.map((result) => (
          <div  style={{'--image-url': `url(${result.img})`}} 
          class='bg-[image:var(--image-url)]'>
            <div class="box hidden">
                <h1 class="hidden">{result.name}</h1>
                <a href="" class="hidden">{result.link}</a>
            </div>
          </div>
        ))}
    </div>
  )
}