/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/project-1.jpg',
      title: 'System to Help Desk',
      tags: ['SQL', 'PHP', 'Development'],
      projectLink: 'https://help-desk.freesite.online/index.html',
    },
    {
      imgSrc: '/images/project-2.jpg',
      title: 'Encryptor Challenge',
      tags: ['Javascript', 'CSS3', 'Figma'],
      projectLink: 'https://challengeencriptador.netlify.app/'
    },
    {
      imgSrc: '/images/project-3.jpg',
      title: 'Money control',
      tags: ['Development', 'API', 'Angular'],
      projectLink: 'https://controlpresupuestoapp.netlify.app/'
    },
    {
      imgSrc: '/images/project-4.jpg',
      title: 'Recipe Blog',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://blogrecetas.netlify.app/'
    },
    {
      imgSrc: '/images/project-5.jpg',
      title: 'eCommerce website',
      tags: ['eCommerce', 'Development'],
      projectLink: 'https://misaelcommerce.netlify.app/'
    },
    {
      imgSrc: '/images/project-6.jpg',
      title: 'vCard Personal portfolio',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://vcardmisael.netlify.app/'
    },
  ];

const Work = () => {
    return ( 
        <section id="work" className="section">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                My portfolio highlights
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {
                        works.map(({imgSrc, title, tags, projectLink }, key) =>(
                            <ProjectCard
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes="reveal-up"
                            />
                        ))
                    }
                </div>
            </div>
        </section>
     );
}
 
export default Work;