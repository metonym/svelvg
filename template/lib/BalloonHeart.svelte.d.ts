/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BalloonHeartProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BalloonHeart extends SvelteComponentTyped<
  BalloonHeartProps,
  {},
  { default: {} }
> {}
