import React, { useState } from 'react';

const lugares =  [
    { 
      nome: 'Corredor da Saudade', 
      top: '15%', 
      left: '30%', 
      mensagem: 'Cada passo neste corredor me faz lembrar de todos os momentos que vivemos juntos. 💫' 
    },
    { 
      nome: 'Sala dos Abraços', 
      top: '20%', 
      left: '50%', 
      mensagem: 'Aqui, é onde nossos abraços se tornam eternos, um refúgio de carinho e amor. 🤗' 
    },
    { 
      nome: 'Torre dos Sonhos', 
      top: '25%', 
      left: '35%', 
      mensagem: 'Com você, os meus sonhos não têm limites. Cada dia ao seu lado é uma nova estrela brilhando. 🌙' 
    },
    { 
      nome: 'Jardins da Esperança', 
      top: '40%', 
      left: '45%', 
      mensagem: 'Em nosso jardim, a esperança sempre floresce, assim como o amor que temos um pelo outro. 🌱' 
    },
    { 
      nome: 'Porto da Memória', 
      top: '60%', 
      left: '70%', 
      mensagem: 'Nosso amor é como uma linda viagem, onde cada lembrança compartilhada é um porto seguro. ⛵' 
    },
    { 
      nome: 'Caminho dos Destinos', 
      top: '50%', 
      left: '25%', 
      mensagem: 'A cada passo que damos juntos, vejo como nossos destinos estão entrelaçados e cheios de magia. 🛤️' 
    },
    { 
      nome: 'Sala dos Sorrisos', 
      top: '30%', 
      left: '80%', 
      mensagem: 'Seu sorriso ilumina meu mundo e faz tudo ao redor se tornar mais brilhante. 😄' 
    },
    { 
      nome: 'Castelo das Estrelas', 
      top: '70%', 
      left: '50%', 
      mensagem: 'No nosso castelo, o amor que compartilhamos brilha mais forte do que qualquer estrela no céu. 🌟' 
    },
  ];

const MapaMagico = () => {
    const [mensagem, setMensagem] = useState(null);

    return (
        <div className="relative min-h-screen bg-black bg-mapa bg-cover bg-center">
            {/* Ícones mágicos com brilho */}
            {lugares.map((lugar, index) => (
                <div key={index} className="absolute" style={{ top: lugar.top, left: lugar.left, transform: 'translate(-50%, -50%)' }}>
                    <div className="absolute text-black text-center h-full" style={{ top: '-2.5rem' }}>
                        <p className="text-ls font-harry">{lugar.nome}</p>
                    </div>
                    <button
                        onClick={() => setMensagem(lugar.mensagem)}
                        className="w-8 h-8 bg-yellow-300 rounded-full shadow-lg hover:scale-110 ring-2 ring-yellow-400 animate-pulse transition"
                        title={lugar.nome}
                    ></button>
                </div>
            ))}

            {/* Mensagem Mágica */}
            {mensagem && (
                <div
                    className="absolute inset-0 bg-opacity-70 backdrop-blur-sm flex items-center justify-center text-white text-xl p-6 z-50"
                    onClick={() => setMensagem(null)}
                >
                    <div className="bg-gray-800 p-6 rounded-xl max-w-md text-center border border-amber-400 shadow-lg">
                        <p>{mensagem}</p>
                        <p className="mt-4 text-sm text-amber-300">(Clique para fechar)</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MapaMagico;
