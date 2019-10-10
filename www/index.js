import * as wasm from "rust-wasm-hello";

function fib(n) {
    let i1 = BigInt(0), i2 = BigInt(1);
    let scratch;

    for(let x = 0; x < n; x++) {
        scratch = i1 + i2;
        i1 = i2;
        i2 = scratch;
    }

    return i1;
}
const ITERATIONS = 500000;

performance.mark("start");
console.log(wasm.fib_s(ITERATIONS));
performance.mark("rust");
console.log(fib(ITERATIONS));
performance.mark("native");
console.log(performance.getEntriesByName("rust")[0].startTime - performance.getEntriesByName("start")[0].startTime);
console.log(performance.getEntriesByName("native")[0].startTime - performance.getEntriesByName("rust")[0].startTime);