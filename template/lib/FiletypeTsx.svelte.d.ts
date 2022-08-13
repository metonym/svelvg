/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FiletypeTsxProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FiletypeTsx extends SvelteComponentTyped<
  FiletypeTsxProps,
  {},
  { default: {} }
> {}
