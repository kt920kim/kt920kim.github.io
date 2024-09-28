'use client';

import { useState, useEffect } from 'react';

const Guestbook = () => {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/guestbook')
      .then(response => response.json())
      .then(data => setEntries(data));
  }, []);

  const addEntry = async () => {
    const response = await fetch('/api/guestbook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, message, date: (new Date()).toLocaleString() }),
    });
    const newEntry = await response.json();
    setEntries([...entries, newEntry]);
    setName('');
    setMessage('');
  };

  return (
    <>
      <section className="guestbook w-full flex justify-center pt-[20px] pb-9">
        <div className="guestbook-title text-center text-[20px] font-extrabold leading-6 uppercase font-S-Core_Dream">
          방명록
        </div>
      </section>
      <section className="guestbook w-full flex pb-5">
        <div className="guestbook-message-form flex flex-col w-full mx-2">
          <input
            type="text"
            placeholder="이름"
            className="border-solid border-2 border-gray-300 text-[15px] leading-8 mb-2 pl-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="축하메시지"
            className="border-solid border-2 border-gray-300 text-[15px] leading-8 mb-2 pl-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="rounded bg-gray-800 text-gray-100 text-[15px] leading-10" onClick={addEntry}>축하메시지 남기기</button>
        </div>
      </section>
      <section className="guestbook w-full">
        <div className="guestbook-message-list w-full flex flex-col mb-5">
          <ul>
            {entries.map((entry, index) => (
              <li key={index} className="rounded border-solid border-2 border-gray-300 mx-2 mb-2 py-1 px-4">
                <div className="flex justify-between"><strong>{entry.name}</strong><span className="text-gray-400 text-[13px]">{entry.date}</span></div>
                <div>{entry.message}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      </>
  );
}

export default Guestbook;
