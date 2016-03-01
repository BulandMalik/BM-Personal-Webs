INTEGRALLIS = {}

do INTEGRALLIS.structures = -> ( 
  Stack = (options) -> (
    this.push = (element) -> elements.push element
    this.pop = () -> return elements.pop()
    this.size = () -> return elements.length
    this.clear = () -> elements = []
    this.toString = () -> return "[  #{elements.join ','}  ]"
    # initializes the stack
    elements = []
  )
  return { Stack : Stack }
)