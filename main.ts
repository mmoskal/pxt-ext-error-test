//% block="JSON" color=#FF0000
namespace Test {
    //% block="Run %fnName on %data if it exists"
    export function runIfExists(data: any, fnName: string) {
        if (typeof data === "object" && typeof data[fnName] === "function") {
            data[fnName]();
        }
    }
}