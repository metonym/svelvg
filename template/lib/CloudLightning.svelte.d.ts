/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudLightningProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CloudLightning extends SvelteComponentTyped<
  CloudLightningProps,
  {},
  { default: {} }
> {}
