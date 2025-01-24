import React, { useState, useEffect } from 'react';

 const Regressiva = () => {
  const targetDate = new Date('2025-11-15');
  const [timeLeft, setTimeLeft] = useState({ years: 0, months: 0, weeks: 0, days: 0, hours: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ years: 0, months: 0, weeks: 0, days: 0, hours: 0 });
      } else {
        const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        const weeks = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        setTimeLeft({ years, months, weeks, days, hours });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => num.toString().padStart(2, '0'); 

  return (
    <div className="flex flex-col gap-10 justify-center items-center p-4  bg-gray-900 text-white min-h-screen">
      <div className='flex flex-col items-center justify-center w-130 text-justify'>
      Quando falamos em sonhos, existe um que supera todos, porém antes dele existem etapas a serem cumpridas. Uma dela é o noivado aonde já
      existe uma data marcada para o começo desse sonho, o pedido pode ser que não estaja nesse dia mas ali acontecerá o marco onde inicial todo
      esse processo... e acredita que faltam apenas: 
      </div>

      <div className="flex gap-2 flex-wrap justify-center">
        <div className="flex flex-col items-center  w-20 h-20 md:w-24 md:h-24 ">
          <div className='flex flex-col bg-surpresa items-center justify-center w-full h-18 rounded-t-md'>
          <p className="text-3xl font-bold tracking-wider text-white">{formatNumber(timeLeft.years)}</p>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-6 bg-blue-950 rounded-b-md">
          <span className="text-xm font-semibold text-white">Ano</span>
          </div>
        </div>

        <div className="flex flex-col items-center  w-20 h-20 md:w-24 md:h-24 ">
          <div className='flex flex-col bg-surpresa items-center justify-center w-full h-18 rounded-t-md'>
          <p className="text-3xl font-bold tracking-wider text-white">{formatNumber(timeLeft.months)}</p>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-6 bg-blue-950 rounded-b-md">
          <span className="text-xm font-semibold text-white">Mês</span>
          </div>
        </div>

        <div className="flex flex-col items-center  w-20 h-20 md:w-24 md:h-24 ">
          <div className='flex flex-col bg-surpresa items-center justify-center w-full h-18 rounded-t-md'>
          <p className="text-3xl font-bold tracking-wider text-white">{formatNumber(timeLeft.weeks)}</p>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-6 bg-blue-950 rounded-b-md">
          <span className="text-xm font-semibold text-white">Semanas</span>
          </div>
        </div>

        <div className="flex flex-col items-center  w-20 h-20 md:w-24 md:h-24 ">
          <div className='flex flex-col bg-surpresa items-center justify-center w-full h-18 rounded-t-md'>
          <p className="text-3xl font-bold tracking-wider text-white">{formatNumber(timeLeft.days)}</p>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-6 bg-blue-950 rounded-b-md">
          <span className="text-xm font-semibold text-white">Dias</span>
          </div>
        </div>

        <div className="flex flex-col items-center  w-20 h-20 md:w-24 md:h-24 ">
          <div className='flex flex-col bg-surpresa items-center justify-center w-full h-18 rounded-t-md'>
          <p className="text-3xl font-bold tracking-wider text-white">{formatNumber(timeLeft.hours)}</p>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-6 bg-blue-950 rounded-b-md">
          <span className="text-xm font-semibold text-white">Horas</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regressiva;
