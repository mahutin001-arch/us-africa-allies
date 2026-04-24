import React from 'react';

type BandProps = {
  ground: 'ivory' | 'navy' | 'gold';
  children: React.ReactNode;
  id?: string;
  className?: string;
};

const GROUND_CLASS: Record<BandProps['ground'], string> = {
  ivory: 'ground-ivory on-ivory',
  navy: 'ground-navy on-navy',
  gold: 'ground-gold on-gold',
};

export default function Band({ ground, children, id, className }: BandProps) {
  return (
    <section id={id} className={`band ${GROUND_CLASS[ground]} ${className ?? ''}`}>
      {children}
    </section>
  );
}
