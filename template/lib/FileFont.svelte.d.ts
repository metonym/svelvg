/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileFontProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileFont extends SvelteComponentTyped<
  FileFontProps,
  {},
  { default: {} }
> {}
