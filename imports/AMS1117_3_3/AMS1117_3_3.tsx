import objPath from "./AMS1117_3_3.obj"
import stepPath from "./AMS1117_3_3.step"
import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND"],
  pin2: ["VOUT1"],
  pin3: ["VIN"],
  pin4: ["VOUT2"]
} as const

const pinAttributes = {
  GND: { requiresGround: true },
  VIN: { requiresPower: true },
  VOUT1: { providesPower: true, providesVoltage: "3.3V" },
  VOUT2: { providesPower: true, providesVoltage: "3.3V" },
} as const

export const AMS1117_3_3 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C6186"
  ]
}}
      manufacturerPartNumber="AMS1117_3_3"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="2.92995985mm" pcbY="-2.29997mm" width="2.499995mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="2.92995985mm" pcbY="0mm" width="2.499995mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="2.92995985mm" pcbY="2.29997mm" width="2.499995mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-3.00995715mm" pcbY="0mm" width="2.3400004mm" height="3.5999928mm" shape="rect" />
<silkscreenpath route={[{"x":-1.6114077499998984,"y":-3.3262061999998878},{"x":-1.6114077499998984,"y":3.3262062000000014},{"x":1.3313854499999707,"y":3.3262062000000014},{"x":1.3313854499999707,"y":-3.3262061999998878},{"x":-1.6114077499998984,"y":-3.3262061999998878}]} />
<silkscreentext text="{NAME}" pcbX="0.29178885mm" pcbY="4.3274mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-4.428611149999938,"y":3.5774000000000115},{"x":5.012188849999916,"y":3.5774000000000115},{"x":5.012188849999916,"y":-3.5773999999998978},{"x":-4.428611149999938,"y":-3.5773999999998978},{"x":-4.428611149999938,"y":3.5774000000000115}]} />
      </footprint>}
      cadModel={{
        objUrl: objPath,
        stepUrl: stepPath,
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0, y: 0, z: -0.049394 },
      }}
      {...props}
    />
  )
}
