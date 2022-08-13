/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DpadProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Dpad extends SvelteComponentTyped<
  DpadProps,
  {},
  { default: {} }
> {}
