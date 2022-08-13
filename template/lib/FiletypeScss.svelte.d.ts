/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FiletypeScssProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FiletypeScss extends SvelteComponentTyped<
  FiletypeScssProps,
  {},
  { default: {} }
> {}
