/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EthernetProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Ethernet extends SvelteComponentTyped<
  EthernetProps,
  {},
  { default: {} }
> {}
