import React, { useState } from 'react';
import { revWordApi } from '../../Services/DataService';

export default function ReverseWordComponent() {

    const [word, setWord] = useState('');
    const [reversedWord, setReversedWord] = useState('And its funny because eeffoc. Just click the button already.');
    const revWord = async () => {
        const data = await revWordApi(word);
        setReversedWord(data);
    };

    return (
        <div>
            <p className="text-center pt-8 text-5xl font-bold">Reverse Word</p>
            <div className="flex justify-center">
                <div className="flex justify-center pt-12 w-[80%] lg:w-[25%] flex-col">
                    <p className="font-bold text-xl">This page turns your word backwards, that's wild and crazy and did coffee spelt backwards is eeffoc..</p>
                    <div className="mb-6 mt-11">
                        <label htmlFor="revWInp" className="block mb-2 text-2xl font-bold text-gray-900 dark:text-white">Word</label>
                        <input
                            required
                            type="text"
                            className="block w-full p-4 h-20 text-gray-900 border rounded-lg navbar sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={word}
                            onChange={(e) => setWord(e.target.value)}
                        />
                    </div>

                    <p className="font-bold text-[32px]">{reversedWord}</p>
                    <div className="flex justify-center pt-10">
                        <button
                            type="button"
                            className="text-white w-44 h-20 lg:w-64 lg:h-20 text-2xl lg:text-3xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
                            onClick={revWord} //This is where you would put your function plust the word variable
                        >
                            Ready
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
