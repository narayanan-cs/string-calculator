import {StringCalculator} from './StringCalculator'

describe("String Calculator test suite",()=>{
    let calculator: StringCalculator
beforeAll(()=>{
   calculator = new StringCalculator()
})

test("nothing to test",()=>{

    expect("").toEqual("")
})

test("calculator should have add method",()=>{

    expect(calculator.add).toBeDefined();
    expect(typeof calculator.add).toBe('function')
        
    })
    
test("calculator should return sum of upto 2 numbers correctly",()=>{
expect(calculator.add("")).toEqual(0)
expect(calculator.add('"",1')).toEqual(1)
expect(calculator.add('525,1')).toEqual(526)
})

test("calculator should return sum of an unknown number of numbers correctly",()=>{
    expect(calculator.add("")).toEqual(0)
    expect(calculator.add('"",1,2')).toEqual(3)
    expect(calculator.add('1,2,3,4,5')).toEqual(15)
    })

    test("calculator should handle new lines between numbers correctly",()=>{
        expect(calculator.add('1\n2,3')).toEqual(6)
        expect(calculator.add('"",1\n2')).toEqual(3)
        expect(calculator.add('1,2\n3\n4,5')).toEqual(15)
        })
    
  test("Support different delimiters",()=>{
    expect(calculator.add("//;\n1;2")).toEqual(3)
    expect(calculator.add("//%\n1%2%3%4%5")).toEqual(15)
    expect(calculator.add("//\x02\n1\x022\x023\x024\x025")).toEqual(15)
  })      
afterAll(()=>{
    
})

})