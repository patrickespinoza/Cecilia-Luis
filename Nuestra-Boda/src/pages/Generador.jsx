import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

const palette = {
  ink: "#302821",
  inkSoft: "#51463E",
  paper: "#E2B488",
  paperLight: "#F9F6EE",
  paperDark: "#F1D1B0",
  terracotta: "#B36A36",
  terracottaDark: "#844820",
  sage: "#AEB49C",
  warmGray: "#66594F",
  success: "#49644D",
  error: "#8B3A3A",
};

const IMAGE_FINAL = "/imagenfinal.jpg";

function LinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M10 13a5 5 0 0 0 7.07.07l2-2a5 5 0 0 0-7.07-7.07l-1.15 1.15" />
      <path d="M14 11a5 5 0 0 0-7.07-.07l-2 2A5 5 0 0 0 12 20l1.15-1.15" />
    </svg>
  );
}

function CopyIcon() {
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

function WhatsAppIcon() {
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
      <path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.2-4.6A8.5 8.5 0 1 1 20.5 11.5Z" />
      <path d="M8.2 7.8c.3-.4.6-.4.9-.1l1.1 1.5c.2.3.2.6 0 .9l-.6.8c-.2.3 0 .7.3 1.1.7 1 1.5 1.8 2.6 2.4.4.2.8.3 1.1 0l.8-.8c.3-.3.6-.3.9-.1l1.5 1c.4.2.4.6.2.9-.5 1-1.4 1.6-2.5 1.6-1.6 0-3.8-1.2-5.6-3-1.7-1.7-2.9-3.9-2.9-5.4 0-.9.4-1.9 1.2-2.8Z" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
      <path d="M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z" />
    </svg>
  );
}

function encodeInvitationData(data) {
  const json = JSON.stringify(data);
  const reversed = json.split("").reverse().join("");

  const bytes = new TextEncoder().encode(reversed);
  let binary = "";

  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return window
    .btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function CopyButton({
  copied,
  onClick,
  children,
  variant = "dark",
  className = "",
}) {
  const isLight = variant === "light";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`
        inline-flex
        min-h-[50px]
        items-center
        justify-center
        gap-3
        border
        px-6
        py-3
        ${className}
      `}
      style={{
        backgroundColor: copied
          ? palette.sage
          : isLight
            ? palette.paperLight
            : palette.ink,
        borderColor: copied
          ? palette.sage
          : isLight
            ? palette.ink
            : palette.ink,
        color: copied
          ? palette.paperLight
          : isLight
            ? palette.ink
            : palette.paperLight,
      }}
      whileHover={{
        y: -2,
        backgroundColor: copied
          ? palette.sage
          : isLight
            ? palette.paper
            : palette.inkSoft,
      }}
      whileTap={{
        scale: 0.985,
      }}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}

      <span className="text-[8px] uppercase tracking-[0.25em] sm:text-[9px]">
        {copied ? "Copiado" : children}
      </span>
    </motion.button>
  );
}

