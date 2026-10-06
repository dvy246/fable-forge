// Character Archetypes for the Animated Hero Stage
// Pure browser-safe data module with SVG illustrations and archetype metadata

export const heroCharacters = [
  {
    id: 'elf-ranger',
    label: 'Elf Ranger',
    icon: '🧝',
    ancestrySlug: 'elf-name-generator',
    name: 'Thalindra Moonshadow',
    flavor: 'a star-touched wood elf ranger',
    themeColor: '#7ecba1',
    accentColor: '#38a169',
    svgMarkup: `
      <svg class="character-art-svg" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Elven Star-Ranger portrait">
        <defs>
          <radialGradient id="elf-aura" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stop-color="#7ecba1" stop-opacity="0.35"/>
            <stop offset="60%" stop-color="#2d6a4f" stop-opacity="0.12"/>
            <stop offset="100%" stop-color="transparent" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="elf-cloak" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1b4332"/>
            <stop offset="100%" stop-color="#081c15"/>
          </linearGradient>
          <linearGradient id="elf-bow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#d4af37"/>
            <stop offset="50%" stop-color="#854d0e"/>
            <stop offset="100%" stop-color="#d4af37"/>
          </linearGradient>
        </defs>
        <!-- Aura Circle -->
        <circle cx="120" cy="115" r="95" fill="url(#elf-aura)"/>
        <!-- Star Dust / Leaves -->
        <g class="char-sparkles" fill="#a7f3d0">
          <circle cx="65" cy="85" r="1.5" class="sparkle-1"/>
          <circle cx="178" cy="72" r="2" class="sparkle-2"/>
          <circle cx="50" cy="140" r="1.5" class="sparkle-3"/>
          <circle cx="192" cy="135" r="1.8" class="sparkle-4"/>
        </g>
        <!-- Character Bust & Hood -->
        <g class="char-body">
          <!-- Cloak & Shoulders -->
          <path d="M40 230 C48 185 80 165 120 165 C160 165 192 185 200 230 Z" fill="url(#elf-cloak)"/>
          <path d="M75 168 C90 195 105 230 105 230" stroke="#2d6a4f" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M165 168 C150 195 135 230 135 230" stroke="#2d6a4f" stroke-width="1.5" stroke-linecap="round"/>
          <!-- Elven Cowl / Hood -->
          <path d="M68 140 C62 90 82 50 120 42 C158 50 178 90 172 140 C162 165 145 178 120 180 C95 178 78 165 68 140 Z" fill="#2d6a4f" stroke="#40916c" stroke-width="1.2"/>
          <!-- Pointed Ears -->
          <path d="M72 110 L45 88 C48 98 62 114 74 122 Z" fill="#edd6c8" stroke="#cca592" stroke-width="1"/>
          <path d="M168 110 L195 88 C192 98 178 114 166 122 Z" fill="#edd6c8" stroke="#cca592" stroke-width="1"/>
          <!-- Face Silhouette -->
          <path d="M84 100 C84 75 100 68 120 68 C140 68 156 75 156 100 C156 130 144 154 120 162 C96 154 84 130 84 100 Z" fill="#f7ebe1"/>
          <!-- Silver Circlet -->
          <path d="M84 94 Q120 106 156 94" stroke="#d4af37" stroke-width="2.5" fill="none"/>
          <polygon points="120,96 124,103 120,110 116,103" fill="#7ecba1"/>
          <!-- Flowing Silver Hair Strands -->
          <path d="M86 98 C82 125 90 152 92 168" stroke="#e2e8f0" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M154 98 C158 125 150 152 148 168" stroke="#e2e8f0" stroke-width="2.5" stroke-linecap="round"/>
          <!-- Glowing Emerald Eyes -->
          <ellipse cx="106" cy="115" rx="3.5" ry="2" fill="#10b981" class="glow-eye"/>
          <ellipse cx="134" cy="115" rx="3.5" ry="2" fill="#10b981" class="glow-eye"/>
          <!-- Star Bow & Arrow Light -->
          <path d="M188 40 Q215 120 188 200" stroke="url(#elf-bow)" stroke-width="3" stroke-linecap="round" fill="none"/>
          <path d="M188 40 L188 200" stroke="rgba(255,255,255,0.4)" stroke-width="0.8" stroke-dasharray="3 3"/>
          <!-- Glowing Arrow Head -->
          <polygon points="175,116 195,120 175,124" fill="#6ee7b7" class="glow-arrow"/>
        </g>
      </svg>
    `,
  },
  {
    id: 'tiefling-warlock',
    label: 'Tiefling Warlock',
    icon: '😈',
    ancestrySlug: 'tiefling-name-generator',
    name: 'Malakor Ashfall',
    flavor: 'a brimstone fiend-warlock of the stygian pit',
    themeColor: '#f87171',
    accentColor: '#dc2626',
    svgMarkup: `
      <svg class="character-art-svg" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Tiefling Fiend-Warlock portrait">
        <defs>
          <radialGradient id="tiefling-aura" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stop-color="#ef4444" stop-opacity="0.32"/>
            <stop offset="60%" stop-color="#7f1d1d" stop-opacity="0.14"/>
            <stop offset="100%" stop-color="transparent" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="horn-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#18181b"/>
            <stop offset="60%" stop-color="#27272a"/>
            <stop offset="100%" stop-color="#e11d48"/>
          </linearGradient>
        </defs>
        <!-- Abyssal Aura -->
        <circle cx="120" cy="120" r="95" fill="url(#tiefling-aura)"/>
        <!-- Embers -->
        <g class="char-sparkles" fill="#fca5a5">
          <circle cx="55" cy="95" r="1.8" class="sparkle-1"/>
          <circle cx="185" cy="80" r="2.2" class="sparkle-2"/>
          <circle cx="68" cy="165" r="1.6" class="sparkle-3"/>
          <circle cx="170" cy="160" r="2" class="sparkle-4"/>
        </g>
        <g class="char-body">
          <!-- Curving Obsidian Horns -->
          <path d="M92 78 C70 42 45 32 30 48 C20 62 48 95 82 98 Z" fill="url(#horn-grad)" stroke="#f43f5e" stroke-width="0.8"/>
          <path d="M148 78 C170 42 195 32 210 48 C220 62 192 95 158 98 Z" fill="url(#horn-grad)" stroke="#f43f5e" stroke-width="0.8"/>
          <!-- Horn Ridges -->
          <path d="M52 56 Q68 70 80 88" stroke="#fca5a5" stroke-width="1.2" opacity="0.6"/>
          <path d="M188 56 Q172 70 160 88" stroke="#fca5a5" stroke-width="1.2" opacity="0.6"/>
          <!-- Robes & High Collar -->
          <path d="M45 230 C50 180 80 162 120 162 C160 162 190 180 195 230 Z" fill="#18181b"/>
          <path d="M68 185 L95 150 L120 178 L145 150 L172 185" stroke="#991b1b" stroke-width="2.5" fill="none"/>
          <!-- Crimson Skin Silhouette -->
          <path d="M84 96 C84 72 100 66 120 66 C140 66 156 72 156 96 C156 128 144 154 120 162 C96 154 84 128 84 96 Z" fill="#b91c1c"/>
          <!-- Dark Brow & Golden Eyes -->
          <path d="M98 108 L114 114" stroke="#450a0a" stroke-width="2" stroke-linecap="round"/>
          <path d="M142 108 L126 114" stroke="#450a0a" stroke-width="2" stroke-linecap="round"/>
          <ellipse cx="106" cy="118" rx="3.5" ry="2.2" fill="#fbbf24" class="glow-eye"/>
          <ellipse cx="134" cy="118" rx="3.5" ry="2.2" fill="#fbbf24" class="glow-eye"/>
          <!-- Forehead Sigil -->
          <path d="M120 82 L123 90 L120 98 L117 90 Z" fill="#f87171" class="glow-rune"/>
          <!-- Swirling Arcane Flame in Hand (Right) -->
          <path d="M175 190 Q195 160 185 145 Q175 165 165 178 Z" fill="#ef4444" opacity="0.8" class="flicker-flame"/>
          <path d="M178 185 Q190 165 182 155 Q176 168 170 176 Z" fill="#fbbf24" class="flicker-flame"/>
        </g>
      </svg>
    `,
  },
  {
    id: 'dwarf-cleric',
    label: 'Dwarf Cleric',
    icon: '⚒️',
    ancestrySlug: 'dwarf-name-generator',
    name: 'Bromdir Ironmantle',
    flavor: 'a mountain dwarf runesmith of the deep anvil',
    themeColor: '#fbbf24',
    accentColor: '#d97706',
    svgMarkup: `
      <svg class="character-art-svg" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Dwarf Forge-Cleric portrait">
        <defs>
          <radialGradient id="dwarf-aura" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.32"/>
            <stop offset="60%" stop-color="#78350f" stop-opacity="0.12"/>
            <stop offset="100%" stop-color="transparent" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="iron-armor" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#475569"/>
            <stop offset="50%" stop-color="#1e293b"/>
            <stop offset="100%" stop-color="#334155"/>
          </linearGradient>
        </defs>
        <!-- Golden Forge Aura -->
        <circle cx="120" cy="120" r="95" fill="url(#dwarf-aura)"/>
        <!-- Forge Sparks -->
        <g class="char-sparkles" fill="#fde68a">
          <circle cx="60" cy="75" r="2" class="sparkle-1"/>
          <circle cx="180" cy="65" r="2.2" class="sparkle-2"/>
          <circle cx="48" cy="150" r="1.5" class="sparkle-3"/>
          <circle cx="190" cy="145" r="1.8" class="sparkle-4"/>
        </g>
        <g class="char-body">
          <!-- Heavy Runic Pauldrons -->
          <path d="M30 230 C35 175 75 160 120 160 C165 160 205 175 210 230 Z" fill="url(#iron-armor)"/>
          <path d="M52 178 L72 170 L85 195" stroke="#f59e0b" stroke-width="2" fill="none"/>
          <path d="M188 178 L168 170 L155 195" stroke="#f59e0b" stroke-width="2" fill="none"/>
          <!-- Runic Iron Helm -->
          <path d="M72 90 C72 50 94 40 120 40 C146 40 168 50 168 90 C168 108 160 118 120 118 C80 118 72 108 72 90 Z" fill="#334155" stroke="#94a3b8" stroke-width="1.5"/>
          <path d="M120 40 L120 85" stroke="#f59e0b" stroke-width="2"/>
          <polygon points="120,44 126,52 120,60 114,52" fill="#fbbf24"/>
          <!-- Face & Brow -->
          <path d="M85 86 C85 75 100 70 120 70 C140 70 155 75 155 86 C155 105 146 115 120 118 C94 115 85 105 85 86 Z" fill="#e2c4b0"/>
          <!-- Determined Eyes -->
          <ellipse cx="105" cy="94" rx="3.2" ry="1.8" fill="#38bdf8" class="glow-eye"/>
          <ellipse cx="135" cy="94" rx="3.2" ry="1.8" fill="#38bdf8" class="glow-eye"/>
          <!-- Massive Braided Copper Beard -->
          <path d="M82 108 C80 165 96 220 120 226 C144 220 160 165 158 108 Q120 125 82 108 Z" fill="#b45309" stroke="#92400e" stroke-width="1.2"/>
          <!-- Beard Rings & Braids -->
          <rect x="112" y="155" width="16" height="7" rx="2" fill="#f59e0b" stroke="#78350f" stroke-width="1"/>
          <rect x="113" y="190" width="14" height="6" rx="2" fill="#f59e0b" stroke="#78350f" stroke-width="1"/>
          <path d="M102 125 Q120 145 138 125" stroke="#d97706" stroke-width="1.8" fill="none"/>
          <path d="M106 148 Q120 165 134 148" stroke="#d97706" stroke-width="1.8" fill="none"/>
        </g>
      </svg>
    `,
  },
  {
    id: 'dragonborn-paladin',
    label: 'Dragonborn',
    icon: '🐉',
    ancestrySlug: 'dragonborn-name-generator',
    name: 'Vaelok Emberclaw',
    flavor: 'a draconic flame-knight of the solar crest',
    themeColor: '#fb923c',
    accentColor: '#ea580c',
    svgMarkup: `
      <svg class="character-art-svg" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Dragonborn Paladin portrait">
        <defs>
          <radialGradient id="dragon-aura" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stop-color="#f97316" stop-opacity="0.35"/>
            <stop offset="60%" stop-color="#9a3412" stop-opacity="0.12"/>
            <stop offset="100%" stop-color="transparent" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="dragon-scale" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#c2410c"/>
            <stop offset="60%" stop-color="#7c2d12"/>
            <stop offset="100%" stop-color="#431407"/>
          </linearGradient>
        </defs>
        <!-- Dragonfire Aura -->
        <circle cx="120" cy="120" r="95" fill="url(#dragon-aura)"/>
        <!-- Embers Drift -->
        <g class="char-sparkles" fill="#fdba74">
          <circle cx="58" cy="85" r="2.2" class="sparkle-1"/>
          <circle cx="182" cy="75" r="2" class="sparkle-2"/>
          <circle cx="45" cy="145" r="1.6" class="sparkle-3"/>
          <circle cx="192" cy="155" r="2.4" class="sparkle-4"/>
        </g>
        <g class="char-body">
          <!-- Heavy Plate Shoulders -->
          <path d="M35 230 C42 175 78 158 120 158 C162 158 198 175 205 230 Z" fill="#1c1917" stroke="#ea580c" stroke-width="1.2"/>
          <!-- Solar Crest Plate -->
          <polygon points="120,165 135,190 120,215 105,190" fill="#f97316" opacity="0.85"/>
          <!-- Draconic Horns Sweeping Back -->
          <path d="M90 75 C70 45 48 30 25 38 C35 55 60 72 82 85 Z" fill="#7c2d12" stroke="#ea580c" stroke-width="1"/>
          <path d="M150 75 C170 45 192 30 215 38 C205 55 180 72 158 85 Z" fill="#7c2d12" stroke="#ea580c" stroke-width="1"/>
          <!-- Reptilian Head Silhouette -->
          <path d="M86 85 C84 55 102 46 120 46 C138 46 156 55 154 85 C152 115 142 135 120 150 C98 135 88 115 86 85 Z" fill="url(#dragon-scale)"/>
          <!-- Scale Texture Grooves -->
          <path d="M102 62 Q120 54 138 62" stroke="#ea580c" stroke-width="1.5" fill="none"/>
          <path d="M98 76 Q120 68 142 76" stroke="#ea580c" stroke-width="1.5" fill="none"/>
          <path d="M95 90 Q120 82 145 90" stroke="#ea580c" stroke-width="1.5" fill="none"/>
          <!-- Snout & Nostril Ridges -->
          <path d="M106 122 L120 136 L134 122" stroke="#f97316" stroke-width="1.5" fill="none"/>
          <!-- Piercing Slit Eyes -->
          <ellipse cx="104" cy="92" rx="4" ry="2.2" fill="#fef08a" class="glow-eye"/>
          <line x1="104" y1="90" x2="104" y2="94" stroke="#7c2d12" stroke-width="1.2"/>
          <ellipse cx="136" cy="92" rx="4" ry="2.2" fill="#fef08a" class="glow-eye"/>
          <line x1="136" y1="90" x2="136" y2="94" stroke="#7c2d12" stroke-width="1.2"/>
        </g>
      </svg>
    `,
  },
  {
    id: 'drow-rogue',
    label: 'Drow Rogue',
    icon: '🗡️',
    ancestrySlug: 'drow-name-generator',
    name: 'Zilvrae Duskwhisper',
    flavor: 'an underdark shadow-weaver of the arachnid veil',
    themeColor: '#c084fc',
    accentColor: '#9333ea',
    svgMarkup: `
      <svg class="character-art-svg" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Drow Shadow-Rogue portrait">
        <defs>
          <radialGradient id="drow-aura" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stop-color="#c084fc" stop-opacity="0.32"/>
            <stop offset="60%" stop-color="#581c87" stop-opacity="0.14"/>
            <stop offset="100%" stop-color="transparent" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="drow-blade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#c084fc"/>
            <stop offset="50%" stop-color="#e2e8f0"/>
            <stop offset="100%" stop-color="#a855f7"/>
          </linearGradient>
        </defs>
        <!-- Underdark Aura -->
        <circle cx="120" cy="120" r="95" fill="url(#drow-aura)"/>
        <!-- Luminescent Web Particles -->
        <g class="char-sparkles" fill="#e9d5ff">
          <circle cx="65" cy="80" r="1.5" class="sparkle-1"/>
          <circle cx="175" cy="70" r="2" class="sparkle-2"/>
          <circle cx="52" cy="155" r="1.8" class="sparkle-3"/>
          <circle cx="188" cy="148" r="1.6" class="sparkle-4"/>
        </g>
        <g class="char-body">
          <!-- Midnight Leather Mantle -->
          <path d="M42 230 C48 180 80 162 120 162 C160 162 192 180 198 230 Z" fill="#0f0b18" stroke="#581c87" stroke-width="1"/>
          <!-- Spiderweb Inlay Collar -->
          <path d="M120 162 L120 200 M90 180 L120 195 L150 180" stroke="#7e22ce" stroke-width="1.2" fill="none"/>
          <!-- Shadow Cowl / Hood -->
          <path d="M68 135 C62 85 82 45 120 38 C158 45 178 85 172 135 C162 165 145 178 120 180 C95 178 78 165 68 135 Z" fill="#1e1035" stroke="#6b21a8" stroke-width="1.2"/>
          <!-- Pointed Ears -->
          <path d="M72 108 L45 86 C48 96 62 112 74 120 Z" fill="#2d223c" stroke="#581c87" stroke-width="1"/>
          <path d="M168 108 L195 86 C192 96 178 112 166 120 Z" fill="#2d223c" stroke="#581c87" stroke-width="1"/>
          <!-- Obsidian Skin Face -->
          <path d="M84 98 C84 74 100 66 120 66 C140 66 156 74 156 98 C156 128 144 152 120 160 C96 152 84 128 84 98 Z" fill="#1e1b2e"/>
          <!-- Striking White Hair -->
          <path d="M85 96 C80 125 88 155 90 170" stroke="#f8fafc" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M155 96 C160 125 152 155 150 170" stroke="#f8fafc" stroke-width="2.5" stroke-linecap="round"/>
          <!-- Piercing Violet Eyes -->
          <ellipse cx="106" cy="114" rx="3.5" ry="2" fill="#c084fc" class="glow-eye"/>
          <ellipse cx="134" cy="114" rx="3.5" ry="2" fill="#c084fc" class="glow-eye"/>
          <!-- Twin Dual Daggers -->
          <path d="M52 145 L72 205 L62 210 L45 152 Z" fill="url(#drow-blade)" stroke="#c084fc" stroke-width="0.8"/>
          <path d="M188 145 L168 205 L178 210 L195 152 Z" fill="url(#drow-blade)" stroke="#c084fc" stroke-width="0.8"/>
        </g>
      </svg>
    `,
  },
];
