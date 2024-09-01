"use client"

import { useSearchParams } from "next/navigation"
import React, { useState, useMemo } from "react";

import AccountModal from "./AccountModal";
import GROOM_ACCOUNTS_DATA from "../../../public/json/groom_account_number_data.json";
import BRIDE_ACCOUNTS_DATA from "../../../public/json/bride_account_number_data.json";


import "./Accounts.css";

const Accounts = () => {
  // state for account modal
  const [ clickedAccountData, setClickedAccountData ] = useState(null);
  const [ copiedAccount, setCopiedAccount ] = useState(null);

  const searchParams = useSearchParams();

  const accountClick = (account_data) => {
    setClickedAccountData(account_data.data);
  };

  const accounts = useMemo(() => {
    const params = searchParams.get('accounts');
    return params?.split(",") || [];
  }, [searchParams]);

  if (accounts.length === 0) {
    return (<></>);
  }

  return (
    <>
      <section className="congratulatory w-full flex flex-col justify-center items-center gap-6 pt-[60px] pb-[30px]">
        <div className="congratulatory-section-text text-center not-italic font-extrabold text-[18px] leading-[21px] uppercase font-S-Core_Dream">마음 전하실 곳</div>
        {
          (accounts.findIndex(item => item === 'groom') > -1) &&
          <div
            className="congratulatory-section-groom-btn flex text-center items-center justify-center gap-[10px] rounded-lg px-3 py-[10px] not-italic font-normal text-[15px] leading-[21px] uppercase font-S-Core_Dream"
            onClick={() => { console.log("groom's accounts"); accountClick(GROOM_ACCOUNTS_DATA); }}
          >
            신랑층 계좌번호
          </div>
        }
        {
          (accounts.findIndex(item => item === 'bride') > -1) &&
          <div
            className="congratulatory-section-bride-btn flex text-center items-center justify-center gap-[10px] rounded-lg px-3 py-[10px] not-italic font-normal text-[15px] leading-[21px] uppercase font-S-Core_Dream"
            onClick={() => { console.log("bride's accounts"); accountClick(BRIDE_ACCOUNTS_DATA); }}
          >
            신부측 계좌번호
          </div>
        }
      </section>
      {
        clickedAccountData &&
        <AccountModal
          clickedAccountData={clickedAccountData}
          setClickedAccountData={setClickedAccountData}
          copiedAccount={copiedAccount}
          setCopiedAccount={setCopiedAccount}
        />
      }
    </>
  );
};

export default Accounts;