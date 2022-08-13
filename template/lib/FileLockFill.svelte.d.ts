/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileLockFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileLockFill extends SvelteComponentTyped<
  FileLockFillProps,
  {},
  { default: {} }
> {}
