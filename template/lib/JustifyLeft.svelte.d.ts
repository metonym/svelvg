/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface JustifyLeftProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class JustifyLeft extends SvelteComponentTyped<
  JustifyLeftProps,
  {},
  { default: {} }
> {}
