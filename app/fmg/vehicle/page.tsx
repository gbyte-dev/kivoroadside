"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Vehicle Data
const YEARS = Array.from({ length: 47 }, (_, i) => 2026 - i); // 2026 down to 1980

const MAKES_AND_MODELS: Record<string, string[]> = {
  Acura: ["MDX", "RDX", "TLX", "Integra", "ILX", "RLX", "TSX", "ZDX"],
  Audi: ["A4", "A6", "Q5", "Q7", "Q3", "A3", "A5", "Q8", "e-tron", "S4", "S5", "TT"],
  BMW: ["3 Series", "5 Series", "X3", "X5", "X1", "7 Series", "X7", "4 Series", "X4", "X6", "M3", "M5", "i4", "iX"],
  Buick: ["Encore GX", "Envision", "Enclave", "Envista", "Encore", "LaCrosse", "Regal"],
  Cadillac: ["Escalade", "XT5", "XT4", "XT6", "CT5", "CT4", "CTS", "SRX", "Lyriq"],
  Chevrolet: [
    "Silverado 1500", "Equinox", "Malibu", "Tahoe", "Traverse", "Colorado",
    "Suburban", "Blazer", "Trailblazer", "Trax", "Camaro", "Corvette",
    "Silverado 2500 HD", "Bolt EV", "Impala", "Cruze"
  ],
  Chrysler: ["Pacifica", "300", "Voyager", "Town & Country", "200"],
  Dodge: ["Charger", "Challenger", "Durango", "Grand Caravan", "Hornet", "Journey", "Dart"],
  Ford: [
    "F-150", "Explorer", "Escape", "Mustang", "Edge", "F-250 Super Duty",
    "Ranger", "Bronco", "Bronco Sport", "Expedition", "Maverick", "Transit",
    "Mustang Mach-E", "Fusion", "Focus", "F-350 Super Duty"
  ],
  GMC: ["Sierra 1500", "Terrain", "Acadia", "Yukon", "Canyon", "Sierra 2500 HD", "Yukon XL"],
  Honda: [
    "Civic", "Accord", "CR-V", "Pilot", "Odyssey", "HR-V", "Ridgeline",
    "Passport", "Insight", "Fit", "Element"
  ],
  Hyundai: [
    "Elantra", "Sonata", "Tucson", "Santa Fe", "Palisade", "Kona",
    "Venue", "Ioniq 5", "Ioniq 6", "Santa Cruz", "Accent", "Genesis"
  ],
  Infiniti: ["QX60", "Q50", "QX50", "QX80", "QX55", "QX30", "Q60", "G37"],
  Jeep: [
    "Grand Cherokee", "Wrangler", "Cherokee", "Compass", "Gladiator",
    "Renegade", "Wagoneer", "Grand Wagoneer", "Patriot"
  ],
  Kia: [
    "Forte", "K5", "Sportage", "Sorento", "Telluride", "Soul",
    "Seltos", "Carnival", "EV6", "EV9", "Optima", "Stinger", "Rio"
  ],
  Lexus: [
    "RX 350", "ES 350", "NX 300", "GX 460", "IS 300", "UX 200",
    "TX 350", "RX 450h", "LX 600", "RC 350", "LS 500"
  ],
  Lincoln: ["Aviator", "Corsair", "Nautilus", "Navigator", "MKZ", "MKX"],
  Mazda: [
    "CX-5", "Mazda3", "CX-30", "CX-9", "CX-50", "CX-90",
    "Mazda6", "MX-5 Miata", "CX-3"
  ],
  "Mercedes-Benz": [
    "C-Class", "E-Class", "GLC", "GLE", "S-Class", "CLA",
    "GLA", "GLS", "GLB", "A-Class", "Sprinter", "EQE", "EQS"
  ],
  Nissan: [
    "Altima", "Rogue", "Sentra", "Pathfinder", "Frontier",
    "Murano", "Kicks", "Titan", "Armada", "Versa", "Maxima", "Ariya", "Leaf"
  ],
  Porsche: ["Macan", "Cayenne", "911", "Panamera", "Taycan", "Boxster", "Cayman"],
  Ram: ["1500", "2500", "3500", "ProMaster 1500", "ProMaster 2500", "1500 Classic"],
  Subaru: [
    "Outback", "Forester", "Crosstrek", "Ascent", "Impreza",
    "Legacy", "WRX", "BRZ", "Solterra"
  ],
  Tesla: ["Model 3", "Model Y", "Model S", "Model X", "Cybertruck"],
  Toyota: [
    "Camry", "Corolla", "RAV4", "Highlander", "Tacoma", "Tundra",
    "Prius", "4Runner", "Sienna", "Venza", "Crown", "Grand Highlander",
    "Sequoia", "Corolla Cross", "Avalon", "Yaris"
  ],
  Volkswagen: [
    "Jetta", "Tiguan", "Atlas", "Passat", "Golf", "Taos",
    "ID.4", "Atlas Cross Sport", "GTI", "Beetle"
  ],
  Volvo: ["XC90", "XC60", "XC40", "S60", "S90", "V60", "V90", "C40"]
};

