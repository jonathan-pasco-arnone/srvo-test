let penDown = 180
let penUp = 120
let leftDCDefault = -200
let rightDCDefault = 100
basic.forever(function () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    -255,
    robotbit.Motors.M2A,
    leftDCDefault
    )
    basic.pause(1000)
    leftDCDefault = 200
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    -255,
    robotbit.Motors.M2A,
    leftDCDefault
    )
    basic.pause(1000)
})
