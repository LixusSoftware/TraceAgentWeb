import React, {lazy, Suspense} from 'react';
import {useLocation} from '@docusaurus/router';
import Footer from '@theme-original/Footer';

const GhostEasterEgg = lazy(() => import('@site/src/components/GhostEasterEgg'));

export default function FooterWrapper(props) {
  const {pathname} = useLocation();
  const isHomePage = pathname === '/';

  return (
    <div className={isHomePage ? "site-footer-with-easter-egg" : ""}>
      <Footer {...props} />
      {isHomePage && (
        <div className="site-footer-with-easter-egg__ghost-row">
          <Suspense fallback={null}>
            <GhostEasterEgg />
          </Suspense>
        </div>
      )}
    </div>
  );
}