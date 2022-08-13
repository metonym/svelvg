/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HexagonFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class HexagonFill extends SvelteComponentTyped<
  HexagonFillProps,
  {},
  { default: {} }
> {}
