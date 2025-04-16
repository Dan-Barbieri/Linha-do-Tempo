const parseMensagens = (texto) => {
  const linhas = texto.split('\n');
  const mensagens = [];

  // Ajuste do regex
  const regex = /^(\d{2}\/\d{2}\/\d{4}) (\d{2}:\d{2}) - (.*?)\: (.*)$/;

  linhas.forEach((linha) => {
    const match = linha.match(regex);
    if (match) {
      const [, data, hora, sender, message] = match;
      const [dia, mes, ano] = data.split('/');
      mensagens.push({
        date: `${ano}-${mes}-${dia}`,
        time: hora,
        sender,
        message: message.trim(),
      });
    }
  });

  return mensagens;
};
