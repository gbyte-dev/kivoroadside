import React from "react";

function USMapGraphic() {
  return (
    <div className="relative w-full max-w-[460px] lg:max-w-[500px] mx-auto flex items-center justify-center">
      <svg
        viewBox="15 120 570 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto select-none drop-shadow-sm"
      >
        <g fill="#DBDFE6" stroke="#FFFFFF" strokeWidth="1.2" strokeLinejoin="round">
          {/* Main Continental USA Geographic Contour */}
          <path d="M 125,130 C 140,130 155,128 155,128 L 220,132 L 270,134 L 320,135 L 370,140 C 390,140 405,148 405,148 L 415,140 C 425,155 422,175 422,175 C 435,185 450,180 450,180 C 470,165 488,158 488,158 L 510,165 C 528,155 540,172 540,172 L 565,168 L 575,182 C 560,195 572,210 572,210 C 555,245 545,260 545,260 L 532,275 C 520,310 495,350 495,350 L 482,342 C 478,310 465,300 465,300 L 445,295 L 438,312 L 408,308 C 390,325 365,335 365,335 L 342,298 L 320,292 L 310,312 L 290,288 L 268,288 L 258,258 L 228,258 C 200,250 180,228 180,228 C 165,232 155,215 155,215 C 142,228 135,210 135,210 C 120,215 118,195 118,195 C 130,175 125,130 125,130 Z" />

          {/* Internal State Boundaries */}
          <path
            d="M 155,128 L 155,215 M 220,132 L 210,250 M 270,134 L 268,288 M 320,135 L 310,312 M 370,140 L 365,335 M 422,175 L 438,312 M 488,158 L 482,342"
            fill="none"
            stroke="#C4C9D2"
            strokeWidth="1"
          />
          <path
            d="M 125,160 L 320,175 M 130,190 L 422,205 M 155,215 L 450,230 M 180,228 L 495,260"
            fill="none"
            stroke="#C4C9D2"
            strokeWidth="1"
          />

          {/* Alaska Contour (Bottom Left) */}
          <path d="M 45,265 C 70,260 85,265 85,265 C 105,290 115,320 115,320 C 100,345 80,335 80,335 C 60,338 52,315 52,315 Z" />
          <path d="M 38,325 L 22,342 L 32,352 Z" />

          {/* Hawaii Islands (Bottom Left-Center) */}
          <circle cx="195" cy="325" r="3" />
          <circle cx="210" cy="322" r="3.5" />
          <circle cx="225" cy="318" r="4.5" />
          <circle cx="242" cy="312" r="5.5" />
        </g>

        {/* Dense Red Location Markers (#db0020) */}
        <g fill="#DB0020">
          {/* East Coast Cluster */}
          <circle cx="525" cy="190" r="2.2" />
          <circle cx="530" cy="195" r="2" />
          <circle cx="522" cy="200" r="2.2" />
          <circle cx="535" cy="185" r="2" />
          <circle cx="540" cy="180" r="2" />
          <circle cx="545" cy="195" r="2.2" />
          <circle cx="532" cy="210" r="2" />
          <circle cx="528" cy="220" r="2.2" />
          <circle cx="520" cy="230" r="2" />
          <circle cx="512" cy="240" r="2.2" />
          <circle cx="505" cy="250" r="2" />
          <circle cx="500" cy="265" r="2.2" />
          <circle cx="495" cy="280" r="2" />
          <circle cx="490" cy="295" r="2.2" />
          <circle cx="485" cy="315" r="2" />
          <circle cx="480" cy="325" r="2" />

          {/* Midwest & Great Lakes Cluster */}
          <circle cx="465" cy="185" r="2" />
          <circle cx="455" cy="175" r="2.2" />
          <circle cx="450" cy="195" r="2.2" />
          <circle cx="440" cy="190" r="2" />
          <circle cx="435" cy="205" r="2" />
          <circle cx="425" cy="200" r="2.2" />
          <circle cx="415" cy="210" r="2.2" />
          <circle cx="405" cy="220" r="2" />
          <circle cx="395" cy="230" r="2.2" />
          <circle cx="385" cy="215" r="2" />
          <circle cx="375" cy="205" r="2.2" />
          <circle cx="365" cy="225" r="2" />

          {/* South & Texas Cluster */}
          <circle cx="345" cy="275" r="2.2" />
          <circle cx="335" cy="295" r="2" />
          <circle cx="325" cy="305" r="2.2" />
          <circle cx="315" cy="280" r="2" />
          <circle cx="305" cy="265" r="2.2" />
          <circle cx="295" cy="255" r="2" />
          <circle cx="405" cy="260" r="2.2" />
          <circle cx="425" cy="250" r="2" />
          <circle cx="445" cy="255" r="2.2" />
          <circle cx="460" cy="270" r="2" />

          {/* West Coast Cluster */}
          <circle cx="135" cy="155" r="2.2" />
          <circle cx="130" cy="170" r="2" />
          <circle cx="140" cy="185" r="2" />
          <circle cx="150" cy="200" r="2.2" />
          <circle cx="160" cy="215" r="2" />
          <circle cx="170" cy="230" r="2.2" />
          <circle cx="180" cy="240" r="2" />
          <circle cx="195" cy="235" r="2" />

          {/* Central States Cluster */}
          <circle cx="215" cy="165" r="2" />
          <circle cx="235" cy="185" r="2" />
          <circle cx="255" cy="160" r="2" />
          <circle cx="275" cy="195" r="2" />
          <circle cx="295" cy="175" r="2" />
          <circle cx="315" cy="205" r="2" />
          <circle cx="335" cy="170" r="2" />
          <circle cx="355" cy="190" r="2" />
          <circle cx="245" cy="225" r="2.2" />

          {/* Alaska & Hawaii Dots */}
          <circle cx="70" cy="290" r="2" />
          <circle cx="225" cy="318" r="2" />
        </g>
      </svg>
    </div>
  );
}

export default function NationwideCoverageSection() {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header: Left-aligned on mobile, Centered on md/desktop */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-4 md:mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-normal text-gray-900 tracking-tight leading-snug">
            More than 7,100 locations and <br className="hidden sm:inline" />
            MobileGlassShops nationwide.
          </h2>
          {/* Red Underline Accent Bar: Left-aligned on mobile, Centered on md/desktop */}
          <div className="mt-3 w-16 sm:w-20 h-[3px] bg-[#db0020] rounded-full ml-0 md:mx-auto" />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-center">
          {/* US Map Graphic */}
          <div className="lg:col-span-7 flex justify-center">
            <USMapGraphic />
          </div>

          {/* Description Paragraph */}
          <div className="lg:col-span-5 text-left">
            <p className="text-[#525656] text-sm sm:text-base leading-relaxed max-w-[440px] font-normal mt-2 lg:mt-0">
              Safelite AutoGlass is the only national auto glass repair and
              replacement service. Safelite is available to more than 97% of U.S.
              drivers and all 50 states.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}