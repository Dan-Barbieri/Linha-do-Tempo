import { Link } from "react-router-dom";
import selo from "../../public/selo.png"; // ajuste se necessário

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1a1a] text-[#f5deb3] font-serif">
      <h1 className="text-3xl font-bold">Sua carta chegou!</h1>
      <p className="mt-2">Clique na carta abaixo para abrir</p>

      <Link to="/inicio">
        <div className="relative mt-12 w-72 h-48 group perspective">
          {/* Envelope base */}
          <div className="absolute inset-0 bg-[#d7b58c] border border-[#b08a60] rounded shadow-lg z-10" />

          {/* Aba esquerda */}
          <div className="absolute top-0 left-0 w-1/2 h-full z-20 overflow-hidden pointer-events-none">
            <div className="w-full h-full bg-[#d7b58c] rotate-[-45deg] origin-top-left" />
          </div>

          {/* Aba direita */}
          <div className="absolute top-0 right-0 w-1/2 h-full z-20 overflow-hidden pointer-events-none">
            <div className="w-full h-full bg-[#d7b58c] rotate-[45deg] origin-top-right" />
          </div>

          {/* Aba inferior */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#d7b58c] z-20 pointer-events-none" />

          {/* Aba superior (abre) */}
          <div className="absolute top-0 left-0 w-full h-1/2 origin-top z-30 transition-transform duration-700 group-hover:-rotate-x-75 bg-[#d7b58c] border-b border-[#b08a60] rounded-t-[10px]" />

          {/* Selo */}
          <img
            src={selo}
            alt="Selo de Hogwarts"
            className="absolute bottom-[18%] left-1/2 -translate-x-1/2 w-14 h-14 z-40 pointer-events-none"
          />

          {/* Carta com texto (sobe ao hover) */}
          <div className="absolute inset-0 px-4 py-6 bg-white text-black rounded z-0 opacity-0 group-hover:opacity-100 group-hover:-translate-y-44 transition-all duration-700 ease-in-out">
            <p className="text-sm leading-snug">
              Prezado(a) aluno(a),<br />
              Temos o prazer de informar que você foi aceito em Hogwarts. Sua jornada mágica começa agora!
            </p>
          </div>
        </div>
      </Link>

      <p className="mt-10">Ou use o menu para explorar outros encantos.</p>
      <p className="mt-2">🪄 Te amo meu bruxinho! 🪄</p>
    </div>
  );
}

