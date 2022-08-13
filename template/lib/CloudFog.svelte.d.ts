/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudFogProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CloudFog extends SvelteComponentTyped<
  CloudFogProps,
  {},
  { default: {} }
> {}
