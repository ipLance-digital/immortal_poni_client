import { getInitials } from '../utils';

describe('getInitials', () => {
  test('должен вернуть пустую строку для пустого имени', () => {
    expect(getInitials('')).toBe('');
  });

  test('должен вернуть пустую строку для имени, состоящего только из пробелов', () => {
    expect(getInitials('     ')).toBe('');
  });

  test('должен вернуть первые две буквы для имени из одного слова', () => {
    expect(getInitials('John')).toBe('JO');
  });

  test('должен вернуть инициалы из имени из двух слов', () => {
    expect(getInitials('John Doe')).toBe('JD');
  });

  test('должен вернуть инициалы из имени с несколькими словами', () => {
    expect(getInitials('John Michael Doe')).toBe('JD');
  });

  test('должен игнорировать пробелы между словами', () => {
    expect(getInitials('  John    Michael   Doe  ')).toBe('JD');
  });

  test('должен правильно обрабатывать регистры', () => {
    expect(getInitials('jOHN dOe')).toBe('JD');
  });

  test('должен вернуть инициалы даже если части состоят из одной буквы', () => {
    expect(getInitials('A B')).toBe('AB');
  });

  test('должен вернуть инициалы для двух односимвольных слов', () => {
    expect(getInitials('A B C D')).toBe('AD');
  });

  test('должен вернуть инициалы для имени, состоящего из нескольких пробелов и букв', () => {
    expect(getInitials('  A B')).toBe('AB');
  });
});
