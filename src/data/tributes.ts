export interface TributeItem {
  id: string;
  title: string;
  type: 'image' | 'audio' | 'document';
  description: string;
  placeholder: string;
}

export const tributes: TributeItem[] = [
  {
    id: 'tribute-01',
    title: 'Astral Residue',
    type: 'image',
    description: 'Captured afterglow of the Triad sigil projected during lunar transit.',
    placeholder: '/assets/img/tribute-placeholder-01.png'
  },
  {
    id: 'tribute-02',
    title: 'Chant of the Eclipse',
    type: 'audio',
    description: 'Layered vocoder chant recorded beneath the Meridian Gate.',
    placeholder: '/assets/img/tribute-placeholder-02.png'
  },
  {
    id: 'tribute-03',
    title: 'Obsidian Manuscript',
    type: 'document',
    description: 'Fragmented parchment describing the initiation of the Thirty-Third cipher.',
    placeholder: '/assets/img/tribute-placeholder-03.png'
  }
];
