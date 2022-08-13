/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface OutletProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Outlet extends SvelteComponentTyped<
  OutletProps,
  {},
  { default: {} }
> {}
