/**
 * コンウェイのライフゲーム
 * (…のふりしてブリンカーパターンだけ動くコード)
 * 参考: https://ja.wikipedia.org/wiki/ライフゲーム
 */

const blinker1 = ['□■□', '□■□', '□■□']
const blinker2 = ['□□□', '■■■', '□□□']

const lifegame = board => {
  if (JSON.stringify(board)==JSON.stringify(blinker1)) return blinker2
  return blinker1
}

const main = () => {
  let board = ['□■□', '□■□', '□■□']
  for (let i=0; i<5; i++) {
    console.log(`--- ${i} ---`)
    board = lifegame(board)
    console.log(board.join('\n'))
  }
}

// main()

export default lifegame
