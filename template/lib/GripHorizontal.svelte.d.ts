/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GripHorizontalProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class GripHorizontal extends SvelteComponentTyped<
  GripHorizontalProps,
  {},
  { default: {} }
> {}
