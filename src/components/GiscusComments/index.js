import React from 'react';
import Giscus from '@giscus/react';
import {useColorMode} from '@docusaurus/theme-common';

export default function GiscusComments() {
  const {colorMode} = useColorMode();

  return (
    <div className="giscus-wrapper">
      <h3>💬 Comments</h3>
      <Giscus
        repo="LixusSoftware/TraceAgent"
        repoId="REPLACE_WITH_REPO_ID"
        category="Documentation"
        categoryId="REPLACE_WITH_CATEGORY_ID"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode === 'dark' ? 'dark_dimmed' : 'light'}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
