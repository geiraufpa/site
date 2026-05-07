import React from 'react';

export default function Login() {
  return (
    <div className="login-container">
      {/* Esquerda: Formulário de Login */}
      <div className="login-form-pane">
        <div style={{ maxWidth: '420px', width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          
          <h2 style={{ fontSize: '40px', marginBottom: '12px', letterSpacing: '-1px' }}>Bem-vindo de volta</h2>
          <p style={{ color: '#6b7280', marginBottom: '40px', fontSize: '18px' }}>Faça login para continuar sua jornada inclusiva no GEIRA.</p>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>E-mail</label>
              <input 
                type="email" 
                placeholder="seu@email.com"
                style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '2px solid rgba(0,0,0,0.1)', fontSize: '16px', outline: 'none', transition: 'border-color 0.2s', fontFamily: 'var(--font-body)' }} 
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>Senha</label>
              <input 
                type="password" 
                placeholder="••••••••"
                style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '2px solid rgba(0,0,0,0.1)', fontSize: '16px', outline: 'none', transition: 'border-color 0.2s', fontFamily: 'var(--font-body)' }} 
              />
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: '500' }}>
                <input type="checkbox" style={{ width: '18px', height: '18px', accentColor: 'var(--roxo)' }} /> Lembrar de mim
              </label>
              <a href="#" style={{ color: 'var(--roxo)', fontWeight: 'bold' }}>Esqueci a senha</a>
            </div>

            <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
              <a href="/dashboard-usuario" className="btn btn-black" style={{ flex: 1, textDecoration: 'none', textAlign: 'center', padding: '16px 0' }}>
                Entrar como Usuário
              </a>
              <a href="/dashboard-colaborador" className="btn btn-outline" style={{ flex: 1, textDecoration: 'none', textAlign: 'center', borderColor: 'var(--roxo)', color: 'var(--roxo)', padding: '16px 0' }}>
                Colaborador
              </a>
            </div>
          </form>
          
          <div style={{ marginTop: '40px', textAlign: 'center', fontSize: '15px', color: '#6b7280' }}>
            Não tem uma conta? <a href="#" style={{ color: 'var(--coral)', fontWeight: 'bold' }}>Cadastre-se aqui</a>
          </div>
        </div>
      </div>

      {/* Direita: Área Visual (Grid de Personagens) */}
      <div className="login-visual-pane" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '20px', width: '100%', maxWidth: '520px', height: '520px' }}>
          
          {/* Célula 1 */}
          <div style={{ backgroundColor: 'var(--coral)', borderRadius: '32px', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', position: 'relative' }}>
            <img src="/Imagens/Personagens/Iara - Busto.png" alt="Personagem Iara" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center bottom' }} />
          </div>
          
          {/* Célula 2 */}
          <div style={{ backgroundColor: 'var(--amarelo)', borderRadius: '32px', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', position: 'relative' }}>
            <img src="/Imagens/Personagens/Kauan - Busto.png" alt="Personagem Kauan" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center bottom' }} />
          </div>

          {/* Célula 3 */}
          <div style={{ backgroundColor: 'var(--roxo)', borderRadius: '32px', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', position: 'relative' }}>
            <img src="/Imagens/Personagens/Naara - Busto.png" alt="Personagem Naara" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center bottom' }} />
          </div>

          {/* Célula 4 - Texto */}
          <div style={{ backgroundColor: 'var(--rosa)', borderRadius: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', textAlign: 'center' }}>
             <h3 style={{ fontSize: '32px', color: 'var(--preto)', lineHeight: '1.2', margin: 0, letterSpacing: '-1px' }}>Aprender aqui é transformador!</h3>
          </div>

        </div>
      </div>
    </div>
  );
}
