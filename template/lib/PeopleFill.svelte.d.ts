/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PeopleFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class PeopleFill extends SvelteComponentTyped<
  PeopleFillProps,
  {},
  { default: {} }
> {}
