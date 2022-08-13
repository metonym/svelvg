/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudSleetProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CloudSleet extends SvelteComponentTyped<
  CloudSleetProps,
  {},
  { default: {} }
> {}
