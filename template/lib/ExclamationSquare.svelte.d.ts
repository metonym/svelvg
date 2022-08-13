/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ExclamationSquareProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ExclamationSquare extends SvelteComponentTyped<
  ExclamationSquareProps,
  {},
  { default: {} }
> {}
