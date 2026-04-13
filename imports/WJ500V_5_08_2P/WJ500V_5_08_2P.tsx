import objPath from "./WJ500V_5_08_2P.obj"
import stepPath from "./WJ500V_5_08_2P.step"
import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1", "VBAT", "X_OUT1", "Y_OUT1"],
  pin2: ["pin2", "GND", "X_OUT2", "Y_OUT2"]
} as const

const pinAttributes = {
  pin1: { includeInBoardPinout: true },
  pin2: { includeInBoardPinout: true },
} as const

export const WJ500V_5_08_2P = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C8465"
  ]
}}
      manufacturerPartNumber="WJ500V_5_08_2P"
      footprint={<footprint>
        <platedhole  portHints={["pin2"]} pcbX="2.54mm" pcbY="0mm" outerDiameter="1.999996mm" holeDiameter="1.3000228mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="-2.54mm" pcbY="0mm" outerDiameter="1.999996mm" holeDiameter="1.3000228mm" shape="circle" />
<silkscreenpath route={[{"x":5.079999999999998,"y":5.637529999999998},{"x":-5.053837999999999,"y":5.637529999999998}]} />
<silkscreenpath route={[{"x":-5.679998799999993,"y":-3.7500051999999897},{"x":-5.0800000000000125,"y":-3.499967599999991}]} />
<silkscreenpath route={[{"x":-5.679998799999993,"y":-2.750007199999999},{"x":-5.679998799999993,"y":-3.7500051999999897}]} />
<silkscreenpath route={[{"x":-5.0800000000000125,"y":-3.000070199999996},{"x":-5.679998799999993,"y":-2.750007199999999}]} />
<silkscreenpath route={[{"x":-5.0800000000000125,"y":4.500016400000007},{"x":-5.679998799999993,"y":4.750003200000009},{"x":-5.679998799999993,"y":3.7499798000000055},{"x":-5.0800000000000125,"y":3.999890399999998}]} />
<silkscreenpath route={[{"x":5.079999999999998,"y":-4.522469999999984},{"x":-5.053837999999999,"y":-4.522469999999984}]} />
<silkscreenpath route={[{"x":5.079999999999998,"y":-4.522469999999984},{"x":5.079999999999998,"y":5.637529999999998}]} />
<silkscreenpath route={[{"x":-5.0800000000000125,"y":-4.519930000000002},{"x":-5.0800000000000125,"y":5.640070000000009}]} />
<silkscreentext text="{NAME}" pcbX="-0.2413mm" pcbY="6.6388mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.939599999999999,"y":5.888800000000003},{"x":5.456999999999994,"y":5.888800000000003},{"x":5.456999999999994,"y":-4.771199999999993},{"x":-5.939599999999999,"y":-4.771199999999993},{"x":-5.939599999999999,"y":5.888800000000003}]} />
      </footprint>}
      cadModel={{
        objUrl: objPath,
        stepUrl: stepPath,
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -3.139999400000004, y: 9.999999985299546e-7, z: -0.000006999999999646178 },
      }}
      {...props}
    />
  )
}
