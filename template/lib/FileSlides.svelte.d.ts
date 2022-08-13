/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileSlidesProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileSlides extends SvelteComponentTyped<
  FileSlidesProps,
  {},
  { default: {} }
> {}
