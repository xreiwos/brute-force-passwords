import { countCombinations } from './common/utils';

export const generatePasswords = (chars: string, length: number) => {
  const passwords = [];
  const n = chars.length;

  const count = countCombinations(n, length);

  for (let i = 0; i < count; i++) {
    let password = '';
    let temp = i;

    for (let j = 0; j < length; j++) {
      password += chars[temp % n];
      temp = Math.floor(temp / n);
    }

    passwords.push(password);
  }

  return passwords;
};