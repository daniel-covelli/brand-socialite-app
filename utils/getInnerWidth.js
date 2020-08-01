// Grab width manually using innerWidth
const getInnerWidth = () => {
  if (typeof window !== 'undefined') return window.innerWidth;
  return 0;
};

export default getInnerWidth;
