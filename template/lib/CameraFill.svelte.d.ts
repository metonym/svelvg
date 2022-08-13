/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CameraFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class CameraFill extends SvelteComponentTyped<
  CameraFillProps,
  {},
  { default: {} }
> {}
