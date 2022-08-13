/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface VolumeOffFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class VolumeOffFill extends SvelteComponentTyped<
  VolumeOffFillProps,
  {},
  { default: {} }
> {}
