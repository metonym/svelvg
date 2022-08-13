/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DashCircleDottedProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class DashCircleDotted extends SvelteComponentTyped<
  DashCircleDottedProps,
  {},
  { default: {} }
> {}
