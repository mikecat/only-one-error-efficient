'use client';

import { useEffect, useState } from 'react';
import { getMessage } from './action';

export default function Home() {
  const [message, setMessage] = useState<string | null>(null);
  useEffect(() => {
    getMessage().then((messageRetrieved) => {
      setMessage(messageRetrieved);
    });
  }, []);
  return message === null ? (
    <div style={{color: 'gray'}}>読み込み中…</div>
  ) : (
    <div>{message}</div>
  );
}
