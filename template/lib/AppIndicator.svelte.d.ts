/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AppIndicatorProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class AppIndicator extends SvelteComponentTyped<
  AppIndicatorProps,
  {},
  { default: {} }
> {}
