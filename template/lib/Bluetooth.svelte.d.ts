/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BluetoothProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Bluetooth extends SvelteComponentTyped<
  BluetoothProps,
  {},
  { default: {} }
> {}
