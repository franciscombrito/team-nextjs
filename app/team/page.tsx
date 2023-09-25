import { getTeam } from "@/services/team";

export default async function Team() {
  const team = await getTeam();

  return (
    <>
      <h1 className="text-3xl font-semibold text-center mb-6">Our team</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {team.map((developer) => {
          return (
            <>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src={developer.image}
                  alt="developer.name"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-800">
                  {developer.name}
                </h2>
                <p className="text-gray-600">
                  <strong>Projects: </strong>
                  {developer.projects.map((project, i) => {
                    return (
                      <>
                        <a
                          target="_blank"
                          className="underline"
                          href={project.link}
                        >
                          {project.name}
                        </a>
                        {i + 1 < developer.projects.length ? (
                          <span>, </span>
                        ) : (
                          ""
                        )}
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
