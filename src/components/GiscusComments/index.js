import React from 'react';
import Giscus from '@giscus/react';
import {useColorMode} from '@docusaurus/theme-common';

export default function GiscusComments() {
  const {colorMode} = useColorMode();

  return (
    <div className="giscus-wrapper">
      <h3>💬 Comments</h3>
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
        lang="es"
        loading="lazy"
      />
    </div>
  );
}
