import React from 'react';
import Giscus from '@giscus/react';
import {useColorMode} from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate from '@docusaurus/Translate';

export default function GiscusComments() {
  const {colorMode} = useColorMode();
  const {i18n} = useDocusaurusContext();

  return (
    <div className="giscus-wrapper">
      <h3>💬 <Translate id="comments.title">Comments</Translate></h3>
      <Giscus
        repo="LixusSoftware/TraceAgentWeb"
        repoId="R_kgDOSZfueg"
        category="General"
        categoryId="DIC_kwDOSZfues4C8uOs"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={colorMode === 'dark' ? 'dark_dimmed' : 'light'}
        lang={i18n.currentLocale}
        loading="lazy"
      />
    </div>
  );
}
