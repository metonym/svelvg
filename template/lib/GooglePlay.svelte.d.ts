/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GooglePlayProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class GooglePlay extends SvelteComponentTyped<
  GooglePlayProps,
  {},
  { default: {} }
> {}
