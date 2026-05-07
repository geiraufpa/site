import React, { useEffect, useState } from 'react';

export default function AccessibilityBar() {
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);

  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [highContrast]);

  useEffect(() => {
    if (largeText) {
      document.body.classList.add('large-text');
    } else {
      document.body.classList.remove('large-text');
    }
  }, [largeText]);

  return (
    <div style={{
      backgroundColor: 'var(--branco)',
      color: 'var(--preto)',
      padding: '8px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '13px',
      position: 'relative',
      zIndex: 9999,
      borderBottom: '1px solid rgba(0,0,0,0.05)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ fontWeight: 'bold' }}>Acessibilidade:</span>
        <a href="#inicio" style={{ textDecoration: 'underline', color: 'var(--roxo)', fontWeight: '500' }}>Pular para o conteúdo principal</a>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button 
          onClick={() => setHighContrast(!highContrast)}
          style={{
            backgroundColor: highContrast ? 'var(--preto)' : 'var(--off-white)',
            color: highContrast ? 'var(--branco)' : 'var(--preto)',
            border: '1px solid rgba(0,0,0,0.1)',
            padding: '4px 12px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <span>🌗</span> Alto Contraste
        </button>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          <button 
            onClick={() => setLargeText(false)}
            style={{
              backgroundColor: !largeText ? 'var(--preto)' : 'var(--off-white)',
              color: !largeText ? 'var(--branco)' : 'var(--preto)',
              border: '1px solid rgba(0,0,0,0.1)',
              padding: '4px 8px',
              borderRadius: '4px 0 0 4px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}
          >
            A-
          </button>
          <button 
            onClick={() => setLargeText(true)}
            style={{
              backgroundColor: largeText ? 'var(--preto)' : 'var(--off-white)',
              color: largeText ? 'var(--branco)' : 'var(--preto)',
              border: '1px solid rgba(0,0,0,0.1)',
              borderLeft: 'none',
              padding: '4px 8px',
              borderRadius: '0 4px 4px 0',
              fontSize: '14px',
              fontWeight: 'bold'
            }}
          >
            A+
          </button>
        </div>
      </div>
    </div>
  );
}
