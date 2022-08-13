/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileXProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileX extends SvelteComponentTyped<
  FileXProps,
  {},
  { default: {} }
> {}
