/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GoogleProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Google extends SvelteComponentTyped<
  GoogleProps,
  {},
  { default: {} }
> {}
