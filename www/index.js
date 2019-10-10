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
const go_button = document.querySelector("#go_btn");
const iterations_box = document.querySelector("#iterations");
const time_output = document.querySelector("#time_output");
const value_output = document.querySelector("#value_output");

go_button.addEventListener("click", function(){
    const iterations = parseInt(iterations_box.value);

    const start = performance.now();
    const rust_val = wasm.fib_s(iterations);
    let rust = performance.now();
    const _ = fib(iterations);
    let native = performance.now();

    const rust_time = rust - start;
    const native_time = native - rust;
    
    time_output.textContent = `Rust took: ${rust_time}\nJavascript Took: ${native_time}`;
    value_output.textContent = rust_val;
});
