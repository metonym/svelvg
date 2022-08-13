/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FiletypeMdxProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FiletypeMdx extends SvelteComponentTyped<
  FiletypeMdxProps,
  {},
  { default: {} }
> {}
