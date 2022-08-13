/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileLockProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileLock extends SvelteComponentTyped<
  FileLockProps,
  {},
  { default: {} }
> {}
