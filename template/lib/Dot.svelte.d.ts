/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DotProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Dot extends SvelteComponentTyped<
  DotProps,
  {},
  { default: {} }
> {}
