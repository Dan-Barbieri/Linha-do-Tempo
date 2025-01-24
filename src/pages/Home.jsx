import { Link } from "react-router-dom";

export default function Home() {
    return (
      <div className="flex justify-center items-center flex-col text-center bg-gray-900 text-white min-h-screen">
        <h1 className="text-3xl font-bold ">Oii Ursinho!!!</h1>
        <p className=" mt-4">Fiz um pedacinho da nossa linha do tempo</p>
        <p className=" mt-6">Clique no botão abaixo para ver</p>
        <Link href="/conversa">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Começar
        </button>
        </Link>
        <p className="mt-6">Ou use o menu superior para escolher uma opção.</p>
        <p className="">Obrigado por ser parte dessa história!</p>
        <p className="">Te amo muito!</p>
      </div>
    );
  }
  