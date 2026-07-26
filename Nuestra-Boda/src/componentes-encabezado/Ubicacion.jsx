import { motion } from "framer-motion";

/* =========================================
   EVENTO Y DIRECCIÓN — ESTILO CLÁSICO
========================================= */

const palette = {
  ink: "#302821",
  inkSoft: "#51463E",
  paper: "#E2B488",
  paperLight: "#F1D1B0",
  paperDark: "#C3C8B4",
  antiqueGold: "#B36A36",
  antiqueGoldDark: "#844820",
  warmGray: "#66594F",
};

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
   SEPARADOR CLÁSICO
========================================= */

function DecorativeDivider({ compact = false }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(179,106,54,0.68))",
        }}
      />

      <span
        className="h-[5px] w-[5px] rotate-45 border"
        style={{
          borderColor: "rgba(179,106,54,0.68)",
        }}
      />

      <span
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(179,106,54,0.68))",
        }}
      />
    </div>
  );
}

/* =========================================
   ÍCONO DE UBICACIÓN
========================================= */

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/* =========================================
   COMPONENTE
========================================= */

export default function EventoDireccion() {
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
        flex
        min-h-[760px]
        w-full
        items-center
        justify-center
        overflow-hidden
        px-5
        py-24
        sm:px-8
        sm:py-28
        lg:min-h-[720px]
        lg:px-12
        lg:py-32
      "
      style={{
        background: `
          linear-gradient(
            180deg,
            ${palette.paperLight} 100%,
            ${palette.paper} 0%,
            ${palette.paperDark} 0%
          )
        `,
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
              rgba(48,40,33,0.028) 0px,
              rgba(48,40,33,0.028) 1px,
              transparent 1px,
              transparent 5px
            )
          `,
        }}
      />

      {/* LUZ SUAVE CENTRAL */}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at center,
              rgba(255,255,255,0.3) 0%,
              rgba(255,255,255,0.1) 44%,
              transparent 74%
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
          borderColor: "rgba(179,106,54,0.32)",
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
          borderColor: "rgba(48,40,33,0.10)",
        }}
      />

      {/* ORNAMENTOS DE ESQUINA */}

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

      {/* RAMAS BOTÁNICAS */}

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-8
          h-[250px]
          w-[145px]
          -rotate-12
          text-[#879078]/18
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
          text-[#879078]/18
          sm:h-[310px]
          sm:w-[180px]
          lg:right-2
        "
      />

      {/* CONTENIDO */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-6xl
        "
      >
        {/* ENCABEZADO */}

        <motion.div
          className="
            mx-auto
            mb-14
            max-w-3xl
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
            Nuestra celebración
          </p>

          <div className="mt-5">
            <DecorativeDivider />
          </div>

          <h2
            className="
              mt-7
              font-serif
              text-[39px]
              font-normal
              leading-tight
              tracking-[-0.02em]
              sm:text-[54px]
              md:text-[64px]
            "
            style={{
              color: palette.ink,
            }}
          >
            Un día para recordar
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
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
            Nos hará muy felices compartir con ustedes el comienzo de este
            nuevo capítulo.
          </p>
        </motion.div>

        {/* TARJETAS INDIVIDUALES */}

        <motion.div
          className="
            grid
            items-stretch
            gap-7
            sm:gap-9
            lg:grid-cols-[0.78fr_1fr_1fr]
            lg:gap-7
          "
          initial={{
            opacity: 0,
            y: 26,
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
        >
          {/* TARJETA DE FECHA */}

          <motion.article
            className="
              relative
              flex
              min-h-[430px]
              overflow-hidden
              border
              px-7
              py-16
              text-center
              sm:min-h-[470px]
              sm:px-10
              lg:min-h-[570px]
              lg:px-9
            "
            style={{
              background: `
                linear-gradient(
                  180deg,
                  rgba(241,209,176,0.92) 0%,
                  rgba(226,180,136,0.84) 100%,
                  rgba(195,200,180,0.66) 0%
                )
              `,
              borderColor: "rgba(179,106,54,0.42)",
              boxShadow: "0 24px 58px rgba(48,40,33,0.14)",
            }}
            whileHover={{
              y: -5,
              transition: {
                duration: 0.3,
              },
            }}
          >
            <div
              className="
                pointer-events-none
                absolute
                inset-[7px]
                border
              "
              style={{
                borderColor: "rgba(48,40,33,0.14)",
              }}
            />

            <div
              className="
                relative
                z-10
                flex
                w-full
                flex-col
                items-center
                justify-center
              "
            >
              <motion.p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.4em]
                  sm:text-[10px]
                  sm:tracking-[0.5em]
                "
                style={{
                  color: palette.antiqueGoldDark,
                }}
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}
              >
                Reserve la fecha
              </motion.p>

              <div
                className="
                  my-7
                  h-px
                  w-14
                  sm:w-20
                "
                style={{
                  backgroundColor: "rgba(179,106,54,0.62)",
                }}
              />

              <motion.p
                className="
                  font-serif
                  text-lg
                  uppercase
                  tracking-[0.18em]
                  sm:text-xl
                "
                style={{
                  color: palette.inkSoft,
                }}
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
                  duration: 0.85,
                  delay: 0.25,
                }}
              >
                Sábado
              </motion.p>

              <motion.p
                className="
                  my-3
                  font-serif
                  text-[98px]
                  font-normal
                  leading-none
                  tracking-[-0.06em]
                  sm:text-[122px]
                  lg:text-[126px]
                "
                style={{
                  color: palette.ink,
                }}
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.95,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                21
              </motion.p>

              <motion.p
                className="
                  font-serif
                  text-[12px]
                  uppercase
                  tracking-[0.34em]
                  sm:text-sm
                  sm:tracking-[0.42em]
                "
                style={{
                  color: palette.antiqueGoldDark,
                }}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.85,
                  delay: 0.35,
                }}
              >
                Noviembre · 2026
              </motion.p>

              <div className="mt-8">
                <DecorativeDivider compact />
              </div>
            </div>
          </motion.article>

          {/* TARJETA DE CEREMONIA */}

          <motion.article
            className="
              relative
              flex
              min-h-[520px]
              overflow-hidden
              border
              px-7
              py-16
              text-center
              sm:px-10
              lg:min-h-[570px]
              lg:px-8
            "
            style={{
              background: `
                linear-gradient(
                  180deg,
                  rgba(255,255,255,0.78) 0%,
                  rgba(255,255,255,0.58) 100%
                )
              `,
              borderColor: "rgba(179,106,54,0.42)",
              boxShadow: "0 24px 58px rgba(48,40,33,0.14)",
              backdropFilter: "blur(3px)",
            }}
            whileHover={{
              y: -5,
              transition: {
                duration: 0.3,
              },
            }}
          >
            <div
              className="
                pointer-events-none
                absolute
                inset-[7px]
                border
              "
              style={{
                borderColor: "rgba(48,40,33,0.12)",
              }}
            />

            <div
              className="
                relative
                z-10
                flex
                w-full
                flex-col
                items-center
                justify-center
              "
            >
 

              <motion.h3
                className="
                  mt-6
                  font-serif
                  text-[35px]
                  font-normal
                  leading-tight
                  tracking-[-0.02em]
                  sm:text-[43px]
                "
                style={{
                  color: palette.ink,
                }}
                initial={{
                  opacity: 0,
                  y: 14,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.32,
                }}
              >
                Nuestra ceremonia
              </motion.h3>

              <div className="my-8 sm:my-9">
                <DecorativeDivider />
              </div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.38,
                }}
              >
                <p
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.36em]
                    sm:text-[9px]
                  "
                  style={{
                    color: palette.warmGray,
                  }}
                >
                  Hora
                </p>

                <p
                  className="
                    mt-3
                    font-serif
                    text-[52px]
                    font-normal
                    leading-none
                    tracking-[-0.035em]
                    sm:text-[66px]
                    lg:text-[64px]
                  "
                  style={{
                    color: palette.ink,
                  }}
                >
                  12:00
                </p>

                <p
                  className="
                    mt-3
                    text-[8px]
                    uppercase
                    tracking-[0.4em]
                    sm:text-[9px]
                  "
                  style={{
                    color: palette.antiqueGoldDark,
                  }}
                >
                  PM
                </p>
              </motion.div>

              <motion.div
                className="mt-10 sm:mt-11"
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.46,
                }}
              >
                <p
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.38em]
                    sm:text-[9px]
                  "
                  style={{
                    color: palette.warmGray,
                  }}
                >
                  Lugar
                </p>

                <p
                  className="
                    mx-auto
                    mt-4
                    min-h-[68px]
                    max-w-[280px]
                    font-serif
                    text-xl
                    leading-relaxed
                    sm:text-[23px]
                  "
                  style={{
                    color: palette.inkSoft,
                  }}
                >
                  Parroquia de Nuestra Señora de Guadalupe
                </p>
              </motion.div>

              <motion.a
                href="https://maps.app.goo.gl/7hzaiYD2FjTxAtt18"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir ubicación de la ceremonia en Google Maps"
                className="
                  group
                  mt-10
                  inline-flex
                  min-w-[210px]
                  items-center
                  justify-center
                  gap-3
                  border
                  px-7
                  py-4
                  sm:min-w-[230px]
                  sm:px-8
                "
                style={{
                  backgroundColor: palette.ink,
                  borderColor: palette.ink,
                  color: palette.paperLight,
                  boxShadow: "0 12px 28px rgba(48,40,33,0.16)",
                }}
                whileHover={{
                  y: -2,
                  backgroundColor: palette.inkSoft,
                  transition: {
                    duration: 0.25,
                  },
                }}
                whileTap={{
                  scale: 0.985,
                }}
              >
                <LocationIcon />

                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.26em]
                    sm:text-[10px]
                  "
                >
                  Ver ubicación
                </span>
              </motion.a>
            </div>
          </motion.article>

          {/* TARJETA DE RECEPCIÓN */}

          <motion.article
            className="
              relative
              flex
              min-h-[520px]
              overflow-hidden
              border
              px-7
              py-16
              text-center
              sm:px-10
              lg:min-h-[570px]
              lg:px-8
            "
            style={{
              background: `
                linear-gradient(
                  180deg,
                  rgba(255,255,255,0.78) 0%,
                  rgba(241,209,176,0.48) 100%
                )
              `,
              borderColor: "rgba(179,106,54,0.42)",
              boxShadow: "0 24px 58px rgba(48,40,33,0.14)",
              backdropFilter: "blur(3px)",
            }}
            whileHover={{
              y: -5,
              transition: {
                duration: 0.3,
              },
            }}
          >
            <div
              className="
                pointer-events-none
                absolute
                inset-[7px]
                border
              "
              style={{
                borderColor: "rgba(48,40,33,0.12)",
              }}
            />

            <div
              className="
                relative
                z-10
                flex
                w-full
                flex-col
                items-center
                justify-center
              "
            >


              <motion.h3
                className="
                  mt-6
                  font-serif
                  text-[35px]
                  font-normal
                  leading-tight
                  tracking-[-0.02em]
                  sm:text-[43px]
                "
                style={{
                  color: palette.ink,
                }}
                initial={{
                  opacity: 0,
                  y: 14,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.38,
                }}
              >
                Nuestra recepción
              </motion.h3>

              <div className="my-8 sm:my-9">
                <DecorativeDivider />
              </div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.44,
                }}
              >
                <p
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.36em]
                    sm:text-[9px]
                  "
                  style={{
                    color: palette.warmGray,
                  }}
                >
                  Hora
                </p>

                <p
                  className="
                    mt-3
                    font-serif
                    text-[52px]
                    font-normal
                    leading-none
                    tracking-[-0.035em]
                    sm:text-[66px]
                    lg:text-[64px]
                  "
                  style={{
                    color: palette.ink,
                  }}
                >
                  2:00
                </p>

                <p
                  className="
                    mt-3
                    text-[8px]
                    uppercase
                    tracking-[0.4em]
                    sm:text-[9px]
                  "
                  style={{
                    color: palette.antiqueGoldDark,
                  }}
                >
                  PM
                </p>
              </motion.div>

              <motion.div
                className="mt-10 sm:mt-11"
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.5,
                }}
              >
                <p
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.38em]
                    sm:text-[9px]
                  "
                  style={{
                    color: palette.warmGray,
                  }}
                >
                  Lugar
                </p>

                <p
                  className="
                    mx-auto
                    mt-4
                    min-h-[68px]
                    max-w-[280px]
                    font-serif
                    text-xl
                    leading-relaxed
                    sm:text-[23px]
                  "
                  style={{
                    color: palette.inkSoft,
                  }}
                >
                  Quinta El Paraiso
                </p>
              </motion.div>

              <motion.a
                href="https://maps.app.goo.gl/dyQjuFNY1SQDRxUf9AQUI-COLOCA-EL-LINK-DE-GOOGLE-MAPS"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir ubicación de la recepción en Google Maps"
                className="
                  group
                  mt-10
                  inline-flex
                  min-w-[210px]
                  items-center
                  justify-center
                  gap-3
                  border
                  px-7
                  py-4
                  sm:min-w-[230px]
                  sm:px-8
                "
                style={{
                  backgroundColor: palette.ink,
                  borderColor: palette.ink,
                  color: palette.paperLight,
                  boxShadow: "0 12px 28px rgba(48,40,33,0.16)",
                }}
                whileHover={{
                  y: -2,
                  backgroundColor: palette.inkSoft,
                  transition: {
                    duration: 0.25,
                  },
                }}
                whileTap={{
                  scale: 0.985,
                }}
              >
                <LocationIcon />

                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.26em]
                    sm:text-[10px]
                  "
                >
                  Ver ubicación
                </span>
              </motion.a>
            </div>
          </motion.article>
        </motion.div>

        {/* CIERRE */}

        <motion.p
          className="
            mx-auto
            mt-12
            max-w-xl
            text-center
            font-serif
            text-[14px]
            italic
            leading-7
            sm:mt-14
            sm:text-base
          "
          style={{
            color: palette.warmGray,
          }}
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
            delay: 0.52,
          }}
        >
          Esperamos contar con su presencia en un día que guardaremos para
          siempre en nuestra memoria.
        </motion.p>
      </div>
    </motion.section>
  );
}