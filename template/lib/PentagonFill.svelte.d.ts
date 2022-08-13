/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PentagonFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PentagonFill extends SvelteComponentTyped<
  PentagonFillProps,
  {},
  { default: {} }
> {}
