/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FiletypeXlsxProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FiletypeXlsx extends SvelteComponentTyped<
  FiletypeXlsxProps,
  {},
  { default: {} }
> {}
