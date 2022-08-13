/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface VolumeOffProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class VolumeOff extends SvelteComponentTyped<
  VolumeOffProps,
  {},
  { default: {} }
> {}
