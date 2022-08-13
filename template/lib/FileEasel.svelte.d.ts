/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileEaselProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileEasel extends SvelteComponentTyped<
  FileEaselProps,
  {},
  { default: {} }
> {}
