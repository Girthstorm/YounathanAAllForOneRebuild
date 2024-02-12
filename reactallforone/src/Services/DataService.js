
const addingApi = async (num1, num2) => {
    const promise = await fetch(`https://younathanaafo.azurewebsites.net/AddNum/Adding/${num1}/${num2}`)
    const data = await promise.text();
    return data;
    console.log(data);
}

const askQuestApi = async (name, time) => {
    const promise = await fetch(`https://younathanaafo.azurewebsites.net/DosQuestions/Question/${name}/${time}`)
    const data = await promise.text();
    return data;
    
}

const greaterLessApi = async (firstNum, secondNum) => {
    const promise = await fetch(`https://younathanaafo.azurewebsites.net/GreaterLesser/LessGreat/${firstNum}/${secondNum}`)
    const data = await promise.text();
    return data;
}

const madLib = async (name, villian, devilFruit,crewMate,islandName,trait,islandName2,shipName,bountyAmount,catchphrase) => {
    const promise = await fetch(`https://younathanaafo.azurewebsites.net/MadLib/Libbing/${name}/${villian}/${devilFruit}/${crewMate}/${islandName}/${trait}/${islandName2}/${shipName}/${bountyAmount}/${catchphrase}`)
    const data = await promise.text();
    return data;
}

const oddingApi = async (num1) => {
    const promise = await fetch(`https://younathanaafo.azurewebsites.net/OddEven/OddEvening/${num1}`)
    const data = await promise.text();
    return data;
}

const sayHelloApi = async (name) => {
    const promise = await fetch(`https://younathanaafo.azurewebsites.net/SayHello/Helloing/${name}`)
    const data = await promise.text();
    return data;
}

const revNumApi = async (num1) => {
    const promise = await fetch(`https://younathanaafo.azurewebsites.net/ReverseNum/ReverseNumber/${num1}`)
    const data = await promise.text();
    return data;
}

const revWordApi = async (word) => {
    const promise = await fetch(`https://younathanaafo.azurewebsites.net/ReverseWord/Reversing/${word}`)
    const data = await promise.text();
    return data;
}



//The tripple tripple
const mexButtonApi = async () => {
    const promise = await fetch(`https://younathanaafo.azurewebsites.net/RestaurantPicker/Mexican`)
    const data = await promise.text();
    return data;
}

const fastButtonApi = async () => {
    const promise = await fetch(`https://younathanaafo.azurewebsites.net/RestaurantPicker/FastFood`)
    const data = await promise.text();
    return data;
}

const sushiApi = async () => {
    const promise = await fetch(`https://younathanaafo.azurewebsites.net/RestaurantPicker/Sushi`)
    const data = await promise.text();
    return data;
}

// End of the tripple

const magicBallin = async (question) => {
    const promise = await fetch(`https://younathanaafo.azurewebsites.net/Magic8Ball/Ballin/${question}`)
    const data = await promise.text();
    return data;
}


export {addingApi, askQuestApi, greaterLessApi, madLib, oddingApi, sayHelloApi, revNumApi, revWordApi, mexButtonApi, fastButtonApi, sushiApi, magicBallin}