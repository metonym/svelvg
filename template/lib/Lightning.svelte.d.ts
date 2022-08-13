/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LightningProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Lightning extends SvelteComponentTyped<
  LightningProps,
  {},
  { default: {} }
> {}
