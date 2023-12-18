import { project } from "../project"
import './proj.scss'

export default function Proj() {
  return (
    <div className="love grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 w-[100%]">
        {project && project.map((result) => (
          <div key={result.name} style={{'--image-url': `url(${result.img})`}} 
          className='bg-[image:var(--image-url)]'>
            <div className="box hidden">
                <h1 className="hidden">{result.name}</h1>
                <a href="" className="hidden">{result.link}</a>
            </div>
          </div>
        ))}
    </div>
  )
}
