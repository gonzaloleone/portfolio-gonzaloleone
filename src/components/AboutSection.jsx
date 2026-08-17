import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary"> Mi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Apasionado desarrollador de software
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              Desarrollo soluciones tecnológicas de forma independiente, diseñando e implementando aplicaciones con tecnologías como <strong>JavaScript, Python, React, Node.js, Express.js</strong> y bases de datos relacionales como <strong>MySQL</strong>. Además, integro herramientas de <strong>Inteligencia Artificial</strong> para optimizar procesos y potenciar el rendimiento de cada solución, lo que ha consolidado tanto mis competencias técnicas como mi capacidad de gestión y organización de proyectos.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Busco integrarme a un equipo de desarrollo en el ámbito corporativo, donde pueda aportar valor técnico, colaborar activamente y continuar mi crecimiento profesional. Me motiva la mejora continua, el trabajo en equipo y el desafío constante de desarrollar software escalable y de alta calidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Contactame
              </a>

              <a
                href="/media/Gonzalo-Leone-CV1.pdf"
                download="Gonzalo-Leone-CV1.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Descargar CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Professional Developer (Certified Tech Developer)</h4>
                  <p className="text-muted-foreground">
                    Creado por Mercado Libre y Globant, dictado por Digital House
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Curso Inteligencia Artificial para Programadores</h4>
                  <p className="text-muted-foreground">
                    UTN (Centro de e-Lerning)
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cuso Desarrollo Web con Javascript</h4>
                  <p className="text-muted-foreground">
                    UTN (Centro de e-Lerning)
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Curso Front-End Developer</h4>
                  <p className="text-muted-foreground">
                    UTN (Extensión Universitaria)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}