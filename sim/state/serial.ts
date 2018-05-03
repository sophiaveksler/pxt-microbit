
namespace pxsim {
    const SERIAL_BUFFER_LENGTH = 16;
    export class SerialState {
        serialIn: string[] = [];

        public receiveData(data: string) {
            this.serialIn.push();
        }

        readSerial() {
            let v = this.serialIn.shift() || "";
            return v;
        }

        serialOutBuffer: string = "";
        writeSerial(s: string) {
            this.serialOutBuffer += s;
            if (/\n/.test(this.serialOutBuffer) || this.serialOutBuffer.length > SERIAL_BUFFER_LENGTH) {
                Runtime.postMessage(<SimulatorSerialMessage>{
                    type: 'serial',
                    data: this.serialOutBuffer,
                    id: runtime.id,
                    sim: true
                })
                this.serialOutBuffer = '';
            }
        }
    }
}

namespace pxsim.serial {
    export function writeString(s: string) {
        // prints the string to the console log of the browser (in chrome at least)
        console.log(s);
       
        // prints the string to the console of PXT
        board().writeSerial(s);
    }

    export function writeBuffer(buf: RefBuffer) {
        // TODO
    }

    export function readUntil(del: string): string {
        return readString();
    }

    export function readString(): string {
        return board().serialState.readSerial();
    }

    export function onDataReceived(delimiters: string, handler: RefAction) {
        let b = board();
        b.bus.listen(DAL.MICROBIT_ID_SERIAL, DAL.MICROBIT_SERIAL_EVT_DELIM_MATCH, handler);
    }

    export function redirect(tx: number, rx: number, rate: number) {
        // TODO?
    }

    export function redirectToUSB() {
        // TODO
    }
}