export default async function TechRadar() {
  return (
    <>
      <h1 className="text-3xl font-semibold text-center mb-6">
        Frontend Tech Radar
      </h1>
      <div>
        <iframe
          src="https://ca-we-techradar-t.bravecliff-73fbdac3.westeurope.azurecontainerapps.io?capability=frontend"
          width="100%"
          height="700px"
          seamless
        ></iframe>
      </div>
    </>
  );
}
