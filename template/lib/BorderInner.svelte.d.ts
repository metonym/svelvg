/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BorderInnerProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BorderInner extends SvelteComponentTyped<
  BorderInnerProps,
  {},
  { default: {} }
> {}
