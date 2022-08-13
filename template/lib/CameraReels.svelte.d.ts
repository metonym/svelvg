/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CameraReelsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CameraReels extends SvelteComponentTyped<
  CameraReelsProps,
  {},
  { default: {} }
> {}
