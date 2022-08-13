/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MinecartLoadedProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class MinecartLoaded extends SvelteComponentTyped<
  MinecartLoadedProps,
  {},
  { default: {} }
> {}
