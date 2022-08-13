/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PaintBucketProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PaintBucket extends SvelteComponentTyped<
  PaintBucketProps,
  {},
  { default: {} }
> {}
