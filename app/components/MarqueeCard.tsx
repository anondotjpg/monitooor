import Image from "next/image";
import React from "react";

export type MarqueeToken = {
  id: number;
  name: string;
  symbol: string;
  tokenImage: string;       // e.g. "/t1.webp"
  feeEarnerUsername: string;
  feeEarnerAvatar: string;  // e.g. "/c1.webp"
};

type MarqueeCardProps = {
  token: MarqueeToken;
  className?: string;
};

export function MarqueeCard({ token, className = "" }: MarqueeCardProps) {
  return (
    <div
      className={`
        relative
        h-60 w-80 flex-shrink-0
        rounded-2xl
        bg-[#050506]
        border border-white/10
        overflow-hidden
        px-5 py-4
        flex flex-col justify-between
        ${className}
      `}
    >
      {/* neutral vignette – no color tint */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_15%_0%,rgba(255,255,255,0.14),transparent_55%),radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.95),transparent_60%)]
          opacity-55
        "
      />

      {/* TOP: token image + symbol/name */}
      <div className="relative flex items-center gap-4">
        <div
          className="
            h-12 w-12 rounded-2xl overflow-hidden
            bg-[#151515]
            border border-white/10
            flex items-center justify-center
          "
        >
          <Image
            src={token.tokenImage}
            alt={`${token.name} logo`}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col text-left min-w-0">
          {/* symbol over name, bigger */}
          <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-neutral-300">
            {token.symbol}
          </span>
          <p className="mt-0.5 text-[18px] font-semibold text-white truncate max-w-[190px]">
            {token.name}
          </p>
        </div>
      </div>

      {/* BOTTOM: earner + X pill */}
      <div className="relative mt-5 flex items-end justify-between">
        <div className="flex flex-col">
          <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
            earner
          </span>
          <div className="mt-1.5 flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-full overflow-hidden border border-white/15 bg-[#111111]">
              <Image
                src={token.feeEarnerAvatar}
                alt={`${token.feeEarnerUsername} avatar`}
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-sm text-neutral-200 truncate max-w-[140px]">
              {token.feeEarnerUsername}
            </span>
          </div>
        </div>

        <div
          className="
            flex items-center gap-2
            rounded-full border border-white/10
            bg-black/80
            px-3 py-1.5
            text-[11px] text-neutral-300
          "
        >
          <span className="text-[15px] leading-none">𝕏</span>
          <span className="uppercase tracking-[0.18em]">
            view
          </span>
        </div>
      </div>
    </div>
  );
}