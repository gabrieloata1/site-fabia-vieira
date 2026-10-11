const fs = require('fs');
const sharp = require('sharp');

// Flower Option A: Refined Lotus / Flora Blossom (Sacred Organic Symmetry)
function flowerA(dark = '#24211e', gold = '#c4975c', dotted = '#7a706a') {
  return `
    <!-- Outer Harmony Frame -->
    <circle cx="32" cy="32" r="30" stroke="${gold}" stroke-width="1.2" opacity="0.9"/>
    <circle cx="32" cy="32" r="26.5" stroke="${dotted}" stroke-width="0.6" stroke-dasharray="2 3" opacity="0.45"/>

    <!-- Calyx & Grounding Leaves -->
    <path d="M 22 47 C 27 50.5, 37 50.5, 42 47" stroke="${gold}" stroke-width="1.2" stroke-linecap="round" fill="none"/>
    <path d="M 32 48.5 C 26 50.5, 19 48, 16 45 C 20 44.5, 26 46, 32 48.5" stroke="${gold}" stroke-width="1.0" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.85"/>
    <path d="M 32 48.5 C 38 50.5, 45 48, 48 45 C 44 44.5, 38 46, 32 48.5" stroke="${gold}" stroke-width="1.0" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.85"/>

    <!-- Wide outer welcoming petals -->
    <path d="M 32 46 C 21 46, 12 37.5, 12 28 C 16.5 29.5, 23 35, 27 40" stroke="${dark}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M 32 46 C 43 46, 52 37.5, 52 28 C 47.5 29.5, 41 35, 37 40" stroke="${dark}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

    <!-- Intermediate blooming petals -->
    <path d="M 32 45 C 23.5 41, 18 31, 20 19.5 C 24 23, 28.5 30, 31 38" stroke="${gold}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M 32 45 C 40.5 41, 46 31, 44 19.5 C 40 23, 35.5 30, 33 38" stroke="${gold}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

    <!-- Central rising petal (Core of growth) -->
    <path d="M 32 14.5 C 25.5 23, 25.5 35, 32 44 C 38.5 35, 38.5 23, 32 14.5 Z" stroke="${dark}" stroke-width="1.5" stroke-linejoin="round" fill="none"/>

    <!-- Inner drop / spark of life -->
    <path d="M 32 23.5 C 29.5 27.5, 29.5 32.5, 32 36 C 34.5 32.5, 34.5 27.5, 32 23.5 Z" stroke="${gold}" stroke-width="1.1" fill="${gold}" fill-opacity="0.25"/>

    <!-- Transformation Spark / Star at Apex -->
    <path d="M 32 8 Q 32 10 33.5 10 Q 32 10 32 12 Q 32 10 30.5 10 Q 32 10 32 8 Z" fill="${gold}"/>
  `;
}

