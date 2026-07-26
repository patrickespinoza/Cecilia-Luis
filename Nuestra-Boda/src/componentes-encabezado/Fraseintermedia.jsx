import React from "react";
import { motion } from "framer-motion";

/* =========================================
   FRASE FINAL CON IMAGEN — ESTILO CLÁSICO
========================================= */

const palette = {
  ink: "#302821",
  inkSoft: "#51463E",
  paper: "#E2B488",
  paperLight: "#F9F6EE",
  paperDark: "#F1D1B0",
  antiqueGold: "#B36A36",
  antiqueGoldDark: "#844820",
  warmGray: "#66594F",
};

const finalImage = {
  src: "/imagenfinal.jpg",

  // Ajusta estos valores para mover la imagen.
  // Ejemplos: "center", "center 30%", "70% center", "right center".
  mobilePosition: "center center",
  desktopPosition: "center center",
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
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

const imageReveal = {
  hidden: {
    opacity: 0,
    scale: 1.04,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.25,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function DecorativeDivider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="h-px w-10 sm:w-16"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(179,106,54,0.72))",
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
            "linear-gradient(to left, transparent, rgba(179,106,54,0.72))",
        }}
      />
    </div>
  );
}

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

function HeartMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.15"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z" />
    </svg>
  );
}

export default function FraseFinal() {
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
        py-20
        sm:px-8
        sm:py-24
        lg:px-12
        lg:py-28
      "
      style={{
        background: `
          linear-gradient(
            180deg,
            ${palette.paperLight} 0%,
            ${palette.paperDark} 48%,
            ${palette.paper} 100%
          )
        `,
      }}
    >
      {/* TEXTURA */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.15]
        "
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(48,40,33,0.025) 0px,
              rgba(48,40,33,0.025) 1px,
              transparent 1px,
              transparent 5px
            )
          `,
        }}
      />

      {/* LUZ SUAVE */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 50% 36%,
              rgba(255,255,255,0.52) 0%,
              rgba(255,255,255,0.15) 42%,
              transparent 72%
            )
          `,
        }}
      />

      {/* MARCO EXTERIOR */}
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
          borderColor: "rgba(179,106,54,0.3)",
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
          borderColor: "rgba(48,40,33,0.1)",
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
          text-[#B36A36]/30
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
          text-[#B36A36]/30
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
          text-[#B36A36]/30
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
          text-[#B36A36]/30
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
          -bottom-20
          -left-10
          h-[260px]
          w-[150px]
          -rotate-12
          text-[#AEB49C]/35
          sm:h-[330px]
          sm:w-[190px]
        "
      />

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -right-10
          -top-20
          h-[260px]
          w-[150px]
          rotate-[168deg]
          text-[#AEB49C]/35
          sm:h-[330px]
          sm:w-[190px]
        "
      />

      {/* CONTENIDO PRINCIPAL */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-6xl
          overflow-hidden
          rounded-[34px]
          border
          bg-white/90
          shadow-[0_28px_85px_rgba(48,40,33,0.18)]
          backdrop-blur-[3px]
          lg:grid-cols-[1.05fr_0.95fr]
        "
        style={{
          borderColor: "rgba(179,106,54,0.32)",
        }}
      >
        {/* IMAGEN */}
        <motion.div
          variants={imageReveal}
          className="
            relative
            min-h-[430px]
            overflow-hidden
            sm:min-h-[560px]
            lg:min-h-[720px]
          "
        >
          {/* IMAGEN MÓVIL */}
          <img
            src="/FOTOFINAL.jpg"
            alt="Un recuerdo especial de nuestra historia"
            loading="lazy"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              lg:hidden
            "
            style={{
              objectPosition: finalImage.mobilePosition,
            }}
          />

          {/* IMAGEN COMPUTADORA */}
          <img
            src="/FOTOFINAL.jpg"
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="
              absolute
              inset-0
              hidden
              h-full
              w-full
              object-cover
              lg:block
            "
            style={{
              objectPosition: finalImage.desktopPosition,
            }}
          />



         

          <div
            className="
              absolute
              bottom-8
              left-1/2
              flex
              -translate-x-1/2
              flex-col
              items-center
              text-center
              text-white
              lg:hidden
            "
          >
          </div>
        </motion.div>

        {/* FRASE */}
        <motion.div
          className="
            relative
            flex
            min-h-[520px]
            items-center
            justify-center
            overflow-hidden
            px-7
            py-16
            text-center
            sm:px-12
            sm:py-20
            lg:min-h-[720px]
            lg:px-14
            lg:py-24
          "
          initial={{
            opacity: 0,
            x: 25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 1,
            delay: 0.14,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* FONDO DECORATIVO */}
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
                  rgba(48,40,33,0.03) 0px,
                  rgba(48,40,33,0.03) 1px,
                  transparent 1px,
                  transparent 5px
                )
              `,
            }}
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-[9px]
              border
            "
            style={{
              borderColor: "rgba(179,106,54,0.16)",
            }}
          />

          <div
            className="
              relative
              z-10
              flex
              max-w-xl
              flex-col
              items-center
            "
          >


            <div className="mt-5">
              <DecorativeDivider />
            </div>

            <span
              className="
                mt-8
                block
                font-serif
                text-[68px]
                leading-[0.55]
                sm:text-[88px]
              "
              style={{
                color: "rgba(179,106,54,0.24)",
              }}
            >
              “
            </span>

            <blockquote
              className="
                mt-5
                font-serif
                text-[27px]
                font-normal
                leading-[1.55]
                tracking-[-0.025em]
                sm:text-[35px]
                sm:leading-[1.5]
                lg:text-[39px]
              "
              style={{
                color: palette.ink,
              }}
            >
              Reservamos tu lugar con mucho amor.
              <span className="block">Te esperamos a ti y a las personas incluidas en tu invitacion.</span>
            </blockquote>


            <motion.div
              className="
                mt-10
                border-y
                px-7
                py-5
                sm:px-10
              "
              style={{
                borderColor: "rgba(179,106,54,0.28)",
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
                delay: 0.32,
              }}
            >
              <p
                className="
                  font-serif
                  text-[25px]
                  italic
                  sm:text-[30px]
                "
                style={{
                  color: palette.antiqueGoldDark,
                }}
              >
                Con amor,
              </p>

              <p
                className="
                  mt-2
                  font-serif
                  text-[31px]
                  tracking-[-0.02em]
                  sm:text-[38px]
                "
                style={{
                  color: palette.ink,
                }}
              >
                Cecilia &amp; Luis
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* CIERRE INFERIOR */}
      <motion.p
        className="
          relative
          z-10
          mx-auto
          mt-10
          max-w-xl
          text-center
          font-serif
          text-[13px]
          italic
          leading-7
          sm:mt-12
          sm:text-[15px]
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
          delay: 0.3,
        }}
      >
        El final de esta invitación es apenas el comienzo de nuestra historia.
      </motion.p>
    </motion.section>
  );
}