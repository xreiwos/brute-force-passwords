import { generatePasswords } from './generatePasswords';

describe('Generate passwords', () => {
  it('[1] should return correctly list of passwords', () => {
    const passwords = [
      'aaa', 'baa', 'caa', 'aba',
      'bba', 'cba', 'aca', 'bca',
      'cca', 'aab', 'bab', 'cab',
      'abb', 'bbb', 'cbb', 'acb',
      'bcb', 'ccb', 'aac', 'bac',
      'cac', 'abc', 'bbc', 'cbc',
      'acc', 'bcc', 'ccc',
    ];

    const chars = 'abc';
    const length = 3;

    const generated = generatePasswords(chars, length);

    expect(generated.sort()).toEqual(passwords.sort());
  });

  it('[2] should return correctly list of passwords', () => {
    const passwords = [
      'aaaa', 'baaa', 'caaa', 'abaa', 'bbaa', 'cbaa',
      'acaa', 'bcaa', 'ccaa', 'aaba', 'baba', 'caba',
      'abba', 'bbba', 'cbba', 'acba', 'bcba', 'ccba',
      'aaca', 'baca', 'caca', 'abca', 'bbca', 'cbca',
      'acca', 'bcca', 'ccca', 'aaab', 'baab', 'caab',
      'abab', 'bbab', 'cbab', 'acab', 'bcab', 'ccab',
      'aabb', 'babb', 'cabb', 'abbb', 'bbbb', 'cbbb',
      'acbb', 'bcbb', 'ccbb', 'aacb', 'bacb', 'cacb',
      'abcb', 'bbcb', 'cbcb', 'accb', 'bccb', 'cccb',
      'aaac', 'baac', 'caac', 'abac', 'bbac', 'cbac',
      'acac', 'bcac', 'ccac', 'aabc', 'babc', 'cabc',
      'abbc', 'bbbc', 'cbbc', 'acbc', 'bcbc', 'ccbc',
      'aacc', 'bacc', 'cacc', 'abcc', 'bbcc', 'cbcc',
      'accc', 'bccc', 'cccc'
    ];

    const chars = 'abc';
    const length = 4;

    const generated = generatePasswords(chars, length);

    expect(generated.sort()).toEqual(passwords.sort());
  });
});
