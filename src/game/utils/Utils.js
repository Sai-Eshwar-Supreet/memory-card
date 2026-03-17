function shuffle(array){
    const shuffledArray = [...array];

    for(let i = shuffledArray.length -1; i > 0; i --){
        const swapIndex = Math.floor(Math.random() * (i + 1));

        [shuffledArray[swapIndex], shuffledArray[i]] = [shuffledArray[i], shuffledArray[swapIndex]];
    }

    return shuffledArray;
}

export {shuffle};