/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PeaceProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Peace extends SvelteComponentTyped<
  PeaceProps,
  {},
  { default: {} }
> {}
