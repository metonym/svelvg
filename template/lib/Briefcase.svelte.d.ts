/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BriefcaseProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Briefcase extends SvelteComponentTyped<
  BriefcaseProps,
  {},
  { default: {} }
> {}
