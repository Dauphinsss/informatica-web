"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import {
  BookOpen,
  Cpu,
  Network,
  Database,
  Brain,
  Code,
  Rocket,
  Gamepad2,
  Stethoscope,
  GraduationCap,
  Mail,
} from "lucide-react";
import "./globals.css";
import { YoutubeCarousel } from "@/components/youtube-carousel";
import ParticleBackground from "@/components/particleBackground";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(Observer);

    const sections = document.querySelectorAll("section"),
      images = document.querySelectorAll(".bg"),
      outerWrappers = gsap.utils.toArray(".outer"),
      innerWrappers = gsap.utils.toArray(".inner");

    let currentIndex = -1;
    let wrap = gsap.utils.wrap(0, sections.length);
    let animating = false;

    // 👉 divide cada heading en spans por carácter (procesar todos los h2)
    const allHeadings = document.querySelectorAll(".section-heading");
    allHeadings.forEach((heading) => {
      const text = (heading.textContent || "").trim();
      heading.textContent = "";

      // Dividir por palabras primero
      const words = text.split(" ");

      words.forEach((word, wordIndex) => {
        // Crear span para cada letra de la palabra
        word.split("").forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char;
          span.style.display = "inline-block";
          heading.appendChild(span);
        });

        // Agregar espacio entre palabras (excepto después de la última)
        if (wordIndex < words.length - 1) {
          const space = document.createElement("span");
          space.innerHTML = "&nbsp;";
          space.style.display = "inline-block";
          space.style.width = "0.5em";
          heading.appendChild(space);
        }
      });
    });

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    function gotoSection(index: number, direction: number) {
      index = wrap(index);
      animating = true;

      const fromTop = direction === -1;
      const dFactor = fromTop ? -1 : 1;

      const tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => {
          animating = false;
        },
      });

      if (currentIndex >= 0) {
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
          sections[currentIndex],
          { autoAlpha: 0 }
        );
      }

      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });

      tl.fromTo(
        [outerWrappers[index], innerWrappers[index]],
        {
          yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
        },
        { yPercent: 0 },
        0
      )
        .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
        .fromTo(
          sections[index].querySelectorAll(".section-heading span"),
          {
            autoAlpha: 0,
            yPercent: 150 * dFactor,
          },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: "power2",
            stagger: { each: 0.02, from: "random" },
          },
          0.2
        );

      currentIndex = index;
    }

    Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });

    gotoSection(0, 1);
  }, []);

  return (
    <>
      <ParticleBackground />
      <header className="fixed flex items-center justify-between px-4 sm:px-[5%] w-full z-[3] h-16 sm:h-20 text-[clamp(0.5rem,1.5vw,1rem)] tracking-[0.1em] sm:tracking-[0.3em]">
        <div className="hidden sm:block">Ingeniería Informática - UMSS</div>
        <div className="text-sm sm:hidden">ING. INFORMÁTICA</div>
        <div className="text-sm sm:text-base">by marko ♡</div>
      </header>

      {/* SECCIÓN 1: Hero - Ingeniería Informática */}
      <section className="first h-full w-full top-0 fixed invisible">
        <div className="outer w-full h-full overflow-y-hidden">
          <div className="inner w-full h-full overflow-y-hidden">
            <div className="bg flex items-center justify-center flex-col absolute h-full w-full top-0 bg-cover bg-center bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.3)_100%),url('/info1.jpg')]">
              <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 ">
                <h2 className="section-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center normal-case z-[999] leading-[0.9] tracking-[0.15em] font-bold">
                  INGENIERIA
                </h2>
                <h2 className="section-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-center normal-case z-[999] leading-[0.9] tracking-[0.15em]">
                  INFORMATICA
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-gray-200 z-[999] tracking-[0.1em] sm:tracking-[0.2em] font-light mt-2 sm:mt-4">
                  Universidad Mayor de San Simón
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-3">
                <img
                  src="/infoscript.png"
                  alt="Logo Ingeniería Informática"
                  className="w-40 md:w-48 lg:w-56 xl:w-64 h-20  z-[999] object-cover "
                />
                <div className="text-sm">
                  centro de estudiantes de ingeniería informática
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: Sobre la carrera */}
      <section className="second h-full w-full top-0 fixed invisible">
        <div className="outer w-full h-full overflow-y-hidden">
          <div className="inner w-full h-full overflow-y-hidden">
            <div className="bg flex items-center justify-center absolute h-full w-full top-0 bg-cover bg-center bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.3)_100%),url('/about.jpg')]">
              <div className="max-w-4xl w-11/12 px-4 sm:px-8 text-center z-[999]">
                <div className="mb-8">
                  <h2 className="section-heading text-3xl sm:text-5xl md:text-4xl lg:text-5xl font-bold tracking-wide sm:tracking-[0.1em]">
                    Sobre la
                  </h2>
                  <h2 className="section-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide sm:tracking-[0.1em]">
                    Carrera
                  </h2>
                </div>
                <p className="text-base sm:text-xl md:text-2xl leading-relaxed mb-4 sm:mb-6 text-gray-100 normal-case">
                  La carrera de Ingeniería Informática de la UMSS forma
                  profesionales capaces de diseñar, desarrollar e implementar
                  soluciones tecnológicas innovadoras.
                </p>
                <p className="text-sm sm:text-lg md:text-xl leading-relaxed text-gray-200 normal-case">
                  Nuestra misión es crear líderes en tecnología que transformen
                  el mundo digital con ética, creatividad y excelencia técnica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: Malla Curricular */}
      <section className="third h-full w-full top-0 fixed invisible">
        <div className="outer w-full h-full overflow-y-hidden">
          <div className="inner w-full h-full overflow-y-hidden">
            <div className="bg flex items-center justify-center absolute h-full w-full top-0 bg-cover bg-center bg-[linear-gradient(180deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.4)_100%),url('/maya.jpg')]">
              <div className="max-w-6xl px-4 sm:px-8 z-[999]">
                <h2 className="section-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-12 text-center tracking-[0.05em] sm:tracking-[0.1em]">
                  Malla Curricular
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 normal-case">
                  <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-lg hover:bg-white/20 transition-all cursor-pointer group">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg sm:text-2xl font-bold">
                        Matemática
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm">
                      Álgebra, Cálculo, Probabilidad
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-lg hover:bg-white/20 transition-all cursor-pointer group">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg sm:text-2xl font-bold">
                        Programación
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm">
                      Estructuras de datos, Algoritmos
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-lg hover:bg-white/20 transition-all cursor-pointer group">
                    <div className="flex items-center gap-2 mb-2">
                      <Cpu className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg sm:text-2xl font-bold">
                        Arquitectura
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm">
                      Sistemas Operativos, Hardware
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-lg hover:bg-white/20 transition-all cursor-pointer group">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg sm:text-2xl font-bold">IA</h3>
                    </div>
                    <p className="text-xs sm:text-sm">
                      Machine Learning, Deep Learning
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-lg hover:bg-white/20 transition-all cursor-pointer group">
                    <div className="flex items-center gap-2 mb-2">
                      <Network className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg sm:text-2xl font-bold">Redes</h3>
                    </div>
                    <p className="text-xs sm:text-sm">
                      Comunicaciones, Seguridad
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-lg hover:bg-white/20 transition-all cursor-pointer group">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg sm:text-2xl font-bold">
                        Bases de Datos
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm">SQL, NoSQL, Big Data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: Proyectos Estudiantiles */}
      <section className="fourth h-full w-full top-0 fixed invisible">
        <div className="outer w-full h-full overflow-y-hidden">
          <div className="inner w-full h-full overflow-y-hidden">
            <div className="bg flex items-center justify-center absolute h-full w-full top-0 bg-cover bg-center bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.3)_100%),url('/proyects.jpg')]">
              <div className="w-full z-[999]">
                <h2 className="section-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-12 text-center tracking-[0.05em] sm:tracking-[0.1em] px-4 hidden sm:block">
                  Proyectos Destacados
                </h2>
                <h2 className="section-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold sm:mb-12 text-center tracking-[0.05em] sm:tracking-[0.1em] px-4 sm:hidden">
                  Proyectos
                </h2>
                <h2 className="section-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-12 text-center tracking-[0.05em] sm:tracking-[0.1em] px-4 sm:hidden">
                  Destacados
                </h2>

                <YoutubeCarousel />
                <p className=" sm:text-xl md:text-xl lg:text-2xl text-center text-gray-200 z-[999] tracking-[0.1em] sm:tracking-[0.2em] pt-3">
                  Innovación estudiantil en acción
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: CTA Final */}
      <section className="fifth h-full w-full top-0 fixed invisible">
        <div className="outer w-full h-full overflow-y-hidden">
          <div className="inner w-full h-full overflow-y-hidden">
            <div className="bg flex items-center justify-center flex-col absolute h-full w-full top-0 bg-cover bg-[50%_45%] bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.4)_100%),url('/infoend.jpg')]">
              <h2 className="section-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center mb-4 sm:mb-6 tracking-[0.05em] sm:tracking-[0.1em] px-4">
                Se parte de
              </h2>
              <h2 className="section-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center mb-4 sm:mb-6 tracking-[0.05em] sm:tracking-[0.1em] px-4">
                nuestro futuro
              </h2>

              <p className="text-lg sm:text-2xl md:text-3xl text-center  sm:mb-6 max-w-3xl px-4 normal-case z-[999]">
                Únete a la carrera de Ingeniería Informática y transforma el
                mundo digital
              </p>
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/infoscript.png"
                  alt="Logo Ingeniería Informática"
                  className="w-45 md:w-48 lg:w-56 xl:w-64 h-20  z-[999] object-cover "
                />
                <div className="text-xs sm:text-sm">
                  centro de estudiantes de ingeniería informática
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
