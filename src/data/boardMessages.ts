export interface BoardMessage {
  id: string;
  author: string;
  title: string;
  excerpt: string;
  timestamp: string;
}

export const boardMessages: BoardMessage[] = [
  {
    id: 'sigil-01',
    author: 'Inquisitor Nyx',
    title: 'Echoes from the Outer Conclave',
    excerpt:
      'The last convergence revealed a fracture in the barrier. Prepare the mnemonic chambers and align the resonance keys.',
    timestamp: '2 hours ago'
  },
  {
    id: 'sigil-02',
    author: 'Archivist Seven',
    title: 'Cipher Update: Meridian Sequence',
    excerpt:
      'Segment 44-b of the Meridian Sequence now accepts dual input. Cross-reference with the obsidian ledger before deployment.',
    timestamp: '6 hours ago'
  },
  {
    id: 'sigil-03',
    author: 'Voice of the Triad',
    title: 'Initiation Cycle 311',
    excerpt:
      'New aspirants have been observed. Observe silence until the Astral Gate opens; respond only via glyph channel 7.',
    timestamp: 'yesterday'
  }
];