// Flower Option B: Pure Botanical Peony / Wild Rose (Delicate layered multi-petals)
function flowerB(dark = '#24211e', gold = '#c4975c', dotted = '#7a706a') {
  return `
    <!-- Outer Harmony Frame -->
    <circle cx="32" cy="32" r="30" stroke="${gold}" stroke-width="1.2" opacity="0.9"/>
    <circle cx="32" cy="32" r="26.5" stroke="${dotted}" stroke-width="0.6" stroke-dasharray="2 3" opacity="0.45"/>

    <!-- Subtle stem & leaves at bottom -->
    <path d="M 32 46 V 52" stroke="${dark}" stroke-width="1.3" stroke-linecap="round"/>
    <path d="M 32 49 C 27 50, 22 47.5, 18 45 C 22 44, 27 46, 32 49" stroke="${gold}" stroke-width="1.1" stroke-linejoin="round" fill="none"/>
    <path d="M 32 49 C 37 50, 42 47.5, 46 45 C 42 44, 37 46, 32 49" stroke="${gold}" stroke-width="1.1" stroke-linejoin="round" fill="none"/>

    <!-- Outer cup petals -->
    <path d="M 14 30 C 13 39, 21 46, 32 46 C 43 46, 51 39, 50 30" stroke="${dark}" stroke-width="1.3" stroke-linecap="round" fill="none"/>

    <!-- Blooming side petals -->
    <path d="M 17 25 C 20 34, 26 40, 32 44 C 38 40, 44 34, 47 25" stroke="${gold}" stroke-width="1.3" stroke-linecap="round" fill="none"/>

    <!-- Symmetrical inner petals forming rose/camellia layers -->
    <path d="M 21 21 C 24 28, 28 35, 32 42" stroke="${dark}" stroke-width="1.4" stroke-linecap="round" fill="none"/>
    <path d="M 43 21 C 40 28, 36 35, 32 42" stroke="${dark}" stroke-width="1.4" stroke-linecap="round" fill="none"/>

    <path d="M 26 17 C 28 23, 30 30, 32 38" stroke="${gold}" stroke-width="1.3" stroke-linecap="round" fill="none"/>
    <path d="M 38 17 C 36 23, 34 30, 32 38" stroke="${gold}" stroke-width="1.3" stroke-linecap="round" fill="none"/>

    <!-- Central bud & stamen -->
    <path d="M 32 14 C 30 19, 30 25, 32 30 C 34 25, 34 19, 32 14 Z" stroke="${dark}" stroke-width="1.4" fill="${gold}" fill-opacity="0.2"/>
    <circle cx="32" cy="10" r="1.5" fill="${gold}"/>
  `;
}

// Generate Full Logo SVG (with Typography)
function buildFullLogo(flowerFunc, isDark = false) {
  const dark = isDark ? '#faf7f2' : '#24211e';
  const gold = '#c4975c';
  const dotted = isDark ? '#e8ddd0' : '#7a706a';
  const descColor = isDark ? '#d4c5b2' : '#5a534c';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 64" fill="none">
    <!-- Flower Emblem -->
    <g transform="translate(4, 4) scale(0.875)">
      ${flowerFunc(dark, gold, dotted)}
    </g>

    <!-- Typography -->
    <g transform="translate(72, 8)">
      <!-- Main Brand Name -->
      <text x="0" y="27" font-family="'Instrument Serif', Georgia, serif" font-size="26" font-style="italic" fill="${dark}" letter-spacing="1.5">Fábia Vieira</text>
      
      <!-- Decorative hairline divider with subtle golden botanical leaf/diamond -->
      <line x1="0" y1="36" x2="260" y2="36" stroke="${gold}" stroke-width="0.75" opacity="0.6"/>
      <polygon points="130,34.5 132.5,36 130,37.5 127.5,36" fill="${gold}"/>
      
      <!-- Descriptor / Positioning -->
      <text x="0" y="47" font-family="'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif" font-size="7.5" font-weight="500" fill="${descColor}" letter-spacing="2.8">ORGANIZAÇÃO SISTÊMICA &amp; SUSTENTÁVEL</text>
    </g>
  </svg>`;
}

// Write the files
const logoA_light = buildFullLogo(flowerA, false);
const logoA_dark = buildFullLogo(flowerA, true);
const iconA = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">${flowerA('#24211e', '#c4975c', '#7a706a')}</svg>`;

fs.writeFileSync('/root/agentes_web/sites/fabia-vieira/assets/images/logo.svg', logoA_light);
fs.writeFileSync('/root/agentes_web/sites/fabia-vieira/assets/images/logo-light.svg', logoA_dark);
fs.writeFileSync('/root/agentes_web/sites/fabia-vieira/assets/images/logo-icon.svg', iconA);

// Render high-res PNGs
Promise.all([
  sharp(Buffer.from(logoA_light)).png({ density: 300 }).toFile('/root/agentes_web/sites/fabia-vieira/assets/images/logo.png'),
  sharp(Buffer.from(logoA_dark)).png({ density: 300 }).toFile('/root/agentes_web/sites/fabia-vieira/assets/images/logo-light.png'),
  sharp(Buffer.from(iconA)).resize(512, 512).png().toFile('/root/agentes_web/sites/fabia-vieira/assets/images/logo-icon.png')
]).then(() => {
  console.log('All flower logo files generated and rendered successfully!');
});
