/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Flower1Props
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Flower1 extends SvelteComponentTyped<
  Flower1Props,
  {},
  { default: {} }
> {}
