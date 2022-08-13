/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WindowStackProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class WindowStack extends SvelteComponentTyped<
  WindowStackProps,
  {},
  { default: {} }
> {}
