/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EyeFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EyeFill extends SvelteComponentTyped<
  EyeFillProps,
  {},
  { default: {} }
> {}
