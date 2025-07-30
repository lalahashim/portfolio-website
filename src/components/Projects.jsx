import projects from '../data/projects.json'

export default function Projects(){
    return (
        <div className='dark:text-gray-100 text-black'>
            <h3 className="text-2xl md:text-3xl font-bold">Projects</h3>
            <div className='grid md:grid-cols-4 gap-3 md:gap-10 mt-3'>
                {projects.map((project, index) => (
                    <div key={index} className='md:w-72 bg-gray-100 dark:bg-slate-900 rounded-lg shadow-md dark:shadow-gray-800'>
                        <img src={project.photo} alt={project.name} className='object-cover w-full rounded-t-lg' />
                        <div className='p-2 pb-3 text-center'>
                            <h4 className='font-bold text-center text-lg'>{project.name}</h4>
                            <p>{project.description}</p>
                            <p><span className='font-bold'>Tools:</span> {project.tools.join(', ')}</p>
                            <p className='mb-2'><span className='font-bold'>Date created:</span> {project.dateCreated}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer"
                                className='rounded-lg bg-amber-300 dark:bg-pink-700 py-1 px-2 hover:shadow-lg cursor-points dark:cursor-dark-points'
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}