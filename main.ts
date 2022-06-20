function turnLeft (num: number) {
    for (let index = 0; index < num; index++) {
        robotbit.MotorRunDual(
        robotbit.Motors.M2A,
        leftDCDefault * -1,
        robotbit.Motors.M1B,
        rightDCDefault
        )
    }
}
function goBackwords (num: number) {
    for (let index = 0; index < num; index++) {
        robotbit.MotorRunDual(
        robotbit.Motors.M2A,
        leftDCDefault * -1,
        robotbit.Motors.M1A,
        rightDCDefault * -1
        )
    }
}
function goForwards (num: number) {
    for (let index = 0; index < num; index++) {
        robotbit.MotorRunDual(
        robotbit.Motors.M2A,
        leftDCDefault,
        robotbit.Motors.M1B,
        rightDCDefault
        )
    }
}
function turnRight (num: number) {
    for (let index = 0; index < num; index++) {
        robotbit.MotorRunDual(
        robotbit.Motors.M2A,
        leftDCDefault,
        robotbit.Motors.M1B,
        rightDCDefault * -1
        )
    }
}
let rightDCDefault = 0
let leftDCDefault = 0
let penDown = 180
let penUp = 120
leftDCDefault = -100
rightDCDefault = 94
basic.forever(function () {
    turnLeft(1)
})
