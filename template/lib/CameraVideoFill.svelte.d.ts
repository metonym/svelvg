/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CameraVideoFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CameraVideoFill extends SvelteComponentTyped<
  CameraVideoFillProps,
  {},
  { default: {} }
> {}
