import React from 'react';
import KeyRow from './KeyRow';

export default function Keyboard() {
  const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const row3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
  return (
    <div className='h-50 my-0 mx-2 select-none'>
      <KeyRow keys={row1} />
      <KeyRow keys={row2} middle />
      <KeyRow keys={row3} actions />
    </div>
  );
}
