/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileEarmarkDiffProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileEarmarkDiff extends SvelteComponentTyped<
  FileEarmarkDiffProps,
  {},
  { default: {} }
> {}
