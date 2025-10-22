export interface LibraryItem {
  id: string;
  title: string;
  description: string;
  entries: number;
}

export const libraryItems: LibraryItem[] = [
  {
    id: 'codex-01',
    title: 'Codex Obscura',
    description: 'Encrypted doctrine containing 64 layers of moral inversion algorithms.',
    entries: 64
  },
  {
    id: 'codex-02',
    title: 'Mirror of Motives',
    description: 'Predictive heuristics exposing masked intentions within council memos.',
    entries: 27
  },
  {
    id: 'codex-03',
    title: 'Archive of the Veiled',
    description: 'Ancestral transcripts sourced from dreamwalkers and astral analysts.',
    entries: 45
  }
];
