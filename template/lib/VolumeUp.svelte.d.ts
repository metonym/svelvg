/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface VolumeUpProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class VolumeUp extends SvelteComponentTyped<
  VolumeUpProps,
  {},
  { default: {} }
> {}
