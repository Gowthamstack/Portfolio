function Projects() {
  return (
    <section id="projects" className="p-10">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-5 rounded-xl">
          <h3 className="text-xl font-bold">GreenCart</h3>
          <p>MERN e-commerce app with Stripe payments</p>
        </div>

        <div className="bg-gray-800 p-5 rounded-xl">
          <h3 className="text-xl font-bold">Notes App</h3>
          <p>Express + MySQL based note-taking app</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;