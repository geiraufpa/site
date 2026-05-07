import React, { useEffect } from 'react';

declare global {
  interface Window {
    VLibras: any;
  }
}

const VLibras = () => {
  useEffect(() => {
    // Evita múltiplas inicializações
    if (document.getElementById('vlibras-script')) return;

    const script = document.createElement('script');
    script.id = 'vlibras-script';
    script.src = 'https://vlibras.gov.br/app/vlibras.js';
    script.async = true;
    script.onload = () => {
      if (window.VLibras) {
        new window.VLibras.Widget();
      }
    };
    document.body.appendChild(script);

    // Cleanup não é estritamente necessário para o VLibras pois ele injeta divs globais,
    // mas remover o script ajuda a manter o DOM limpo se o componente for desmontado.
    return () => {
      const scriptTag = document.getElementById('vlibras-script');
      if (scriptTag) {
        document.body.removeChild(scriptTag);
      }
    };
  }, []);

  return (
    <div vw="true" className="enabled">
      <div vw-access-button="true" className="active"></div>
      <div vw-plugin-wrapper="true">
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
};

export default VLibras;
