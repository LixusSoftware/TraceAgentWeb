import React, { useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function FaviconManager() {
  const activeFavicon = useBaseUrl('img/logo.png');
  const inactiveFavicon = useBaseUrl('img/cat_inactive.png');

  useEffect(() => {
    const handleVisibilityChange = () => {
      const favicons = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
      if (favicons.length > 0) {
        favicons.forEach(favicon => {
          favicon.href = document.hidden ? inactiveFavicon : activeFavicon;
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [activeFavicon, inactiveFavicon]);

  return null;
}
