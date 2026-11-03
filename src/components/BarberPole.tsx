import React from "react";

interface BarberPoleProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function BarberPole({ size = "md", className = "" }: BarberPoleProps) {
  const sizeClasses = {
    sm: "w-7 h-20",
    md: "w-12 h-36",
    lg: "w-16 h-48",
  }[size];

  // Período de repetición exacto = 64px para ciclo 100% continuo y fluido
  const stripes = [];
  for (let y = -128; y <= 416; y += 32) {
    const isRed = ((y % 64) + 64) % 64 === 0;
    stripes.push({
      y,
      color: isRed ? "#dc2626" : "#1d4ed8",
    });
  }

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${sizeClasses} ${className}`}>
      <svg
        viewBox="0 0 100 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl overflow-visible"
      >
        <defs>
          {/* Máscara de recorte del cilindro interior */}
          <clipPath id="cylinderClip">
            <rect x="22" y="44" width="56" height="192" rx="2" />
          </clipPath>

          {/* Reflejo vertical de cristal en lado izquierdo */}
          <linearGradient id="glassSheen" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="35%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Sombra cilíndrica 3D */}
          <linearGradient id="cylinderShadow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.15" />
            <stop offset="15%" stopColor="#000000" stopOpacity="0" />
            <stop offset="85%" stopColor="#000000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* ================= CILINDRO GIRATORIO ================= */}
        <g clipPath="url(#cylinderClip)">
          {/* Fondo blanco puro del cilindro */}
          <rect x="22" y="44" width="56" height="192" fill="#ffffff" />

          {/* Franjas diagonales girando hacia abajo */}
          {/* Usamos animateTransform nativo de SVG + clase CSS para garantizar rotación hacia abajo en cualquier navegador */}
          <g className="animate-barber-spin">
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="0 64"
              dur="1.1s"
              repeatCount="indefinite"
            />
            {stripes.map((s, idx) => (
              <line
                key={idx}
                x1="-40"
                y1={s.y + 110}
                x2="140"
                y2={s.y - 70}
                stroke={s.color}
                strokeWidth="16"
                strokeLinecap="butt"
              />
            ))}
          </g>

          {/* Reflejo de cristal blanco vertical en el lado izquierdo */}
          <rect x="24" y="44" width="14" height="192" fill="url(#glassSheen)" pointerEvents="none" />

          {/* Sombra cilíndrica para volumen 3D */}
          <rect x="22" y="44" width="56" height="192" fill="url(#cylinderShadow)" pointerEvents="none" />
        </g>

        {/* Borde exterior negro grueso del cilindro */}
        <rect
          x="22"
          y="44"
          width="56"
          height="192"
          rx="2"
          fill="none"
          stroke="#09090b"
          strokeWidth="4"
        />

        {/* ================= PARTE SUPERIOR (DOMO Y COLLARÍN NEGRO) ================= */}
        {/* Domo superior negro */}
        <path
          d="M 23 42 A 27 27 0 0 1 77 42 Z"
          fill="#09090b"
          stroke="#000000"
          strokeWidth="3.5"
        />
        {/* Reflejo curvado blanco en domo superior */}
        <path
          d="M 33 36 A 21 21 0 0 1 55 19"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Collarín superior negro */}
        <rect
          x="18"
          y="38"
          width="64"
          height="10"
          rx="2"
          fill="#18181b"
          stroke="#09090b"
          strokeWidth="3.5"
        />

        {/* ================= PARTE INFERIOR (COLLARÍN Y DOMO NEGRO) ================= */}
        {/* Collarín inferior negro */}
        <rect
          x="18"
          y="232"
          width="64"
          height="10"
          rx="2"
          fill="#18181b"
          stroke="#09090b"
          strokeWidth="3.5"
        />

        {/* Domo inferior negro invertido */}
        <path
          d="M 23 238 A 27 27 0 0 0 77 238 Z"
          fill="#09090b"
          stroke="#000000"
          strokeWidth="3.5"
        />
        {/* Reflejo curvado blanco en domo inferior */}
        <path
          d="M 33 244 A 21 21 0 0 0 55 261"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.8"
        />
      </svg>
    </div>
  );
}
