/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FilePostFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FilePostFill extends SvelteComponentTyped<
  FilePostFillProps,
  {},
  { default: {} }
> {}
