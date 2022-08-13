/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PenProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Pen extends SvelteComponentTyped<
  PenProps,
  {},
  { default: {} }
> {}
