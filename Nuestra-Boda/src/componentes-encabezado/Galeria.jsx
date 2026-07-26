import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* =========================================
   GALERÍA EDITORIAL CLÁSICA
========================================= */

const palette = {
  ink: "#211D1A",
  inkSoft: "#403832",
  paper: "#E2B488",
  paperLight: "#FFFFFF",
  paperDark: "#AEB49C",
  antiqueGold: "#B36A36",
  antiqueGoldDark: "#8E4E27",
  warmGray: "#5F554E",
};

/*
  POSICIÓN DE CADA IMAGEN:

  Cambia "position" para mover el encuadre dentro del carrusel.

  Ejemplos:
  "center center"  → centrada
  "center 30%"     → sube la fotografía
  "center 70%"     → baja la fotografía
  "left center"    → mueve el encuadre hacia la izquierda
  "right center"   → mueve el encuadre hacia la derecha
  "65% 40%"        → control horizontal y vertical personalizado
*/

const images = [
  {
    src: "/CARRUSEL1.jpg",
    position: "center 40%",
  },
  {
    src: "/CARRUSEL2.jpg",
    position: "center 50%",
  },
  {
    src: "/CARRUSEL3.jpg",
    position: "center 100%",
  },
  {
    src: "/CARRUSEL4.jpg",
    position: "center 50%",
  },
  {
    src: "/CARRUSEL5.jpg",
    position: "center 70%",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================
   ORNAMENTO DE ESQUINA
========================================= */

function CornerOrnament({ className = "" }) {
  return (
    <svg
      viewBox="0 0 90 90"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 85V30C5 16.2 16.2 5 30 5h55"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M15 72V34c0-10.5 8.5-19 19-19h38"
        stroke="currentColor"
        strokeWidth="0.65"
      />

      <path
        d="M30 5C30 18.8 18.8 30 5 30"
        stroke="currentColor"
        strokeWidth="0.75"
      />

      <circle cx="15" cy="15" r="2" fill="currentColor" />
    </svg>
  );
}

/* =========================================
   RAMA BOTÁNICA
========================================= */

function BotanicalBranch({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 260"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M76 252C80 192 78 130 71 12"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />

      <path
        d="M76 205C54 192 41 174 35 151"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M75 167C97 153 109 133 113 109"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M73 123C53 110 43 93 39 72"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M72 83C91 71 101 53 103 34"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M35 151C49 150 60 158 67 173C52 172 41 165 35 151Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M113 109C99 109 88 117 80 132C96 131 107 123 113 109Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M39 72C53 73 63 81 69 95C54 94 44 86 39 72Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M103 34C90 35 80 42 74 55C88 54 98 47 103 34Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />
    </svg>
  );
}

/* =========================================
   SEPARADOR
========================================= */

function DecorativeDivider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="h-px w-10 sm:w-16"
        style={{
          background:
            palette.antiqueGold,
        }}
      />

      <span
        className="h-[5px] w-[5px] rotate-45 border"
        style={{
          borderColor: "rgba(179,106,54,0.72)",
        }}
      />

      <span
        className="h-px w-10 sm:w-16"
        style={{
          background:
            palette.antiqueGold,
        }}
      />
    </div>
  );
}

/* =========================================
   ICONOS
========================================= */

function PreviousIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

/* =========================================
   COMPONENTE
========================================= */

