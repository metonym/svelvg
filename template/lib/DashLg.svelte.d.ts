/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DashLgProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class DashLg extends SvelteComponentTyped<
  DashLgProps,
  {},
  { default: {} }
> {}
