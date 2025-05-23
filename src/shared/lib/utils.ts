export const getInitials = (name: string): string => {
  // Если строка пустая или состоит только из пробелов
  if (!name || name.trim().length === 0) return '';

  // Убираем лишние пробелы и разбиваем на части
  const parts = name
    .trim()
    .split(/\s+/)
    .filter((part) => part.length > 0);

  // Если нет частей после фильтрации
  if (parts.length === 0) return '';

  // Если только одна часть
  if (parts.length === 1) {
    const part = parts[0];
    // Берем первый символ, если он есть
    return part.charAt(0).toUpperCase() + part.charAt(1).toUpperCase() || '';
  }

  // Берем первую букву из первой и последней части
  const firstInitial = parts[0].charAt(0).toUpperCase() || '';
  const lastInitial = parts[parts.length - 1].charAt(0).toUpperCase() || '';

  return `${firstInitial}${lastInitial}`;
};

export const getCookie = (key: string): string | null => {
  if (typeof window !== 'undefined') {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find((row) => row.startsWith(`${key}=`));
    return cookie ? cookie.split('=')[1] : null;
  }
  return null;
};

export const safeJSONParse = (text: string) => {
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(`Сервер вернул не JSON: ${text || 'Пустой ответ'}`);
  }
};
