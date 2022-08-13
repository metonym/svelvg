/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudFogFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CloudFogFill extends SvelteComponentTyped<
  CloudFogFillProps,
  {},
  { default: {} }
> {}
