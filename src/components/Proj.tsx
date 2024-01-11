import { project } from "../project"
import './proj.scss'

export default function Proj({}:any) {
  return (
    <div class="love grid gap-3 md:grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3">
        {project && project.map((result) => (
          <div  style={{'--image-url': `url(${result.img})`}} 
          class='bg-[image:var(--image-url)]'>
            <div class="box hidden">
                <h1 class="hidden">{result.name}</h1>
                <a href={result.link} class="hidden">{result.link}</a>
            </div>
          </div>
        ))}
    </div>
  )
}