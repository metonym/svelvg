/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FiletypeKeyProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FiletypeKey extends SvelteComponentTyped<
  FiletypeKeyProps,
  {},
  { default: {} }
> {}
