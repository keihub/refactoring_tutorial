// 最初のコード
const fizzbuzz_00 = () => {
    return [
        '1',    '2',    'Fizz', '4',    'Buzz',
        'Fizz', '7',    '8',    'Fizz', 'Buzz',
        '11',   'Fizz', '13',   '14',   'FizzBuzz'
    ]
}

// ルールを導入1
const fizzbuzz_01 = () => {
    const fizzbuzz = v => {
        return `${v}`
    }

    return [
        fizzbuzz(1),
        fizzbuzz(2),
        'Fizz',
        fizzbuzz(4),
        'Buzz',
        'Fizz',
        fizzbuzz(7),
        fizzbuzz(8),
        'Fizz',
        'Buzz',
        fizzbuzz(11),
        'Fizz',
        fizzbuzz(13),
        fizzbuzz(14),
        'FizzBuzz'
    ]
}

// ルールを導入2
const fizzbuzz_02 = () => {
    const fizzbuzz = v => {
        if (v%15===0) return 'FizzBuzz'
        if (v%3===0) return 'Fizz'
        if (v%5===0) return 'Buzz'
        return `${v}`
    }

    return [
        fizzbuzz(1),
        fizzbuzz(2),
        fizzbuzz(3),
        fizzbuzz(4),
        fizzbuzz(5),
        fizzbuzz(6),
        fizzbuzz(7),
        fizzbuzz(8),
        fizzbuzz(9),
        fizzbuzz(10),
        fizzbuzz(11),
        fizzbuzz(12),
        fizzbuzz(13),
        fizzbuzz(14),
        fizzbuzz(15)
    ]
}

// ループを導入
const fizzbuzz_03 = () => {
    const fizzbuzz = v => {
        if (v%15===0) return 'FizzBuzz'
        if (v%3===0) return 'Fizz'
        if (v%5===0) return 'Buzz'
        return `${v}`
    }

    const ret = []
    for (let i=1; i<=15; i++) {
        ret.push(fizzbuzz(i))
    }

    return ret
}

// ルールをシンプルに
const fizzbuzz_04 = () => {
    const fizz3 = v => v%3?'':'Fizz'
    const buzz5 = v => v%5?'':'Buzz'
    const fizzbuzz = v =>  `${fizz3(v) + buzz5(v)}` || `${v}`

    const ret = []
    for (let i=1; i<=15; i++) {
        ret.push(fizzbuzz(i))
    }

    return ret
}

// ループをシンプルに
const fizzbuzz_05 = () => {
    const fizz3 = v => v%3?'':'Fizz'
    const buzz5 = v => v%5?'':'Buzz'
    const fizzbuzz = v =>  `${fizz3(v) + buzz5(v)}` || `${v}`

    return [...Array(15)].map((i, idx) => fizzbuzz(idx+1))
}

/**
 * 文法単語
 *
 * - アロー関数
 * - テンプレートリテラル
 * - ジェネレーター
 * - スプレッド演算子
 */
