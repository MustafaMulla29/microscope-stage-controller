import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["nSleep"],
  pin2: ["AOUT1"],
  pin3: ["AISEN"],
  pin4: ["AOUT2"],
  pin5: ["BOUT2"],
  pin6: ["BISEN"],
  pin7: ["BOUT1"],
  pin8: ["nFault"],
  pin9: ["BIN1"],
  pin10: ["BIN2"],
  pin11: ["VCP"],
  pin12: ["VM"],
  pin13: ["GND1"],
  pin14: ["VINT"],
  pin15: ["AIN2"],
  pin16: ["AIN1"],
  pin17: ["GND2"]
} as const

export const DRV8833PWPR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C50506"
  ]
}}
      manufacturerPartNumber="DRV8833PWPR"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-2.275078mm" pcbY="-2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-1.625092mm" pcbY="-2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-0.975106mm" pcbY="-2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-0.324866mm" pcbY="-2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0.32512mm" pcbY="-2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.975106mm" pcbY="-2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="1.625092mm" pcbY="-2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="2.275078mm" pcbY="-2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-2.275078mm" pcbY="2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="-1.625092mm" pcbY="2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="-0.975106mm" pcbY="2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-0.324866mm" pcbY="2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="0.32512mm" pcbY="2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="0.975106mm" pcbY="2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="1.625092mm" pcbY="2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="2.275078mm" pcbY="2.850007mm" width="0.350012mm" height="1.2999974mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="0mm" pcbY="0mm" width="2.7399996mm" height="2.7399996mm" shape="rect" />
<via pcbX="0.500126mm" pcbY="0.499872mm" outerDiameter="0.6096mm" holeDiameter="0.1524mm" fromLayer="top" toLayer="bottom" />
<via pcbX="-0.499872mm" pcbY="0.499872mm" outerDiameter="0.6096mm" holeDiameter="0.1524mm" fromLayer="top" toLayer="bottom" />
<via pcbX="-0.499872mm" pcbY="-0.500126mm" outerDiameter="0.6096mm" holeDiameter="0.1524mm" fromLayer="top" toLayer="bottom" />
<via pcbX="0.500126mm" pcbY="-0.500126mm" outerDiameter="0.6096mm" holeDiameter="0.1524mm" fromLayer="top" toLayer="bottom" />
<silkscreenpath route={[{"x":2.499994999999899,"y":2.100910200000044},{"x":2.499994999999899,"y":-2.1009101999999302}]} />
<silkscreenpath route={[{"x":-2.5400000000000773,"y":-2.1397722000000385},{"x":-2.5400000000000773,"y":-0.3810000000000855}]} />
<silkscreenpath route={[{"x":-2.5400000000000773,"y":2.1397722000000385},{"x":-2.5400000000000773,"y":0.3809999999999718}]} />
<silkscreenpath route={[{"x":1.9337273999999525,"y":-2.1999955999999656},{"x":1.9664425999999366,"y":-2.1999955999999656}]} />
<silkscreenpath route={[{"x":1.2837413999998262,"y":-2.1999955999999656},{"x":1.3164565999998104,"y":-2.1999955999999656}]} />
<silkscreenpath route={[{"x":0.6337554000000409,"y":-2.1999955999999656},{"x":0.6664706000000251,"y":-2.1999955999999656}]} />
<silkscreenpath route={[{"x":-0.01623060000008536,"y":-2.1999955999999656},{"x":0.01648459999989882,"y":-2.1999955999999656}]} />
<silkscreenpath route={[{"x":-0.6664706000000251,"y":-2.1999955999999656},{"x":-0.6335014000000001,"y":-2.1999955999999656}]} />
<silkscreenpath route={[{"x":-1.316456599999924,"y":-2.1999955999999656},{"x":-1.2837413999999399,"y":-2.1999955999999656}]} />
<silkscreenpath route={[{"x":-1.9664426000000503,"y":-2.1999955999999656},{"x":-1.9337274000000662,"y":-2.1999955999999656}]} />
<silkscreenpath route={[{"x":1.9337273999999525,"y":2.1999955999999656},{"x":1.9664425999999366,"y":2.1999955999999656}]} />
<silkscreenpath route={[{"x":1.2837413999998262,"y":2.1999955999999656},{"x":1.3164565999998104,"y":2.1999955999999656}]} />
<silkscreenpath route={[{"x":0.6337554000000409,"y":2.1999955999999656},{"x":0.6664706000000251,"y":2.1999955999999656}]} />
<silkscreenpath route={[{"x":-0.01623060000008536,"y":2.1999955999999656},{"x":0.01648459999989882,"y":2.1999955999999656}]} />
<silkscreenpath route={[{"x":-0.6664706000000251,"y":2.1999955999999656},{"x":-0.6335014000000001,"y":2.1999955999999656}]} />
<silkscreenpath route={[{"x":-1.316456599999924,"y":2.1999955999999656},{"x":-1.2837413999999399,"y":2.1999955999999656}]} />
<silkscreenpath route={[{"x":-1.9664426000000503,"y":2.1999955999999656},{"x":-1.9337274000000662,"y":2.1999955999999656}]} />
<silkscreenpath route={[{"x":-2.5400000000000773,"y":-0.3810000000000855},{"x":-2.7639461811234014,"y":-0.308235474856815},{"x":-2.902352532708619,"y":-0.11773547485677227},{"x":-2.902352532708619,"y":0.11773547485688596},{"x":-2.7639461811234014,"y":0.3082354748569287},{"x":-2.5400000000000773,"y":0.3809999999999718}]} />
<silkscreentext text="{NAME}" pcbX="-0.2794mm" pcbY="4.3274mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-3.298000000000002,"y":3.5774000000000115},{"x":2.7392000000000962,"y":3.5774000000000115},{"x":2.7392000000000962,"y":-3.983799999999974},{"x":-3.298000000000002,"y":-3.983799999999974},{"x":-3.298000000000002,"y":3.5774000000000115}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C50506.obj?uuid=534f03d8fe164fbab551f91e5a792e30",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C50506.step?uuid=534f03d8fe164fbab551f91e5a792e30",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0, y: 0, z: -0.019205 },
      }}
      {...props}
    />
  )
}
