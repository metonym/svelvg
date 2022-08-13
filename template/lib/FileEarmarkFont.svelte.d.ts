/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileEarmarkFontProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileEarmarkFont extends SvelteComponentTyped<
  FileEarmarkFontProps,
  {},
  { default: {} }
> {}
