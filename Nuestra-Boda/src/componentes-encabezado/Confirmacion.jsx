import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

/* =========================================
   CONFIGURACIÓN
========================================= */

const API_URL =
  "https://script.google.com/macros/s/AKfycbxlEh0BV6ZwOtBjgfu34voch5Hb5pUV7mbbtK1b5RypvV_ORjEfjnCU8CZ5DEmPUzbP/exec";

const palette = {
  ink: "#211D1A",
  inkSoft: "#403832",
  paper: "#E2B488",
  paperLight: "#FFFFFF",
  paperDark: "#F4D5B8",
  antiqueGold: "#B36A36",
  antiqueGoldDark: "#8E4E27",
  warmGray: "#5F554E",
  error: "#8B3A3A",
  success: "#49644D",
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================
   DECODIFICACIÓN DEL GENERADOR
========================================= */

/*
  Este decodificador es compatible con un generador que haga:

  1. JSON.stringify({ nombre, pases })
  2. invertir el texto
  3. convertir a Base64 con btoa()
  4. colocar el resultado en ?id=...

  También admite Base64 URL-safe:
  - en lugar de +
  _ en lugar de /
*/

function normalizeBase64(value) {
  const normalized = value
    .trim()
    .replace(/-/g, "+")
    .replace(/_/g, "/");

  const remainder = normalized.length % 4;

  if (remainder === 0) {
    return normalized;
  }

  return normalized + "=".repeat(4 - remainder);
}

function decodeBase64Utf8(value) {
  const binary = window.atob(normalizeBase64(value));

  try {
    const bytes = Uint8Array.from(binary, (character) =>
      character.charCodeAt(0)
    );

    return new TextDecoder("utf-8", {
      fatal: false,
    }).decode(bytes);
  } catch {
    return binary;
  }
}

function parseInvitationData(encodedId) {
  if (!encodedId) return null;

  const decodedValue = decodeURIComponent(encodedId);

  /*
    Intentamos varios formatos para que sea más resistente:

    1. Base64 → texto invertido → JSON.
    2. Base64 → JSON directo.
  */

  const decodedText = decodeBase64Utf8(decodedValue);

  const possibleValues = [
    decodedText.split("").reverse().join(""),
    decodedText,
  ];

  for (const possibleValue of possibleValues) {
    try {
      const parsedData = JSON.parse(possibleValue);

      if (parsedData && typeof parsedData === "object") {
        return parsedData;
      }
    } catch {
      // Continúa con el siguiente formato.
    }
  }

  throw new Error("El enlace de invitación no tiene un formato válido.");
}

/* =========================================
   ORNAMENTOS
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

/* =========================================
   ICONOS
========================================= */

function EnvelopeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <rect x="3" y="5" width="18" height="14" />
      <path d="m3 7 9 7 9-7" />
    </svg>
  );
}

