/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudHazeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CloudHaze extends SvelteComponentTyped<
  CloudHazeProps,
  {},
  { default: {} }
> {}
