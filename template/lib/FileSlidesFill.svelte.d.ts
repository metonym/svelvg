/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileSlidesFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileSlidesFill extends SvelteComponentTyped<
  FileSlidesFillProps,
  {},
  { default: {} }
> {}
