/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface OctagonFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class OctagonFill extends SvelteComponentTyped<
  OctagonFillProps,
  {},
  { default: {} }
> {}
