'use client';

import { useState, useEffect } from 'react';

const Guestbook = () => {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isFirst, setIsFirst] = useState(true);
  const [isLast, setIsLast] = useState(false);
  const limit = 5;

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await fetch(`/api/guestbook?page=${page}&limit=${limit}`);
      const { data: newEntries, total } = await response.json();
      setEntries(newEntries);
      setTotal(total);
      setIsFirst(page === 1);
      setIsLast(page * limit >= total);
    };

    fetchEntries();
  }, [page]);

  const addEntry = async () => {
    if (!name || name.length === 0) {
      alert("이름을 입력해주세요.")
      return;
    }

    if (!message || message.length === 0) {
      alert("축하메시지를 입력해주세요.")
      return;
    }

    const response = await fetch('/api/guestbook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, message, date: (new Date()).toLocaleString() }),
    });
    const newEntry = await response.json();
    const updatedEntries = [...entries, newEntry];
    const nextPage = ((updatedEntries.length / limit) > 1) ? page + 1 : page;
    if (page < nextPage) {
      setPage(nextPage);
    } else {
      setEntries(updatedEntries);
    }
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
          <button className="rounded bg-gray-600 text-gray-100 text-[15px] leading-10" onClick={addEntry}>축하메시지 남기기</button>
        </div>
      </section>
      <section className="guestbook w-full">
        <div className="guestbook-message-list w-full flex flex-col mb-5">
          <ul>
            {entries.map((entry, index) => (
              // <li key={index} className="rounded border-solid border-2 border-gray-300 mx-2 mb-2 px-4 py-1">
              <li key={index} className="rounded bg-red-50 mx-2 mb-2 px-4 py-1">
                <div className="flex justify-between"><strong>{entry.name}</strong><span className="text-gray-400 text-[13px]">{entry.date}</span></div>
                <div>{entry.message}</div>
              </li>
            ))}
          </ul>
          {
            total > limit ? (
            <div className="mx-2 flex flex-row">
              <button
                className={`basis-1/2 rounded ${isFirst ? 'bg-gray-300' : 'bg-gray-600'} text-gray-100 text-[15px] leading-10 mr-1`}
                disabled={isFirst}
                onClick={() => setPage(page - 1) }
              >
                이전
              </button>
              <button
                className={`basis-1/2 rounded ${isLast ? 'bg-gray-300' : 'bg-gray-600'} text-gray-100 text-[15px] leading-10`}
                disabled={isLast}
                onClick={() => setPage(page + 1)}
              >
                다음
              </button>
            </div>
            ) : null
          }
        </div>
      </section>
      </>
  );
}

export default Guestbook;
