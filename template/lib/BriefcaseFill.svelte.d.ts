/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BriefcaseFillProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class BriefcaseFill extends SvelteComponentTyped<
  BriefcaseFillProps,
  {},
  { default: {} }
> {}
