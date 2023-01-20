export const first25 = (string: String) => {
  return `${string.split(' ').slice(0, 25).join(' ')}...`;
};
