/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileBreakProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileBreak extends SvelteComponentTyped<
  FileBreakProps,
  {},
  { default: {} }
> {}