export default function Generador() {
  const [nombre, setNombre] = useState("");
  const [pases, setPases] = useState("1");
  const [link, setLink] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [copiedType, setCopiedType] = useState("");

  const pasesValidos = useMemo(() => {
    const parsed = Number.parseInt(pases, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
  }, [pases]);

  const marcarCopiado = (type) => {
    setCopiedType(type);

    window.setTimeout(() => {
      setCopiedType("");
    }, 1800);
  };

  const construirMensaje = (guestName, guestPasses, invitationLink) => {
    const passText =
      guestPasses === 1
        ? "Hemos reservado *1 pase* para ti."
        : `Hemos reservado *${guestPasses} pases* para ustedes.`;

    return `¡Hola ${guestName}! 🤍

Nos dará mucho gusto contar con tu presencia en nuestra boda.

${passText}

Puedes ver tu invitación aquí:

${invitationLink}

Te agradeceremos confirmar tu asistencia desde la invitación.

¡Te esperamos!`;
  };

  const generarLink = () => {
    const cleanName = nombre.trim();

    if (!cleanName) {
      setError("Escribe el nombre del invitado.");
      setLink("");
      setMensaje("");
      return;
    }

    if (!pasesValidos) {
      setError("Escribe una cantidad válida de pases.");
      setLink("");
      setMensaje("");
      return;
    }

    const encodedId = encodeInvitationData({
      nombre: cleanName,
      pases: pasesValidos,
    });

    const invitationUrl = `${window.location.origin}/?id=${encodedId}`;
    const whatsappMessage = construirMensaje(
      cleanName,
      pasesValidos,
      invitationUrl
    );

    setLink(invitationUrl);
    setMensaje(whatsappMessage);
    setError("");
  };

  const copiarTexto = async (text, type) => {
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      marcarCopiado(type);
    } catch (copyError) {
      console.error("No se pudo copiar:", copyError);
      setError("No se pudo copiar automáticamente. Selecciona el texto manualmente.");
    }
  };

  const abrirWhatsApp = () => {
    if (!mensaje) return;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const limpiarGenerador = () => {
    setNombre("");
    setPases("1");
    setLink("");
    setMensaje("");
    setError("");
    setCopiedType("");
  };

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        px-4
        py-10
        sm:px-6
        sm:py-14
        lg:px-10
      "
      style={{
        background: `
          linear-gradient(
            180deg,
            ${palette.paperLight} 0%,
            ${palette.paperDark} 54%,
            ${palette.paper} 100%
          )
        `,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
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

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 50% 10%,
              rgba(255,255,255,0.56) 0%,
              rgba(255,255,255,0.15) 38%,
              transparent 70%
            )
          `,
        }}
      />

      <motion.section
        initial={{
          opacity: 0,
          y: 26,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-6xl
          overflow-hidden
          rounded-[30px]
          border
          bg-white/88
          shadow-[0_30px_100px_rgba(48,40,33,0.18)]
          backdrop-blur-[4px]
          lg:grid-cols-[0.88fr_1.12fr]
        "
        style={{
          borderColor: "rgba(179,106,54,0.34)",
        }}
      >
        {/* IMAGEN FINAL */}
        <div className="relative min-h-[390px] overflow-hidden sm:min-h-[500px] lg:min-h-full">
          <img
            src="FOTOFINAL.jpg"
            alt="Imagen final de la invitación"
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              objectPosition: "center center",
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(48,40,33,0.05) 0%, rgba(48,40,33,0.2) 58%, rgba(48,40,33,0.78) 100%)",
            }}
          />

          <div className="absolute inset-[14px] border border-white/35 sm:inset-5" />

          <div className="absolute bottom-0 left-0 right-0 p-7 text-center sm:p-10">
            <p className="text-[8px] uppercase tracking-[0.42em] text-white/80 sm:text-[9px]">
              Generador privado
            </p>

            <h2 className="mt-4 font-serif text-[32px] leading-tight text-white sm:text-[42px]">
              Invitaciones personalizadas
            </h2>

            <p className="mx-auto mt-4 max-w-sm font-serif text-[14px] italic leading-6 text-white/85 sm:text-[15px]">
              Crea el enlace único de cada invitado con su nombre y número de
              pases asignados.
            </p>
          </div>
        </div>

        {/* FORMULARIO */}
        <div className="relative px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div
            className="pointer-events-none absolute inset-[8px] border"
            style={{
              borderColor: "rgba(179,106,54,0.13)",
            }}
          />

          <div className="relative z-10">
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
              "
              style={{
                color: palette.terracottaDark,
                borderColor: "rgba(179,106,54,0.42)",
                backgroundColor: "rgba(226,180,136,0.16)",
              }}
            >
              <SparkleIcon />
            </div>

            <p
              className="
                mt-6
                text-[8px]
                uppercase
                tracking-[0.4em]
                sm:text-[9px]
              "
              style={{
                color: palette.terracottaDark,
              }}
            >
              Panel de invitados
            </p>

            <h1
              className="
                mt-4
                font-serif
                text-[38px]
                font-normal
                leading-tight
                tracking-[-0.025em]
                sm:text-[48px]
              "
              style={{
                color: palette.ink,
              }}
            >
              Generador de invitaciones
            </h1>

            <p
              className="
                mt-4
                max-w-xl
                font-serif
                text-[14px]
                italic
                leading-7
                sm:text-[15px]
              "
              style={{
                color: palette.warmGray,
              }}
            >
              Los datos quedarán codificados dentro del enlace y serán leídos
              automáticamente por la confirmación de asistencia.
            </p>

            {/* NOMBRE */}
            <div
              className="mt-9 border-t pt-8"
              style={{
                borderColor: "rgba(179,106,54,0.24)",
              }}
            >
              <label
                htmlFor="guest-name"
                className="text-[8px] uppercase tracking-[0.32em] sm:text-[9px]"
                style={{
                  color: palette.terracottaDark,
                }}
              >
                Nombre del invitado
              </label>

              <input
                id="guest-name"
                type="text"
                value={nombre}
                onChange={(event) => {
                  setNombre(event.target.value);
                  setLink("");
                  setMensaje("");
                  setError("");
                }}
                placeholder="Ej. Familia Hernández"
                autoComplete="off"
                className="
                  mt-4
                  w-full
                  rounded-[14px]
                  border
                  bg-[#F9F6EE]
                  px-5
                  py-4
                  font-serif
                  text-base
                  outline-none
                  transition
                  focus:ring-2
                  focus:ring-[#B36A36]/15
                  sm:text-lg
                "
                style={{
                  color: palette.ink,
                  borderColor: "rgba(179,106,54,0.34)",
                }}
              />
            </div>

            {/* PASES */}
            <div className="mt-7">
              <label
                htmlFor="guest-passes"
                className="text-[8px] uppercase tracking-[0.32em] sm:text-[9px]"
                style={{
                  color: palette.terracottaDark,
                }}
              >
                Número de pases
              </label>

              <input
                id="guest-passes"
                type="number"
                min="1"
                inputMode="numeric"
                value={pases}
                onChange={(event) => {
                  setPases(event.target.value);
                  setLink("");
                  setMensaje("");
                  setError("");
                }}
                placeholder="Ej. 4"
                className="
                  mt-4
                  w-full
                  rounded-[14px]
                  border
                  bg-[#F9F6EE]
                  px-5
                  py-4
                  text-center
                  font-serif
                  text-lg
                  outline-none
                  transition
                  focus:ring-2
                  focus:ring-[#B36A36]/15
                "
                style={{
                  color: palette.ink,
                  borderColor: "rgba(179,106,54,0.34)",
                }}
              />
            </div>

            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  key="generator-error"
                  initial={{
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  className="
                    mt-6
                    rounded-[12px]
                    border
                    px-4
                    py-3
                    text-center
                    font-serif
                    text-[13px]
                  "
                  style={{
                    color: palette.error,
                    borderColor: "rgba(139,58,58,0.3)",
                    backgroundColor: "rgba(139,58,58,0.045)",
                  }}
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              type="button"
              onClick={generarLink}
              className="
                mt-8
                inline-flex
                min-h-[56px]
                w-full
                items-center
                justify-center
                gap-3
                rounded-[14px]
                border
                px-7
                py-4
              "
              style={{
                backgroundColor: palette.ink,
                borderColor: palette.ink,
                color: palette.paperLight,
                boxShadow: "0 12px 28px rgba(48,40,33,0.14)",
              }}
              whileHover={{
                y: -2,
                backgroundColor: palette.inkSoft,
              }}
              whileTap={{
                scale: 0.985,
              }}
            >
              <LinkIcon />

              <span className="text-[9px] uppercase tracking-[0.28em] sm:text-[10px]">
                Generar invitación
              </span>
            </motion.button>

            <AnimatePresence>
              {link && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-10"
                >
                  {/* LINK */}
                  <div
                    className="
                      rounded-[20px]
                      border
                      px-5
                      py-6
                      sm:px-6
                    "
                    style={{
                      backgroundColor: "rgba(226,180,136,0.16)",
                      borderColor: "rgba(179,106,54,0.3)",
                    }}
                  >
                    <p
                      className="text-[8px] uppercase tracking-[0.34em] sm:text-[9px]"
                      style={{
                        color: palette.terracottaDark,
                      }}
                    >
                      Enlace codificado
                    </p>

                    <div
                      className="
                        mt-4
                        max-h-36
                        overflow-y-auto
                        break-all
                        rounded-[12px]
                        border
                        bg-[#F9F6EE]
                        px-4
                        py-4
                        text-[12px]
                        leading-6
                      "
                      style={{
                        color: palette.inkSoft,
                        borderColor: "rgba(179,106,54,0.24)",
                      }}
                    >
                      {link}
                    </div>

                    <CopyButton
                      copied={copiedType === "link"}
                      onClick={() => copiarTexto(link, "link")}
                      className="mt-5 w-full rounded-[12px]"
                    >
                      Copiar enlace
                    </CopyButton>
                  </div>

                  {/* MENSAJE WHATSAPP */}
                  <div
                    className="
                      mt-6
                      rounded-[20px]
                      border
                      px-5
                      py-6
                      sm:px-6
                    "
                    style={{
                      backgroundColor: "rgba(174,180,156,0.16)",
                      borderColor: "rgba(174,180,156,0.52)",
                    }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p
                        className="text-[8px] uppercase tracking-[0.34em] sm:text-[9px]"
                        style={{
                          color: palette.terracottaDark,
                        }}
                      >
                        Mensaje para WhatsApp
                      </p>

                      <WhatsAppIcon />
                    </div>

                    <textarea
                      value={mensaje}
                      onChange={(event) => setMensaje(event.target.value)}
                      rows={12}
                      className="
                        mt-4
                        w-full
                        resize-y
                        rounded-[12px]
                        border
                        bg-[#F9F6EE]
                        px-4
                        py-4
                        font-serif
                        text-[13px]
                        leading-6
                        outline-none
                        sm:text-[14px]
                      "
                      style={{
                        color: palette.ink,
                        borderColor: "rgba(174,180,156,0.62)",
                      }}
                    />

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <CopyButton
                        copied={copiedType === "message"}
                        onClick={() => copiarTexto(mensaje, "message")}
                        className="w-full rounded-[12px]"
                      >
                        Copiar mensaje
                      </CopyButton>

                      <motion.button
                        type="button"
                        onClick={abrirWhatsApp}
                        className="
                          inline-flex
                          min-h-[50px]
                          w-full
                          items-center
                          justify-center
                          gap-3
                          rounded-[12px]
                          border
                          px-6
                          py-3
                        "
                        style={{
                          backgroundColor: palette.paperLight,
                          borderColor: palette.ink,
                          color: palette.ink,
                        }}
                        whileHover={{
                          y: -2,
                          backgroundColor: palette.paper,
                        }}
                        whileTap={{
                          scale: 0.985,
                        }}
                      >
                        <WhatsAppIcon />

                        <span className="text-[8px] uppercase tracking-[0.25em] sm:text-[9px]">
                          Abrir WhatsApp
                        </span>
                      </motion.button>
                    </div>
                  </div>

                  <motion.button
                    type="button"
                    onClick={limpiarGenerador}
                    className="
                      mt-6
                      w-full
                      py-3
                      text-[8px]
                      uppercase
                      tracking-[0.3em]
                    "
                    style={{
                      color: palette.warmGray,
                    }}
                    whileHover={{
                      color: palette.ink,
                    }}
                    whileTap={{
                      scale: 0.99,
                    }}
                  >
                    Limpiar generador
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>
    </main>
  );
}