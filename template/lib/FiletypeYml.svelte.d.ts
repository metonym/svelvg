/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FiletypeYmlProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FiletypeYml extends SvelteComponentTyped<
  FiletypeYmlProps,
  {},
  { default: {} }
> {}
