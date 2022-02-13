const fizzbuzz_00 = () => {
    return [
        '1', '2', 'Fizz', '4', 'Buzz',
        'Fizz', '7', '8', 'Fizz', 'Buzz',
        '11', 'Fizz', '13', '14', 'FizzBuzz'
    ]
}

export const check = v => {
    if (v % 3 === 0 && v % 5 === 0) return 'FizzBuzz'
    if (v % 3 === 0) return 'Fizz'
    if (v % 5 === 0) return 'Buzz'
    return `${v}`
}

const main = () => {

    let result = []
    for (let i = 0; i < 15; i++) {
        result[i] = check(i + 1)
    }
    return result
}


export default main

