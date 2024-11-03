/**
 * @copyright GDAsh
 * @license Apache-2.0
 */


/**
 * Components
 */
import ProjectCard from "./ProjectCard";



const works = [
    {
      imgSrc: '/images/project-4.jpg',
      title: 'Hotel website',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee-org/wealthome'
    }
  ];


const Work = () => {
  return (
    <section 
    id="work"
    className="section"
    >
        <div className="container">

            <h2 className="headline-2 mb-8">
                My portofolio highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc, title, tags, projectLink}, key)=>(
                    <ProjectCard
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work