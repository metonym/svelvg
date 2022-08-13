/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileEarmarkPlayProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileEarmarkPlay extends SvelteComponentTyped<
  FileEarmarkPlayProps,
  {},
  { default: {} }
> {}
