import React, { useState } from 'react';
import { JigsawPuzzle } from 'react-jigsaw-puzzle';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';

const NamoroPuzzle = () => {
  const imageList = Array.from({ length: 14 }, (_, i) => ({
    src: `/fotos/foto${i + 1}.jpg`,
    value: i + 1,
  }));

  const [selectedImage, setSelectedImage] = useState(imageList[0].src);
  const [puzzleKey, setPuzzleKey] = useState(0);

  const handleImagePick = (src) => {
    setSelectedImage(src);
    setPuzzleKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <h1 className="text-white text-2xl mb-4">🧩 Quebra-Cabeça da Nossa História</h1>

      {/* Seletor de imagem */}
      <div className="mb-6 grid grid-cols-4 gap-2">
        {imageList.map((img) => (
          <button
            key={img.value}
            onClick={() => handleImagePick(img.src)}
            className={`border-2 ${selectedImage === img.src ? 'border-yellow-400' : 'border-transparent'} rounded-md overflow-hidden`}
          >
            <img src={img.src} alt={`Foto ${img.value}`} className="w-20 h-20 object-cover" />
          </button>
        ))}
      </div>

      {/* Puzzle */}
      <div className="w-full max-w-4xl p-[1%] bg-gradient-to-r from-[#f5f5dc] via-[#e0e0d1] to-[#f5f5dc] border-[1.25vw] border-[#8b4513] shadow-[0_0_2.5vw_rgba(0,0,0,0.5)] rounded-[0.625vw] box-border">
        <JigsawPuzzle
          key={puzzleKey}
          imageSrc={selectedImage}
          rows={6}
          columns={8}
          onSolved={() => alert('🎉 Quebra-cabeça completo!')}
        />
      </div>
    </div>
  );
};

export default NamoroPuzzle;
