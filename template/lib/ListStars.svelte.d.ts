/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ListStarsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class ListStars extends SvelteComponentTyped<
  ListStarsProps,
  {},
  { default: {} }
> {}
