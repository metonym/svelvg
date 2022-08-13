/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DashCircleFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class DashCircleFill extends SvelteComponentTyped<
  DashCircleFillProps,
  {},
  { default: {} }
> {}
