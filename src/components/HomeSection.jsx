import { ArrowDown, Github, Linkedin } from "lucide-react";
import fotoPortada from "/public/media/foto-portada.jpeg";

export const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 z-10">
        {/* Columna de texto (título, párrafo y botón) */}
        <div className="flex flex-col text-center md:text-left md:basis-2/3 space-y-6">
          {/* Título */}
          <h1 className="text-4xl md:text-[3.50rem] font-bold tracking-tight order-1">
            <span className="opacity-0 animate-fade-in">Hola, soy</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Gonzalo
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Leone
            </span>
          </h1>

          {/* Imagen - en móvil debe aparecer entre título y texto */}
          <div className="flex justify-center md:hidden order-2 animate-fade-in-delay-2">
            <div className="relative w-40 h-40">
              {/* halo difuminado detrás de la imagen */}
              <div
                className="absolute inset-0 rounded-full blur-3xl scale-105 pointer-events-none"
                style={{ background: "hsl(var(--primary) / 0.18)" }}
              />
              <img
                src={fotoPortada}
                alt="Foto de Gonzalo Leone"
                className="relative w-full h-full object-cover rounded-full shadow-lg z-10"
              />
            </div>
          </div>

          {/* Texto */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3 order-3">
            Desarrollador Full Stack. Aplico soluciones estratégicas y efectivas
            para el entorno web actual, optimizo tiempos de desarrollo y colaboro en equipos multidisciplinarios para alcanzar metas definidas.
          </p>

          {/* Botón */}
          <div className="pt-2 opacity-0 animate-fade-in-delay-4 order-4">
            <div className="flex items-center justify-center md:justify-start gap-4 w-full">
              {/* Botón */}
              <a href="#projects" className="cosmic-button">
                Mis proyectos
              </a>
              {/* Iconos sociales */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/gonzalo-leone/"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="https://github.com/gonzaloleone"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <Github size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Imagen para escritorio */}
        <div className="hidden md:flex justify-center md:basis-2/5 opacity-0 animate-fade-in-delay-2">
          <div className="relative w-70 h-70">
            <div
              className="absolute inset-0 rounded-full blur-3xl scale-105 pointer-events-none"
              style={{ background: "hsl(var(--primary) / 0.18)" }}
            />
            <img
              src={fotoPortada}
              alt="Foto de Gonzalo Leone"
              className="relative w-full h-full object-cover rounded-full shadow-lg z-10"
            />
          </div>
        </div>
      </div>

      {/* Flecha inferior */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <ArrowDown className="h-10 w-10 text-primary" />
      </div>
    </section>
  );
};