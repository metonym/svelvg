/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HexagonProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Hexagon extends SvelteComponentTyped<
  HexagonProps,
  {},
  { default: {} }
> {}
