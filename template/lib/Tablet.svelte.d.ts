/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TabletProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Tablet extends SvelteComponentTyped<
  TabletProps,
  {},
  { default: {} }
> {}
