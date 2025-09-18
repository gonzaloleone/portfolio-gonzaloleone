import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "GL Indumentaria",
    description: "Pagina web simulando una tienda de ropa. La misma cuenta con productos extraidos de firebase, imagenes, detalle de cada producto, carrito de compra y formulario de datos.",
    image: "/media/proyecto-1.png",
    tags: ["React", "Javascrpit"],
    demoUrl: "#",
    githubUrl: "https://github.com/gonzaloleone/ProyectoFinal-Leone",
  },
  {
    id: 2,
    title: "Catering Link",
    description:
      "Proyecto final de cursada en Certified Tech Developer simulando una pagina de servicios y contratación de catering. Participación en el repo de backend. La misma cuenta con creación y registro de usuario, usuario administrador con funciones especiales, sección favoritos, filtrado y busqueda de productos, categorías, reserva con calendario, etc.",
    image: "/media/proyecto-2.png",
    tags: ["React", "Javascrpit", "Node.js", "Express", "MySQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/Lu-GQ/ProyectoIntegrador1",
  },
  {
    id: 3,
    title: "Clínica Odontológica",
    description:
      "Falta agregar breve descripcion del proyecto",
    image: "/media/proyecto-3.png",
    tags: ["Java", "Spring Boot", "JUnit"],
    demoUrl: "#",
    githubUrl: "https://github.com/gonzaloleone/Leone-Gonzalo_Dubois-Felipe",
  },
  {
    id: 4,
    title: "Clínica Médica",
    description:
      "Falta agregar breve descripcion del proyecto",
    image: "/media/proyecto-4.png",
    tags: ["React", "Javascript",],
    demoUrl: "#",
    githubUrl: "https://github.com/gonzaloleone/ctd-esp-fe3-final",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Mis <span className="text-primary"> Proyectos </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Algunos de los proyectos que fui haciendo a lo largo de mi trayectoria.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/gonzaloleone"
          >
            Visita Mi Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};