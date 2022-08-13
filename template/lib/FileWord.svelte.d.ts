/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileWordProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileWord extends SvelteComponentTyped<
  FileWordProps,
  {},
  { default: {} }
> {}
