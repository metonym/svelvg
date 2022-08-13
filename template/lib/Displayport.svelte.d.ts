/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DisplayportProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Displayport extends SvelteComponentTyped<
  DisplayportProps,
  {},
  { default: {} }
> {}
