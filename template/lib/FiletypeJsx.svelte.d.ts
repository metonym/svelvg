/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FiletypeJsxProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FiletypeJsx extends SvelteComponentTyped<
  FiletypeJsxProps,
  {},
  { default: {} }
> {}
