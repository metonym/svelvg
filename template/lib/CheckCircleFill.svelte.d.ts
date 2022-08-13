/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CheckCircleFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CheckCircleFill extends SvelteComponentTyped<
  CheckCircleFillProps,
  {},
  { default: {} }
> {}
