/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class File extends SvelteComponentTyped<
  FileProps,
  {},
  { default: {} }
> {}
