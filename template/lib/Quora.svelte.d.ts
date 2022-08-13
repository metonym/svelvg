/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface QuoraProps
  extends svelte.JSX.SVGAttributes<SVGSVGElement> {}

export default class Quora extends SvelteComponentTyped<
  QuoraProps,
  {},
  { default: {} }
> {}