const DEFAULT_BODY_STYLES = [
  "4 Door Sedan",
  "4 Door SUV / Crossover",
  "4 Door Crew Cab Pickup",
  "2 Door Coupe",
  "4 Door Hatchback",
  "2 Door Regular Cab Pickup",
  "4 Door Extended Cab Pickup",
  "Passenger Van / Minivan",
  "2 Door Convertible"
];

const MODEL_SPECIFIC_STYLES: Record<string, string[]> = {
  // Pickups
  "F-150": ["4 Door Crew Cab Pickup", "4 Door SuperCab Pickup", "2 Door Regular Cab Pickup"],
  "Silverado 1500": ["4 Door Crew Cab Pickup", "4 Door Double Cab Pickup", "2 Door Regular Cab Pickup"],
  "Ram 1500": ["4 Door Crew Cab Pickup", "4 Door Quad Cab Pickup", "2 Door Regular Cab Pickup"],
  "Tacoma": ["4 Door Double Cab Pickup", "2 Door Access Cab Pickup"],
  "Tundra": ["4 Door CrewMax Pickup", "4 Door Double Cab Pickup"],
  "Sierra 1500": ["4 Door Crew Cab Pickup", "4 Door Double Cab Pickup", "2 Door Regular Cab Pickup"],
  "Colorado": ["4 Door Crew Cab Pickup", "4 Door Extended Cab Pickup"],
  "Ranger": ["4 Door SuperCrew Pickup", "4 Door SuperCab Pickup"],
  "Gladiator": ["4 Door Crew Cab Pickup"],
  "Maverick": ["4 Door Crew Cab Pickup"],
  "Cybertruck": ["4 Door Crew Cab Pickup"],
  // SUVs
  "RAV4": ["4 Door SUV / Crossover"],
  "CR-V": ["4 Door SUV / Crossover"],
  "Highlander": ["4 Door SUV / Crossover"],
  "Grand Cherokee": ["4 Door SUV / Crossover"],
  "Wrangler": ["4 Door SUV / Crossover", "2 Door SUV"],
  "Explorer": ["4 Door SUV / Crossover"],
  "Escape": ["4 Door SUV / Crossover"],
  "Equinox": ["4 Door SUV / Crossover"],
  "Tahoe": ["4 Door SUV"],
  "Suburban": ["4 Door SUV"],
  "Yukon": ["4 Door SUV"],
  "Outback": ["4 Door Wagon / Crossover"],
  "Forester": ["4 Door SUV / Crossover"],
  "Crosstrek": ["4 Door SUV / Crossover"],
  "Rogue": ["4 Door SUV / Crossover"],
  "Telluride": ["4 Door SUV / Crossover"],
  "Palisade": ["4 Door SUV / Crossover"],
  "Pilot": ["4 Door SUV / Crossover"],
  "Model Y": ["4 Door SUV / Crossover"],
  "Model X": ["4 Door SUV / Crossover"],
  // Sedans & Coupes
  "Camry": ["4 Door Sedan"],
  "Corolla": ["4 Door Sedan", "4 Door Hatchback"],
  "Civic": ["4 Door Sedan", "4 Door Hatchback", "2 Door Coupe"],
  "Accord": ["4 Door Sedan", "2 Door Coupe"],
  "Altima": ["4 Door Sedan"],
  "Model 3": ["4 Door Sedan"],
  "Mustang": ["2 Door Coupe", "2 Door Convertible"],
  "Challenger": ["2 Door Coupe"],
  "Charger": ["4 Door Sedan"],
  // Minivans
  "Sienna": ["Passenger Van / Minivan"],
  "Odyssey": ["Passenger Van / Minivan"],
  "Pacifica": ["Passenger Van / Minivan"],
  "Carnival": ["Multi-Purpose Vehicle / Minivan"]
};

const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];

