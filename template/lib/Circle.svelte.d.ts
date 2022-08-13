/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CircleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Circle extends SvelteComponentTyped<
  CircleProps,
  {},
  { default: {} }
> {}
