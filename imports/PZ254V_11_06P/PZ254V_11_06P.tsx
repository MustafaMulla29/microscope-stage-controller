import objPath from "./PZ254V_11_06P.obj"
import stepPath from "./PZ254V_11_06P.step"
import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1", "VCC_3V3", "Y_SPEED_WIPER", "MOSI"],
  pin2: ["pin2", "GND", "X_IN1", "MISO"],
  pin3: ["pin3", "JOY_X", "X_IN2", "SCK"],
  pin4: ["pin4", "JOY_Y", "Y_IN1", "RESET"],
  pin5: ["pin5", "JOY_SW", "Y_IN2"],
  pin6: ["pin6", "X_SPEED_WIPER", "FAULT"]
} as const

const pinAttributes = {
  pin1: { includeInBoardPinout: true },
  pin2: { includeInBoardPinout: true },
  pin3: { includeInBoardPinout: true },
  pin4: { includeInBoardPinout: true },
  pin5: { includeInBoardPinout: true },
  pin6: { includeInBoardPinout: true },
} as const

export const PZ254V_11_06P = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C492405"
  ]
}}
      manufacturerPartNumber="PZ254V_11_06P"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-6.35mm" pcbY="0mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-3.81mm" pcbY="0mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="-1.27mm" pcbY="0mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="1.27mm" pcbY="0mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="3.81mm" pcbY="0mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="6.35mm" pcbY="0mm" outerDiameter="1.6999966mm" holeDiameter="1.1000232mm" shape="circle" />
<silkscreenpath route={[{"x":-7.599984800000129,"y":1.2999974000001657},{"x":7.649997400000075,"y":1.2999974000001657},{"x":7.649997400000075,"y":-1.299997400000052},{"x":-7.599984800000129,"y":-1.299997400000052},{"x":-7.599984800000129,"y":1.2999974000001657}]} />
<silkscreenpath route={[{"x":-5.056479600000102,"y":1.2700000000000955},{"x":-5.056479600000102,"y":-1.2699999999999818}]} />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="2.2954mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-7.895399999999995,"y":1.5453999999999724},{"x":7.895399999999881,"y":1.5453999999999724},{"x":7.895399999999881,"y":-1.5453999999999724},{"x":-7.895399999999995,"y":-1.5453999999999724},{"x":-7.895399999999995,"y":1.5453999999999724}]} />
      </footprint>}
      cadModel={{
        objUrl: objPath,
        stepUrl: stepPath,
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.000005999999999950489 },
      }}
      {...props}
    />
  )
}
