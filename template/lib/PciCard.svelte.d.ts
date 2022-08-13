/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PciCardProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PciCard extends SvelteComponentTyped<
  PciCardProps,
  {},
  { default: {} }
> {}
