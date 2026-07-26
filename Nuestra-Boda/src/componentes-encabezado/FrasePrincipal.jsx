import { motion } from "framer-motion";

/* =========================================
   FRASE EDITORIAL CLÁSICA
========================================= */

const palette = {
  cream: "#E2B488",
  creamLight: "#F1D1B0",
  creamDark: "#C99468",

  sage: "#AEB49C",
  sageLight: "#C3C8B4",
  sageDark: "#879078",

  terracotta: "#B36A36",
  terracottaLight: "#C98250",
  terracottaDark: "#844820",

  white: "#FFFFFF",

  dark: "#302821",
  darkSoft: "#51463E",

  line: "rgba(48,40,33,0.18)",
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
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

function BotanicalDetail({ className = "" }) {
  return (
    <svg
      viewBox="0 0 130 210"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M66 203C70 158 70 112 65 17"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />

      <path
        d="M66 164C49 153 39 139 34 121"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M66 139C82 128 92 113 96 94"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M65 103C50 92 42 79 39 64"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M65 76C80 66 87 52 89 38"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M34 121C44 120 52 126 57 137C46 137 38 132 34 121Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M96 94C86 94 78 100 72 111C84 111 92 105 96 94Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M39 64C49 65 57 71 61 82C50 81 42 75 39 64Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M89 38C80 39 73 45 68 55C79 54 86 49 89 38Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <circle
        cx="65"
        cy="16"
        r="3"
        stroke="currentColor"
        strokeWidth="0.7"
      />
    </svg>
  );
}

function SmallDivider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="h-px w-10 sm:w-14"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(179,106,54,0.68))",
        }}
      />

      <span
        className="h-[5px] w-[5px] rotate-45 border"
        style={{
          borderColor: "rgba(179,106,54,0.7)",
        }}
      />

      <span
        className="h-px w-10 sm:w-14"
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(179,106,54,0.68))",
        }}
      />
    </div>
  );
}

export default function FrasePremium() {
  return (
    <motion.section
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.18,
      }}
      className="
        relative
        flex
        min-h-[620px]
        w-full
        items-center
        justify-center
        overflow-hidden
        px-5
        py-24
        text-center
        sm:min-h-[700px]
        sm:px-8
        sm:py-28
        lg:min-h-[680px]
        lg:px-12
        lg:py-32
      "
      style={{
        background: `
          linear-gradient(
            180deg,
            ${palette.creamLight} 0%,
            ${palette.cream} 100%,
            ${palette.sageLight} 0%
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
          opacity-[0.18]
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

      {/* LUZ SUAVE CENTRAL */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
        style={{
          background: `
            radial-gradient(
              circle at center,
              rgba(255,255,255,0.28) 0%,
              rgba(255,255,255,0.08) 45%,
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
          borderColor: "rgba(179,106,54,0.34)",
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

      {/* DETALLES BOTÁNICOS */}

      <BotanicalDetail
        className="
          pointer-events-none
          absolute
          -bottom-8
          -left-5
          h-[210px]
          w-[130px]
          -rotate-12
          text-[#879078]/30
          sm:-left-1
          sm:h-[260px]
          sm:w-[160px]
          lg:left-8
          lg:h-[310px]
          lg:w-[190px]
        "
      />

      <BotanicalDetail
        className="
          pointer-events-none
          absolute
          -right-5
          -top-10
          h-[210px]
          w-[130px]
          rotate-[168deg]
          text-[#B36A36]/22
          sm:-right-1
          sm:h-[260px]
          sm:w-[160px]
          lg:right-8
          lg:h-[310px]
          lg:w-[190px]
        "
      />

      {/* CONTENIDO */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-5xl
          flex-col
          items-center
        "
      >
        {/* SEPARADOR SUPERIOR */}

        <motion.div
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
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="mt-5">
            <SmallDivider />
          </div>
        </motion.div>

        {/* COMILLA */}

        <motion.span
          className="
            mt-8
            block
            font-serif
            text-[66px]
            font-light
            leading-[0.65]
            sm:mt-10
            sm:text-[84px]
          "
          style={{
            color: "rgba(179,106,54,0.25)",
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
            delay: 0.12,
          }}
        >
          “
        </motion.span>

        {/* FRASE */}

        <motion.blockquote
          className="
            mx-auto
            mt-3
            max-w-4xl
            font-serif
            text-[24px]
            font-normal
            leading-[1.55]
            tracking-[-0.015em]
            sm:text-[32px]
            sm:leading-[1.5]
            md:text-[38px]
            lg:text-[44px]
            lg:leading-[1.42]
          "
          style={{
            color: palette.dark,
            textShadow: "0 1px 0 rgba(255,255,255,0.38)",
          }}
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Con Dios como guía,
          <span className="block">comenzamos este hermoso</span>
          <span className="block">camino juntos.</span>
        </motion.blockquote>

        {/* SEPARADOR */}

        <motion.div
          className="
            my-9
            sm:my-11
          "
          initial={{
            opacity: 0,
            scaleX: 0.65,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.32,
          }}
        >
          <SmallDivider />
        </motion.div>

      </div>
    </motion.section>
  );
}