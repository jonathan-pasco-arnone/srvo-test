function gobackword () {
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    leftDCDefault,
    robotbit.Motors.M1A,
    rightDCDefault
    )
}
function goforword () {
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    leftDCDefault,
    robotbit.Motors.M1B,
    rightDCDefault
    )
}
let rightDCDefault = 0
let leftDCDefault = 0
let penDown = 180
let penUp = 120
leftDCDefault = -200
rightDCDefault = 200
loops.everyInterval(1000, function () {
    goforword()
})
