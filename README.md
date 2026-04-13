# Microscope Stage Controller

2-axis microscope stage controller PCB designed with tscircuit.

## Overview

This repository contains a hardware design for a joystick-driven microscope stage controller based on:

- `ATMEGA328P-AU` microcontroller
- `DRV8833` dual H-bridge motor driver
- `AMS1117-3.3` linear regulator
- 2 motor output connectors (X/Y)
- joystick input and speed trim potentiometers
- 6-pin ISP programming header

The main design source is in [index.circuit.tsx](index.circuit.tsx).

## Install

Install dependencies:

```bash
bun install
```

## Development

Start interactive development:

```bash
bun run dev
```

## Build

Generate build artifacts:

```bash
bun run build
```

## Scripts

- `bun run dev` – run `tsci dev`
- `bun run build` – run `tsci build`
- `bun run snapshot` – run `tsci snapshot`
- `bun run snapshot:update` – update snapshots
- `bun run typecheck` – run TypeScript type checking

## Repository

GitHub: https://github.com/MustafaMulla29/microscope-stage-controller