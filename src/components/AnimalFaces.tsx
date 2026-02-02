// SVG Icon-style Animal Faces (backgroundless, clean icons)
// These render as scalable icons without photo backgrounds

export function CowFace() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cow head - white base */}
      <ellipse cx="50" cy="55" rx="30" ry="28" fill="#F5F5F5" stroke="#333" strokeWidth="2"/>
      {/* Cow spots */}
      <ellipse cx="35" cy="50" rx="8" ry="10" fill="#333"/>
      <ellipse cx="65" cy="58" rx="6" ry="8" fill="#333"/>
      <ellipse cx="50" cy="68" rx="5" ry="4" fill="#333"/>
      {/* Ears */}
      <ellipse cx="22" cy="48" rx="8" ry="6" fill="#F5F5F5" stroke="#333" strokeWidth="2"/>
      <ellipse cx="78" cy="48" rx="8" ry="6" fill="#F5F5F5" stroke="#333" strokeWidth="2"/>
      {/* Horns */}
      <path d="M28 35 Q22 20 18 18" stroke="#DDD" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <path d="M72 35 Q78 20 82 18" stroke="#DDD" strokeWidth="4" fill="none" strokeLinecap="round"/>
      {/* Eyes */}
      <circle cx="38" cy="52" r="4" fill="#333"/>
      <circle cx="62" cy="52" r="4" fill="#333"/>
      <circle cx="39" cy="51" r="1.5" fill="white"/>
      <circle cx="63" cy="51" r="1.5" fill="white"/>
      {/* Nose */}
      <ellipse cx="50" cy="72" rx="12" ry="8" fill="#FFB6C1" stroke="#333" strokeWidth="1.5"/>
      <circle cx="46" cy="72" r="2" fill="#333"/>
      <circle cx="54" cy="72" r="2" fill="#333"/>
    </svg>
  );
}

export function SheepFace() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Woolly head - fluffy circles */}
      <circle cx="50" cy="55" r="22" fill="#FAFAFA" stroke="#DDD" strokeWidth="2"/>
      <circle cx="35" cy="48" r="12" fill="#FAFAFA" stroke="#DDD" strokeWidth="2"/>
      <circle cx="65" cy="48" r="12" fill="#FAFAFA" stroke="#DDD" strokeWidth="2"/>
      <circle cx="38" cy="62" r="10" fill="#FAFAFA" stroke="#DDD" strokeWidth="2"/>
      <circle cx="62" cy="62" r="10" fill="#FAFAFA" stroke="#DDD" strokeWidth="2"/>
      <circle cx="50" cy="40" r="12" fill="#FAFAFA" stroke="#DDD" strokeWidth="2"/>
      {/* Face */}
      <ellipse cx="50" cy="58" rx="14" ry="16" fill="#FAD5B5" stroke="#333" strokeWidth="1.5"/>
      {/* Eyes */}
      <circle cx="45" cy="55" r="3" fill="#333"/>
      <circle cx="55" cy="55" r="3" fill="#333"/>
      {/* Nose/Mouth */}
      <ellipse cx="50" cy="65" rx="4" ry="3" fill="#333"/>
    </svg>
  );
}

export function PigFace() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Pig head */}
      <ellipse cx="50" cy="55" rx="28" ry="26" fill="#FFB6C1" stroke="#333" strokeWidth="2"/>
      {/* Ears - pointed */}
      <path d="M26 42 L18 22 L35 35 Z" fill="#FFB6C1" stroke="#333" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M74 42 L82 22 L65 35 Z" fill="#FFB6C1" stroke="#333" strokeWidth="2" strokeLinejoin="round"/>
      {/* Snout */}
      <ellipse cx="50" cy="62" rx="14" ry="10" fill="#FF69B4" stroke="#333" strokeWidth="1.5"/>
      <circle cx="45" cy="62" r="3" fill="#333"/>
      <circle cx="55" cy="62" r="3" fill="#333"/>
      {/* Eyes */}
      <circle cx="38" cy="48" r="4" fill="#333"/>
      <circle cx="62" cy="48" r="4" fill="#333"/>
      <circle cx="39" cy="47" r="1.5" fill="white"/>
      <circle cx="63" cy="47" r="1.5" fill="white"/>
    </svg>
  );
}

export function RabbitFace() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Long ears */}
      <ellipse cx="35" cy="30" rx="8" ry="22" fill="#FAFAFA" stroke="#333" strokeWidth="2"/>
      <ellipse cx="65" cy="30" rx="8" ry="22" fill="#FAFAFA" stroke="#333" strokeWidth="2"/>
      <ellipse cx="35" cy="30" rx="4" ry="15" fill="#FFB6C1"/>
      <ellipse cx="65" cy="30" rx="4" ry="15" fill="#FFB6C1"/>
      {/* Head */}
      <ellipse cx="50" cy="60" rx="22" ry="18" fill="#FAFAFA" stroke="#333" strokeWidth="2"/>
      {/* Eyes */}
      <circle cx="42" cy="58" r="4" fill="#333"/>
      <circle cx="58" cy="58" r="4" fill="#333"/>
      <circle cx="43" cy="57" r="1.5" fill="white"/>
      <circle cx="59" cy="57" r="1.5" fill="white"/>
      {/* Nose */}
      <path d="M47 65 Q50 68 53 65" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <circle cx="50" cy="64" r="2" fill="#FFB6C1"/>
      {/* Mouth */}
      <path d="M50 66 L50 70 M48 69 Q50 71 52 69" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

export function ChickenFace() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Comb */}
      <path d="M40 22 Q40 12 45 18 Q50 8 55 18 Q60 12 60 22" fill="#DC143C" stroke="#333" strokeWidth="2" strokeLinejoin="round"/>
      {/* Head */}
      <circle cx="50" cy="45" r="20" fill="#FAFAFA" stroke="#333" strokeWidth="2"/>
      {/* Beak */}
      <path d="M45 48 L55 48 L50 58 Z" fill="#FFA500" stroke="#333" strokeWidth="1.5"/>
      {/* Wattle */}
      <ellipse cx="50" cy="62" rx="4" ry="6" fill="#DC143C" stroke="#333" strokeWidth="1.5"/>
      {/* Eyes */}
      <circle cx="42" cy="42" r="4" fill="#333"/>
      <circle cx="58" cy="42" r="4" fill="#333"/>
      <circle cx="43" cy="41" r="1.5" fill="white"/>
      <circle cx="59" cy="41" r="1.5" fill="white"/>
    </svg>
  );
}

export function DuckFace() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <circle cx="40" cy="45" r="18" fill="#FAFAFA" stroke="#333" strokeWidth="2"/>
      {/* Beak - big and orange */}
      <ellipse cx="62" cy="48" rx="14" ry="8" fill="#FFA500" stroke="#333" strokeWidth="2"/>
      <line x1="52" y1="48" x2="72" y2="48" stroke="#333" strokeWidth="1"/>
      {/* Eye */}
      <circle cx="35" cy="42" r="4" fill="#333"/>
      <circle cx="36" cy="41" r="1.5" fill="white"/>
      {/* Wing hint */}
      <path d="M30 55 Q25 65 30 70" stroke="#DDD" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

