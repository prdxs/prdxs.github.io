import { useEffect, useCallback, useState } from 'react';

import debounce from 'utils/debounce';
import getScreenWidth from 'utils/getScreenWidth';

const useLessThan480ScreenStrategy = () => {
  const [isLessThan480, setIsLessThan480] = useState(0);

  const handleResize = useCallback(
    debounce(200, () => {
      const screenWidth = getScreenWidth();
      setIsLessThan480(screenWidth < 480);
    }),
    []
  );

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    setIsLessThan480(getScreenWidth() < 480);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return isLessThan480;
};

export default useLessThan480ScreenStrategy;
