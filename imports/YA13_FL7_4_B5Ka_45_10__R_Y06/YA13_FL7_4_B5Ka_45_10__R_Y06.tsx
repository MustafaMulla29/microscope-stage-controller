import objPath from "./YA13_FL7_4_B5Ka_45_10__R_Y06.obj"
import stepPath from "./YA13_FL7_4_B5Ka_45_10__R_Y06.step"
import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1", "X_HI"],
  pin2: ["pin2", "JOY_X"],
  pin3: ["pin3", "X_LO"],
  pin4: ["pin4", "Y_HI"],
  pin5: ["pin5", "JOY_Y"],
  pin6: ["pin6", "Y_LO"],
  pin7: ["pin7", "SW_A1"],
  pin8: ["pin8", "SW_B1"],
  pin9: ["pin8_alt1", "SW_B2"],
  pin10: ["pin7_alt1", "SW_A2"]
} as const

const pinAttributes = {
  X_HI: { requiresPower: true },
  JOY_X: {},
  X_LO: { requiresGround: true },
  Y_HI: { requiresPower: true },
  JOY_Y: {},
  Y_LO: { requiresGround: true },
  SW_A1: { requiresGround: true },
  SW_B1: {},
  SW_B2: {},
  SW_A2: { requiresGround: true },
} as const

export const YA13_FL7_4_B5Ka_45_10__R_Y06 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C37323742"
  ]
}}
      manufacturerPartNumber="YA13_FL7_4_B5Ka_45_10__R_Y06"
      footprint={<footprint>
        <platedhole  portHints={["pin7"]} pcbX="3.8749859mm" pcbY="7.1999221mm" outerDiameter="1.7999964mm" holeDiameter="1.5000224mm" shape="circle" />
<platedhole  portHints={["pin8"]} pcbX="-6.7249421mm" pcbY="7.1999221mm" outerDiameter="1.7999964mm" holeDiameter="1.5000224mm" shape="circle" />
<platedhole  portHints={["pin9"]} pcbX="-6.7249421mm" pcbY="-5.2999259mm" outerDiameter="1.7999964mm" holeDiameter="1.5000224mm" shape="circle" />
<platedhole  portHints={["pin10"]} pcbX="3.8749859mm" pcbY="-5.2999259mm" outerDiameter="1.7999964mm" holeDiameter="1.5000224mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="-3.9251001mm" pcbY="-7.2999219mm" outerDiameter="1.5999968mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="-1.4249781mm" pcbY="-7.2999219mm" outerDiameter="1.5999968mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="1.0748899mm" pcbY="-7.2999219mm" outerDiameter="1.5999968mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="6.8249419mm" pcbY="-1.5498699mm" outerDiameter="1.5999968mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="6.8249419mm" pcbY="0.9499981mm" outerDiameter="1.5999968mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="6.8249419mm" pcbY="3.4501201mm" outerDiameter="1.5999968mm" holeDiameter="1.1999976mm" shape="circle" />
<silkscreenpath route={[{"x":3.527996499999972,"y":-6.376454099999933},{"x":3.527996499999972,"y":-8.574976500000048},{"x":-6.378003499999977,"y":-8.574976500000048},{"x":-6.378003499999977,"y":-6.376454099999933}]} />
<silkscreenpath route={[{"x":7.851990899999919,"y":-4.086313899999936},{"x":8.099996500000088,"y":-4.086313899999936}]} />
<silkscreenpath route={[{"x":7.851990899999919,"y":5.932157300000085},{"x":8.099996500000088,"y":5.932157300000085},{"x":8.099996500000088,"y":-4.002976500000045}]} />
<silkscreenpath route={[{"x":5.051996500000087,"y":5.932157300000085},{"x":7.851990899999919,"y":5.932157300000085}]} />
<silkscreenpath route={[{"x":5.051996500000087,"y":-4.086313899999936},{"x":7.851990899999919,"y":-4.086313899999936}]} />
<silkscreenpath route={[{"x":-6.378003499999977,"y":-6.796976499999914},{"x":-6.378003499999977,"y":-7.685976499999924}]} />
<silkscreenpath route={[{"x":3.527996499999972,"y":-6.669976499999962},{"x":3.527996499999972,"y":-7.558976499999972}]} />
<silkscreenpath route={[{"x":-7.833067899999946,"y":7.427023500000018},{"x":-7.902003499999978,"y":7.427023500000018}]} />
<silkscreenpath route={[{"x":2.7669109000000844,"y":7.427023500000018},{"x":-5.6169179000000895,"y":7.427023500000018}]} />
<silkscreenpath route={[{"x":4.983060899999828,"y":-5.526976500000046},{"x":5.051996500000087,"y":-5.526976500000046},{"x":5.051996500000087,"y":7.427023500000018},{"x":4.983060899999828,"y":7.427023500000018}]} />
<silkscreenpath route={[{"x":-5.6169179000000895,"y":-5.526976500000046},{"x":2.7669109000000844,"y":-5.526976500000046}]} />
<silkscreenpath route={[{"x":-7.902003499999978,"y":7.427023500000018},{"x":-7.902003499999978,"y":-5.526976500000046},{"x":-7.833067899999946,"y":-5.526976500000046}]} />
<silkscreentext text="{NAME}" pcbX="0.1388999mm" pcbY="9.1542001mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-8.150200100000006,"y":8.40420010000014},{"x":8.427999900000032,"y":8.40420010000014},{"x":8.427999900000032,"y":-8.935999899999956},{"x":-8.150200100000006,"y":-8.935999899999956},{"x":-8.150200100000006,"y":8.40420010000014}]} />
      </footprint>}
      cadModel={{
        objUrl: objPath,
        stepUrl: stepPath,
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 2.2250061000000034, y: -0.9999894999999734, z: -11.000007 },
      }}
      {...props}
    />
  )
}
