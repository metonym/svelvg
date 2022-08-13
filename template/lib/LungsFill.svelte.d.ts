/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LungsFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class LungsFill extends SvelteComponentTyped<
  LungsFillProps,
  {},
  { default: {} }
> {}
