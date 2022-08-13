/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SkypeProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Skype extends SvelteComponentTyped<
  SkypeProps,
  {},
  { default: {} }
> {}
