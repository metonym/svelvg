/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DropletFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class DropletFill extends SvelteComponentTyped<
  DropletFillProps,
  {},
  { default: {} }
> {}
