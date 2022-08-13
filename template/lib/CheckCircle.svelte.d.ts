/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CheckCircleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CheckCircle extends SvelteComponentTyped<
  CheckCircleProps,
  {},
  { default: {} }
> {}
