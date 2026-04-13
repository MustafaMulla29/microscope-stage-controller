import React from "react"
import { DRV8833PWPR } from "./imports/DRV8833PWPR/DRV8833PWPR"
import { YA13_FL7_4_B5Ka_45_10__R_Y06 } from "./imports/YA13_FL7_4_B5Ka_45_10__R_Y06/YA13_FL7_4_B5Ka_45_10__R_Y06"
import { A_3296W_1_103 } from "./imports/A_3296W_1_103/A_3296W_1_103"
import { WJ500V_5_08_2P } from "./imports/WJ500V_5_08_2P/WJ500V_5_08_2P"
import { PZ254V_11_06P } from "./imports/PZ254V_11_06P/PZ254V_11_06P"
import { AMS1117_3_3 } from "./imports/AMS1117_3_3/AMS1117_3_3"
import { ATMEGA328P_AU } from "./imports/ATMEGA328P_AU/ATMEGA328P_AU"

export default () => (
  <board width="100mm" height="70mm" layers={4}>
    <WJ500V_5_08_2P
      name="J_PWR"
      pcbX={-44}
      pcbY={26}
      schX={-24}
      schY={20}
      pinLabels={{
        pin1: "VBAT",
        pin2: "GND",
      }}
    />

    <WJ500V_5_08_2P
      name="J_XACT"
      pcbX={-44}
      pcbY={8}
      schX={-24}
      schY={4}
      pinLabels={{
        pin1: "X_OUT1",
        pin2: "X_OUT2",
      }}
    />

    <WJ500V_5_08_2P
      name="J_YACT"
      pcbX={-44}
      pcbY={-12}
      schX={-24}
      schY={-4}
      pinLabels={{
        pin1: "Y_OUT1",
        pin2: "Y_OUT2",
      }}
    />

    <AMS1117_3_3
      name="U_REG"
      pcbX={-14}
      pcbY={24}
      schX={-8}
      schY={20}
    />

    <DRV8833PWPR
      name="U_DRV"
      pcbX={-16}
      pcbY={-1}
      schX={-8}
      schY={0}
    />

    <YA13_FL7_4_B5Ka_45_10__R_Y06
      name="U_JOY"
      pcbX={2}
      pcbY={-21}
      schX={10}
      schY={0}
      pinLabels={{
        pin1: "X_HI",
        pin2: "JOY_X",
        pin3: "X_LO",
        pin4: "Y_HI",
        pin5: "JOY_Y",
        pin6: "Y_LO",
        pin7: "SW_A1",
        pin8: "SW_B1",
        pin9: "SW_B2",
        pin10: "SW_A2",
      }}
    />

    <ATMEGA328P_AU
      name="U_MCU"
      pcbX={18}
      pcbY={-8}
      schX={10}
      schY={14}
    />

    <A_3296W_1_103
      name="RV_X"
      pcbX={31}
      pcbY={-2}
      schX={20}
      schY={-2}
      pinLabels={{
        pin1: "VCC",
        pin2: "WIPER",
        pin3: "GND",
      }}
    />

    <A_3296W_1_103
      name="RV_Y"
      pcbX={31}
      pcbY={-18}
      schX={20}
      schY={-10}
      pinLabels={{
        pin1: "VCC",
        pin2: "WIPER",
        pin3: "GND",
      }}
    />

    <PZ254V_11_06P
      name="J_ISP"
      pcbX={20}
      pcbY={18}
      schX={8}
      schY={26}
      pinLabels={{
        pin1: "MOSI",
        pin2: "MISO",
        pin3: "SCK",
        pin4: "RESET",
        pin5: "VCC_3V3",
        pin6: "GND",
      }}
    />

    <capacitor
      name="C_VM_BULK"
      capacitance="22uF"
      footprint="1206"
      manufacturerPartNumber="CL31A226KOHNNNE"
      supplierPartNumbers={{ jlcpcb: ["C90146"] }}
      pcbX={-26}
      pcbY={2}
      schX={-17}
      schY={20}
    />

    <capacitor
      name="C_VM_DEC"
      capacitance="100nF"
      footprint="0603"
      manufacturerPartNumber="CC0603KRX7R9BB104"
      supplierPartNumbers={{ jlcpcb: ["C14663"] }}
      pcbX={-22}
      pcbY={-4}
      schX={-17}
      schY={16}
    />

    <capacitor
      name="C_REG_IN"
      capacitance="10uF"
      footprint="1206"
      manufacturerPartNumber="CL31A106KAHNNNE"
      supplierPartNumbers={{ jlcpcb: ["C9807"] }}
      pcbX={-30}
      pcbY={30}
      schX={-12}
      schY={20}
    />

    <capacitor
      name="C_REG_OUT"
      capacitance="10uF"
      footprint="1206"
      manufacturerPartNumber="CL31A106KAHNNNE"
      supplierPartNumbers={{ jlcpcb: ["C9807"] }}
      pcbX={-6}
      pcbY={30}
      schX={-4}
      schY={20}
    />

    <capacitor
      name="C_VCC_DEC"
      capacitance="100nF"
      footprint="0603"
      manufacturerPartNumber="CC0603KRX7R9BB104"
      supplierPartNumbers={{ jlcpcb: ["C14663"] }}
      pcbX={-24}
      pcbY={10}
      schX={-4}
      schY={16}
    />

    <capacitor
      name="C_VINT"
      capacitance="2.2uF"
      footprint="0603"
      manufacturerPartNumber="CL10A226MQ8NRNC"
      supplierPartNumbers={{ jlcpcb: ["C59461"] }}
      pcbX={-10}
      pcbY={3}
      schX={-4}
      schY={4}
    />

    <capacitor
      name="C_VCP"
      capacitance="10nF"
      footprint="0603"
      manufacturerPartNumber="0603B103K500NT"
      supplierPartNumbers={{ jlcpcb: ["C57112"] }}
      pcbX={-10}
      pcbY={-4}
      schX={-4}
      schY={0}
    />

    <capacitor
      name="C_MCU_DEC"
      capacitance="100nF"
      footprint="0603"
      manufacturerPartNumber="CC0603KRX7R9BB104"
      supplierPartNumbers={{ jlcpcb: ["C14663"] }}
      pcbX={26}
      pcbY={-6}
      schX={14}
      schY={16}
    />

    <capacitor
      name="C_AREF"
      capacitance="100nF"
      footprint="0603"
      manufacturerPartNumber="CC0603KRX7R9BB104"
      supplierPartNumbers={{ jlcpcb: ["C14663"] }}
      pcbX={26}
      pcbY={-10}
      schX={14}
      schY={14}
    />

    <resistor
      name="R_JOY_SW_PULLUP"
      resistance="10k"
      footprint="0603"
      manufacturerPartNumber="0603WAF1002T5E"
      supplierPartNumbers={{ jlcpcb: ["C25804"] }}
      pcbX={12}
      pcbY={-28}
      schX={14}
      schY={8}
    />

    <resistor
      name="R_RESET_PULLUP"
      resistance="10k"
      footprint="0603"
      manufacturerPartNumber="0603WAF1002T5E"
      supplierPartNumbers={{ jlcpcb: ["C25804"] }}
      pcbX={22}
      pcbY={-2}
      schX={14}
      schY={18}
    />

    <resistor
      name="R_FAULT_PULLUP"
      resistance="10k"
      footprint="0603"
      manufacturerPartNumber="0603WAF1002T5E"
      supplierPartNumbers={{ jlcpcb: ["C25804"] }}
      pcbX={4}
      pcbY={20}
      schX={14}
      schY={10}
    />

    <trace from="J_PWR.VBAT" to="net.VBAT" width="0.8mm" />
    <trace from="J_PWR.GND" to="net.GND" width="0.8mm" />

    <trace from="C_VM_BULK.pin1" to="net.VBAT" width="0.8mm" />
    <trace from="C_VM_BULK.pin2" to="net.GND" width="0.8mm" />
    <trace from="C_VM_DEC.pin1" to="net.VBAT" width="0.5mm" />
    <trace from="C_VM_DEC.pin2" to="net.GND" width="0.5mm" />

    <trace from="U_REG.VIN" to="net.VBAT" width="0.8mm" />
    <trace from="U_REG.GND" to="net.GND" />
    <trace from="U_REG.VOUT1" to="net.VCC_3V3" />
    <trace from="U_REG.VOUT2" to="net.VCC_3V3" />

    <trace from="C_REG_IN.pin1" to="net.VBAT" width="0.8mm" />
    <trace from="C_REG_IN.pin2" to="net.GND" />
    <trace from="C_REG_OUT.pin1" to="net.VCC_3V3" />
    <trace from="C_REG_OUT.pin2" to="net.GND" />

    <trace from="C_VCC_DEC.pin1" to="net.VCC_3V3" />
    <trace from="C_VCC_DEC.pin2" to="net.GND" />

    <trace from="C_MCU_DEC.pin1" to="net.VCC_3V3" />
    <trace from="C_MCU_DEC.pin2" to="net.GND" />
    <trace from="C_AREF.pin1" to="U_MCU.AREF" />
    <trace from="C_AREF.pin2" to="net.GND" />

    <trace from="U_MCU.pin4" to="net.VCC_3V3" />
    <trace from="U_MCU.pin6" to="net.VCC_3V3" />
    <trace from="U_MCU.AVCC" to="net.VCC_3V3" />
    <trace from="U_MCU.pin3" to="net.GND" />
    <trace from="U_MCU.pin5" to="net.GND" />
    <trace from="U_MCU.pin21" to="net.GND" />

    <trace from="R_JOY_SW_PULLUP.pin1" to="net.VCC_3V3" />
    <trace from="R_JOY_SW_PULLUP.pin2" to="net.JOY_SW" />
    <trace from="R_RESET_PULLUP.pin1" to="net.VCC_3V3" />
    <trace from="R_RESET_PULLUP.pin2" to="U_MCU.RESET" />
    <trace from="R_FAULT_PULLUP.pin1" to="net.VCC_3V3" />
    <trace from="R_FAULT_PULLUP.pin2" to="net.FAULT" />

    <trace from="U_JOY.X_HI" to="net.VCC_3V3" />
    <trace from="U_JOY.X_LO" to="net.GND" />
    <trace from="U_JOY.JOY_X" to="net.JOY_X" />

    <trace from="U_JOY.Y_HI" to="net.VCC_3V3" />
    <trace from="U_JOY.Y_LO" to="net.GND" />
    <trace from="U_JOY.JOY_Y" to="net.JOY_Y" />

    <trace from="U_JOY.SW_A1" to="net.GND" />
    <trace from="U_JOY.SW_A2" to="net.GND" />
    <trace from="U_JOY.SW_B1" to="net.JOY_SW" />
    <trace from="U_JOY.SW_B2" to="net.JOY_SW" />

    <trace from="RV_X.VCC" to="net.VCC_3V3" />
    <trace from="RV_X.GND" to="net.GND" />
    <trace from="RV_X.WIPER" to="net.X_SPEED_WIPER" />

    <trace from="RV_Y.VCC" to="net.VCC_3V3" />
    <trace from="RV_Y.GND" to="net.GND" />
    <trace from="RV_Y.WIPER" to="net.Y_SPEED_WIPER" />

    <trace from="U_DRV.VM" to="net.VBAT" width="0.8mm" />
    <trace from="U_DRV.nSleep" to="net.VCC_3V3" />
    <trace from="U_DRV.GND1" to="net.GND" />
    <trace from="U_DRV.GND2" to="net.GND" />
    <trace from="U_DRV.AISEN" to="net.GND" />
    <trace from="U_DRV.BISEN" to="net.GND" />

    <trace from="C_VINT.pin1" to="U_DRV.VINT" />
    <trace from="C_VINT.pin2" to="net.GND" />
    <trace from="C_VCP.pin1" to="U_DRV.VCP" />
    <trace from="C_VCP.pin2" to="net.VBAT" width="0.5mm" />

    <trace from="U_DRV.AIN1" to="U_MCU.PD5" />
    <trace from="U_DRV.AIN2" to="U_MCU.PD6" />
    <trace from="U_DRV.BIN1" to="U_MCU.PD7" />
    <trace from="U_DRV.BIN2" to="net.Y_IN2" />
    <trace from="U_DRV.nFault" to="net.FAULT" />

    <trace from="U_DRV.AOUT1" to="J_XACT.X_OUT1" width="0.8mm" />
    <trace from="U_DRV.AOUT2" to="J_XACT.X_OUT2" width="0.8mm" />
    <trace from="U_DRV.BOUT1" to="J_YACT.Y_OUT1" width="0.8mm" />
    <trace from="U_DRV.BOUT2" to="J_YACT.Y_OUT2" width="0.8mm" />

    <trace from="U_MCU.ADC0" to="net.JOY_X" />
    <trace from="U_MCU.ADC1" to="net.JOY_Y" />
    <trace from="U_MCU.ADC2" to="net.X_SPEED_WIPER" />
    <trace from="U_MCU.ADC3" to="net.Y_SPEED_WIPER" />
    <trace from="U_MCU.ADC4" to="net.JOY_SW" />
    <trace from="U_MCU.PB0" to="net.Y_IN2" />
    <trace from="U_MCU.INT0" to="net.FAULT" />

    <trace from="U_MCU.VCC1" to="U_MCU.VCC2" />
    <trace from="U_MCU.GND2" to="U_MCU.GND3" />

    <trace from="J_ISP.MOSI" to="U_MCU.MOSI" />
    <trace from="J_ISP.MISO" to="U_MCU.MISO" />
    <trace from="J_ISP.SCK" to="U_MCU.SCK" />
    <trace from="J_ISP.RESET" to="U_MCU.RESET" />
    <trace from="J_ISP.VCC_3V3" to="net.VCC_3V3" />
    <trace from="J_ISP.GND" to="net.GND" />

  </board>
)
