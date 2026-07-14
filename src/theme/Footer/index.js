import React from 'react';
import {useLocation} from '@docusaurus/router';
import Footer from '@theme-original/Footer';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function FooterWrapper(props) {
  const {pathname} = useLocation();
  const isHomePage = pathname === '/';

  return (
    <div className={isHomePage ? "site-footer-with-easter-egg" : ""}>
      <Footer {...props} />
      {isHomePage && (
        <div className="site-footer-with-easter-egg__ghost-row">
          <BrowserOnly fallback={null}>
            {() => {
              const GhostEasterEgg = require('@site/src/components/GhostEasterEgg').default;
              return <GhostEasterEgg />;
            }}
          </BrowserOnly>
        </div>
      )}
    </div>
  );
}