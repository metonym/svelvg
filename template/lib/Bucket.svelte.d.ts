/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BucketProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Bucket extends SvelteComponentTyped<
  BucketProps,
  {},
  { default: {} }
> {}
