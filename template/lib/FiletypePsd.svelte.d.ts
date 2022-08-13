/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FiletypePsdProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FiletypePsd extends SvelteComponentTyped<
  FiletypePsdProps,
  {},
  { default: {} }
> {}
