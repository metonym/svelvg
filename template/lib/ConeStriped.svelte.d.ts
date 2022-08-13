/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ConeStripedProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ConeStriped extends SvelteComponentTyped<
  ConeStripedProps,
  {},
  { default: {} }
> {}
