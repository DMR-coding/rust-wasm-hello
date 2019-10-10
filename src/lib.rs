extern crate num;
use num::BigUint;

mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
    #[wasm_bindgen(js_namespace = console)]
    fn debug(s: &str);
    #[wasm_bindgen(js_namespace = console)]
    fn error(s: &str);
}

pub fn fib(n: u32) -> BigUint {
    let mut i1 = BigUint::from(0u8); let mut i2 = BigUint::from(1u8);
    let mut scratch;

    for x in 0..n {
        scratch = i1 + &i2;
        i1 = i2;
        i2 = scratch;
    }

    i1
}

#[wasm_bindgen]
pub fn fib_s(n: u32) -> String {
    return fib(n).to_str_radix(10);
}