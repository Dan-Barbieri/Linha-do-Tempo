// src/pages/TextinhosPage.jsx
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
dayjs.locale('pt-br');

const TextinhosPage = () => {
  const [mensagensPorData, setMensagensPorData] = useState({});
  const [filtroData, setFiltroData] = useState('');
  const [datasOrdenadas, setDatasOrdenadas] = useState([]);

  useEffect(() => {
    const carregarMensagens = async () => {
      try {
        const res = await fetch('/Conversa.txt');
        const texto = await res.text();
        const mensagens = parseMensagens(texto);

        const agrupadasPorData = mensagens.reduce((acc, msg) => {
          if (!acc[msg.date]) acc[msg.date] = [];
          acc[msg.date].push(msg);
          return acc;
        }, {});
        
        setMensagensPorData(agrupadasPorData);
        setDatasOrdenadas(Object.keys(agrupadasPorData).sort((a, b) => new Date(a) - new Date(b)));
      } catch (error) {
        console.error('Erro ao carregar mensagens:', error);
      }
    };

    carregarMensagens();
  }, []);

  const parseMensagens = (texto) => {
    const linhas = texto.split('\n');
    const mensagens = [];
    // Regex ajustado para capturar apenas data e sender (sem hora)
    const regex = /^(\d{2}\/\d{2}\/\d{4}) (\d{2}:\d{2}) - (.*?): (.*)$/;

    linhas.forEach((linha) => {
      const match = linha.match(regex);
      if (match) {
        const [, data, , sender, message] = match;
        const [dia, mes, ano] = data.split('/');
        mensagens.push({
          date: `${ano}-${mes}-${dia}`,
          sender,
          message: message.trim(),
        });
      }
    });

    return mensagens;
  };

  // Filtro de data
  const mensagensFiltradas = filtroData
    ? mensagensPorData[filtroData] || []
    : Object.values(mensagensPorData).flat();

  const handleFiltroDataChange = (e) => {
    setFiltroData(e.target.value);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Filtro de Data */}
      <div className="mb-4">
        <label htmlFor="filtroData" className="block text-lg font-semibold mb-2">Filtrar por Data</label>
        <input
          type="date"
          id="filtroData"
          value={filtroData}
          onChange={handleFiltroDataChange}
          className="border p-2 rounded-md w-full"
        />
      </div>

      {mensagensFiltradas.length === 0 ? (
        <p className="text-center text-gray-500">Nenhuma mensagem encontrada para essa data.</p>
      ) : (
        mensagensFiltradas.map((msg, idx) => {
          const dataFormatada = dayjs(msg.date).format('DD [de] MMMM [de] YYYY');
          return (
            <div key={idx} className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-luna-blue border-b pb-1">
                {dataFormatada}
              </h2>
              <div className="space-y-3">
                <div
                  className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition duration-300"
                >
                  <span className="block text-sm text-gray-500 mb-1">
                    <strong className="text-gray-700">{msg.sender}</strong>
                  </span>
                  <p className="text-gray-800 whitespace-pre-wrap">{msg.message}</p>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default TextinhosPage;
