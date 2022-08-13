/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CardImageProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CardImage extends SvelteComponentTyped<
  CardImageProps,
  {},
  { default: {} }
> {}
