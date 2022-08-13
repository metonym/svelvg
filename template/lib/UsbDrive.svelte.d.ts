/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UsbDriveProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class UsbDrive extends SvelteComponentTyped<
  UsbDriveProps,
  {},
  { default: {} }
> {}
