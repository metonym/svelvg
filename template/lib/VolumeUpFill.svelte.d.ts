/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface VolumeUpFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class VolumeUpFill extends SvelteComponentTyped<
  VolumeUpFillProps,
  {},
  { default: {} }
> {}
