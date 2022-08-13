/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ShieldProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Shield extends SvelteComponentTyped<
  ShieldProps,
  {},
  { default: {} }
> {}
