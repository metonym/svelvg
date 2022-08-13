/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ExclamationSquareFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ExclamationSquareFill extends SvelteComponentTyped<
  ExclamationSquareFillProps,
  {},
  { default: {} }
> {}
