import React from "react";
import { motion } from "framer-motion";

/* =========================================
   CÓDIGO DE VESTIMENTA — TARJETA ÚNICA
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
  sage: "#AEB49C",
};

const dressImage = {
  src: "/dresscode.png",

  // Puedes mover la imagen sin deformarla.
  mobilePosition: "center center",
  desktopPosition: "center center",
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

function HangerIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-7 w-7 sm:h-8 sm:w-8"
    >
      <path d="M24 12c0-4 5-4 5-8 0-2.2-1.8-4-4-4-2.4 0-4 1.7-4 4" />
      <path d="M24 12 5 31c-1.4 1.4-.4 3.8 1.6 3.8h34.8c2 0 3-2.4 1.6-3.8L24 12Z" />
    </svg>
  );
}

export default function DressCodePremium() {
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
        lg:px-12
        lg:py-32
      "
      style={{
        background: `
          linear-gradient(
            180deg,
            ${palette.paperLight} 0%,
            ${palette.paperDark} 50%,
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
              circle at center,
              rgba(255,255,255,0.45) 0%,
              rgba(255,255,255,0.12) 42%,
              transparent 72%
            )
          `,
        }}
      />

      {/* MARCOS */}
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
          borderColor: "rgba(179,106,54,0.28)",
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
          -bottom-20
          -left-10
          h-[260px]
          w-[150px]
          -rotate-12
          text-[#AEB49C]/30
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
          text-[#AEB49C]/30
          sm:h-[330px]
          sm:w-[190px]
        "
      />

      {/* TARJETA ÚNICA */}
      <motion.article
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-5xl
          overflow-hidden
          rounded-[34px]
          border
          bg-white/90
          shadow-[0_28px_85px_rgba(48,40,33,0.18)]
          backdrop-blur-[3px]
          lg:grid-cols-[0.92fr_1.08fr]
        "
        style={{
          borderColor: "rgba(179,106,54,0.34)",
        }}
        initial={{
          opacity: 0,
          y: 28,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* IMAGEN */}
        <motion.div
          className="
            relative
            min-h-[420px]
            overflow-hidden
            sm:min-h-[540px]
            lg:min-h-[680px]
          "
          initial={{
            opacity: 0,
            scale: 1.04,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <img
            src="/dresscode.png"
            alt="Inspiración para el código de vestimenta"
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
              objectPosition: dressImage.mobilePosition,
            }}
          />

          <img
            src="/dresscode.png"
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
              objectPosition: dressImage.desktopPosition,
            }}
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-[#302821]/45
              via-transparent
              to-transparent
              lg:bg-gradient-to-r
              lg:from-transparent
              lg:via-transparent
              lg:to-[#302821]/12
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-4
              border
              sm:inset-6
            "
            style={{
              borderColor: "rgba(255,255,255,0.58)",
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
            <span className="text-[8px] uppercase tracking-[0.42em]">
              Código de vestimenta
            </span>

            <span className="mt-3 font-serif text-3xl italic">
              Formal &amp; semiformal
            </span>
          </div>
        </motion.div>

        {/* INFORMACIÓN */}
        <motion.div
          className="
            relative
            flex
            min-h-[560px]
            items-center
            justify-center
            overflow-hidden
            px-7
            py-16
            text-center
            sm:px-12
            sm:py-20
            lg:min-h-[680px]
            lg:px-14
            lg:py-24
          "
          initial={{
            opacity: 0,
            x: 26,
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

            <p
              className="
                mt-7
                text-[8px]
                uppercase
                tracking-[0.42em]
                sm:text-[10px]
                sm:tracking-[0.52em]
              "
              style={{
                color: palette.antiqueGoldDark,
              }}
            >
              Detalles de la celebración
            </p>

            <div className="mt-5">
              <DecorativeDivider />
            </div>

            <h2
              className="
                mt-8
                font-serif
                text-[40px]
                font-normal
                leading-tight
                tracking-[-0.025em]
                sm:text-[54px]
                lg:text-[58px]
              "
              style={{
                color: palette.ink,
              }}
            >
              Código de vestimenta
            </h2>

            <p
              className="
                mt-5
                font-serif
                text-[24px]
                italic
                sm:text-[29px]
              "
              style={{
                color: palette.antiqueGoldDark,
              }}
            >
              Formal &amp; semiformal
            </p>



            {/* NOTA DE COLOR */}
            <motion.div
              className="
                mt-10
                w-full
                max-w-md
                rounded-[24px]
                border
                px-6
                py-7
                sm:px-8
                sm:py-8
              "
              style={{
                backgroundColor: "rgba(241,209,176,0.42)",
                borderColor: "rgba(179,106,54,0.3)",
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
                duration: 0.85,
                delay: 0.28,
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
                  color: palette.antiqueGoldDark,
                }}
              >
                Consideración especial
              </p>

              <p
                className="
                  mt-4
                  font-serif
                  text-[16px]
                  leading-7
                  sm:text-[18px]
                "
                style={{
                  color: palette.ink,
                }}
              >
                Agradecemos evitar el uso de blanco total y tonos cálidos,
                colores reservados para la novia.
              </p>
            </motion.div>

            <p
              className="
                mt-9
                max-w-sm
                font-serif
                text-[13px]
                italic
                leading-6
                sm:text-[14px]
              "
              style={{
                color: palette.warmGray,
              }}
            >
              Gracias por acompañarnos en este día tan especial.
            </p>
          </div>
        </motion.div>
      </motion.article>
    </motion.section>
  );
}