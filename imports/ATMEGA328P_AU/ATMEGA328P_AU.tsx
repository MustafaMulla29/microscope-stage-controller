import objPath from "./ATMEGA328P_AU.obj"
import stepPath from "./ATMEGA328P_AU.step"
import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1", "PD3"],
  pin2: ["pin2", "PD4"],
  pin3: ["GND3", "GND"],
  pin4: ["VCC2", "VCC"],
  pin5: ["GND2", "GND"],
  pin6: ["VCC1", "VCC"],
  pin7: ["pin7", "PB6"],
  pin8: ["pin8", "PB7"],
  pin9: ["pin9", "PD5"],
  pin10: ["pin10", "PD6"],
  pin11: ["pin11", "PD7"],
  pin12: ["pin12", "PB0"],
  pin13: ["pin13", "PB1"],
  pin14: ["pin14", "PB2"],
  pin15: ["pin15", "PB3", "MOSI"],
  pin16: ["pin16", "PB4", "MISO"],
  pin17: ["pin17", "PB5", "SCK"],
  pin18: ["AVCC"],
  pin19: ["ADC6"],
  pin20: ["AREF"],
  pin21: ["GND1", "GND"],
  pin22: ["ADC7"],
  pin23: ["pin23", "PC0", "ADC0"],
  pin24: ["pin24", "PC1", "ADC1"],
  pin25: ["pin25", "PC2", "ADC2"],
  pin26: ["pin26", "PC3", "ADC3"],
  pin27: ["pin27", "PC4", "ADC4"],
  pin28: ["pin28", "PC5", "ADC5"],
  pin29: ["pin29", "PC6", "RESET"],
  pin30: ["pin30", "PD0", "RXD"],
  pin31: ["pin31", "PD1", "TXD"],
  pin32: ["pin32", "PD2", "INT0"]
} as const

const pinAttributes = {
  GND3: { requiresGround: true },
  VCC2: { requiresPower: true, requiresVoltage: "3.3V" },
  GND2: { requiresGround: true },
  VCC1: { requiresPower: true, requiresVoltage: "3.3V" },
  AVCC: { requiresPower: true, requiresVoltage: "3.3V" },
  AREF: {},
  GND1: { requiresGround: true },
  MOSI: { isGpio: true },
  MISO: { isGpio: true },
  SCK: { isGpio: true },
  RESET: { canUseInternalPullup: true },
  RXD: { isGpio: true },
  TXD: { isGpio: true },
} as const

export const ATMEGA328P_AU = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C14877"
  ]
}}
      manufacturerPartNumber="ATMEGA328P_AU"
      footprint={<footprint>
        <smtpad portHints={["pin32"]} pcbX="-4.3815mm" pcbY="-2.7999944mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin31"]} pcbX="-4.3815mm" pcbY="-1.999996mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin30"]} pcbX="-4.3815mm" pcbY="-1.1999976mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin29"]} pcbX="-4.3815mm" pcbY="-0.3999992mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin28"]} pcbX="-4.3815mm" pcbY="0.3999992mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin27"]} pcbX="-4.3815mm" pcbY="1.1999976mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin26"]} pcbX="-4.3815mm" pcbY="1.999996mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin25"]} pcbX="-4.3815mm" pcbY="2.7999944mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="-2.7999944mm" pcbY="4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="-1.999996mm" pcbY="4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="-1.1999976mm" pcbY="4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="-0.3999992mm" pcbY="4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="0.3999992mm" pcbY="4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="1.1999976mm" pcbY="4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="1.999996mm" pcbY="4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="2.7999944mm" pcbY="4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="4.3815mm" pcbY="2.7999944mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="4.3815mm" pcbY="1.999996mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="4.3815mm" pcbY="1.1999976mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="4.3815mm" pcbY="0.3999992mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="4.3815mm" pcbY="-0.3999992mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="4.3815mm" pcbY="-1.1999976mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="4.3815mm" pcbY="-1.999996mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="4.3815mm" pcbY="-2.7999944mm" width="1.6500094mm" height="0.4500118mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="2.7999944mm" pcbY="-4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="1.999996mm" pcbY="-4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="1.1999976mm" pcbY="-4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0.3999992mm" pcbY="-4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-0.3999992mm" pcbY="-4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.1999976mm" pcbY="-4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-1.999996mm" pcbY="-4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-2.7999944mm" pcbY="-4.3688mm" width="0.4500118mm" height="1.6500094mm" shape="rect" />
<silkscreenpath route={[{"x":-2.967482000000004,"y":-4.825999999999993},{"x":-2.819400000000016,"y":-4.9740820107053025},{"x":-2.6713180000000136,"y":-4.825999999999993}]} />
<silkscreenpath route={[{"x":-2.6713180000000136,"y":-4.825999999999993},{"x":-2.819400000000016,"y":-4.677917989294684},{"x":-2.967482000000004,"y":-4.825999999999993}]} />
<silkscreenpath route={[{"x":-2.9626559999999813,"y":2.9499560000000145},{"x":-2.9626559999999813,"y":-2.949955999999986},{"x":2.937256000000019,"y":-2.949955999999986},{"x":2.937256000000019,"y":2.9499560000000145},{"x":-2.9626559999999813,"y":2.9499560000000145}]} />
<silkscreenpath route={[{"x":-3.7591999999999928,"y":-4.063999999999993},{"x":-3.907941055997668,"y":-3.9133579702960617},{"x":-3.7579300000000018,"y":-3.763980575985258},{"x":-3.6079189440023356,"y":-3.9133579702960617},{"x":-3.7566599999999966,"y":-4.063999999999993}]} />
<silkscreenpath route={[{"x":-2.2123399999999975,"y":-1.998980000000003},{"x":-2.4015150142161303,"y":-1.86006255080585},{"x":-2.3284212288967012,"y":-1.6370321891015465},{"x":-2.0937187711032834,"y":-1.6370321891015465},{"x":-2.0206249857838543,"y":-1.86006255080585},{"x":-2.209799999999987,"y":-1.998980000000003}]} />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="5.9657mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.228400000000008,"y":5.215700000000012},{"x":5.2283999999999935,"y":5.215700000000012},{"x":5.2283999999999935,"y":-5.215699999999998},{"x":-5.228400000000008,"y":-5.215699999999998},{"x":-5.228400000000008,"y":5.215700000000012}]} />
      </footprint>}
      cadModel={{
        objUrl: objPath,
        stepUrl: stepPath,
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.00131110000000168, y: -0.00301659999999665, z: 0.000917 },
      }}
      {...props}
    />
  )
}
