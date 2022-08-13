/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileFill extends SvelteComponentTyped<
  FileFillProps,
  {},
  { default: {} }
> {}
