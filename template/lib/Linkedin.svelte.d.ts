/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LinkedinProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Linkedin extends SvelteComponentTyped<
  LinkedinProps,
  {},
  { default: {} }
> {}
