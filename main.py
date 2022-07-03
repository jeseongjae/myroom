def on_received_string(receivedString):
    global angle
    if receivedString == "Open":
        if angle > 0:
            angle += -1
            DFRobotMaqueenPluss.servo_run(Servos.S1, angle)
    elif receivedString == "Close":
        if angle < 180:
            angle += 1
            DFRobotMaqueenPluss.servo_run(Servos.S1, angle)
    elif receivedString == "LEDL":
        DFRobotMaqueenPluss.set_rgb_light(RGBLight.RGBL, Color.RED)
    elif receivedString == "LEDR":
        DFRobotMaqueenPluss.set_rgb_light(RGBLight.RGBR, Color.RED)
    else:
        DFRobotMaqueenPluss.motot_stop(Motors.ALL)
        DFRobotMaqueenPluss.set_rgb_light(RGBLight.RGBA, Color.OFF)
radio.on_received_string(on_received_string)

def on_received_value(name, value):
    if name == "F":
        DFRobotMaqueenPluss.motot_run(Motors.ALL, Dir.CW, Math.map(value, 550, 1024, 10, 255))
    elif name == "B":
        DFRobotMaqueenPluss.motot_run(Motors.ALL, Dir.CCW, Math.map(value, 1, 450, 255, 10))
    elif name == "L":
        DFRobotMaqueenPluss.motot_run(Motors.M2, Dir.CW, Math.map(value, 1, 450, 255, 40))
        DFRobotMaqueenPluss.motot_run(Motors.M1, Dir.CW, 20)
    elif name == "R":
        DFRobotMaqueenPluss.motot_run(Motors.M1, Dir.CW, Math.map(0, 550, 1024, 40, 255))
        DFRobotMaqueenPluss.motot_run(Motors.M2, Dir.CW, 20)
radio.on_received_value(on_received_value)

angle = 0
radio.set_group(1)
angle = 90
DFRobotMaqueenPluss.servo_run(Servos.S1, angle)
basic.show_icon(IconNames.HOUSE)