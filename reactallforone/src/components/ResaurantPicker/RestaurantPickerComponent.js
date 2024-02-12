import React, { useState } from 'react';
import { mexButtonApi, fastButtonApi, sushiApi, } from '../../Services/DataService';


export default function RestaurantPickerComponent() {
    const [restaurant, setRestaurant] = useState('Click a Button!');
    const mexican = async () => {
        const data = await mexButtonApi();
        setRestaurant(data);
    };
    const fastFood = async () => {
        const data = await fastButtonApi();
        setRestaurant(data);
    };
    const sushi = async () => {
        const data = await sushiApi();
        setRestaurant(data);
    };


    return (
        <div>
            <p className="text-center pt-8 text-5xl font-bold">Restaurant Picker</p>
            <div className="flex justify-center">
                <div className="flex justify-center pt-12 w-[80%] lg:w-[25%] flex-col">
                    <p className="font-bold text-xl">This page gives you a Restaurant based on which button you click. Try it</p>
                    <p className="font-bold pt-24 text-center text-[48px]">{restaurant}</p>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="flex justify-center pt-12 w-[80%] lg:w-[50%] flex-col">
                    <div className="grid md:grid-cols-3 justify-center pt-10">
                        <div className="flex flex-col justify-center">
                            <p className="text-[32px] font-bold">It’s Taco Tuesday sometime</p>
                            <button
                                type="button"
                                className="justify-center text-white w-44 h-20 lg:w-64 lg:h-20 text-2xl lg:text-3xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
                                onClick={mexican}
                            >
                                Mexican
                            </button>
                        </div>
                        <div>
                            <p className="text-[32px] font-bold">I'm pretty quick</p>
                            <button
                                type="button"
                                className="text-white w-44 h-20 lg:w-64 lg:h-20 text-2xl lg:text-3xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
                                onClick={fastFood}
                            >
                                Fast Food
                            </button>
                        </div>
                        <div>
                            <p className="text-[32px] font-bold">Nah, I'd win</p>
                            <button
                                type="button"
                                className="text-white w-44 h-20 lg:w-64 lg:h-20 text-2xl lg:text-3xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
                                onClick={sushi}
                            >
                                Sushi
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
