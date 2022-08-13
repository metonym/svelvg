/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DashProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Dash extends SvelteComponentTyped<
  DashProps,
  {},
  { default: {} }
> {}
