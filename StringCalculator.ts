export class StringCalculator {
  
    add(numbers: string): number {
      let sum = 0
      const splitNumbers = numbers.split(",")   
      for(let i=0;i<splitNumbers.length;i++)
      {
        sum += parseInt(splitNumbers[i]) || 0
      }
        return sum
    }
  }
  