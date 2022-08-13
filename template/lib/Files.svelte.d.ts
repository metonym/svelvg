/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FilesProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Files extends SvelteComponentTyped<
  FilesProps,
  {},
  { default: {} }
> {}
