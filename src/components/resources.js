
export const checkValueOfPoint =
  (
    usingPokerus,
    usingMachoBrace,
    usingBrace,
    point
  ) => {
    const doubledAfterPK = (num) => num * 2

    if (usingPokerus) {

      // if true, then we want our values to be doubled AFTER checking for boolean arguments
      if (usingMachoBrace) {

        const doubledAfterMB = point * 2

        return doubledAfterPK(doubledAfterMB)
      } else if (usingBrace) {

        const num = parseInt(point)
        const doubledAfterBrace = num + 4
        
        return doubledAfterPK(doubledAfterBrace)
      } else {
        // means PK is true, but MC and B are both false
        return doubledAfterPK(point)

      }
    } else {

      if (usingMachoBrace) {

        return point * 2

      } else if (usingBrace) {
        const num = parseInt(point)
        const doubledAfterBrace = num + 4

        return doubledAfterBrace
      } else {

        return point

      }
    }

}