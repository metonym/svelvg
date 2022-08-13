/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PentagonProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Pentagon extends SvelteComponentTyped<
  PentagonProps,
  {},
  { default: {} }
> {}
