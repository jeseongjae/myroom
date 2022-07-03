radio.onReceivedString(function (receivedString) {
    if (receivedString == "Open") {
        if (angle > 0) {
            angle += -1
            DFRobotMaqueenPluss.servoRun(Servos.S1, angle)
        }
    } else if (receivedString == "Close") {
        if (angle < 180) {
            angle += 1
            DFRobotMaqueenPluss.servoRun(Servos.S1, angle)
        }
    } else if (receivedString == "LEDL") {
        DFRobotMaqueenPluss.setRGBLight(RGBLight.RGBL, Color.RED)
    } else if (receivedString == "LEDR") {
        DFRobotMaqueenPluss.setRGBLight(RGBLight.RGBR, Color.RED)
    } else {
        DFRobotMaqueenPluss.mototStop(Motors.ALL)
        DFRobotMaqueenPluss.setRGBLight(RGBLight.RGBA, Color.OFF)
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "F") {
        DFRobotMaqueenPluss.mototRun(Motors.ALL, Dir.CW, Math.map(value, 550, 1024, 10, 255))
    } else if (name == "B") {
        DFRobotMaqueenPluss.mototRun(Motors.ALL, Dir.CCW, Math.map(value, 1, 450, 255, 10))
    } else if (name == "L") {
        DFRobotMaqueenPluss.mototRun(Motors.M2, Dir.CW, Math.map(value, 1, 450, 255, 40))
        DFRobotMaqueenPluss.mototRun(Motors.M1, Dir.CW, 20)
    } else if (name == "R") {
        DFRobotMaqueenPluss.mototRun(Motors.M1, Dir.CW, Math.map(0, 550, 1024, 40, 255))
        DFRobotMaqueenPluss.mototRun(Motors.M2, Dir.CW, 20)
    }
})
let angle = 0
radio.setGroup(1)
angle = 90
DFRobotMaqueenPluss.servoRun(Servos.S1, angle)
basic.showIcon(IconNames.House)
