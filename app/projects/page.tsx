import { getProjects } from "@/services/team";
import Image from "next/image";

export default async function Projects() {
  const projects = await getProjects();
  return (
    <>
      <h1 className="text-3xl font-semibold text-center mb-6">Our team</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {projects.map((project, i) => {
          return (
            <>
              <div
                key={project.name}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.image}
                    className="w-32 h-32 mx-auto mb-4"
                    width={0}
                    height={0}
                  />
                )}
                <h2 className="text-xl font-semibold text-gray-800">
                  {project.name}
                </h2>
                <p className="text-gray-600">
                  <strong>Tech Stack: </strong>
                  {project.techStack &&
                    project.techStack.map((tech, i) => {
                      return (
                        <>
                          <span key={tech}>
                            {tech}
                            {project.techStack &&
                            i + 1 < project.techStack.length ? (
                              <span>, </span>
                            ) : (
                              ""
                            )}
                          </span>
                        </>
                      );
                    })}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