export default function Galeria() {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  const totalImages = images.length;

  useEffect(() => {
    images.forEach((image) => {
      const preloadedImage = new Image();
      preloadedImage.src = image.src;
    });
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIndex((previousIndex) => {
        return (previousIndex + 1) % totalImages;
      });
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [totalImages]);

  const nextImage = () => {
    setIndex((previousIndex) => {
      return (previousIndex + 1) % totalImages;
    });
  };

  const previousImage = () => {
    setIndex((previousIndex) => {
      return previousIndex === 0
        ? totalImages - 1
        : previousIndex - 1;
    });
  };

  const goToImage = (imageIndex) => {
    setIndex(imageIndex);
  };

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.12,
      }}
      className="
        relative
        w-full
        overflow-hidden
        px-5
        py-24
        sm:px-8
        sm:py-28
        lg:px-12
        lg:py-32
      "
      style={{
        backgroundColor: palette.paperLight,
      }}
    >
      {/* TEXTURA DE PAPEL */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.16]
        "
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(33,29,26,0.025) 0px,
              rgba(33,29,26,0.025) 1px,
              transparent 1px,
              transparent 5px
            )
          `,
        }}
      />

      {/* MARCO GENERAL */}

      <div
        className="
          pointer-events-none
          absolute
          inset-5
          border
          sm:inset-8
          lg:inset-10
        "
        style={{
          borderColor: "rgba(179,106,54,0.30)",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-[26px]
          border
          sm:inset-[38px]
          lg:inset-[46px]
        "
        style={{
          borderColor: "rgba(33,29,26,0.10)",
        }}
      />

      {/* ORNAMENTOS */}

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          left-6
          top-6
          h-16
          w-16
          text-[#B36A36]/28
          sm:left-9
          sm:top-9
          sm:h-20
          sm:w-20
        "
      />

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          right-6
          top-6
          h-16
          w-16
          rotate-90
          text-[#B36A36]/28
          sm:right-9
          sm:top-9
          sm:h-20
          sm:w-20
        "
      />

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          bottom-6
          left-6
          h-16
          w-16
          -rotate-90
          text-[#B36A36]/28
          sm:bottom-9
          sm:left-9
          sm:h-20
          sm:w-20
        "
      />

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          bottom-6
          right-6
          h-16
          w-16
          rotate-180
          text-[#B36A36]/28
          sm:bottom-9
          sm:right-9
          sm:h-20
          sm:w-20
        "
      />

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-8
          h-[250px]
          w-[145px]
          -rotate-12
          text-[#AEB49C]/22
          sm:h-[310px]
          sm:w-[180px]
          lg:left-2
        "
      />

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -right-8
          -top-16
          h-[250px]
          w-[145px]
          rotate-[168deg]
          text-[#AEB49C]/22
          sm:h-[310px]
          sm:w-[180px]
          lg:right-2
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
        "
      >
        {/* ENCABEZADO */}

        <motion.div
          className="
            mx-auto
            mb-14
            flex
            max-w-3xl
            flex-col
            items-center
            text-center
            sm:mb-16
            lg:mb-20
          "
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.44em]
              sm:text-[10px]
              sm:tracking-[0.55em]
            "
            style={{
              color: palette.antiqueGoldDark,
            }}
          >
            Nuestros momentos
          </p>

          <div className="mt-5">
            <DecorativeDivider />
          </div>

          <h2
            className="
              mt-7
              font-serif
              text-[40px]
              font-normal
              leading-tight
              tracking-[-0.025em]
              sm:text-[54px]
              md:text-[64px]
            "
            style={{
              color: palette.ink,
            }}
          >
            Nuestra historia
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              font-serif
              text-[14px]
              italic
              leading-7
              sm:text-base
            "
            style={{
              color: palette.warmGray,
            }}
          >
            Un recorrido por los instantes que han dado forma a nuestra
            historia y que hoy nos conducen hasta este día.
          </p>
        </motion.div>

        {/* ÁLBUM PRINCIPAL */}

        <motion.div
          className="
            relative
            mx-auto
            w-full
            max-w-6xl
          "
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 1,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          ref={carouselRef}
        >
          {/* MARCO DE PAPEL */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              p-3
              sm:p-5
              lg:p-7
            "
            style={{
              backgroundColor: palette.paperLight,
              borderColor: "rgba(179,106,54,0.34)",
              boxShadow: "0 24px 65px rgba(48,40,33,0.1)",
            }}
          >
            {/* GLOW SUAVE — SIN TONOS VERDES */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                scale-110
                rounded-[32px]
                bg-[#AEB49C]/14
                blur-3xl
              "
            />

            {/* BORDE INTERIOR */}

            <div
              className="
                pointer-events-none
                absolute
                inset-[7px]
                rounded-[26px]
                border
              "
              style={{
                borderColor: "rgba(179,106,54,0.12)",
              }}
            />

            {/* FOTOGRAFÍA */}

            <div
              className="
                relative
                h-[390px]
                overflow-hidden
                rounded-[26px]
                bg-white
                sm:h-[540px]
                md:h-[620px]
                lg:h-[680px]
              "
            >
              {/* 
                TODAS LAS IMÁGENES PERMANECEN APILADAS.
                La anterior no desaparece hasta que la nueva ya está visible,
                evitando el destello o fondo blanco durante el cambio.
              */}

              {images.map((image, imageIndex) => {
                const isActive = index === imageIndex;

                return (
                  <motion.img
                    key={image.src}
                    src={image.src}
                    alt={`Momento ${imageIndex + 1} de ${totalImages}`}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      rounded-[26px]
                      object-cover
                    "
                    style={{
                      objectPosition: image.position,
                      zIndex: isActive ? 2 : 1,
                    }}
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 1.025,
                    }}
                    transition={{
                      opacity: {
                        duration: 0.75,
                        ease: "easeInOut",
                      },
                      scale: {
                        duration: 1.15,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }}
                  />
                );
              })}

              {/* OVERLAY SUAVE */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[26px]
                "
                style={{
                  background: `
                    linear-gradient(
                      to top,
                      rgba(0,0,0,0.18),
                      transparent 40%
                    )
                  `,
                }}
              />

              {/* NUMERACIÓN */}



              {/* BOTÓN ANTERIOR */}

              <motion.button
                type="button"
                onClick={previousImage}
                aria-label="Mostrar fotografía anterior"
                className="
                  absolute
                  left-3
                  top-1/2
                  z-30
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  bg-white/92
                  backdrop-blur-sm
                  sm:left-5
                  sm:h-12
                  sm:w-12
                "
                style={{
                  borderColor: "rgba(179,106,54,0.4)",
                  color: palette.ink,
                  boxShadow: "0 8px 20px rgba(48,40,33,0.10)",
                }}
                whileHover={{
                  y: "-50%",
                  scale: 1.06,
                  backgroundColor: palette.paperLight,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                <PreviousIcon />
              </motion.button>

              {/* BOTÓN SIGUIENTE */}

              <motion.button
                type="button"
                onClick={nextImage}
                aria-label="Mostrar siguiente fotografía"
                className="
                  absolute
                  right-3
                  top-1/2
                  z-30
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  bg-white/92
                  backdrop-blur-sm
                  sm:right-5
                  sm:h-12
                  sm:w-12
                "
                style={{
                  borderColor: "rgba(179,106,54,0.4)",
                  color: palette.ink,
                  boxShadow: "0 8px 20px rgba(48,40,33,0.10)",
                }}
                whileHover={{
                  y: "-50%",
                  scale: 1.06,
                  backgroundColor: palette.paperLight,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                <NextIcon />
              </motion.button>
            </div>

            {/* PIE DE FOTO */}

            <div
              className="
                relative
                flex
                flex-col
                items-center
                px-4
                pb-3
                pt-7
                text-center
                sm:px-8
                sm:pb-5
                sm:pt-9
              "
            >
              <motion.p
                key={`counter-${index}`}
                className="
                  font-serif
                  text-[22px]
                  sm:text-[26px]
                "
                style={{
                  color: palette.ink,
                }}
                initial={{
                  opacity: 0,
                  y: 6,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                {String(index + 1).padStart(2, "0")}
                <span
                  className="
                    mx-2
                    text-sm
                  "
                  style={{
                    color: palette.warmGray,
                  }}
                >
                  /
                </span>
                <span
                  className="
                    text-base
                    sm:text-lg
                  "
                  style={{
                    color: palette.warmGray,
                  }}
                >
                  {String(totalImages).padStart(2, "0")}
                </span>
              </motion.p>

              {/* INDICADORES */}

              <div
                className="
                  mt-6
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                {images.map((_, imageIndex) => {
                  const isActive = index === imageIndex;

                  return (
                    <motion.button
                      key={`indicator-${imageIndex}`}
                      type="button"
                      onClick={() => goToImage(imageIndex)}
                      aria-label={`Mostrar fotografía ${imageIndex + 1}`}
                      aria-current={isActive ? "true" : undefined}
                      className="
                        relative
                        overflow-hidden
                        rounded-full
                      "
                      animate={{
                        scale: isActive ? 1.2 : 1,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                    >
                      <span
                        className={`
                          block
                          h-[9px]
                          rounded-full
                          transition-all
                          duration-500
                          ${isActive ? "w-10" : "w-2"}
                        `}
                        style={{
                          background: isActive
                            ? "#B36A36"
                            : "rgba(102,89,79,0.32)",
                        }}
                      />
                    </motion.button>
                  );
                })}
              </div>

              <p
                className="
                  mt-5
                  text-[8px]
                  uppercase
                  tracking-[0.32em]
                  sm:text-[9px]
                "
                style={{
                  color: palette.warmGray,
                }}
              >
                La galería avanza automáticamente
              </p>
            </div>
          </div>
        </motion.div>

        {/* CIERRE NARRATIVO */}

        <motion.div
          className="
            mx-auto
            mt-12
            max-w-xl
            text-center
            sm:mt-14
          "
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.35,
          }}
        >
          <div
            className="
              mx-auto
              mb-6
              h-px
              w-16
            "
            style={{
              backgroundColor: "rgba(179,106,54,0.48)",
            }}
          />

          <p
            className="
              font-serif
              text-[14px]
              italic
              leading-7
              sm:text-base
            "
            style={{
              color: palette.warmGray,
            }}
          >
            Cada fotografía guarda un instante de nuestro camino y una parte
            de la historia que hoy celebramos.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}