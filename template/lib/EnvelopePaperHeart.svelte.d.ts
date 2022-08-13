/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EnvelopePaperHeartProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class EnvelopePaperHeart extends SvelteComponentTyped<
  EnvelopePaperHeartProps,
  {},
  { default: {} }
> {}
