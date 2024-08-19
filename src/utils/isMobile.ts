const isMobile = (): boolean => {
  if (typeof window !== 'undefined') {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }
  return false;
};

export { isMobile };
