/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BinocularsProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Binoculars extends SvelteComponentTyped<
  BinocularsProps,
  {},
  { default: {} }
> {}
