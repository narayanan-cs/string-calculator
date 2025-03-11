export class StringCalculator {
  
    add(numbers: string): number {
      
      const hasDifferentDelimiter = this.hasDifferentDelimiter(numbers)
      let differentDelimiter, splitNumbers
      if(hasDifferentDelimiter)
      {
        differentDelimiter = numbers.substring(2,numbers.indexOf("\n"))
        let expression = numbers.substring(numbers.indexOf("\n")+1)
        splitNumbers = expression.split(differentDelimiter)
      } else {
        splitNumbers = numbers.split(/[,\n]+/)   
      }
        let sum = 0
      
      
      for(let i=0;i<splitNumbers.length;i++)
      {
        sum += parseInt(splitNumbers[i]) || 0
      }
        return sum
    }

    hasDifferentDelimiter(numbers: string): boolean
    {
        if(numbers.substring(0,2) === '//')
            return true

        return false
    }

  }
  