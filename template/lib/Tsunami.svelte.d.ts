/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TsunamiProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Tsunami extends SvelteComponentTyped<
  TsunamiProps,
  {},
  { default: {} }
> {}