function CheckIcon() {
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
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function LockIcon() {
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
      <rect x="5" y="10" width="14" height="10" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

/* =========================================
   CAMPO DE ASISTENCIA
========================================= */

function AttendanceOption({
  value,
  selectedValue,
  onChange,
  title,
  description,
}) {
  const isSelected = selectedValue === value;

  return (
    <label
      className="
        relative
        flex
        cursor-pointer
        items-start
        gap-4
        border
        px-5
        py-4
        text-left
        transition
      "
      style={{
        backgroundColor: isSelected
          ? "rgba(174,180,156,0.22)"
          : "#FFFFFF",
        borderColor: isSelected
          ? palette.antiqueGold
          : "rgba(179,106,54,0.3)",
      }}
    >
      <input
        type="radio"
        name="asistencia"
        value={value}
        checked={isSelected}
        onChange={() => onChange(value)}
        className="sr-only"
      />

      <span
        className="
          mt-0.5
          flex
          h-5
          w-5
          shrink-0
          items-center
          justify-center
          rounded-full
          border
        "
        style={{
          borderColor: isSelected
            ? palette.antiqueGoldDark
            : "rgba(119,113,104,0.6)",
        }}
      >
        {isSelected && (
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{
              backgroundColor: palette.antiqueGoldDark,
            }}
          />
        )}
      </span>

      <span>
        <span
          className="
            block
            font-serif
            text-[15px]
            sm:text-base
          "
          style={{
            color: palette.ink,
          }}
        >
          {title}
        </span>

        <span
          className="
            mt-1
            block
            text-[12px]
            leading-5
            sm:text-[13px]
          "
          style={{
            color: palette.warmGray,
          }}
        >
          {description}
        </span>
      </span>
    </label>
  );
}

/* =========================================
   COMPONENTE
========================================= */

const Confirmacion = () => {
  const [nombreInvitado, setNombreInvitado] = useState("");
  const [pasesAsignados, setPasesAsignados] = useState(1);
  const [datosDesdeGenerador, setDatosDesdeGenerador] = useState(false);

  const [mensajeInvitado, setMensajeInvitado] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState(1);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [urlError, setUrlError] = useState("");

  /* =========================================
     LEER Y DECODIFICAR URL
  ========================================= */

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const encodedId = params.get("id");
    const visibleName = params.get("nombre");
    const visiblePasses = params.get("pases");

    try {
      let invitationData = null;

      if (encodedId) {
        invitationData = parseInvitationData(encodedId);
      } else if (visibleName || visiblePasses) {
        /*
          Respaldo temporal para enlaces anteriores:

          ?nombre=Familia%20López&pases=4
        */

        invitationData = {
          nombre: visibleName,
          pases: visiblePasses,
        };
      }

      if (!invitationData) {
        setDatosDesdeGenerador(false);
        return;
      }

      const decodedName =
        typeof invitationData.nombre === "string"
          ? invitationData.nombre.trim()
          : "";

      /*
        Aceptamos varias propiedades por compatibilidad:
        pases, invitados, cantidad o lugares.
      */

      const decodedPasses = Number.parseInt(
        invitationData.pases ??
          invitationData.invitados ??
          invitationData.cantidad ??
          invitationData.lugares ??
          1,
        10
      );

      if (decodedName) {
        setNombreInvitado(decodedName);
      }

      if (!Number.isNaN(decodedPasses) && decodedPasses > 0) {
        setPasesAsignados(decodedPasses);
        setInvitados(decodedPasses);
      }

      setDatosDesdeGenerador(Boolean(decodedName));
      setUrlError("");
    } catch (decodeError) {
      console.error("No se pudieron leer los datos del enlace:", decodeError);

      setUrlError(
        "No pudimos reconocer los datos personalizados de esta invitación."
      );

      setDatosDesdeGenerador(false);
    }
  }, []);

  /* =========================================
     AJUSTAR ASISTENTES SEGÚN ASISTENCIA
  ========================================= */

  useEffect(() => {
    if (asistencia === "No podré asistir") {
      setInvitados(0);
      return;
    }

    if (asistencia === "Sí asistiré" && invitados < 1) {
      setInvitados(1);
    }
  }, [asistencia, invitados]);

  const availablePasses = useMemo(() => {
    return Array.from(
      {
        length: pasesAsignados,
      },
      (_, index) => index + 1
    );
  }, [pasesAsignados]);

  /* =========================================
     ENVIAR CONFIRMACIÓN
  ========================================= */

  const enviarConfirmacion = async () => {
    if (loading) return;

    if (!nombreInvitado.trim()) {
      setError("Escribe el nombre del invitado.");
      return;
    }

    if (!asistencia) {
      setError("Selecciona si podrás acompañarnos.");
      return;
    }

    if (
      asistencia === "Sí asistiré" &&
      (invitados < 1 || invitados > pasesAsignados)
    ) {
      setError(
        `Puedes confirmar entre 1 y ${pasesAsignados} ${
          pasesAsignados === 1 ? "lugar" : "lugares"
        }.`
      );
      return;
    }

    setError("");
    setEnviado(false);
    setLoading(true);
    // Limpiar formulario después de enviar
setAsistencia("");
setInvitados(pasesAsignados);
setMensajeInvitado("");

    const confirmationData = {
      nombre: nombreInvitado.trim(),
      asistencia,
      invitados: asistencia === "Sí asistiré" ? invitados : 0,
      mensaje: mensajeInvitado.trim(),
      pasesAsignados,
    };

    try {
      /*
        No agregamos Content-Type: application/json porque la petición
        utiliza mode: "no-cors".

        Apps Script puede leer el contenido mediante:
        e.postData.contents
      */

      await fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(confirmationData),
      });

      setEnviado(true);
      setLoading(false);
    } catch (requestError) {
      console.error("Error enviando la confirmación:", requestError);

      setError(
        "No pudimos enviar tu confirmación. Intenta nuevamente en unos momentos."
      );

      setLoading(false);
    }
  };

  /* =========================================
     RENDER
  ========================================= */

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.08,
      }}
      className="
        relative
        flex
        min-h-[820px]
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
        backgroundColor: palette.paper,
      }}
    >
      {/* TEXTURA */}

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
          borderColor: "rgba(179,106,54,0.25)",
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
          borderColor: "rgba(179,106,54,0.1)",
        }}
      />

      {/* ESQUINAS */}

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          left-6
          top-6
          h-16
          w-16
          text-[#B36A36]/25
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
          text-[#B36A36]/25
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
          text-[#B36A36]/25
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
          text-[#B36A36]/25
          sm:bottom-9
          sm:right-9
          sm:h-20
          sm:w-20
        "
      />

      {/* RAMAS */}

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-8
          h-[250px]
          w-[145px]
          -rotate-12
          text-white/22
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
          text-white/22
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
          max-w-5xl
        "
      >
        {/* ENCABEZADO */}

        <motion.div
          className="
            mx-auto
            mb-12
            flex
            max-w-3xl
            flex-col
            items-center
            text-center
            sm:mb-16
          "
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
            "
            style={{
              color: palette.antiqueGoldDark,
              borderColor: "rgba(179,106,54,0.42)",
            }}
          >
            <EnvelopeIcon />
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
            Nos encantará contar contigo
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
              tracking-[-0.025em]
              sm:text-[54px]
              md:text-[64px]
            "
            style={{
              color: palette.ink,
            }}
          >
            Confirmación de asistencia
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
            Por favor, confirma tu asistencia y ayúdanos a preparar cada
            detalle de nuestra celebración.
          </p>
        </motion.div>

        {/* FORMULARIO */}

        <motion.div
          className="
            relative
            mx-auto
            w-full
            max-w-3xl
            border
            px-6
            py-12
            sm:px-10
            sm:py-14
            md:px-14
          "
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "rgba(179,106,54,0.34)",
            boxShadow: "0 24px 65px rgba(33,29,26,0.10)",
          }}
          initial={{
            opacity: 0,
            y: 22,
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
            duration: 0.95,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
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
              borderColor: "rgba(179,106,54,0.12)",
            }}
          />

          <div className="relative z-10">
            {/* NOMBRE */}

            <div>
              <div className="flex items-center justify-between gap-4">
                <label
                  htmlFor="confirmation-name"
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.34em]
                    sm:text-[9px]
                  "
                  style={{
                    color: palette.antiqueGoldDark,
                  }}
                >
                  Nombre del invitado
                </label>

                {datosDesdeGenerador && (
                  <span
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-[7px]
                      uppercase
                      tracking-[0.22em]
                      sm:text-[8px]
                    "
                    style={{
                      color: palette.warmGray,
                    }}
                  >
                    <LockIcon />
                    Invitación personalizada
                  </span>
                )}
              </div>

              <input
                id="confirmation-name"
                type="text"
                value={nombreInvitado}
                onChange={(event) => {
                  if (!datosDesdeGenerador) {
                    setNombreInvitado(event.target.value);
                  }
                }}
                readOnly={datosDesdeGenerador}
                placeholder="Nombre y apellido"
                autoComplete="name"
                className="
                  mt-4
                  w-full
                  border
                  bg-[#F9F6EE]
                  px-5
                  py-4
                  font-serif
                  text-base
                  outline-none
                  sm:text-lg
                "
                style={{
                  color: palette.ink,
                  borderColor: "rgba(179,106,54,0.34)",
                  cursor: datosDesdeGenerador ? "not-allowed" : "text",
                }}
              />

              <AnimatePresence>
                {urlError && (
                  <motion.p
                    className="
                      mt-3
                      text-[12px]
                      leading-5
                    "
                    style={{
                      color: palette.error,
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
                    }}
                  >
                    {urlError}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* ASISTENCIA */}

            <div
              className="
                mt-9
                border-t
                pt-9
              "
              style={{
                borderColor: "rgba(179,106,54,0.26)",
              }}
            >
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.34em]
                  sm:text-[9px]
                "
                style={{
                  color: palette.antiqueGoldDark,
                }}
              >
                ¿Podrás acompañarnos?
              </p>

              <div
                className="
                  mt-5
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >
                <AttendanceOption
                  value="Sí asistiré"
                  selectedValue={asistencia}
                  onChange={setAsistencia}
                  title="Sí asistiré"
                  description="Será un gusto celebrar juntos."
                />

                <AttendanceOption
                  value="No podré asistir"
                  selectedValue={asistencia}
                  onChange={setAsistencia}
                  title="No podré asistir"
                  description="Agradecemos que nos lo hagas saber."
                />
              </div>
            </div>

            {/* PASES */}

            <AnimatePresence>
              {asistencia === "Sí asistiré" && (
                <motion.div
                  className="
                    mt-9
                    border-t
                    pt-9
                  "
                  style={{
                    borderColor: "rgba(179,106,54,0.26)",
                  }}
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                  }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <label
                      htmlFor="confirmation-passes"
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.34em]
                        sm:text-[9px]
                      "
                      style={{
                        color: palette.antiqueGoldDark,
                      }}
                    >
                      Personas que asistirán
                    </label>

                    <span
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.2em]
                      "
                      style={{
                        color: palette.warmGray,
                      }}
                    >
                      Máximo {pasesAsignados}
                    </span>
                  </div>

                  <select
                    id="confirmation-passes"
                    value={invitados}
                    onChange={(event) =>
                      setInvitados(Number(event.target.value))
                    }
                    className="
                      mt-4
                      w-full
                      appearance-none
                      border
                      bg-[#F9F6EE]
                      px-5
                      py-4
                      text-center
                      font-serif
                      text-base
                      outline-none
                      sm:text-lg
                    "
                    style={{
                      color: palette.ink,
                      borderColor: "rgba(179,106,54,0.34)",
                    }}
                  >
                    {availablePasses.map((passNumber) => (
                      <option key={passNumber} value={passNumber}>
                        {passNumber}{" "}
                        {passNumber === 1 ? "persona" : "personas"}
                      </option>
                    ))}
                  </select>

                  <p
                    className="
                      mt-3
                      text-center
                      font-serif
                      text-[12px]
                      italic
                      sm:text-[13px]
                    "
                    style={{
                      color: palette.warmGray,
                    }}
                  >
                    Esta invitación tiene{" "}
                    {pasesAsignados === 1
                      ? "1 lugar reservado"
                      : `${pasesAsignados} lugares reservados`}.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* MENSAJE */}

            <div
              className="
                mt-9
                border-t
                pt-9
              "
              style={{
                borderColor: "rgba(179,106,54,0.26)",
              }}
            >
              <label
                htmlFor="confirmation-message"
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.34em]
                  sm:text-[9px]
                "
                style={{
                  color: palette.antiqueGoldDark,
                }}
              >
                Mensaje para los novios
              </label>

              <textarea
                id="confirmation-message"
                value={mensajeInvitado}
                onChange={(event) =>
                  setMensajeInvitado(event.target.value)
                }
                placeholder="Escribe un mensaje especial (opcional)"
                rows={4}
                maxLength={500}
                className="
                  mt-4
                  w-full
                  resize-none
                  border
                  bg-[#F9F6EE]
                  px-5
                  py-4
                  font-serif
                  text-[14px]
                  leading-7
                  outline-none
                  sm:text-[15px]
                "
                style={{
                  color: palette.ink,
                  borderColor: "rgba(179,106,54,0.34)",
                }}
              />

              <p
                className="
                  mt-2
                  text-right
                  text-[10px]
                "
                style={{
                  color: palette.warmGray,
                }}
              >
                {mensajeInvitado.length}/500
              </p>
            </div>

            {/* MENSAJES */}

            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  key="confirmation-error"
                  className="
                    mt-7
                    border
                    px-4
                    py-3
                    text-center
                    font-serif
                    text-[13px]
                    sm:text-[14px]
                  "
                  style={{
                    color: palette.error,
                    borderColor: "rgba(139,58,58,0.3)",
                    backgroundColor: "rgba(139,58,58,0.045)",
                  }}
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
                >
                  {error}
                </motion.div>
              )}

              {enviado && !error && (
                <motion.div
                  key="confirmation-success"
                  className="
                    mt-7
                    flex
                    items-center
                    justify-center
                    gap-3
                    border
                    px-4
                    py-3
                    text-center
                    font-serif
                    text-[13px]
                    sm:text-[14px]
                  "
                  style={{
                    color: palette.success,
                    borderColor: "rgba(73,100,77,0.3)",
                    backgroundColor: "rgba(73,100,77,0.05)",
                  }}
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
                >
                  <CheckIcon />
                  Confirmación registrada correctamente.
                </motion.div>
              )}
            </AnimatePresence>

            {/* BOTÓN DE CONFIRMACIÓN */}

            <div className="mt-9 flex justify-center">
              <motion.button
                type="button"
                onClick={enviarConfirmacion}
                disabled={loading}
                className="
                  inline-flex
                  min-h-[58px]
                  min-w-[250px]
                  items-center
                  justify-center
                  gap-3
                  border
                  px-8
                  py-4
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  sm:min-w-[310px]
                "
                style={{
                  backgroundColor: palette.ink,
                  borderColor: palette.ink,
                  color: "#FFFFFF",
                  boxShadow: "0 12px 28px rgba(33,29,26,0.14)",
                }}
                whileHover={
                  loading
                    ? undefined
                    : {
                        y: -2,
                        backgroundColor: palette.inkSoft,
                      }
                }
                whileTap={
                  loading
                    ? undefined
                    : {
                        scale: 0.985,
                      }
                }
              >
                {loading ? (
                  <span
                    className="
                      h-4
                      w-4
                      animate-spin
                      rounded-full
                      border-2
                      border-white/35
                      border-t-white
                    "
                  />
                ) : (
                  <CheckIcon />
                )}

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.24em]
                    sm:text-[9px]
                  "
                >
                  {loading ? "Registrando" : "Confirmar asistencia"}
                </span>
              </motion.button>
            </div>

            <p
              className="
                mx-auto
                mt-6
                max-w-xl
                text-center
                font-serif
                text-[12px]
                italic
                leading-6
                sm:text-[13px]
              "
              style={{
                color: palette.warmGray,
              }}
            >
              Al confirmar, tu respuesta quedará registrada directamente en
              nuestra lista de invitados.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Confirmacion;