/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StickiesFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class StickiesFill extends SvelteComponentTyped<
  StickiesFillProps,
  {},
  { default: {} }
> {}
