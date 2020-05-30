input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let índice = 0; índice <= 4; índice++) {
        led.plot(índice, randint(0, 4))
    }
})
input.onButtonPressed(Button.B, function () {
    if (led.point(2, 2)) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
