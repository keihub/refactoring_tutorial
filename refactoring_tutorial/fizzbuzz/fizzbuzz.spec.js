import main, {check} from './fizzbuzz'

describe('FizzBuzz について', () => {
    it('1-5までがFizzBuzzになること', () => {
        const ret = main()
        expect(ret[1 - 1]).toBe('1')
        expect(ret[2 - 1]).toBe('2')
        expect(ret[3 - 1]).toBe('Fizz')
        expect(ret[4 - 1]).toBe('4')
        expect(ret[5 - 1]).toBe('Buzz')
        expect(ret[6 - 1]).toBe('Fizz')
        expect(ret[7 - 1]).toBe('7')
        expect(ret[8 - 1]).toBe('8')
        expect(ret[9 - 1]).toBe('Fizz')
        expect(ret[10 - 1]).toBe('Buzz')
        expect(ret[15 - 1]).toBe('FizzBuzz')
    })
    it('抜き打ちでFizzBuzzをテストする', () => {
    })

    it('1-5までがFizzBuzzになること', () => {
        const exp = [
            '1', '2', 'Fizz', '4', 'Buzz',
            'Fizz', '7', '8', 'Fizz', 'Buzz',
            '11', 'Fizz', '13', '14', 'FizzBuzz'
        ]
        const target = main()

        expect(target).toEqual(exp)
    })
})
