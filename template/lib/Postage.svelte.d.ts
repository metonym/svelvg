/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PostageProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Postage extends SvelteComponentTyped<
  PostageProps,
  {},
  { default: {} }
> {}
