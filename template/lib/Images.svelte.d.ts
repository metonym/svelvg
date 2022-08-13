/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ImagesProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Images extends SvelteComponentTyped<
  ImagesProps,
  {},
  { default: {} }
> {}
