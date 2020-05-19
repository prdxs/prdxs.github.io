import { useEffect, useCallback, useState } from 'react';

import debounce from 'utils/debounce';
import getScreenWidth from 'utils/getScreenWidth';

const useLessThan480ScreenStrategy = () => {
  const [isLessThan480, setIsLessThan480] = useState(getScreenWidth() < 480);

  const handleResize = useCallback(
    debounce(200, () => {
      const screenWidth = getScreenWidth();
      setIsLessThan480(screenWidth < 480);
    }),
    []
  );

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return isLessThan480;
};

export default useLessThan480ScreenStrategy;
