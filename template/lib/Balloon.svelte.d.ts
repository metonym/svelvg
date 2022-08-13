/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BalloonProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Balloon extends SvelteComponentTyped<
  BalloonProps,
  {},
  { default: {} }
> {}
