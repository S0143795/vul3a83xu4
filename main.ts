function 燈數數 (num: number, 亮燈: boolean, 亮度: number) {
    if (num < 6) {
        X = num - 1
        Y = 0
    } else if (num >= 6 && num < 9) {
        X = 4
        Y = 0
    } else if (num >= 9 && num < 14) {
        X = 13 - num
        Y = 4
    } else if (num >= 14 && num <= 16) {
        X = 0
        Y = 17 - num
    }
    if (亮燈) {
        led.plotBrightness(X, Y, 亮度)
    } else {
        led.unplot(X, Y)
    }
}
input.onButtonPressed(Button.A, function () {
    if (true) {
        B += 1
        燈數數(B - 1, false, 255)
        if (B > 16) {
            B = 1
        }
        燈數數(B, true, 255)
    }
})
input.onButtonPressed(Button.AB, function () {
    B = 1
    A = 1
    PLAY = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    PLAY = 1
    for (let index = 0; index < randint(100, 116); index++) {
        A += 1
        燈數數(A - 1, false, 255)
        if (A > 16) {
            A = 1
        }
        燈數數(A, true, 50)
        燈數數(B, true, 255)
        basic.pause(100)
    }
    if (A == B) {
        basic.showIcon(IconNames.Heart)
    }
})
let PLAY = 0
let B = 0
let Y = 0
let X = 0
let A = 0
A = 0
basic.forever(function () {
    A += 1
    if (A > 16) {
        A = 1
    }
    basic.pause(100)
})
