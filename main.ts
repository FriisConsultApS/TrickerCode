control.onEvent(EventBusSource.MICROBIT_ID_IO_P16, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.millis() >= tidp16) {
        serial.writeLine("STATUS=enter#")
        pins.digitalWritePin(DigitalPin.P0, 1)
        tidp16 = control.millis() + 500
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P15, EventBusValue.MICROBIT_EVT_ANY, function () {
    serial.writeLine("STATUS=out#")
    pins.digitalWritePin(DigitalPin.P0, 0)
})
let tidp16 = 0
pins.setEvents(DigitalPin.P16, PinEventType.Edge)
pins.setEvents(DigitalPin.P15, PinEventType.Edge)
tidp16 = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
