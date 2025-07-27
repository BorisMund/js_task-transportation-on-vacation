/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const BIG_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SMALL_DISCOUNT = 20;

  let total = days * PRICE_PER_DAY;
  if (days >= LONG_TERM) {
    return total - BIG_DISCOUNT;
  }
  if (days >= SHORT_TERM) {
    return total - SMALL_DISCOUNT;
  }
  return total;
}
module.exports = calculateRentalCost;

// После тяжёлого квартала в офисе вы решаете отдохнуть в отпуске. Поэтому вы бронируете авиабилет для себя и своей семьи,
// чтобы оставить весь этот бардак позади.

// Вам понадобится арендованный автомобиль, чтобы передвигаться во время отпуска.
// Менеджер проката автомобилей предлагает вам хорошие условия.

// Каждый день аренды автомобиля стоит 40 долларов.
// Если вы берёте машину на 7 или более дней, вы получаете скидку 50 долларов от общей суммы.
// Или, если вы берёте машину на 3 или более дней, вы получаете скидку 20 долларов от общей суммы.

// Реализуйте функцию calculateRentalCost, которая возвращает общую сумму аренды в зависимости от количества дней.
