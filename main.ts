//% block="Test" color=#FF0000
namespace Test {
    //% block="Run test on %data"
    export function runTest(data: any) {
        if (typeof data === "object" && typeof data.test === "function") {
            data.test();
        }
    }
}