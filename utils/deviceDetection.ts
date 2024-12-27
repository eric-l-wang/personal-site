export const isMobileOrTablet = () => {
  if (typeof window === "undefined") return false;
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    // iPad on iOS 13 detection
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
};
