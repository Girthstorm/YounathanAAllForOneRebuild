import React from 'react'
import { Link } from 'react-router-dom';

export default function HomeComponent() {
    return (
        <div>
            <p className="text-center pt-8 text-5xl font-bold">All For One API's</p>
            <p className="pt-32 text-center text-5xl pb-11">Please Select One</p>

            <div className="grid grid-cols-2 lg:grid-cols-5 lg:gap-16 gap justify-center lg:px-48 pt">
                <div className="flex justify-center">
                    <Link to="AddingNumbers">
                        <button type="button" className="text-white w-44 h-20 lg:w-64 lg:h-20 text-2xl lg:text-3xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">Add 2 Numbers</button>
                    </Link>
                </div>

                <div className="flex justify-center">
                    <Link to="AskingQuestions">
                        <button type="button" className="text-white w-44 h-20 lg:w-64 lg:h-20 text-2xl lg:text-3xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">Asking Questions</button>
                    </Link>
                </div>

                <div className="flex justify-center">
                    <Link to="GreaterLesser">
                        <button type="button" className="text-white w-44 h-20 lg:w-64 lg:h-20 text-2xl lg:text-3xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">&gt; or &lt;</button>
                    </Link>
                </div>

                <div className="flex justify-center">
                    <Link to="MadLib">
                        <button type="button" className="text-white bg-gradient-to-r w-44 h-20 text-2xl lg:w-64 lg:h-20 lg:text-3xl from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">Mad Lib</button>
                    </Link>
                </div>

                <div className="flex justify-center">
                    <Link to="OddEven">
                        <button type="button" className="text-white bg-gradient-to-r w-44 h-20 text-2xl lg:w-64 lg:h-20 lg:text-3xl from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">Odd or Even</button>
                    </Link>
                </div>

                <div className="flex justify-center">
                    <Link to="SayHello">
                        <button type="button" className="text-white bg-gradient-to-r w-44 h-20 text-2xl lg:w-64 lg:h-20 lg:text-3xl from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">Say Hello</button>
                    </Link>
                </div>

                <div className="flex justify-center">
                    <Link to="ReverseNum">
                        <button type="button" className="text-white bg-gradient-to-r w-44 h-20 text-2xl lg:w-64 lg:h-20 lg:text-3xl from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">Reverse Number</button>
                    </Link>
                </div>

                <div className="flex justify-center">
                    <Link to="ReverseWord">
                        <button type="button" className="text-white bg-gradient-to-r w-44 h-20 text-2xl lg:w-64 lg:h-20 lg:text-3xl from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">Reverse Word</button>
                    </Link>
                </div>

                <div className="flex justify-center">
                    <Link to="RestaurantPicker">
                        <button type="button" className="text-white bg-gradient-to-r w-44 h-20 text-2xl lg:w-64 lg:h-20 lg:text-3xl from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">Restaurant Picker</button>
                    </Link>
                </div>

                <div className="flex justify-center">
                    <Link to="Magic8Ball">
                        <button type="button" className="text-white bg-gradient-to-r w-44 h-20 text-2xl lg:w-64 lg:h-20 lg:text-3xl from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">Magic 8 Ball</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
