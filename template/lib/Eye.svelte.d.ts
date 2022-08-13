/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EyeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Eye extends SvelteComponentTyped<
  EyeProps,
  {},
  { default: {} }
> {}
