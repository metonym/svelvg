/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FiletypeDocProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FiletypeDoc extends SvelteComponentTyped<
  FiletypeDocProps,
  {},
  { default: {} }
> {}
