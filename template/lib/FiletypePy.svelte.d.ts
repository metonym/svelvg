/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FiletypePyProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FiletypePy extends SvelteComponentTyped<
  FiletypePyProps,
  {},
  { default: {} }
> {}
