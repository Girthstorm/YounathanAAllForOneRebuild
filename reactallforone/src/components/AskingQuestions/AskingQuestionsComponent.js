import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { askQuestApi } from "../../Services/DataService.js"

export default function AskingQuestionsComponent() {

    const [name, setName] = useState('');
    const [timeWokeUp, setTimeWokeUp] = useState('');
    const [answer, setAnswer] = useState('Click that Button!!!!!');
    const askQuest = async () => {
        const data = await askQuestApi(name,timeWokeUp);
        setAnswer(data);
    };

    return (
        <div>
            <p className="text-center pt-8 text-5xl font-bold">Asking Questions</p>
            <div className="flex justify-center">
                <div className="flex justify-center pt-12 w-[80%] lg:w-[25%] flex-col">
                    <p className="font-bold text-xl ">This API takes two inputs then shoots it right back out in a sentence. Try it out</p>
                    <div className="mb-6 mt-11">
                        <label htmlFor="askquest1" className="block mb-2 text-2xl font-bold text-gray-900 dark:text-white">Name</label>
                        <input
                            required
                            type="text"
                            className="block w-full p-4 h-20 text-gray-900 border rounded-lg navbar sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-6 mt-11">
                        <label htmlFor="askquest2" className="block mb-2 text-2xl font-bold text-gray-900 dark:text-white">Time you woke up</label>
                        <input
                            required
                            type="text"
                            className="block w-full p-4 h-20 text-gray-900 border rounded-lg navbar sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={timeWokeUp}
                            onChange={(e) => setTimeWokeUp(e.target.value)}
                        />
                    </div>
                    <p className="font-bold text-[32px]">{answer}</p>
                    <div className="flex justify-center pt-10">
                        <button
                            type="button"
                            className="text-white w-44 h-20 lg:w-64 lg:h-20 text-2xl lg:text-3xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
                            onClick={askQuest}
                        >
                            Ready
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
