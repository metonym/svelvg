/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BucketFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BucketFill extends SvelteComponentTyped<
  BucketFillProps,
  {},
  { default: {} }
> {}
