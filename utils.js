const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route

  nums = strNums.map(function (strNum) {
    const num = Number(strNum);
    if (isNaN(num)) {
      throw new BadRequestError(`${strNum} is not a number.`)
    }
    return num;
  });

  return nums;
}


module.exports = { convertStrNums };