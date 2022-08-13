/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileDiffProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FileDiff extends SvelteComponentTyped<
  FileDiffProps,
  {},
  { default: {} }
> {}
