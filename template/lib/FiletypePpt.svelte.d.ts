/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FiletypePptProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FiletypePpt extends SvelteComponentTyped<
  FiletypePptProps,
  {},
  { default: {} }
> {}
