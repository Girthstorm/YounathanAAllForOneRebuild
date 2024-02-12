import React, { useState } from 'react';
import { madLib } from "../../Services/DataService.js"

export default function MadLibComponent() {

    const [name, setName] = useState('');
    const [villainName, setVillainName] = useState('');
    const [devilFruitPower, setDevilFruitPower] = useState('');
    const [crewMateName, setCrewMateName] = useState('');
    const [islandName, setIslandName] = useState('');
    const [traitOrQuirk, setTraitOrQuirk] = useState('');
    const [anotherIslandName, setAnotherIslandName] = useState('');
    const [shipName, setShipName] = useState('');
    const [bountyAmount, setBountyAmount] = useState('');
    const [catchphrase, setCatchphrase] = useState('');
    const [story, setStory] = useState('Wait \'m down here now! And I\'m unrestricted, this is too much, I \'t handle this power. If I spill of the sides a little don\'t mind me.');
    const libbing = async () => {
        const data = await madLib(name,villainName,devilFruitPower,crewMateName,islandName,traitOrQuirk,anotherIslandName,shipName,bountyAmount,catchphrase,story);
        setStory(data);
    };



    return (
        <div>
        <p className="text-center pt-8 text-5xl font-bold">Mad Lib</p>
        <div className="flex justify-center">
            <div className="flex justify-center pt-12 w-[80%] lg:w-[25%] flex-col">
                <p className="font-bold text-xl">This one is lengthy, fill in all the fields and hit ready to generate a One Piece themed story. Try it out!</p>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="grid lg:grid-cols-2 justify-center w-[90%] xl:w-[50%] gap-x-28">
                {/* A Name */}
                <div className="mb-6 mt-11">
                    <label className="block mb-2 text-2xl font-bold text-gray-900 dark:text-white">A Name</label>
                    <input
                        type="text"
                        className="block w-[419px] p-4 h-20 text-gray-900 border rounded-lg navbar sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                {/* A Villain Name */}
                <div className="mb-6 mt-11">
                    <label className="block mb-2 text-2xl font-bold text-gray-900 dark:text-white">A Villain Name</label>
                    <input
                        type="text"
                        className="block w-[419px] p-4 h-20 text-gray-900 border rounded-lg navbar sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={villainName}
                        onChange={(e) => setVillainName(e.target.value)}
                    />
                </div>
                {/* Devil Fruit Power */}
                <div className="mb-6 mt-11">
                    <label className="block mb-2 text-2xl font-bold text-gray-900 dark:text-white">Devil Fruit Power</label>
                    <input
                        type="text"
                        className="block w-[419px] p-4 h-20 text-gray-900 border rounded-lg navbar sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={devilFruitPower}
                        onChange={(e) => setDevilFruitPower(e.target.value)}
                    />
                </div>
                {/* Crew Mate Name */}
                <div className="mb-6 mt-11">
                    <label className="block mb-2 text-2xl font-bold text-gray-900 dark:text-white">Crew Mate Name</label>
                    <input
                        type="text"
                        className="block w-[419px] p-4 h-20 text-gray-900 border rounded-lg navbar sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={crewMateName}
                        onChange={(e) => setCrewMateName(e.target.value)}
                    />
                </div>
                {/* Island Name */}
                <div className="mb-6 mt-11">
                    <label className="block mb-2 text-2xl font-bold text-gray-900 dark:text-white">Island Name</label>
                    <input
                        type="text"
                        className="block w-[419px] p-4 h-20 text-gray-900 border rounded-lg navbar sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={islandName}
                        onChange={(e) => setIslandName(e.target.value)}
                    />
                </div>
                {/* Trait or Quirk */}
                <div className="mb-6 mt-11">
                    <label className="block mb-2 text-2xl font-bold text-gray-900 dark:text-white">Trait or Quirk</label>
                    <input
                        type="text"
                        className="block w-[419px] p-4 h-20 text-gray-900 border rounded-lg navbar sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={traitOrQuirk}
                        onChange={(e) => setTraitOrQuirk(e.target.value)}
                    />
                </div>
                {/* Another Island Name */}
                <div className="mb-6 mt-11">
                    <label className="block mb-2 text-2xl font-bold text-gray-900 dark:text-white">Another Island Name</label>
                    <input
                        type="text"
                        className="block w-[419px] p-4 h-20 text-gray-900 border rounded-lg navbar sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={anotherIslandName}
                        onChange={(e) => setAnotherIslandName(e.target.value)}
                    />
                </div>
                {/* Ship Name */}
                <div className="mb-6 mt-11">
                    <label className="block mb-2 text-2xl font-bold text-gray-900 dark:text-white">Ship Name</label>
                    <input
                        type="text"
                        className="block w-[419px] p-4 h-20 text-gray-900 border rounded-lg navbar sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={shipName}
                        onChange={(e) => setShipName(e.target.value)}
                    />
                </div>
                {/* Bounty Amount */}
                <div className="mb-6 mt-11">
                    <label className="block mb-2 text-2xl font-bold text-gray-900 dark:text-white">Bounty Amount</label>
                    <input
                        type="text"
                        className="block w-[419px] p-4 h-20 text-gray-900 border rounded-lg navbar sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={bountyAmount}
                        onChange={(e) => setBountyAmount(e.target.value)}
                    />
                </div>
                {/* Catchphrase */}
                <div className="mb-6 mt-11">
                    <label className="block mb-2 text-2xl font-bold text-gray-900 dark:text-white">Catchphrase</label>
                    <input
                        type="text"
                        className="block w-[419px] p-4 h-20 text-gray-900 border rounded-lg navbar sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={catchphrase}
                        onChange={(e) => setCatchphrase(e.target.value)}
                    />
                </div>
            </div>
        </div>
        <div className="flex justify-center flex-col">
            <div className="flex justify-center pt-10">
                <button
                    type="button"
                    className="text-white w-44 h-20 lg:w-64 lg:h-20 text-2xl lg:text-3xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
                    onClick={libbing}
                >
                    Ready
                </button>
            </div>
            <div className="flex justify-center pt-11 pb-9">
                <div className="w-[80%] lg:w-[45%]">
                    <p className="font-bold text-[32px]">{story}</p>
                </div>
            </div>
        </div>
    </div>
    )
}
