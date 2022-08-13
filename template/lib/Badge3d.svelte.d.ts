/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Badge3dProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Badge3d extends SvelteComponentTyped<
  Badge3dProps,
  {},
  { default: {} }
> {}
