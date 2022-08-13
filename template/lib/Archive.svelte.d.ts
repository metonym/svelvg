/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ArchiveProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Archive extends SvelteComponentTyped<
  ArchiveProps,
  {},
  { default: {} }
> {}
