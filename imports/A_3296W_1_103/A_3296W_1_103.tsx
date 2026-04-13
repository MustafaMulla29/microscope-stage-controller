import objPath from "./A_3296W_1_103.obj"
import stepPath from "./A_3296W_1_103.step"
import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1", "VCC"],
  pin2: ["pin2", "WIPER"],
  pin3: ["pin3", "GND"]
} as const

const pinAttributes = {
  VCC: { requiresPower: true },
  WIPER: {},
  GND: { requiresGround: true },
} as const

export const A_3296W_1_103 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C118954"
  ]
}}
      manufacturerPartNumber="A_3296W_1_103"
      footprint={<footprint>
        <platedhole  portHints={["pin2"]} pcbX="0.000127mm" pcbY="0mm" outerDiameter="1.524mm" holeDiameter="0.762mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="-2.499995mm" pcbY="0mm" outerDiameter="1.524mm" holeDiameter="0.762mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="2.499995mm" pcbY="0mm" outerDiameter="1.524mm" holeDiameter="0.762mm" shape="circle" />
<silkscreenpath route={[{"x":-4.7500031999999806,"y":2.450033200000007},{"x":4.7500031999999806,"y":2.450033200000007}]} />
<silkscreenpath route={[{"x":-2.804033000000004,"y":1.2700000000000102},{"x":-2.804033000000004,"y":1.6510000000000105},{"x":-2.804033000000004,"y":2.0320000000000107},{"x":-2.804033000000004,"y":1.6510000000000105}]} />
<silkscreenpath route={[{"x":-4.7500031999999806,"y":2.450033200000007},{"x":-4.7500031999999806,"y":-2.450033200000007},{"x":-4.7500031999999806,"y":-2.499994999999984},{"x":-4.255008000000032,"y":-2.499994999999984},{"x":-4.255008000000032,"y":-1.99999600000001},{"x":4.255008000000032,"y":-1.99999600000001},{"x":4.255008000000032,"y":-2.499994999999984},{"x":4.755337199999985,"y":-2.499994999999984},{"x":4.755337199999985,"y":-2.450033200000007},{"x":4.755337199999985,"y":2.450033200000007}]} />
<silkscreenpath route={[{"x":-2.804033000000004,"y":2.189480000000003},{"x":-3.0366516457467583,"y":2.244720652483238},{"x":-3.222468590143478,"y":2.395170069932817},{"x":-3.3248973852105337,"y":2.6112054975296815},{"x":-3.323770301925663,"y":2.8502906156761583},{"x":-3.219309257477846,"y":3.065350733384463},{"x":-3.0320821208577513,"y":3.2140415648061946},{"x":-2.798952999999983,"y":3.2670866121142694},{"x":-2.565823879142215,"y":3.2140415648061946},{"x":-2.37859674252212,"y":3.065350733384463},{"x":-2.2741356980743035,"y":2.8502906156761583},{"x":-2.2730086147894895,"y":2.6112054975296815},{"x":-2.375437409856488,"y":2.395170069932817},{"x":-2.561254354253265,"y":2.244720652483238},{"x":-2.793873000000019,"y":2.189480000000003}]} />
<silkscreentext text="{NAME}" pcbX="-0.010033mm" pcbY="3.4384mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.009833000000015,"y":2.6884000000000015},{"x":4.989767000000029,"y":2.6884000000000015},{"x":4.989767000000029,"y":-2.764599999999973},{"x":-5.009833000000015,"y":-2.764599999999973},{"x":-5.009833000000015,"y":2.6884000000000015}]} />
      </footprint>}
      cadModel={{
        objUrl: objPath,
        stepUrl: stepPath,
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0, y: 0, z: -0.000006999999999646178 },
      }}
      {...props}
    />
  )
}
