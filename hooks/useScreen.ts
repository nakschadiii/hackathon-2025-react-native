import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(() => Dimensions.get('window').width);

  useEffect(() => {
    const handleResize = ({ window }) => setWindowWidth(window.width);

    const subscription = Dimensions.addEventListener('change', handleResize);

    return () => {
      subscription.remove();
    };
  }, []);

  return windowWidth;
};