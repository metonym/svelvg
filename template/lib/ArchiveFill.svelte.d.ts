/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ArchiveFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ArchiveFill extends SvelteComponentTyped<
  ArchiveFillProps,
  {},
  { default: {} }
> {}
