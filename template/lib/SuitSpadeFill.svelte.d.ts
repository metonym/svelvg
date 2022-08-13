/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SuitSpadeFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class SuitSpadeFill extends SvelteComponentTyped<
  SuitSpadeFillProps,
  {},
  { default: {} }
> {}
