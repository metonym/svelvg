/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MinecartProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Minecart extends SvelteComponentTyped<
  MinecartProps,
  {},
  { default: {} }
> {}
