import React from 'react';
import { Link } from 'react-router-dom';

export default function DashboardColaborador() {
  return (
    <div style={{ padding: '40px', minHeight: '80vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Painel do Colaborador</h1>
          <p style={{ color: '#6b7280' }}>Gerencie o conteúdo do site, eventos e blog.</p>
        </div>
        <Link to="/" className="btn btn-outline">Sair</Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
        
        {/* Card Blog */}
        <div style={{ padding: '24px', backgroundColor: 'var(--branco)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
          <div style={{ fontSize: '24px', marginBottom: '16px' }}>📝</div>
          <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Gerenciar Blog</h3>
          <p style={{ color: '#6b7280', marginBottom: '16px', fontSize: '14px' }}>Adicione novos artigos, notícias e relatos ao blog do GEIRA.</p>
          <button className="btn btn-black" style={{ width: '100%' }}>Novo Artigo</button>
        </div>

        {/* Card Eventos */}
        <div style={{ padding: '24px', backgroundColor: 'var(--branco)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
          <div style={{ fontSize: '24px', marginBottom: '16px' }}>📅</div>
          <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Agenda e Eventos</h3>
          <p style={{ color: '#6b7280', marginBottom: '16px', fontSize: '14px' }}>Cadastre novas datas, simpósios e encontros regionais.</p>
          <button className="btn btn-black" style={{ width: '100%' }}>Criar Evento</button>
        </div>

        {/* Card Formulários */}
        <div style={{ padding: '24px', backgroundColor: 'var(--branco)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
          <div style={{ fontSize: '24px', marginBottom: '16px' }}>📋</div>
          <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Formulários</h3>
          <p style={{ color: '#6b7280', marginBottom: '16px', fontSize: '14px' }}>Crie formulários para inscrição em atividades acadêmicas.</p>
          <button className="btn btn-black" style={{ width: '100%' }}>Novo Formulário</button>
        </div>

      </div>
    </div>
  );
}
