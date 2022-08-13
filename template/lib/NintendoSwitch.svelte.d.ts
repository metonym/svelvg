/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface NintendoSwitchProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class NintendoSwitch extends SvelteComponentTyped<
  NintendoSwitchProps,
  {},
  { default: {} }
> {}
