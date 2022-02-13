import lifegame from './lifegame'

const blinker1 = ['□■□', '□■□', '□■□']
const blinker2 = ['□□□', '■■■', '□□□']

describe('ブリンカーパターンについて', () => {
  it('パターン1 からパターン2 に切り替わること', () => {
    expect(lifegame(blinker1)).toEqual(blinker2)
  })

  it('パターン2 からパターン1 に切り替わること', () => {
    expect(lifegame(blinker2)).toEqual(blinker1)
  })
})

