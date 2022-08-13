/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BalloonFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BalloonFill extends SvelteComponentTyped<
  BalloonFillProps,
  {},
  { default: {} }
> {}
