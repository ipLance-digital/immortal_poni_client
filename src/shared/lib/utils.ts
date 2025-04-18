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

export const getCookies = async (key: string): Promise<string | undefined> => {
  if (typeof window !== 'undefined') {
    return document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${key}=`))
      ?.split('=')[1];
  } else {
    const { cookies } = await import('next/headers');
    return (await cookies()).get(key.replace('_', ''))?.value;
  }
};

export const safeJSONParse = (text: string) => {
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(`Сервер вернул не JSON: ${text || 'Пустой ответ'}`);
  }
};
