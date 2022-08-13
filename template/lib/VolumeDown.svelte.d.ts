/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface VolumeDownProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class VolumeDown extends SvelteComponentTyped<
  VolumeDownProps,
  {},
  { default: {} }
> {}
