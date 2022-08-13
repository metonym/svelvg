/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LineProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Line extends SvelteComponentTyped<
  LineProps,
  {},
  { default: {} }
> {}
