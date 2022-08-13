/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MouseProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Mouse extends SvelteComponentTyped<
  MouseProps,
  {},
  { default: {} }
> {}
