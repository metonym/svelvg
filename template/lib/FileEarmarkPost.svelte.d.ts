/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileEarmarkPostProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileEarmarkPost extends SvelteComponentTyped<
  FileEarmarkPostProps,
  {},
  { default: {} }
> {}
