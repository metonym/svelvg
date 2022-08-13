/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CameraProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Camera extends SvelteComponentTyped<
  CameraProps,
  {},
  { default: {} }
> {}
