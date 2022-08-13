/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GripVerticalProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class GripVertical extends SvelteComponentTyped<
  GripVerticalProps,
  {},
  { default: {} }
> {}
