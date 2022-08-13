/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FiletypeRawProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class FiletypeRaw extends SvelteComponentTyped<
  FiletypeRawProps,
  {},
  { default: {} }
> {}
