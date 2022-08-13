/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FiletypeCssProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FiletypeCss extends SvelteComponentTyped<
  FiletypeCssProps,
  {},
  { default: {} }
> {}
