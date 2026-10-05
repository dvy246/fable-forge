const profile = {
  slug: 'elf-name-generator',
  label: 'Elf',
  keyword: 'elf name generator',
  title: 'Elf Name Generator: Original Fantasy Names',
  description: 'elf name generator for original names in three lyrical styles. Adjust length, add a family name, and save favorites in your browser for a later session.',
  intro: [
    'This elf name generator builds original fantasy names from vowel-rich openings, measured middle beats, and clean endings. Pick a sound family, choose a length, and decide whether a family name belongs beside the given name.',
    'The fragments on this page were written for DnD Arena. They are not copied from game books or other name lists, so you can shape them into a character without inheriting someone else’s setting.'
  ],
  construction: [
    'Many fantasy elf names are easy to speak when each syllable has a clear vowel and the name carries a steady rhythm. A short name can feel quick and intimate, while an extra middle beat gives a formal introduction more weight. These are sound choices, not rules about what every elf must be.',
    'The generator keeps its fragments pronounceable by joining open syllables and avoiding long consonant piles. Its three styles suggest different naming customs: a lyrical register, a field-born register, and a ceremonial register. Use them as starting points, then decide what a name means in your own world.'
  ],
  styles: [
    {
      id: 'moonwater', label: 'Moonwater court',
      summary: 'This style favors flowing vowels and a soft landing. It suits a diplomat, singer, archivist, or traveler who likes a name that can be said in one breath. A family name can carry the cooler, older sound.',
      starts: ['Ael', 'Eli', 'Iri', 'Luma', 'Sera', 'Neri', 'Olia', 'Vaeli'], middles: ['ara', 'lori', 'ena', 'mira', 'sali', 'thae'], endings: ['wen', 'riel', 'lith', 'vara', 'niel'],
      genderEndings: { male: ['rion', 'thir', 'lorn'], female: ['wen', 'riel', 'lith'], neutral: ['ren', 'lien', 'sai'] },
      familyNames: ['Silvermere', 'Avenfall', 'Lioren', 'Stillbranch', 'Veloria', 'Dawnweir'], flavors: ['A name with a quiet, courtly cadence.', 'A bright sound that carries well across a hall.', 'A measured name for a patient listener.'],
      examples: ['Aelwen', 'Elirion', 'Irimira', 'Lumathir', 'Seralith', 'Nerivara', 'Oliaren', 'Vaelisai']
    },
    {
      id: 'greenpath', label: 'Greenpath wanderers',
      summary: 'The wanderer register uses firmer starts and practical endings. It feels at home on a trail marker, a field journal, or a short introduction around a campfire. The rhythm stays clear even when the name is called from far away.',
      starts: ['Brin', 'Cala', 'Eren', 'Fira', 'Leth', 'Mira', 'Rova', 'Talen'], middles: ['avon', 'elra', 'orin', 'essa', 'maren', 'ivor'], endings: ['en', 'is', 'ora', 'eth', 'an'],
      genderEndings: { male: ['orin', 'eth', 'an'], female: ['ora', 'essa', 'is'], neutral: ['en', 'aren', 'ivor'] },
      familyNames: ['Northbough', 'Wildmere', 'Fernwake', 'Mossrun', 'Rillward', 'Brackenfold'], flavors: ['A practical name shaped for the road.', 'A name with the steady beat of a walking song.', 'A clear call that would carry through leaves.'],
      examples: ['Brinorin', 'Calora', 'Ereneth', 'Firaessa', 'Letharen', 'Miraen', 'Rovaivor', 'Talenis']
    },
    {
      id: 'star-script', label: 'Star-script scholars',
      summary: 'Long vowels and balanced syllables make this register feel considered rather than ornate. It works for a mapmaker, teacher, or keeper of records. A clipped nickname can be used among close friends without changing the full name.',
      starts: ['Ari', 'Caeli', 'Dae', 'Evara', 'Ilan', 'Maeri', 'Nuala', 'Rhae'], middles: ['dorin', 'elion', 'irava', 'orien', 'selan', 'vaeri'], endings: ['iel', 'orin', 'ael', 'eth', 'ion'],
      genderEndings: { male: ['ion', 'orin', 'eth'], female: ['iel', 'ael', 'va'], neutral: ['en', 'aer', 'ir'] },
      familyNames: ['Clearfolio', 'Astervale', 'Lumenward', 'Evenquill', 'Vellumreach', 'Quietstar'], flavors: ['A thoughtful name with a precise final beat.', 'A name built for a signature beneath a map.', 'A balanced sound with room for a nickname.'],
      examples: ['Ariion', 'Caeliorin', 'Daeva', 'Evaraael', 'Ilaneth', 'Maerien', 'Nualair', 'Rhaeorin']
    }
  ],
  pronunciation: [
    { name: 'Aelwen', guide: 'AYL-wen', note: 'Keep the first vowel open and let the ending fall softly.' },
    { name: 'Calora', guide: 'kah-LOR-ah', note: 'Give the middle beat a little emphasis.' },
    { name: 'Talenis', guide: 'TAH-leh-niss', note: 'Use three even beats, with no swallowed final sound.' },
    { name: 'Maerien', guide: 'MAY-ree-en', note: 'Separate the last two vowels just enough to stay clear.' },
    { name: 'Nerivara', guide: 'neh-rih-VAH-rah', note: 'A light opening leads into a stronger third beat.' }
  ],
  tableTips: [
    'For a player character, decide whether the formal name appears on the sheet while friends use a shorter form. A two-beat nickname is easy to repeat during fast dialogue. For an NPC, give the full name to someone with a public role and a brief everyday name to a person the party meets casually.',
    'Family names can mark a chosen household, a place of origin, or a promise rather than ancestry. If several elves belong to one family, reuse the family name and vary the given-name rhythm. That creates continuity without making every relative sound alike.',
    'At the table, say the name aloud once before the scene begins. If you stumble, shorten a syllable or choose another result. A name players can remember is more useful than a complicated sound that never returns in conversation.',
    'Use the three styles to suggest where a name is spoken rather than to sort characters into fixed roles. A lyrical form might be common in a letter, a field-born cadence might be easier among neighbors, and a ceremonial version might appear at a gathering. One character can move between all three registers. For an NPC, choose the version they introduce first and keep the alternatives for people who know them well. For a player character, make sure the shorter form still feels like theirs. If a family shares a surname, let given names differ in their first sounds or rhythm. That small variation helps the group remember who is speaking while still noticing a connection. Add meaning after choosing a sound, not before.'
  ],
  faq: [
    { question: 'Are these names copied from a DnD book?', answer: 'No. The generator joins original syllable tables written for this site, and its example names are newly composed for this tool.' },
    { question: 'Can I use a generated elf name for a player character?', answer: 'Yes. Copy a result, save it as a favorite, or add your own family tradition and meaning before you write it on a character sheet.' },
    { question: 'What is the difference between the three styles?', answer: 'They change the sound fragments and suggested rhythm. They are flexible prompts for a home setting, not fixed cultural rules.' },
    { question: 'Can I make a first name without a family name?', answer: 'Yes. Choose first name only in the generator. You can add a family name later or keep the character known by one name.' }
  ],
  relatedRaces: ['drow-name-generator', 'half-elf-name-generator', 'gnome-name-generator', 'human-name-generator'],
  relatedUtilities: ['character-name-generator', 'npc-name-generator']
};

export default profile;
