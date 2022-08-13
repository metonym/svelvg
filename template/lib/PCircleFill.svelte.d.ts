/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PCircleFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PCircleFill extends SvelteComponentTyped<
  PCircleFillProps,
  {},
  { default: {} }
> {}
