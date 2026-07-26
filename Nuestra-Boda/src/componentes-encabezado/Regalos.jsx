import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/* =========================================
   MESA DE REGALOS — LIVERPOOL + BBVA
========================================= */

const palette = {
  ink: "#211D1A",
  inkSoft: "#403832",
  paper: "#E2B488",
  paperLight: "#FFFFFF",
  paperDark: "#F9F6EE",
  antiqueGold: "#B36A36",
  antiqueGoldDark: "#8E4E27",
  warmGray: "#5F554E",
  sage: "#AEB49C",
};

const giftData = {
  liverpool: {

    eventNumber: "60006046",
  },

  bbva: {
    // Sustituye estos datos por los definitivos.
    cardNumber: "4152 3146 3799 6128",
    holder: "CECILIA BEDOLLA MORALES",
  },
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

function DecorativeDivider({ compact = false }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
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
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
        style={{
          background:
            palette.antiqueGold,
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

function GiftIcon({ className = "h-6 w-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="8" width="18" height="13" />
      <path d="M12 8v13" />
      <path d="M3 12h18" />
      <path d="M7.5 8C5.6 8 4 6.7 4 5.2 4 4 5 3 6.3 3 9.2 3 12 8 12 8" />
      <path d="M16.5 8C18.4 8 20 6.7 20 5.2 20 4 19 3 17.7 3 14.8 3 12 8 12 8" />
    </svg>
  );
}

function BankCardIcon({ className = "h-6 w-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M2.5 9h19" />
      <path d="M6 15h4" />
      <path d="M15.5 14.5h2.5" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M14 5h5v5" />
      <path d="m19 5-8 8" />
      <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <rect x="8" y="8" width="11" height="11" rx="1.5" />
      <path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-10A1.5 1.5 0 0 0 3 5.5v10A1.5 1.5 0 0 0 4.5 17H8" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function CopyButton({ value, label, copiedKey, onCopy }) {
  const copied = copiedKey === label;

  return (
    <motion.button
      type="button"
      onClick={() => onCopy(value, label)}
      className="
        inline-flex
        min-w-[180px]
        items-center
        justify-center
        gap-3
        border
        px-6
        py-3
      "
      style={{
        backgroundColor: copied ? palette.sage : palette.ink,
        borderColor: copied ? palette.sage : palette.ink,
        color: palette.paperLight,
      }}
      whileHover={{
        y: -2,
        backgroundColor: copied ? palette.sage : palette.inkSoft,
      }}
      whileTap={{
        scale: 0.985,
      }}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}

      <span className="text-[8px] uppercase tracking-[0.28em] sm:text-[9px]">
        {copied ? "Copiado" : "Copiar datos"}
      </span>
    </motion.button>
  );
}

export default function Regalos() {
  const [copiedKey, setCopiedKey] = useState("");

  const liverpoolLink = `https://mesaderegalos.liverpool.com.mx/milistaderegalos/60006046`;

  const copyValue = async (value, key) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);

      window.setTimeout(() => {
        setCopiedKey("");
      }, 1800);
    } catch (error) {
      console.error("No se pudieron copiar los datos:", error);
    }
  };

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      className="
        relative
        flex
        min-h-[780px]
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
        backgroundColor: palette.paperLight,
      }}
    >
      {/* TEXTURA */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(33,29,26,0.022) 0px,
              rgba(33,29,26,0.022) 1px,
              transparent 1px,
              transparent 5px
            )
          `,
        }}
      />

      {/* LUZ CENTRAL */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundColor: "transparent",
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
          -bottom-20
          -left-10
          h-[270px]
          w-[155px]
          -rotate-12
          text-[#AEB49C]/36
          sm:h-[335px]
          sm:w-[195px]
        "
      />

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -right-10
          -top-20
          h-[270px]
          w-[155px]
          rotate-[168deg]
          text-[#AEB49C]/36
          sm:h-[335px]
          sm:w-[195px]
        "
      />

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto w-full max-w-6xl">
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
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              sm:h-20
              sm:w-20
            "
            style={{
              color: palette.antiqueGoldDark,
              borderColor: "rgba(179,106,54,0.42)",
              backgroundColor: "rgba(226,180,136,0.18)",
            }}
          >
            <GiftIcon className="h-7 w-7 sm:h-8 sm:w-8" />
          </div>

          <p
            className="
              mt-7
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
            Un detalle para nuestro hogar
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
              md:text-[64px]
            "
            style={{
              color: palette.ink,
            }}
          >
            Mesa de regalos
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              font-serif
              text-[15px]
              italic
              leading-7
              sm:text-[17px]
              sm:leading-8
            "
            style={{
              color: palette.warmGray,
            }}
          >
            Su presencia es nuestro mejor regalo. Para quienes deseen tener un
            detalle adicional, ponemos a su disposición las siguientes opciones.
          </p>
        </motion.div>

        {/* OPCIONES */}
        <div className="grid gap-7 sm:gap-9 lg:grid-cols-2">
          {/* LIVERPOOL */}
          <motion.article
            className="
              relative
              flex
              min-h-[560px]
              flex-col
              items-center
              justify-center
              overflow-hidden
              rounded-[30px]
              border
              bg-[#F9F6EE]
              px-7
              py-14
              text-center
              shadow-[0_24px_65px_rgba(33,29,26,0.12)]
              
              sm:px-10
              sm:py-16
            "
            style={{
              borderColor: "rgba(179,106,54,0.34)",
            }}
            initial={{
              opacity: 0,
              x: -24,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div
              className="pointer-events-none absolute inset-[8px] border"
              style={{
                borderColor: "rgba(179,106,54,0.14)",
              }}
            />

            <p
              className="
                absolute
                left-6
                top-6
                font-serif
                text-xs
                tracking-[0.2em]
              "
              style={{
                color: "rgba(179,106,54,0.65)",
              }}
            >
              01
            </p>

            <div
              className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                border
              "
              style={{
                color: palette.antiqueGoldDark,
                borderColor: "rgba(179,106,54,0.42)",
                backgroundColor: "rgba(226,180,136,0.16)",
              }}
            >
              <GiftIcon className="h-8 w-8" />
            </div>

            <p
              className="
                mt-7
                text-[8px]
                uppercase
                tracking-[0.4em]
                sm:text-[9px]
              "
              style={{
                color: palette.antiqueGoldDark,
              }}
            >
              Mesa departamental
            </p>

            <h3
              className="
                mt-5
                font-serif
                text-[38px]
                font-normal
                tracking-[-0.025em]
                sm:text-[46px]
              "
              style={{
                color: palette.ink,
              }}
            >
              Liverpool
            </h3>

            <div className="mt-6">
              <DecorativeDivider compact />
            </div>

            <p
              className="
                mt-8
                text-[8px]
                uppercase
                tracking-[0.36em]
                sm:text-[9px]
              "
              style={{
                color: palette.warmGray,
              }}
            >
              Número de evento
            </p>

            <p
              className="
                mt-4
                font-serif
                text-[25px]
                tracking-[0.12em]
                sm:text-[40px]
                sm:tracking-[0.16em]
              "
              style={{
                color: palette.ink,
              }}
            >
              {giftData.liverpool.eventNumber}
            </p>

            <motion.a
              href={liverpoolLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-10
                inline-flex
                min-w-[230px]
                items-center
                justify-center
                gap-3
                border
                px-8
                py-4
              "
              style={{
                backgroundColor: palette.ink,
                borderColor: palette.ink,
                color: palette.paperLight,
              }}
              whileHover={{
                y: -2,
                backgroundColor: palette.inkSoft,
              }}
              whileTap={{
                scale: 0.985,
              }}
            >
              <ExternalLinkIcon />

              <span className="text-[9px] uppercase tracking-[0.28em] sm:text-[10px]">
                Abrir mesa
              </span>
            </motion.a>
          </motion.article>

          {/* BBVA */}
          <motion.article
            className="
              relative
              flex
              min-h-[560px]
              flex-col
              items-center
              justify-center
              overflow-hidden
              rounded-[30px]
              border
              bg-[#F9F6EE]
              px-7
              py-14
              text-center
              shadow-[0_24px_65px_rgba(33,29,26,0.12)]
              
              sm:px-10
              sm:py-16
            "
            style={{
              borderColor: "rgba(179,106,54,0.34)",
            }}
            initial={{
              opacity: 0,
              x: 24,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div
              className="pointer-events-none absolute inset-[8px] border"
              style={{
                borderColor: "rgba(179,106,54,0.14)",
              }}
            />

            <p
              className="
                absolute
                left-6
                top-6
                font-serif
                text-xs
                tracking-[0.2em]
              "
              style={{
                color: "rgba(179,106,54,0.65)",
              }}
            >
              02
            </p>

            <div
              className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                border
              "
              style={{
                color: palette.antiqueGoldDark,
                borderColor: "rgba(179,106,54,0.42)",
                backgroundColor: "rgba(174,180,156,0.2)",
              }}
            >
              <BankCardIcon className="h-8 w-8" />
            </div>

            <p
              className="
                mt-7
                text-[8px]
                uppercase
                tracking-[0.4em]
                sm:text-[9px]
              "
              style={{
                color: palette.antiqueGoldDark,
              }}
            >
              Aportación directa
            </p>

            <h3
              className="
                mt-5
                font-serif
                text-[38px]
                font-normal
                tracking-[-0.025em]
                sm:text-[46px]
              "
              style={{
                color: palette.ink,
              }}
            >
              Depósito BBVA
            </h3>

            <div className="mt-6">
              <DecorativeDivider compact />
            </div>

            <div
              className="
                mt-8
                w-full
                max-w-md
                rounded-[24px]
                border
                px-5
                py-7
                sm:px-7
              "
              style={{
                backgroundColor: palette.ink,
                borderColor: "rgba(179,106,54,0.42)",
                boxShadow: "0 18px 42px rgba(33,29,26,0.20)",
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <p
                  className="text-[8px] uppercase tracking-[0.34em]"
                  style={{
                    color: palette.paperDark,
                  }}
                >
                  BBVA
                </p>

                <BankCardIcon className="h-5 w-5 text-[#E2B488]" />
              </div>

              <p
                className="
                  mt-8
                  break-words
                  font-mono
                  text-[17px]
                  tracking-[0.12em]
                  sm:text-[23px]
                  sm:tracking-[0.16em]
                "
                style={{
                  color: palette.paperLight,
                }}
              >
                {giftData.bbva.cardNumber}
              </p>

              <div className="mt-8 text-left">
                <p
                  className="text-[7px] uppercase tracking-[0.3em]"
                  style={{
                    color: palette.paperDark,
                  }}
                >
                  Titular
                </p>

                <p
                  className="
                    mt-2
                    font-serif
                    text-[14px]
                    uppercase
                    tracking-[0.08em]
                    sm:text-[18px]
                  "
                  style={{
                    color: palette.paperLight,
                  }}
                >
                  {giftData.bbva.holder}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <CopyButton
                value={`${giftData.bbva.cardNumber} - ${giftData.bbva.holder}`}
                label="bbva"
                copiedKey={copiedKey}
                onCopy={copyValue}
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={copiedKey === "bbva" ? "copied" : "idle"}
                className="
                  mt-4
                  text-[8px]
                  uppercase
                  tracking-[0.28em]
                "
                style={{
                  color:
                    copiedKey === "bbva"
                      ? palette.antiqueGoldDark
                      : palette.warmGray,
                }}
                initial={{
                  opacity: 0,
                  y: 4,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -4,
                }}
              >
                {copiedKey === "bbva"
                  ? "Datos copiados"
                  : "Copia el número y titular"}
              </motion.p>
            </AnimatePresence>
          </motion.article>
        </div>

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
            sm:mt-16
            sm:text-base
          "
          style={{
            color: palette.warmGray,
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
          Gracias por acompañarnos y por formar parte de este nuevo capítulo de
          nuestra historia.
        </motion.p>
      </div>
    </motion.section>
  );
}