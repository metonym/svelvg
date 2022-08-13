/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FilePostProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FilePost extends SvelteComponentTyped<
  FilePostProps,
  {},
  { default: {} }
> {}
