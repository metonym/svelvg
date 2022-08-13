/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileBinaryProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileBinary extends SvelteComponentTyped<
  FileBinaryProps,
  {},
  { default: {} }
> {}
