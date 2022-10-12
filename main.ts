control.onEvent(EventBusSource.MICROBIT_ID_IO_P16, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.millis() >= tidp16 + 1000) {
        tidp16 = control.millis()
        serial.writeLine(".")
    }
})
let tidp16 = 0
pins.setEvents(DigitalPin.P16, PinEventType.Touch)
tidp16 = 0
basic.forever(function () {
	
})
