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

            <p className="text-muted-foreground">
              Desarrollo proyectos de forma independiente, donde generalmente aplico tecnologías como JavaScript, Node.js y Express.js, React, y bases de datos como MySQL. Esto me ha permitido fortalecer tanto mis habilidades técnicas como la organización y gestión de tiempos.
            </p>

            <p className="text-muted-foreground">
              Busco integrarme a un equipo de desarrollo en el ámbito corporativo, donde pueda seguir aprendiendo, aportar valor y crecer profesionalmente. Me motiva la mejora continua, el trabajo colaborativo y los desafíos que implican crear soluciones de calidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Contactame
              </a>

              <a
                href="/public/media/CV Actualizado-Gonzalo Leone.pdf"
                download="Gonzalo-Leone-CV.pdf"
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
                  <h4 className="font-semibold text-lg">Curso Front-End Developer</h4>
                  <p className="text-muted-foreground">
                    UTN (Extensión Universitaria)
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
          </div>
        </div>
      </div>
    </section>
  );
}