import React, { useState } from 'react';
import { magicBallin } from '../../Services/DataService';

export default function Magic8BallComponent() {

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('Click That Button!');
    const ballin = async () => {
        const data = await magicBallin(question);
        setAnswer(data);
    };

    return (
        <div>
            <p className="text-center pt-8 text-5xl font-bold">Magic 8 Ball</p>
            <div className="flex justify-center">
                <div className="flex justify-center pt-12 w-[80%] lg:w-[25%] flex-col">
                    <p className="font-bold text-xl">This page is a magic 8 ball, click and it should give you a response to whatever question you ask, only if it's a yes/no type question. Give it a go!</p>
                    <div className="mb-6 mt-11">
                        <label htmlFor="ballInp" className="block mb-2 text-2xl font-bold text-gray-900 dark:text-white">Question</label>
                        <input
                            required
                            type="text"
                            className="block w-full p-4 h-20 text-gray-900 border rounded-lg navbar sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                    </div>

                    <p className="font-bold text-center text-[32px]">{answer}</p>
                    <div className="flex justify-center pt-10">
                        <button
                            type="button"
                            className="text-white w-44 h-20 lg:w-64 lg:h-20 text-2xl lg:text-3xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
                            onClick={ballin}
                        >
                            Ready
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