export default function FmgVehiclePage() {
  // Mode: primary cascading dropdowns vs alternate lookup (Plate / VIN)
  const [lookupMode, setLookupMode] = useState<"standard" | "plate" | "vin">("standard");

  // Cascading Dropdown States
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedMake, setSelectedMake] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [selectedStyle, setSelectedStyle] = useState<string>("");

  // Validation & Error States
  const [formAttempted, setFormAttempted] = useState<boolean>(false);

  // License Plate States
  const [plateNumber, setPlateNumber] = useState<string>("");
  const [plateState, setPlateState] = useState<string>("OH");
  const [plateLoading, setPlateLoading] = useState<boolean>(false);
  const [plateError, setPlateError] = useState<string>("");

  // VIN States
  const [vinNumber, setVinNumber] = useState<string>("");
  const [vinLoading, setVinLoading] = useState<boolean>(false);
  const [vinError, setVinError] = useState<string>("");
  const [showVinHelpModal, setShowVinHelpModal] = useState<boolean>(false);

  // Modals & Drawers
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Sticky header scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute available options
  const makeOptions = selectedYear ? Object.keys(MAKES_AND_MODELS).sort() : [];
  const modelOptions = selectedMake ? MAKES_AND_MODELS[selectedMake] || [] : [];
  const styleOptions = selectedModel
    ? MODEL_SPECIFIC_STYLES[selectedModel] || DEFAULT_BODY_STYLES
    : [];

  // Handlers for cascading dropdowns
  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
    setSelectedMake("");
    setSelectedModel("");
    setSelectedStyle("");
  };

  const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMake(e.target.value);
    setSelectedModel("");
    setSelectedStyle("");
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(e.target.value);
    setSelectedStyle("");
  };

  const handleStyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStyle(e.target.value);
  };

  const isFormComplete = Boolean(
    selectedYear && selectedMake && selectedModel && selectedStyle
  );

  // Plate lookup handler
  const handlePlateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!plateNumber.trim()) {
      setPlateError("Please enter your license plate number");
      return;
    }
    setPlateError("");
    setPlateLoading(true);
    setTimeout(() => {
      setPlateLoading(false);
      setSelectedYear("2024");
      setSelectedMake("Honda");
      setSelectedModel("CR-V");
      setSelectedStyle("4 Door SUV / Crossover");
      setLookupMode("standard");
    }, 700);
  };

  // VIN lookup handler
  const handleVinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanVin = vinNumber.trim().toUpperCase();
    if (cleanVin.length !== 17) {
      setVinError("Invalid VIN. Please make sure that you entered the correct 17-digit, alpha-numeric number. VINs do not contain the letters I, O, or Q.");
      return;
    }
    setVinError("");
    setVinLoading(true);
    setTimeout(() => {
      setVinLoading(false);
      setSelectedYear("2023");
      setSelectedMake("Toyota");
      setSelectedModel("RAV4");
      setSelectedStyle("4 Door SUV / Crossover");
      setLookupMode("standard");
    }, 700);
  };

  // Continue action
  const handleContinue = (e: React.MouseEvent) => {
    if (!isFormComplete) {
      e.preventDefault();
      setFormAttempted(true);
      return;
    }
    // Store vehicle details in sessionStorage
    try {
      sessionStorage.setItem(
        "safelite_selected_vehicle",
        JSON.stringify({
          year: selectedYear,
          make: selectedMake,
          model: selectedModel,
          style: selectedStyle
        })
      );
    } catch {
      // Ignore storage errors in sandbox
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] flex flex-col font-sans">
      {/* 1. STICKY FUNNEL HEADER (Exact Safelite Component) */}
      <header
        className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${
          isScrolled ? "shadow-[0_0_10px_0_rgba(0,0,0,0.2)]" : "border-b border-[#e5e7eb]"
        }`}
      >
        {/* Top 5px Red Progress Bar (Step 1 Vehicle = 5%) */}
        <div className="h-[5px] w-full bg-[#e4f1f7] relative">
          <div
            className="h-[5px] bg-[#db0020] transition-all duration-500 ease-out"
            style={{ width: "5%" }}
          />
        </div>

        {/* Header Content Container */}
        <div className="mx-auto flex max-w-[1140px] items-center justify-between px-4 py-3 md:py-4">
          {/* Left: Safelite Logo */}
          <div className="flex items-center">
            <Link href="/" className="inline-block">
              <Image
                src="/imagesv3/default-source/logo/safelite-logo-2024.svg"
                alt="Safelite AutoGlass"
                width={165}
                height={38}
                className="w-[120px] md:w-[165px] h-auto"
                priority
              />
            </Link>
          </div>

          {/* Right: Chat Now & Step Menu Pill */}
          <div className="flex items-center gap-3 md:gap-5">
            {/* Chat Now Button */}
            <button
              type="button"
              onClick={() => setIsChatOpen(true)}
              className="flex items-center gap-2 text-[#0070d1] hover:text-[#005fb2] transition-colors focus:outline-none"
              aria-label="Chat with assistant"
            >
              <span className="hidden sm:inline font-semibold text-xs tracking-wider uppercase">
                Chat Now
              </span>
              <svg
                className="w-8 h-8 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="#2e6fb6" />
                <path
                  d="M18.3 12c0 3.5-2.8 6.3-6.3 6.3-1.2 0-2.4-.4-3.4-1l-2.3.7s-.5.1-.3-.4.5-1.7.7-2.2c-.6-1-1-2.1-1-3.3 0-3.5 2.8-6.3 6.3-6.3 3.5-.1 6.3 2.7 6.3 6.2z"
                  fill="#ffffff"
                />
                <circle cx="10.2" cy="12" r=".6" fill="#2e6fb6" />
                <circle cx="12" cy="12" r=".6" fill="#2e6fb6" />
                <circle cx="13.8" cy="12" r=".6" fill="#2e6fb6" />
              </svg>
            </button>

            {/* Step 1 / 4 Menu Pill Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 shadow-[0_1px_5px_0_rgba(0,0,0,0.15)] hover:bg-gray-50 focus:outline-none transition-all cursor-pointer"
              aria-label="Open step navigation menu"
            >
              <span className="text-sm font-semibold text-[#0070d1]">1 / 4</span>
              <div className="flex flex-col justify-between w-4 h-3 scale-90">
                <span className="block h-[2px] w-full bg-[#0070d1] rounded-full" />
                <span className="block h-[2px] w-full bg-[#0070d1] rounded-full" />
                <span className="block h-[2px] w-full bg-[#0070d1] rounded-full" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* 2. MAIN VEHICLE FLOW (Exact Safelite vehicle.vue Layout) */}
      <main className="flex-1">
        <div className="mx-auto max-w-[680px] px-4 pt-6 pb-16 md:pt-10 md:pb-20">
          {/* SubHeader Widget (siteSubHeader) */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-[28px] font-bold text-[#000] tracking-tight leading-tight">
              What kind of vehicle do you drive?
            </h1>
            <p className="mt-1 text-sm md:text-base text-[#4d5151]">
              Please tell us your vehicle information so we can find the right glass for you.
            </p>
          </div>

          {/* STANDARD YMM DROPDOWNS VIEW */}
          {lookupMode === "standard" && (
            <div className="space-y-6">
              {/* Question 1: Year */}
              <div className="dropdown-question">
                <label
                  htmlFor="yearQuestionField"
                  className="block text-sm md:text-base font-semibold text-[#000] mb-2"
                >
                  What is the year of your vehicle?
                </label>
                <div className="relative">
                  <select
                    id="yearQuestionField"
                    value={selectedYear}
                    onChange={handleYearChange}
                    className="w-full min-h-[3rem] md:min-h-[3.5rem] px-4 pr-10 rounded-lg border border-[#8e9292] bg-white text-base text-[#4d5151] shadow-[0_1px_5px_0_rgba(0,0,0,0.15)] appearance-none cursor-pointer focus:outline-none focus:ring-[2.5px] focus:ring-[#0070d1] focus:border-transparent hover:ring-[3px] hover:ring-[#9fcee6] transition-all"
                  >
                    <option value="" disabled>
                      Select year
                    </option>
                    {YEARS.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-[#1474a2]">
                    <svg className="h-3 w-3 fill-current" viewBox="0 0 16 8.89">
                      <path d="M8 8.89c-.24 0-.46-.09-.63-.26L.26 1.53a.901.901 0 0 1 0-1.27C.43.1.66 0 .9 0s.47.1.64.26L8 6.74 14.47.27c.17-.17.4-.27.64-.27s.47.1.63.27c.17.17.26.4.26.64s-.1.47-.27.63l-7.1 7.09a.86.86 0 0 1-.63.26z" />
                    </svg>
                  </div>
                </div>
                {formAttempted && !selectedYear && (
                  <p className="mt-1.5 text-xs text-[#db0020] font-medium">
                    Please select your vehicle year
                  </p>
                )}
              </div>

              {/* Question 2: Make */}
              <div className="dropdown-question">
                <label
                  htmlFor="makeQuestionField"
                  className="block text-sm md:text-base font-semibold text-[#000] mb-2"
                >
                  What is the make of your vehicle?
                </label>
                <div className="relative">
                  <select
                    id="makeQuestionField"
                    value={selectedMake}
                    onChange={handleMakeChange}
                    disabled={!selectedYear}
                    className="w-full min-h-[3rem] md:min-h-[3.5rem] px-4 pr-10 rounded-lg border border-[#8e9292] bg-white text-base text-[#4d5151] shadow-[0_1px_5px_0_rgba(0,0,0,0.15)] appearance-none cursor-pointer focus:outline-none focus:ring-[2.5px] focus:ring-[#0070d1] focus:border-transparent hover:ring-[3px] hover:ring-[#9fcee6] transition-all disabled:bg-[#f5f5f5] disabled:text-[#8e9292] disabled:cursor-not-allowed disabled:shadow-none disabled:hover:ring-0"
                  >
                    <option value="" disabled>
                      Select make
                    </option>
                    {makeOptions.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-[#1474a2]">
                    <svg className="h-3 w-3 fill-current" viewBox="0 0 16 8.89">
                      <path d="M8 8.89c-.24 0-.46-.09-.63-.26L.26 1.53a.901.901 0 0 1 0-1.27C.43.1.66 0 .9 0s.47.1.64.26L8 6.74 14.47.27c.17-.17.4-.27.64-.27s.47.1.63.27c.17.17.26.4.26.64s-.1.47-.27.63l-7.1 7.09a.86.86 0 0 1-.63.26z" />
                    </svg>
                  </div>
                </div>
                {formAttempted && selectedYear && !selectedMake && (
                  <p className="mt-1.5 text-xs text-[#db0020] font-medium">
                    Please select your vehicle make
                  </p>
                )}
              </div>

              {/* Question 3: Model */}
              <div className="dropdown-question">
                <label
                  htmlFor="modelQuestionField"
                  className="block text-sm md:text-base font-semibold text-[#000] mb-2"
                >
                  What is the model of your vehicle?
                </label>
                <div className="relative">
                  <select
                    id="modelQuestionField"
                    value={selectedModel}
                    onChange={handleModelChange}
                    disabled={!selectedMake}
                    className="w-full min-h-[3rem] md:min-h-[3.5rem] px-4 pr-10 rounded-lg border border-[#8e9292] bg-white text-base text-[#4d5151] shadow-[0_1px_5px_0_rgba(0,0,0,0.15)] appearance-none cursor-pointer focus:outline-none focus:ring-[2.5px] focus:ring-[#0070d1] focus:border-transparent hover:ring-[3px] hover:ring-[#9fcee6] transition-all disabled:bg-[#f5f5f5] disabled:text-[#8e9292] disabled:cursor-not-allowed disabled:shadow-none disabled:hover:ring-0"
                  >
                    <option value="" disabled>
                      Select model
                    </option>
                    {modelOptions.map((mod) => (
                      <option key={mod} value={mod}>
                        {mod}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-[#1474a2]">
                    <svg className="h-3 w-3 fill-current" viewBox="0 0 16 8.89">
                      <path d="M8 8.89c-.24 0-.46-.09-.63-.26L.26 1.53a.901.901 0 0 1 0-1.27C.43.1.66 0 .9 0s.47.1.64.26L8 6.74 14.47.27c.17-.17.4-.27.64-.27s.47.1.63.27c.17.17.26.4.26.64s-.1.47-.27.63l-7.1 7.09a.86.86 0 0 1-.63.26z" />
                    </svg>
                  </div>
                </div>
                {formAttempted && selectedMake && !selectedModel && (
                  <p className="mt-1.5 text-xs text-[#db0020] font-medium">
                    Please select your vehicle model
                  </p>
                )}
              </div>

              {/* Question 4: Body Style */}
              <div className="dropdown-question">
                <label
                  htmlFor="styleQuestionField"
                  className="block text-sm md:text-base font-semibold text-[#000] mb-2"
                >
                  What is the body style of your vehicle?
                </label>
                <div className="relative">
                  <select
                    id="styleQuestionField"
                    value={selectedStyle}
                    onChange={handleStyleChange}
                    disabled={!selectedModel}
                    className="w-full min-h-[3rem] md:min-h-[3.5rem] px-4 pr-10 rounded-lg border border-[#8e9292] bg-white text-base text-[#4d5151] shadow-[0_1px_5px_0_rgba(0,0,0,0.15)] appearance-none cursor-pointer focus:outline-none focus:ring-[2.5px] focus:ring-[#0070d1] focus:border-transparent hover:ring-[3px] hover:ring-[#9fcee6] transition-all disabled:bg-[#f5f5f5] disabled:text-[#8e9292] disabled:cursor-not-allowed disabled:shadow-none disabled:hover:ring-0"
                  >
                    <option value="" disabled>
                      Select style
                    </option>
                    {styleOptions.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-[#1474a2]">
                    <svg className="h-3 w-3 fill-current" viewBox="0 0 16 8.89">
                      <path d="M8 8.89c-.24 0-.46-.09-.63-.26L.26 1.53a.901.901 0 0 1 0-1.27C.43.1.66 0 .9 0s.47.1.64.26L8 6.74 14.47.27c.17-.17.4-.27.64-.27s.47.1.63.27c.17.17.26.4.26.64s-.1.47-.27.63l-7.1 7.09a.86.86 0 0 1-.63.26z" />
                    </svg>
                  </div>
                </div>
                {formAttempted && selectedModel && !selectedStyle && (
                  <p className="mt-1.5 text-xs text-[#db0020] font-medium">
                    Please select your vehicle style
                  </p>
                )}
              </div>

              {/* Alternate Lookup Prompt (License Plate / VIN) */}
              <div className="pt-2 text-center">
                <p className="text-xs md:text-sm text-[#4d5151]">
                  Don&apos;t know your vehicle?{" "}
                  <button
                    type="button"
                    onClick={() => setLookupMode("plate")}
                    className="font-semibold text-[#0070d1] hover:underline cursor-pointer"
                  >
                    Look up by License Plate
                  </button>{" "}
                  or{" "}
                  <button
                    type="button"
                    onClick={() => setLookupMode("vin")}
                    className="font-semibold text-[#0070d1] hover:underline cursor-pointer"
                  >
                    VIN
                  </button>
                </p>
              </div>
            </div>
          )}

          {/* LICENSE PLATE LOOKUP VIEW */}
          {lookupMode === "plate" && (
            <form onSubmit={handlePlateSubmit} className="space-y-6">
              <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-5 md:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-base font-bold text-gray-900">
                    License Plate Lookup
                  </h2>
                  <button
                    type="button"
                    onClick={() => setLookupMode("standard")}
                    className="text-xs font-semibold text-[#0070d1] hover:underline"
                  >
                    ← Back to Year, Make, Model
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-1">
                    <label htmlFor="plateState" className="block text-xs font-semibold text-gray-700 mb-1.5">
                      State
                    </label>
                    <select
                      id="plateState"
                      value={plateState}
                      onChange={(e) => setPlateState(e.target.value)}
                      className="w-full min-h-[3rem] px-3.5 rounded-lg border border-[#8e9292] bg-white text-sm text-[#4d5151] focus:outline-none focus:ring-[2px] focus:ring-[#0070d1]"
                    >
                      {US_STATES.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="plateNumber" className="block text-xs font-semibold text-gray-700 mb-1.5">
                      License Plate Number
                    </label>
                    <input
                      id="plateNumber"
                      type="text"
                      placeholder="e.g. ABC 1234"
                      value={plateNumber}
                      onChange={(e) => setPlateNumber(e.target.value.toUpperCase())}
                      className="w-full min-h-[3rem] px-3.5 uppercase rounded-lg border border-[#8e9292] bg-white text-sm text-[#4d5151] placeholder:text-gray-400 focus:outline-none focus:ring-[2px] focus:ring-[#0070d1]"
                    />
                  </div>
                </div>

                {plateError && (
                  <p className="mt-2 text-xs text-[#db0020] font-medium">{plateError}</p>
                )}

                <button
                  type="submit"
                  disabled={plateLoading}
                  className="mt-5 w-full rounded-full bg-[#0070d1] py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#005fb2] disabled:bg-gray-300 transition-colors cursor-pointer"
                >
                  {plateLoading ? "Searching plate..." : "Find My Vehicle"}
                </button>
              </div>
            </form>
          )}

          {/* VIN LOOKUP VIEW */}
          {lookupMode === "vin" && (
            <form onSubmit={handleVinSubmit} className="space-y-6">
              <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-5 md:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-base font-bold text-gray-900">
                    Vehicle Identification Number (VIN) Lookup
                  </h2>
                  <button
                    type="button"
                    onClick={() => setLookupMode("standard")}
                    className="text-xs font-semibold text-[#0070d1] hover:underline"
                  >
                    ← Back to Year, Make, Model
                  </button>
                </div>

                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label htmlFor="vinNumber" className="block text-xs font-semibold text-gray-700">
                      17-Character VIN
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowVinHelpModal(true)}
                      className="text-xs font-medium text-[#0070d1] hover:underline"
                    >
                      Where is my VIN?
                    </button>
                  </div>
                  <input
                    id="vinNumber"
                    type="text"
                    maxLength={17}
                    placeholder="Enter 17-digit VIN"
                    value={vinNumber}
                    onChange={(e) => setVinNumber(e.target.value.toUpperCase())}
                    className="w-full min-h-[3rem] px-3.5 uppercase font-mono tracking-wider rounded-lg border border-[#8e9292] bg-white text-sm text-[#4d5151] placeholder:text-gray-400 focus:outline-none focus:ring-[2px] focus:ring-[#0070d1]"
                  />
                  <div className="mt-1 flex justify-between text-[11px] text-gray-400">
                    <span>Alpha-numeric, excluding letters I, O, Q</span>
                    <span>{vinNumber.length}/17</span>
                  </div>
                </div>

                {vinError && (
                  <p className="mt-2 text-xs text-[#db0020] font-medium">{vinError}</p>
                )}

                <button
                  type="submit"
                  disabled={vinLoading}
                  className="mt-5 w-full rounded-full bg-[#0070d1] py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#005fb2] disabled:bg-gray-300 transition-colors cursor-pointer"
                >
                  {vinLoading ? "Verifying VIN..." : "Find My Vehicle"}
                </button>
              </div>
            </form>
          )}

          {/* VEHICLE CONFIRMATION PILL (When all selections are made) */}
          {isFormComplete && (
            <div className="mt-6 rounded-xl border border-green-200 bg-green-50/80 p-4 flex items-center gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-600 text-white text-xs font-bold">
                ✓
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-green-800">
                  Confirmed Vehicle
                </p>
                <p className="text-base font-bold text-gray-900">
                  {selectedYear} {selectedMake} {selectedModel} ({selectedStyle})
                </p>
              </div>
            </div>
          )}

          {/* 3. BOTTOM NAVIGATION BAR (navbar / FunnelFooterWidget) */}
          <div className="mt-10 md:mt-14 pt-6 border-t border-gray-200 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
            <Link
              href="/"
              className="text-[#0070d1] hover:underline font-semibold text-sm md:text-base py-2 transition-colors"
            >
              Back
            </Link>

            <Link
              href={isFormComplete ? "/schedule-service" : "#"}
              onClick={handleContinue}
              className={`w-full sm:w-auto min-w-[170px] text-center py-3.5 px-8 rounded-full font-semibold text-base transition-all ${
                isFormComplete
                  ? "bg-[#db0020] text-white hover:bg-[#b3001a] shadow-[0_2px_8px_rgba(219,0,32,0.3)] active:scale-[0.99] cursor-pointer"
                  : "bg-[#e3e4e4] text-[#727676] cursor-not-allowed"
              }`}
            >
              Continue
            </Link>
          </div>
        </div>
      </main>

      {/* 4. MINIMAL FUNNEL FOOTER */}
      <footer className="border-t border-gray-200 bg-[#f9fafb] py-8 text-xs text-gray-500">
        <div className="mx-auto max-w-[1140px] px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600">
            <span className="flex items-center gap-1.5 font-medium">
              🛡️ Nationwide Lifetime Warranty
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              🚗 Certified ADAS Recalibration
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              ⭐ 6M+ Customers Served Annually
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-gray-400">
            <Link href="/safelite-group-privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/privacy-center" className="hover:underline">
              Privacy Center
            </Link>
            <span>•</span>
            <span>© 2026 Safelite AutoGlass</span>
          </div>
        </div>
      </footer>

      {/* 5. SLIDE-OUT DRAWER MENU (menuModal) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Drawer container */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-[320px] bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                  <span className="text-xs uppercase tracking-wider font-bold text-gray-400">
                    Your Progress
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsMenuOpen(false)}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    ✕
                  </button>
                </div>

                {/* Vertical Step Timeline */}
                <div className="py-8">
                  <div className="space-y-8 relative pl-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-200">
                    {/* Step 1: Vehicle (Active) */}
                    <div className="relative">
                      <span className="absolute -left-6 top-0.5 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#db0020] text-[11px] font-bold text-white shadow-sm ring-4 ring-white">
                        1
                      </span>
                      <div>
                        <span className="text-xs text-[#db0020] font-semibold">Step 1 of 4</span>
                        <p className="text-base font-bold text-gray-900 leading-tight">Vehicle</p>
                      </div>
                    </div>

                    {/* Step 2: Quote */}
                    <div className="relative">
                      <span className="absolute -left-6 top-0.5 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white border border-gray-300 text-[11px] font-semibold text-gray-500 ring-4 ring-white">
                        2
                      </span>
                      <div>
                        <span className="text-xs text-gray-400 font-medium">Step 2 of 4</span>
                        <p className="text-base font-semibold text-gray-500 leading-tight">Quote</p>
                      </div>
                    </div>

                    {/* Step 3: Schedule */}
                    <div className="relative">
                      <span className="absolute -left-6 top-0.5 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white border border-gray-300 text-[11px] font-semibold text-gray-500 ring-4 ring-white">
                        3
                      </span>
                      <div>
                        <span className="text-xs text-gray-400 font-medium">Step 3 of 4</span>
                        <p className="text-base font-semibold text-gray-500 leading-tight">Schedule</p>
                      </div>
                    </div>

                    {/* Step 4: Review */}
                    <div className="relative">
                      <span className="absolute -left-6 top-0.5 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white border border-gray-300 text-[11px] font-semibold text-gray-500 ring-4 ring-white">
                        4
                      </span>
                      <div>
                        <span className="text-xs text-gray-400 font-medium">Step 4 of 4</span>
                        <p className="text-base font-semibold text-gray-500 leading-tight">Review</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Helpful Links */}
                <div className="pt-6 border-t border-gray-100 space-y-3 text-sm font-semibold">
                  <Link
                    href="/the-safelite-advantage"
                    className="block text-[#0070d1] hover:underline"
                  >
                    The Safelite Advantage
                  </Link>
                  <Link
                    href="/safelite-group-privacy-policy"
                    className="block text-[#0070d1] hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/privacy-center"
                    className="block text-[#0070d1] hover:underline"
                  >
                    Privacy Center
                  </Link>
                </div>
              </div>

              {/* Call for Help Contact */}
              <div className="pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-500">Need help booking?</p>
                <a
                  href="tel:877-664-8931"
                  className="mt-1 flex items-center gap-1.5 text-sm font-bold text-[#db0020] hover:underline"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
                  </svg>
                  877-664-8931
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. SIERRA CHAT MODAL */}
      {isChatOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end p-0 sm:p-6 bg-black/40">
          <div className="w-full sm:w-[380px] bg-white sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[520px] max-h-[90vh]">
            {/* Sierra Header */}
            <div className="bg-[#2e6fb6] px-5 py-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-sm">
                  S
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight">Sierra</h3>
                  <p className="text-[11px] text-white/80">Safelite Virtual Assistant</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsChatOpen(false)}
                className="rounded-lg p-1 text-white/80 hover:bg-white/10 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Sierra Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#f8fafc] text-sm">
              <div className="flex items-start gap-2">
                <div className="h-7 w-7 rounded-full bg-[#2e6fb6] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  S
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-200 shadow-2xs text-gray-800 text-xs md:text-sm">
                  Hi! I&apos;m Sierra, Safelite&apos;s Virtual Assistant. What kind of vehicle glass service can I help you schedule today?
                </div>
              </div>

              {/* Sample question prompts */}
              <div className="pt-2 space-y-2">
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">
                  Common Questions
                </p>
                <button
                  type="button"
                  onClick={() => setIsChatOpen(false)}
                  className="block w-full text-left bg-white border border-gray-200 rounded-xl p-2.5 text-xs text-gray-700 hover:border-[#0070d1] hover:text-[#0070d1] transition-colors"
                >
                  💬 What year, make, and model information do I need?
                </button>
                <button
                  type="button"
                  onClick={() => setIsChatOpen(false)}
                  className="block w-full text-left bg-white border border-gray-200 rounded-xl p-2.5 text-xs text-gray-700 hover:border-[#0070d1] hover:text-[#0070d1] transition-colors"
                >
                  🛡️ Does my auto insurance cover windshield replacement?
                </button>
                <button
                  type="button"
                  onClick={() => setIsChatOpen(false)}
                  className="block w-full text-left bg-white border border-gray-200 rounded-xl p-2.5 text-xs text-gray-700 hover:border-[#0070d1] hover:text-[#0070d1] transition-colors"
                >
                  🚗 Can a technician replace my glass at my home?
                </button>
              </div>
            </div>

            {/* Sierra Input */}
            <div className="p-3 border-t border-gray-200 bg-white flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 text-xs border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-[#2e6fb6]"
              />
              <button
                type="button"
                className="bg-[#2e6fb6] text-white rounded-full px-4 py-2 text-xs font-semibold hover:bg-[#255b96]"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 7. WHERE TO FIND VIN HELP MODAL */}
      {showVinHelpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Where to find your VIN</h2>
              <button
                type="button"
                onClick={() => setShowVinHelpModal(false)}
                className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="space-y-3 text-sm text-gray-600">
              <p>Your Vehicle Identification Number (VIN) is a 17-digit code found in several places:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs md:text-sm">
                <li>
                  <strong>Windshield:</strong> Lower corner of the driver&apos;s side dashboard, visible through the windshield from outside.
                </li>
                <li>
                  <strong>Driver Door:</strong> On a label or sticker inside the driver&apos;s door jamb.
                </li>
                <li>
                  <strong>Documents:</strong> On your vehicle registration, title, or insurance policy card.
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => setShowVinHelpModal(false)}
              className="mt-6 w-full rounded-full bg-[#db0020] py-3 text-sm font-semibold text-white hover:bg-[#b3001a]"
            >
              Got It
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
