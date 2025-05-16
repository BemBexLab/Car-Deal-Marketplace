'use client';

import { useState } from 'react';

export default function EstimateBudget() {
  const [downPayment, setDownPayment] = useState('$2,350');
  const [loanTerm, setLoanTerm] = useState('60 months');
  const [creditScore, setCreditScore] = useState('700-749');
  const [monthlyPayment, setMonthlyPayment] = useState('$418');

  return (
    <section className="w-full py-16 px-4 bg-white mt-40">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-2">
          Estimate Your Budget
        </h2>
        <div className="w-24 h-1 bg-[#7800B0] mx-auto mb-4 rounded-full" />
        <p className="text-gray-500 text-sm mb-10">
          Then get personalized rates with no impact on your credit score
        </p>

        {/* Estimate Card */}
        <div className="bg-white shadow-sm border border-gray-100 rounded-2xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
            <div className="text-left">
              <p className="text-sm text-gray-500 mb-1">Est. down payment</p>
              <input
                type="text"
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
                className="w-full bg-gray-100 px-4 py-2 rounded-full focus:outline-none text-black"
              />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500 mb-1">Loan term</p>
              <select
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                className="w-full bg-gray-100 text-black px-4 py-2 rounded-full focus:outline-none"
              >
                <option>36 months</option>
                <option>48 months</option>
                <option>60 months</option>
                <option>72 months</option>
              </select>
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500 mb-1">Credit score</p>
              <input
                type="text"
                value={creditScore}
                onChange={(e) => setCreditScore(e.target.value)}
                className="w-full bg-gray-100 px-4 py-2 rounded-full focus:outline-none text-black"
              />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500 mb-1">Est. monthly payment</p>
              <select
                value={monthlyPayment}
                onChange={(e) => setMonthlyPayment(e.target.value)}
                className="w-full bg-gray-100 px-4 py-2 rounded-full focus:outline-none text-black"
              >
                <option>$300</option>
                <option>$350</option>
                <option>$418</option>
                <option>$500</option>
              </select>
            </div>
          </div>

          {/* Amount Display */}
          <div className="text-right w-full md:w-auto">
            <p className="text-[42px] lg:text-[80px] font-bold text-[#7800B0] leading-none">
              $22,119
            </p>
            <p className="text-sm text-gray-500 mt-1">with 9.79% APR</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <button className="lg:w-1/2 bg-[#7800B0] text-white text-sm font-semibold px-10 py-4 rounded-full hover:bg-[#65009d] transition">
            Get pre-qualified
          </button>
        </div>
      </div>
    </section>
  );
}
