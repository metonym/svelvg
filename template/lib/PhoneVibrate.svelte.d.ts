/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PhoneVibrateProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PhoneVibrate extends SvelteComponentTyped<
  PhoneVibrateProps,
  {},
  { default: {} }
> {}
