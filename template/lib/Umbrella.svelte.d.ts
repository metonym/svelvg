/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UmbrellaProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Umbrella extends SvelteComponentTyped<
  UmbrellaProps,
  {},
  { default: {} }
> {}
