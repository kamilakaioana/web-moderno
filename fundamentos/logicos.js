function buy(work1, work2) {
    const buyIceCream = work1 || work2;
    const buyTv50 = work1 && work2;
    // const buyTv32 = !!(work1 ^ work2); // bitwise
    const buyTv32 = work1 != work2;
    const keepheathy = !buyIceCream; // operador unário

    return { buyIceCream, buyTv50, buyTv32, keepheathy };  
}

console.log(buy(true, true));
console.log(buy(true, false));
console.log(buy(false, true));
console.log(buy(false, false));
