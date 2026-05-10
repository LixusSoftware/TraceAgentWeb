import React from 'react';
import Root from '@theme-original/Root';
import CommandPalette from '@site/src/components/CommandPalette';

export default function RootWrapper(props) {
  return (
    <>
      <Root {...props} />
      <CommandPalette />
    </>
  );
}
