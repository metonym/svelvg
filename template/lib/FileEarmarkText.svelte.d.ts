/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileEarmarkTextProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileEarmarkText extends SvelteComponentTyped<
  FileEarmarkTextProps,
  {},
  { default: {} }
> {}
