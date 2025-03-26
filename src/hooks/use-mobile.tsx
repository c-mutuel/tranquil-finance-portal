
import * as React from "react"

const MOBILE_BREAKPOINT = 768
const SMALL_MOBILE_BREAKPOINT = 480

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

export function useIsSmallMobile() {
  const [isSmallMobile, setIsSmallMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${SMALL_MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsSmallMobile(window.innerWidth < SMALL_MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsSmallMobile(window.innerWidth < SMALL_MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isSmallMobile
}

export function useDeviceSize() {
  const [windowSize, setWindowSize] = React.useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  React.useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width: windowSize.width,
    height: windowSize.height,
    isMobile: windowSize.width ? windowSize.width < MOBILE_BREAKPOINT : false,
    isSmallMobile: windowSize.width ? windowSize.width < SMALL_MOBILE_BREAKPOINT : false,
    isTablet: windowSize.width ? windowSize.width >= MOBILE_BREAKPOINT && windowSize.width < 1024 : false,
    isDesktop: windowSize.width ? windowSize.width >= 1024 : false,
  };
}
