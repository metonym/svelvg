/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FiletypeShProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FiletypeSh extends SvelteComponentTyped<
  FiletypeShProps,
  {},
  { default: {} }
> {}
