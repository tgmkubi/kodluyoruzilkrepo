const PI = Math.PI;

const isValidRadius = (radius) => {
  if (isNaN(radius) || radius <= 0) {
    console.log("Geçerli bir sayı giriniz");
    return false;
  }
  return true;
};

const circleArea = (r) => {
  return isValidRadius(r) ? console.log(`Yarıçapı ${r} cm olan dairenin alanı: ${PI * r * r} cm²`) : null;
};

const circleCircumference = (r) => {
  return isValidRadius(r) ? console.log(`Yarıçapı ${r} cm olan dairenin çevresi: ${2 * PI * r} cm`) : null;
};

module.exports = {
  circleArea,
  circleCircumference,
};
