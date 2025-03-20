/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

const Resume = () => {
    return (
      <section id="resume" className="pt-20 lg:pt-32">
        <div className="container reveal-up">
          <h2 className="headline-2 text-center mb-10">Resume</h2>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-rounded text-sky-400 text-2xl">
                  school
                </span>
                <h3 className="title-1">Education</h3>
              </div>
              <ul className="relative border-l-2 border-zinc-600 space-y-10 pl-6">
                <li className="relative">
                  <div className="absolute -left-[30px] top-0 w-3 h-3 bg-sky-400 rounded-full"></div>
                  <h4 className="font-semibold text-lg">University Dominican O&M</h4>
                  <span className="text-sm text-sky-300">2020 — 2025</span>
                  <p className="mt-2 text-sm">
                    Specialized in databases, web applications, and business administration.
                  </p>
                </li>
                <li className="relative">
                  <div className="absolute -left-[30px] top-0 w-3 h-3 bg-sky-400 rounded-full"></div>
                  <h4 className="font-semibold text-lg">
                    National School of Arts and Crafts
                  </h4>
                  <span className="text-sm text-sky-300">2017 — 2019</span>
                  <p className="mt-2 text-sm">
                    Graduated as an advanced technician in industrial electricity.
                  </p>
                </li>
              </ul>
            </div>
  
            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-rounded text-sky-400 text-2xl">
                  work
                </span>
                <h3 className="title-1">Experience</h3>
              </div>
              
              <ul className="relative border-l-2 border-zinc-600 space-y-10 pl-6">
              <li className="relative">
                  <div className="absolute -left-[30px] top-0 w-3 h-3 bg-sky-400 rounded-full"></div>
                  <h4 className="font-semibold text-lg">
                    Scape - UX/UI Designer
                  </h4>
                  <span className="text-sm text-sky-300">2024 — Current</span>
                  <p className="mt-2 text-sm">
                    Designed and developed the company's website, increasing user engagement by 70%.
                    Designed and developed the company's app mobile, increasing user engagement by 100%.
                  </p>
                </li>
                <li className="relative">
                  <div className="absolute -left-[30px] top-0 w-3 h-3 bg-sky-400 rounded-full"></div>
                  <h4 className="font-semibold text-lg">
                    Mayblue SHS - Software Developer
                  </h4>
                  <span className="text-sm text-sky-300">2025 — Current</span>
                  <p className="mt-2 text-sm">
                    Created HR systems using Ln4, supporting and updating reports and databases.
                  </p>
                </li>
                <li className="relative">
                  <div className="absolute -left-[30px] top-0 w-3 h-3 bg-sky-400 rounded-full"></div>
                  <h4 className="font-semibold text-lg">
                    Altice Dominicana - Workforce
                  </h4>
                  <span className="text-sm text-sky-300">2022 — 2024</span>
                  <p className="mt-2 text-sm">
                    Worked on data analysis, generating dashboards, and optimizing data collection.
                  </p>
                </li>
                <li className="relative">
                  <div className="absolute -left-[30px] top-0 w-3 h-3 bg-sky-400 rounded-full"></div>
                  <h4 className="font-semibold text-lg">Web Developer - Freelancer</h4>
                  <span className="text-sm text-sky-300">2020 — 2020</span>
                  <p className="mt-2 text-sm">
                    Developed a website with PHP, Laravel, and SQL Server, improving company productivity by 85%.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Resume;
  