extern crate rust_wasm_hello;
use rust_wasm_hello::fib;

extern crate num;
use num::BigUint;

#[test]
fn test_base_cases() {
    assert_eq!(fib(0).to_str_radix(10), "0");
    assert_eq!(fib(1).to_str_radix(10), "1");
    assert_eq!(fib(2).to_str_radix(10), "1");
    assert_eq!(fib(3).to_str_radix(10), "2");
}

#[test]
fn test_fib() {
    assert_eq!(fib(25).to_str_radix(10), "75025");
    assert_eq!(fib(50).to_str_radix(10), "12586269025");
    assert_eq!(fib(100).to_str_radix(10), "354224848179261915075");
    assert_eq!(fib(5000).to_str_radix(10), "3878968454388325633701916308325905312082127714646245106160597214895550139044037097010822916462210669479293452858882973813483102008954982940361430156911478938364216563944106910214505634133706558656238254656700712525929903854933813928836378347518908762970712033337052923107693008518093849801803847813996748881765554653788291644268912980384613778969021502293082475666346224923071883324803280375039130352903304505842701147635242270210934637699104006714174883298422891491273104054328753298044273676822977244987749874555691907703880637046832794811358973739993110106219308149018570815397854379195305617510761053075688783766033667355445258844886241619210553457493675897849027988234351023599844663934853256411952221859563060475364645470760330902420806382584929156452876291575759142343809142302917491088984155209854432486594079793571316841692868039545309545388698114665082066862897420639323438488465240988742395873801976993820317174208932265468879364002630797780058759129671389634214252579116872755600360311370547754724604639987588046985178408674382863125");
}

