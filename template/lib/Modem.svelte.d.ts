/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ModemProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Modem extends SvelteComponentTyped<
  ModemProps,
  {},
  { default: {} }
> {}
