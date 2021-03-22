import React from 'react';

interface HeaderProps {
  genreTitle: string;
}

export default function Header({ genreTitle = 'Ação' }: HeaderProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {genreTitle}</span>
      </span>
    </header>
  );
}
