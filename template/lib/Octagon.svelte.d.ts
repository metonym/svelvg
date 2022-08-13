/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface OctagonProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Octagon extends SvelteComponentTyped<
  OctagonProps,
  {},
  { default: {} }
> {}
