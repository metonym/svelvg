/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CloudFill extends SvelteComponentTyped<
  CloudFillProps,
  {},
  { default: {} }
> {}
