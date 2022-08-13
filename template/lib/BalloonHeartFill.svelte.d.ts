/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BalloonHeartFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BalloonHeartFill extends SvelteComponentTyped<
  BalloonHeartFillProps,
  {},
  { default: {} }
> {}
