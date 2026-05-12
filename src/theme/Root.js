import React from 'react';
import Root from '@theme-original/Root';
import CommandPalette from '@site/src/components/CommandPalette';
import FaviconManager from '@site/src/components/FaviconManager';

export default function RootWrapper(props) {
  return (
    <>
      <Root {...props} />
      <CommandPalette />
      <FaviconManager />
    </>
  );
}
