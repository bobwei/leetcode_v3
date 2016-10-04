import convert from './zigzag-conversion';

describe('test zigzag-conversion', () => {
  it('can do zigzag-conversion', () => {
    expect(convert('PAYPALISHIRING', 3)).toEqual('PAHNAPLSIIGYIR');
    expect(convert('A', 1)).toEqual('A');
    expect(convert('AB', 1)).toEqual('AB');
    expect(convert('ABC', 1)).toEqual('ABC');
    expect(convert('ABC', 2)).toEqual('ACB');
  });
});
