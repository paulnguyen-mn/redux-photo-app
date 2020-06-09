
export const randomNumber = (min, max) => {
  return min + Math.trunc(Math.random() * (max - min));
}