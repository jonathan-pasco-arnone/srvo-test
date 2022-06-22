function turnLeft (degrees: number) {
    for (let index = 0; index < degrees * 3; index++) {
        robotbit.MotorRunDual(
        robotbit.Motors.M2A,
        0,
        robotbit.Motors.M1B,
        rightDCDefault + 30
        )
    }
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    0,
    robotbit.Motors.M1B,
    0
    )
    basic.pause(100)
}
function goBackwords (num: number) {
    for (let index = 0; index < num * 100; index++) {
        robotbit.MotorRunDual(
        robotbit.Motors.M2A,
        leftDCDefault * -1,
        robotbit.Motors.M1A,
        rightDCDefault * -1
        )
    }
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    0,
    robotbit.Motors.M1B,
    0
    )
    basic.pause(100)
}
function SetPenUp () {
    robotbit.Servo(robotbit.Servos.S1, penUp)
    basic.pause(100)
}
function goForwards (num: number) {
    for (let index = 0; index < num * 100; index++) {
        robotbit.MotorRunDual(
        robotbit.Motors.M2A,
        leftDCDefault,
        robotbit.Motors.M1B,
        rightDCDefault
        )
    }
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    0,
    robotbit.Motors.M1B,
    0
    )
    basic.pause(100)
}
function turnRight (degrees: number) {
    for (let index = 0; index < degrees * 2; index++) {
        robotbit.MotorRunDual(
        robotbit.Motors.M2A,
        leftDCDefault + 55,
        robotbit.Motors.M1B,
        0
        )
    }
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    0,
    robotbit.Motors.M1B,
    0
    )
    basic.pause(100)
}
function setPenDown () {
    robotbit.Servo(robotbit.Servos.S1, penDown)
    basic.pause(100)
}
let rightDCDefault = 0
let leftDCDefault = 0
let penUp = 0
let penDown = 0
penDown = 160
penUp = 130
leftDCDefault = 190
rightDCDefault = 130
SetPenUp()
basic.pause(2000)
goForwards(5)
turnRight(90)
goForwards(5)
turnRight(90)
goForwards(5)
turnRight(90)
goForwards(5)
