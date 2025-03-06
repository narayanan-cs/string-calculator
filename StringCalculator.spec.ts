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
    




afterAll(()=>{
    
})

})