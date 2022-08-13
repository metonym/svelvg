/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UnindentProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Unindent extends SvelteComponentTyped<
  UnindentProps,
  {},
  { default: {} }
> {}
