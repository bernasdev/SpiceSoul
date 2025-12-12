'use client';

import { useEffect, useState } from 'react';
import Loading from '../loading'; // ajuste se estiver em outro caminho

export default function TesteLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula carregamento por 3 segundos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000); // 3 segundos

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div style={{ textAlign: 'center', padding: '3rem' }}>
      <h1>Conteúdo carregado!</h1>
      <p>Se você viu a animação, está funcionando 👏</p>
    </div>
  );
}
