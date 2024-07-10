const generateInvoiceID = (): string => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';

  const getRandomChar = (chars: string) =>
    chars.charAt(Math.floor(Math.random() * chars.length));

  const id = `${getRandomChar(letters)}${getRandomChar(letters)}${Array.from(
    {length: 4},
    () => getRandomChar(numbers),
  ).join('')}`;
  return id;
};

export {generateInvoiceID};
