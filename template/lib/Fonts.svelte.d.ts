/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FontsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Fonts extends SvelteComponentTyped<
  FontsProps,
  {},
  { default: {} }
> {}
