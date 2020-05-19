const getScreenWidth = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
  }

  return 0;
};

export default getScreenWidth;
