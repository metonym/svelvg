/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CameraVideoProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CameraVideo extends SvelteComponentTyped<
  CameraVideoProps,
  {},
  { default: {} }
> {}
