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

  const handleFiltroDataChange = (e) => {
    setFiltroData(e.target.value);
  };

  const mensagensFiltradas = filtroData
    ? mensagensPorData[filtroData] || []
    : null;

  return (
    <div className="p-6 max-w-3xl mx-auto font-sans dark:bg-[#121212] dark:text-gray-100 min-h-screen">
      {/* Filtro */}
      <div className="mb-8">
        <label htmlFor="filtroData" className="block text-lg font-semibold mb-2 text-amber-900 dark:text-amber-300">
          🕰️ Procurar por uma data
        </label>
        <input
          type="date"
          id="filtroData"
          value={filtroData}
          onChange={handleFiltroDataChange}
          className="border border-yellow-600 p-2 rounded-md w-full bg-white dark:bg-gray-900 dark:border-yellow-400 dark:text-white"
        />
      </div>

      {filtroData ? (
        mensagensFiltradas.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">Nenhuma mensagem encontrada nessa data mágica.</p>
        ) : (
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-amber-900 dark:text-amber-300 font-harry border-b border-yellow-400 pb-1">
              {dayjs(filtroData).format('DD [de] MMMM [de] YYYY')}
            </h2>
            <div className="space-y-3">
              {mensagensFiltradas.map((msg, idx) => (
                <div
                  key={idx}
                  className="bg-yellow-50 dark:bg-[#2b2118] border border-yellow-300 dark:border-yellow-700 p-4 rounded-xl shadow-sm hover:shadow-md transition font-serif"
                  style={{ backgroundImage: 'url(/parchment.jpg)', backgroundSize: 'cover', backgroundBlendMode: 'multiply' }}
                >
                  <span className="block text-sm text-gray-700 dark:text-gray-200 mb-1">
                    <strong>{msg.sender}</strong>
                  </span>
                  <p className="text-gray-800 dark:text-gray-100 whitespace-pre-wrap">{msg.message}</p>
                </div>
              ))}
            </div>
          </div>
        )
      ) : (
        datasOrdenadas.map((data, idx) => (
          <div key={idx} className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-amber-900 dark:text-amber-300 font-harry border-b border-yellow-400 pb-1">
              {dayjs(data).format('DD [de] MMMM [de] YYYY')}
            </h2>
            <div className="space-y-3">
              {mensagensPorData[data].map((msg, i) => (
                <div
                  key={i}
                  className="bg-yellow-50 dark:bg-[#2b2118] border border-yellow-300 dark:border-yellow-700 p-4 rounded-xl shadow-sm hover:shadow-md transition font-serif"
                  style={{ backgroundImage: 'url(/parchment.jpg)', backgroundSize: 'cover', backgroundBlendMode: 'multiply' }}
                >
                  <span className="block text-sm text-gray-700 dark:text-gray-200 mb-1">
                    <strong>{msg.sender}</strong>
                  </span>
                  <p className="text-gray-800 dark:text-gray-100 whitespace-pre-wrap">{msg.message}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TextinhosPage;
