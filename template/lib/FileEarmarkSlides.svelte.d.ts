/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileEarmarkSlidesProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileEarmarkSlides extends SvelteComponentTyped<
  FileEarmarkSlidesProps,
  {},
  { default: {} }
> {}
