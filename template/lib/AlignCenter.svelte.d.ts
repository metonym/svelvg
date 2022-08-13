/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AlignCenterProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class AlignCenter extends SvelteComponentTyped<
  AlignCenterProps,
  {},
  { default: {} }
> {}
