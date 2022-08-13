/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HddProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Hdd extends SvelteComponentTyped<
  HddProps,
  {},
  { default: {} }
> {}
