import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DashboardUsuario() {
  const [activeTab, setActiveTab] = useState<'inscricoes' | 'eventos' | 'certificados'>('inscricoes');

  return (
    <div style={{ padding: '40px', minHeight: '80vh', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--amarelo)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', border: '2px solid var(--preto)' }}>
            👤
          </div>
          <div>
            <h1 style={{ fontSize: '32px', marginBottom: '4px' }}>Área do Participante</h1>
            <p style={{ color: '#6b7280' }}>Olá, Aluno! Acompanhe suas atividades no GEIRA.</p>
          </div>
        </div>
        <Link to="/" className="btn btn-outline">Sair</Link>
      </div>

      <div style={{ display: 'flex', gap: '32px', flexDirection: 'column', md: { flexDirection: 'row' } }}>
        
        {/* Sidebar / Tabs */}
        <div style={{ display: 'flex', gap: '16px', borderBottom: '2px solid rgba(0,0,0,0.05)', paddingBottom: '16px' }}>
          <button 
            onClick={() => setActiveTab('inscricoes')}
            style={{ 
              padding: '12px 24px', 
              borderRadius: '8px',
              backgroundColor: activeTab === 'inscricoes' ? 'var(--preto)' : 'transparent',
              color: activeTab === 'inscricoes' ? 'var(--branco)' : 'var(--preto)',
              fontWeight: 'bold',
              border: activeTab === 'inscricoes' ? 'none' : '1px solid transparent',
            }}>
            🎟️ Minhas Inscrições
          </button>
          <button 
            onClick={() => setActiveTab('eventos')}
            style={{ 
              padding: '12px 24px', 
              borderRadius: '8px',
              backgroundColor: activeTab === 'eventos' ? 'var(--coral)' : 'transparent',
              color: activeTab === 'eventos' ? 'var(--branco)' : 'var(--preto)',
              fontWeight: 'bold',
              border: activeTab === 'eventos' ? 'none' : '1px solid transparent',
            }}>
            🌟 Novos Eventos
          </button>
          <button 
            onClick={() => setActiveTab('certificados')}
            style={{ 
              padding: '12px 24px', 
              borderRadius: '8px',
              backgroundColor: activeTab === 'certificados' ? 'var(--roxo)' : 'transparent',
              color: activeTab === 'certificados' ? 'var(--branco)' : 'var(--preto)',
              fontWeight: 'bold',
              border: activeTab === 'certificados' ? 'none' : '1px solid transparent',
            }}>
            🎓 Meus Certificados
          </button>
        </div>

        {/* Content Area */}
        <div style={{ backgroundColor: 'var(--branco)', borderRadius: '16px', padding: '32px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
          
          {/* TAB: INSCRIÇÕES */}
          {activeTab === 'inscricoes' && (
            <div>
              <h2 style={{ fontSize: '24px', marginBottom: '24px' }}>Minhas Inscrições Atuais</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '12px' }}>
                  <div>
                    <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Simpósio de Educação Inclusiva</h3>
                    <p style={{ color: '#6b7280', fontSize: '14px' }}>Auditório Central da UFPA • 15 de Novembro de 2025</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ padding: '6px 12px', backgroundColor: '#dcfce7', color: '#166534', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>CONFIRMADO</span>
                    <button className="btn btn-outline" style={{ padding: '8px 16px' }}>Ver Detalhes</button>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '12px' }}>
                  <div>
                    <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Oficina de Materiais Táteis</h3>
                    <p style={{ color: '#6b7280', fontSize: '14px' }}>Laboratório de Pedagogia • 28 de Novembro de 2025</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ padding: '6px 12px', backgroundColor: '#fef9c3', color: '#854d0e', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>AGUARDANDO PAGAMENTO</span>
                    <button className="btn btn-outline" style={{ padding: '8px 16px' }}>Pagar Boleto</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: EVENTOS */}
          {activeTab === 'eventos' && (
            <div>
              <h2 style={{ fontSize: '24px', marginBottom: '24px' }}>Eventos Disponíveis para Inscrição</h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
                <div style={{ padding: '24px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--coral)', borderRadius: '8px', marginBottom: '16px' }}></div>
                  <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Encontro Regional de Libras</h3>
                  <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '24px', flexGrow: 1 }}>Um dia inteiro dedicado a debates e práticas sobre a Língua Brasileira de Sinais.</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '14px' }}>05 Dez</span>
                    <button className="btn btn-black" style={{ padding: '8px 16px' }}>Inscrever-se</button>
                  </div>
                </div>

                <div style={{ padding: '24px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--roxo)', borderRadius: '8px', marginBottom: '16px' }}></div>
                  <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Palestra: Autismo na Escola</h3>
                  <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '24px', flexGrow: 1 }}>Estratégias de adaptação curricular para alunos no espectro autista.</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '14px' }}>12 Dez</span>
                    <button className="btn btn-black" style={{ padding: '8px 16px' }}>Inscrever-se</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: CERTIFICADOS */}
          {activeTab === 'certificados' && (
            <div>
              <h2 style={{ fontSize: '24px', marginBottom: '24px' }}>Meus Certificados</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '12px', backgroundColor: 'var(--off-white)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ fontSize: '32px' }}>📜</div>
                    <div>
                      <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>Workshop de Acessibilidade Web</h3>
                      <p style={{ color: '#6b7280', fontSize: '14px' }}>Carga Horária: 10h • Realizado em Agosto/2024</p>
                    </div>
                  </div>
                  <button className="btn btn-black" style={{ padding: '8px 16px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span>⬇️</span> Baixar PDF
                  </button>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '12px', backgroundColor: 'var(--off-white)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ fontSize: '32px' }}>📜</div>
                    <div>
                      <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>Seminário Anual do GEIRA 2023</h3>
                      <p style={{ color: '#6b7280', fontSize: '14px' }}>Carga Horária: 40h • Realizado em Novembro/2023</p>
                    </div>
                  </div>
                  <button className="btn btn-black" style={{ padding: '8px 16px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span>⬇️</span> Baixar PDF
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
